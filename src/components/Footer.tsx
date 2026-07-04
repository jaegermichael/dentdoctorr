import React from "react";
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ShieldCheck } from "lucide-react";

interface FooterProps {
  onQuoteClick: () => void;
  onContactClick: () => void;
}

export default function Footer({ onQuoteClick, onContactClick }: FooterProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
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
    <footer className="bg-[#050B18] text-slate-400 border-t border-white/5">
      
      {/* FINAL CTA SECTION (Embedded as premium banner) */}
      <div className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-r from-blue-950/20 to-indigo-950/20 border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10 space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block">
            Premium Paintless Dent Removal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-sans">
            Get Your Vehicle Looking <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              New Again
            </span>
          </h2>
          <p className="text-slate-300 font-light text-base md:text-lg max-w-xl mx-auto">
            Request your free dent repair quote today. See how our certified PDR craftsmen can restore your vehicle in just hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onQuoteClick}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/15 hover:shadow-blue-500/35 transition-all duration-200 cursor-pointer text-sm"
            >
              Request Free Quote
            </button>
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto bg-slate-950 hover:bg-slate-850 text-slate-300 border border-slate-800 hover:border-slate-700 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 cursor-pointer text-sm"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER CORE GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Car className="w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                DENT <span className="text-blue-500">DOCTOR</span>
              </span>
            </div>
            
            <p className="text-sm font-light leading-relaxed text-slate-400">
              Region's premier vehicle paintless dent removal (PDR) experts, restoring flawless body panels with original warranty and same-day scheduling.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3.5 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 glass-card border border-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-slate-400">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 glass-card border border-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-slate-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 glass-card border border-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-slate-400">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-blue-500">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-sm font-medium">
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-white transition-colors">About Us</a>
              <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors">Dent Services</a>
              <a href="#gallery" onClick={(e) => handleNavClick(e, "#gallery")} className="hover:text-white transition-colors">Before & After Slider</a>
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, "#how-it-works")} className="hover:text-white transition-colors">How It Works</a>
              <a href="#why-us" onClick={(e) => handleNavClick(e, "#why-us")} className="hover:text-white transition-colors">Why Choose Us</a>
              <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")} className="hover:text-white transition-colors">FAQs</a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-blue-500">Services</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <span className="text-slate-400 font-light">Paintless Dent Removal (PDR)</span>
              <span className="text-slate-400 font-light">Hail Damage Restoration</span>
              <span className="text-slate-400 font-light">Door Ding Repair</span>
              <span className="text-slate-400 font-light">Minor Collision Repairs</span>
              <span className="text-slate-400 font-light">Mobile Panel Restoration</span>
              <span className="text-slate-400 font-light">Fleet Vehicle PDR Rates</span>
            </div>
          </div>

          {/* Col 4: Contact info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-blue-500">Scheduling Desk</h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4.5 h-4.5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 font-bold">+263 (77) 246-8101</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4.5 h-4.5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 truncate">appointments@dentdoctor.co.zw</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 leading-relaxed font-light">12 Enterprise Road, Highlands, Harare, Zimbabwe</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Dent Doctor. All rights reserved. Built with professional PDR guidelines.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <div className="flex items-center gap-1 text-blue-500 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Vale-PDR</span>
            </div>
          </div>
        </div>

      </div>

    </footer>
  );
}
