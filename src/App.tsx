import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [theme, setTheme] = useState<"light" | "dark" | "">("");

  // Initialize theme from localStorage (default to light)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = (savedTheme === "dark" || savedTheme === "light") ? savedTheme : "light";
    setTheme(initialTheme);
  }, []);

  // Update document root classes when theme changes
  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleOpenQuote = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setPreselectedService(undefined);
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased scroll-smooth selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Header */}
      <Header 
        onQuoteClick={() => handleOpenQuote()} 
        theme={theme || "light"}
        onToggleTheme={toggleTheme}
      />

      {/* Main Layout Sections */}
      <main id="main-content">
        <Hero 
          onQuoteClick={() => handleOpenQuote()} 
          onContactClick={() => scrollToSection("#contact")} 
        />
        <About />
        <Services onQuoteClick={(serviceId) => handleOpenQuote(serviceId)} />
        <Gallery />
        <HowItWorks onQuoteClick={() => handleOpenQuote()} />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer & Final Call-To-Action Banner */}
      <Footer
        onQuoteClick={() => handleOpenQuote()}
        onContactClick={() => scrollToSection("#contact")}
        theme={theme || "light"}
      />

      {/* Instant AI Damage Estimation & Quote Modal Form */}
      <QuoteForm 
        isOpen={isQuoteOpen} 
        onClose={handleCloseQuote} 
        preselectedServiceId={preselectedService} 
      />

      {/* Floating Interactive WhatsApp Button with Pulsing Glow */}
      <a
        id="floating-whatsapp-widget"
        href="https://wa.me/18005553368?text=Hi%20Dent%20Doctor%2C%20I'd%20like%20to%20request%20a%20dent%20repair%20quote."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.6)] transform hover:scale-105 active:scale-95 transition-all duration-300 group flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />
        
        {/* SVG WhatsApp Icon */}
        <svg className="w-6 h-6 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.729-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.112-2.905-6.979C16.24 1.9 13.761.865 11.11.865c-5.437 0-9.863 4.418-9.867 9.863-.001 1.748.47 3.453 1.365 4.966L1.611 21.84l6.232-1.635l.004-.003zM16.48 13.1c-.267-.134-1.58-.78-1.823-.867-.243-.088-.419-.133-.596.134-.176.267-.681.867-.834 1.04-.154.177-.308.2-.575.066-.267-.134-1.13-.417-2.152-1.329-.795-.71-1.332-1.588-1.488-1.854-.157-.267-.017-.411.116-.544.12-.12.267-.312.4-.469.135-.156.179-.267.268-.446.09-.178.045-.335-.022-.469-.067-.134-.596-1.437-.817-1.97-.215-.519-.432-.449-.596-.449-.153-.001-.33-.001-.507-.001-.177 0-.464.067-.707.312-.243.244-.927.913-.927 2.226s.955 2.58 1.088 2.758c.133.177 1.88 2.87 4.554 4.024.637.275 1.132.439 1.519.562.64.203 1.222.174 1.682.105.513-.077 1.58-.646 1.8-.1.22-.553.22-.1.22-.164 0-.067-.133-.267-.4-.4z" />
        </svg>

        {/* Floating Text Tooltip on Hover */}
        <span className="absolute right-14 bg-slate-900 text-white font-bold text-xs px-3 py-1.5 rounded-lg border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md mr-1 select-none pointer-events-none">
          Need PDR Help? WhatsApp us
        </span>
      </a>

    </div>
  );
}
