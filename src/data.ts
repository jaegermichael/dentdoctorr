import { Service, BeforeAfterExample, Testimonial, FAQItem } from "./types";

export const IMAGES = {
  heroBg: "/src/assets/images/hero_dent_repair_1783200341062.jpg",
  workshop: "/src/assets/images/dent_doctor_workshop_1783200356764.jpg",
  beforeSlider: "/src/assets/images/before_dent_repair_1783200369978.jpg",
  afterSlider: "/src/assets/images/after_dent_repair_1783200381159.jpg",
};

export const SERVICES: Service[] = [
  {
    id: "pdr",
    title: "Paintless Dent Removal (PDR)",
    description: "The gold standard of dent repair. We use highly specialized hand tools to gently massage dented metal back to its original shape from behind the panel.",
    detailedDescription: "Paintless Dent Removal is a highly skilled craft that repairs dents without using body filler (bondo) or repainting the vehicle. By keeping your original factory paint intact, PDR maintains your vehicle's structural integrity and resale value, while costing a fraction of traditional body shop repairs.",
    benefits: [
      "Retains original factory paint finish",
      "No risk of paint color mismatch",
      "Eco-friendly (no chemicals or fillers used)",
      "Completed in hours, not days or weeks"
    ],
    iconName: "Wrench",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "hail",
    title: "Hail Damage Repair",
    description: "Widespread dent restoration for vehicles caught in hail storms. We work seamlessly with all insurance companies for a smooth, stress-free claim.",
    detailedDescription: "A severe hailstorm can leave a vehicle with hundreds of small dings. Traditional body shops would sand, fill, and repaint the entire car, ruining the factory finish. Our PDR experts can restore every single hail ding, returning your car to showroom condition without repainting.",
    benefits: [
      "100% paintless restoration of all hail dimples",
      "Insurance deductible assistance available",
      "Approved by major insurance carriers",
      "Maintains the factory warranty"
    ],
    iconName: "CloudLightning",
    imageUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "door-ding",
    title: "Door Ding Repair",
    description: "Quick removal of those annoying dings caused by shopping carts or parking lot doors. Quick turnaround and highly affordable.",
    detailedDescription: "Parking lot mishaps are almost unavoidable. Whether it's a shopping cart, a car door, or a stray sports ball, door dings can make an otherwise beautiful car look neglected. We pop these right out in under an hour, usually while you wait.",
    benefits: [
      "Repairs take only 30 to 60 minutes",
      "Extremely affordable rates",
      "Instant boost to vehicle appearance",
      "Mobile service available at your home or office"
    ],
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "minor-collision",
    title: "Minor Collision Dent Repair",
    description: "Expert restoration for plastic bumpers and larger body panels crumpled in minor fender-benders or low-speed impacts.",
    detailedDescription: "A backing mishap or minor fender-bender doesn't automatically mean you need an expensive replacement panel. Our technicians use advanced heat-shaping techniques and specialized access rods to reform bumpers and deep panel creases.",
    benefits: [
      "Significantly cheaper than buying replacement parts",
      "Restores dented plastic and metal panels",
      "Avoids Carfax accident reports (when paid out-of-pocket)",
      "Preserves original body panels"
    ],
    iconName: "ShieldAlert",
    imageUrl: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "panel-restoration",
    title: "Panel Dent Restoration",
    description: "Precision metalwork for large or deep dents on complex body curves, wheel arches, and body lines.",
    detailedDescription: "Dents that fall directly on a vehicle's sharp body lines or body curves are notoriously difficult to repair. Traditional body shops usually write them off as unrepairable. Our master technicians have the advanced training required to restore metal on complex curves.",
    benefits: [
      "Master-level PDR metal sculpting",
      "Restores even deep crease lines and contours",
      "Saves expensive curved panels from replacement",
      "Flawless reflection line matching"
    ],
    iconName: "Activity",
    imageUrl: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "fleet-repair",
    title: "Fleet Vehicle Dent Repairs",
    description: "Keep your commercial vehicles, rentals, or dealership inventory looking pristine. Volume rates and rapid turnaround.",
    detailedDescription: "For rental agencies, company fleets, and auto dealerships, vehicle appearance is directly tied to revenue. We offer priority scheduling and bulk pricing to ensure your fleet vehicles spend less time off the road and maintain top value.",
    benefits: [
      "Special volume discount pricing",
      "On-site mobile repairs for entire fleets",
      "Rapid turnaround to minimize vehicle downtime",
      "Keeps commercial image highly professional"
    ],
    iconName: "Truck",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "insurance-assistance",
    title: "Insurance Claim Assistance",
    description: "We handle the entire claims process for you. From detailed digital damage photos to direct billing with your provider.",
    detailedDescription: "Dealing with insurance companies can be stressful and confusing. Dent Doctor makes it completely hands-off. We provide written assessments, take high-resolution documentation photos, meet with the insurance adjuster, and bill them directly.",
    benefits: [
      "Zero paperwork stress for you",
      "We coordinate directly with all major insurance carriers",
      "We advocate to ensure they approve paintless repair",
      "Deductible financing or deductible matching available"
    ],
    iconName: "FileCheck",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "mobile-service",
    title: "Mobile Dent Repair Service",
    description: "We bring the dent repair shop to you. Professional service in your driveway or office parking lot.",
    detailedDescription: "Can't find the time to visit our workshop? No problem. Our fully equipped mobile vans carry all PDR tools, LED inspection lights, and battery packs directly to your home, office, or garage for ultimate convenience.",
    benefits: [
      "Maximum convenience - no need to leave home",
      "Fully self-contained mobile repair units",
      "Repairs completed in your driveway or parking space",
      "Available for door dings, small dents, and minor creases"
    ],
    iconName: "Navigation",
    imageUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600"
  }
];

