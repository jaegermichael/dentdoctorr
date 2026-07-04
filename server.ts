import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

// Set up middleware to parse JSON, with a size limit to allow base64 images
app.use(express.json({ limit: "25mb" }));

// Initialize the Gemini API client safely
let ai: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY;

if (apiKey) {
  try {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    console.log("Gemini API Client initialized successfully.");
  } catch (error) {
    console.error("Failed to initialize Gemini API Client:", error);
  }
} else {
  console.warn("GEMINI_API_KEY env variable not set. AI Features will fall back to smart local estimation.");
}

// API Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", aiEnabled: !!ai });
});

// Instant AI Damage Estimation endpoint
app.post("/api/quote/analyze", async (req, res): Promise<any> => {
  const { image, make, model, year, description } = req.body;

  if (!image) {
    return res.status(400).json({ error: "Image is required for AI Dent Estimation" });
  }

  // Extract base64 details
  let base64Data = image;
  let mimeType = "image/jpeg";

  if (image.startsWith("data:")) {
    const match = image.match(/^data:([^;]+);base64,(.*)$/);
    if (match) {
      mimeType = match[1];
      base64Data = match[2];
    }
  }

  const vehicleInfo = `${year || ""} ${make || ""} ${model || ""}`.trim() || "Vehicle";

  // Check if AI is initialized, if not, do smart mock fallback
  if (!ai) {
    console.log("Fallback to smart simulation due to missing Gemini API Key");
    // Simulate a minor latency
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const isHail = description?.toLowerCase().includes("hail") || false;
    const isCreased = description?.toLowerCase().includes("crease") || description?.toLowerCase().includes("sharp") || false;
    const isLarge = description?.toLowerCase().includes("large") || description?.toLowerCase().includes("big") || false;

    return res.json({
      isPdrCandidate: true,
      confidenceScore: 85,
      damageSeverity: isLarge ? "Moderate" : "Light",
      estimatedCostMin: isHail ? 350 : (isLarge ? 250 : 150),
      estimatedCostMax: isHail ? 750 : (isLarge ? 450 : 250),
      estimatedTime: isHail ? "1-2 days" : "1-3 hours",
      structuralAnalysis: `Simulated Analysis for your ${vehicleInfo}. Based on your description: "${description || "No description provided"}". The paint appears intact, which is ideal for Paintless Dent Repair (PDR). No paint stretching is evident, meaning PDR can achieve a near-flawless restoration without body filler or repainting.`,
      recommendedAction: "This is a perfect candidate for our Paintless Dent Repair (PDR) service. Since the original paint is undamaged, we can preserve your car's factory finish. We recommend booking an in-person evaluation or scheduling a mobile service dispatch.",
      vehicleInfo
    });
  }

  try {
    const prompt = `
      You are "Dent Doctor" - an elite Paintless Dent Repair (PDR) and automotive body restoration expert.
      Your task is to analyze the uploaded car damage image and details to provide an instant, professional, and reassuring assessment.
      
      Vehicle: ${vehicleInfo}
      Customer's description of damage: ${description || "None provided"}
      
      Carefully examine the image to identify:
      1. Location of the dent(s).
      2. Severity of the dent (light dings, moderate panel dents, deep creased dents, or widespread hail damage).
      3. Suitability for Paintless Dent Repair (PDR). Remember: PDR works best when the original paint is NOT cracked, scratched through, or heavily flaked, and if the dent has no sharp structural tears. If the paint is slightly scuffed, it might still be a candidate but might need minor polish.
      4. Estimated cost range (PDR usually ranges from $100 to $450 for standard single dents, and $1,500 - $6,000 for entire hail-damaged cars).
      5. Time to complete (standard door dings take 1-2 hours, deep creased dents take 2-4 hours, severe collision/panel restoration takes 4-8 hours, hail takes 1-3 days).
      
      Respond STRICTLY in JSON format with the following fields (do not include any backticks or markdown wrap in your raw text, return ONLY the valid JSON object):
      {
        "isPdrCandidate": boolean, // true if PDR is viable, false if traditional body shop repainting is needed
        "confidenceScore": number, // 0 to 100 confidence in your image assessment
        "damageSeverity": string, // "Light" (door ding, minor shopping cart dent), "Moderate" (creased dent, larger impact), "Severe" (large crumpled section, severe hail)
        "estimatedCostMin": number, // minimum estimated USD cost
        "estimatedCostMax": number, // maximum estimated USD cost
        "estimatedTime": string, // human-friendly duration, e.g., "1-2 Hours", "3-4 Hours", "1-2 Days"
        "structuralAnalysis": string, // a professional explanation of what is visible in the image (such as metal stretching, crease lines, paint condition, access points)
        "recommendedAction": string // comforting and clear guidance on what the customer should do next, highlighting how Dent Doctor can help.
      }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        { text: prompt },
        { inlineData: { data: base64Data, mimeType } }
      ],
      config: {
        responseMimeType: "application/json",
      }
    });

    const textResponse = response.text || "{}";
    // Parse the JSON safely
    const result = JSON.parse(textResponse.trim());
    return res.json({
      ...result,
      vehicleInfo
    });
  } catch (error) {
    console.error("Error analyzing image with Gemini:", error);
    return res.status(500).json({
      error: "Error processing your image. Please try again with a smaller or clearer picture.",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
});

// Configure Vite or Static files serving
async function initializeVite() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode with static file delivery...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

initializeVite().catch((err) => {
  console.error("Vite server initialization failed:", err);
});