export const BEFORE_AFTER_EXAMPLES: BeforeAfterExample[] = [
  {
    id: "ex1",
    title: "Quarter Panel Deep Dent",
    vehicleType: "Tesla Model Y (Deep Blue Metallic)",
    beforeUrl: IMAGES.beforeSlider,
    afterUrl: IMAGES.afterSlider,
    description: "A large, deep dent on the rear quarter panel curve caused by a parking pillar. Restored to a factory finish in 3.5 hours using Paintless Dent Removal, preserving the original paint."
  },
  {
    id: "ex2",
    title: "Fender Dent with Body Crease",
    vehicleType: "BMW 5 Series (Sophisto Grey)",
    beforeUrl: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=600",
    afterUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600",
    description: "A complex dent directly running through the front fender crease line. Repaired perfectly within 2 hours, matching all light reflection lines flawlessly."
  },
  {
    id: "ex3",
    title: "Severe Hail Storm Damage",
    vehicleType: "Ford F-150 (Oxford White)",
    beforeUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=600",
    afterUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
    description: "Over 140 hail dings across the hood, roof, and aluminum panels. Completed PDR in 2 days. 100% covered by insurance with zero paint or bondo used."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Michael Jaeger",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    vehicle: "Porsche 911 Carrera S",
    text: "Absolute sorcery. Someone opened their SUV door directly into my rear wheel arch, leaving a nasty creased dent. Traditional body shops quoted me $1,800 and wanted to keep the car for a week to repaint it. Dent Doctor fixed it in my driveway in under 2 hours for a fraction of the cost. It's completely gone. Flawless!",
    date: "June 25, 2026"
  },
  {
    id: "t2",
    name: "Samantha Brooks",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    vehicle: "Audi Q7 (Floret Silver)",
    text: "My car was hit by a heavy hail storm, and the hood looked like a golf ball. I was devastated. The team at Dent Doctor handled my entire insurance claim from start to finish. They met the adjuster, got the paintless repair approved, and fully restored my car in just 3 days. It looks as good as the day I bought it!",
    date: "May 14, 2026"
  },
  {
    id: "t3",
    name: "David Chen",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5,
    vehicle: "Tesla Model 3 (Midnight Silver)",
    text: "I used their online AI Dent Estimator, uploaded a photo, and got a quote range within seconds. Booking was seamless. The technician was highly professional, clean, and extremely precise with his tools. He massaged out two door dings in my office parking lot while I was in meetings. Excellent service and highly recommended!",
    date: "July 2, 2026"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "How long does a paintless dent repair (PDR) take?",
    answer: "Most minor dents, door dings, and shopping cart creases can be repaired in just 45 minutes to 2 hours. Larger, more complex dents or creased panel damage might take 3 to 5 hours. Complete hail damage restoration usually takes between 1 to 3 days depending on the severity and total number of dings."
  },
  {
    id: "faq2",
    question: "Can dents be repaired without repainting?",
    answer: "Yes, absolutely! That is the core of Paintless Dent Repair (PDR). As long as your vehicle's paint is still intact and not cracked or severely scratched, we can restore the metal back to its original factory shape without using any body fillers (bondo), primers, or repainting. This preserves your car's original factory finish."
  },
  {
    id: "faq3",
    question: "How much does dent removal cost?",
    answer: "PDR is highly cost-effective and typically costs 60% to 80% less than traditional body shops. A standard small door ding is usually around $120 to $180. Larger, complex crease dents range from $200 to $450. Complete hail damage is priced on a per-car basis but is fully covered by comprehensive insurance, and we can assist with deductible costs."
  },
  {
    id: "faq4",
    question: "Do you work with insurance companies?",
    answer: "Yes, we work with all major insurance carriers! If your vehicle has hail damage or was in a minor collision, we can document the damage, submit the files, meet with the insurance adjusters, and handle direct billing. We make the entire insurance claims process completely hands-free and stress-free for you."
  },
  {
    id: "faq5",
    question: "Can you repair dents where the paint is scratched?",
    answer: "We can still remove the dent perfectly! However, if the paint has been scratched or chipped down to the metal/primer, PDR will not fix the paint damage. In these cases, we can remove the dent first, and then apply professional color-matched touch-up paint to seal the scratch and prevent rust, saving you from a full panel respray."
  },
  {
    id: "faq6",
    question: "What is the difference between Dent Doctor and a traditional body shop?",
    answer: "Traditional body shops paint-repair dents by grinding off the paint, filling the hole with plastic body filler (bondo), sanding it flat, and respraying the panel. This is slow, expensive, and can lead to paint mismatch or lost car value. Dent Doctor uses specialized instruments to massage the metal back into shape from behind. We don't paint, so your factory finish remains 100% original, and repairs take hours rather than weeks."
  }
];
