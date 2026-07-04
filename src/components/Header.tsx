import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Car, Menu, X, Phone, ShieldCheck, Sun, Moon } from "lucide-react";

interface HeaderProps {
  onQuoteClick: () => void;
  theme?: "light" | "dark";
  onToggleTheme?: () => void;
}

export default function Header({ onQuoteClick, theme = "light", onToggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Before & After", href: "#gallery" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <>
      <header
        id="app-header"
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${
          isScrolled
            ? "glass-card accent-glow py-3 px-2 sm:px-6 shadow-2xl"
            : "glass-card py-4 px-2 sm:px-6 shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#")}
              className="flex items-center gap-2 group"
            >
              <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white font-sans flex items-center gap-1">
                  DENT <span className="text-blue-500">DOCTOR</span>
                </span>
                <span className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-1 font-bold">
                  Paintless Dent Repair
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-2 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Button and Contact */}
            <div className="hidden sm:flex items-center gap-6">
              <a
                href="tel:+263772468101"
                className="hidden xl:flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 border border-slate-700">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+263 (77) 246-8101</span>
              </a>

              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="w-10 h-10 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-md"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-blue-600" />
                  )}
                </button>
              )}

              <button
                id="header-cta-btn"
                onClick={onQuoteClick}
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                Free AI Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                id="header-mobile-quote-btn"
                onClick={onQuoteClick}
                className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-md text-xs font-bold shadow-md transition-colors sm:hidden"
              >
                AI Quote
              </button>

              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="w-8 h-8 rounded-lg bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-blue-600" />
                  )}
                </button>
              )}

              <button
                id="header-mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2 rounded-md focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900 border-b border-slate-800"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-800 flex flex-col gap-3 px-3">
                  <a
                    href="tel:+263772468101"
                    className="flex items-center gap-2 text-sm font-mono text-slate-300 py-1"
                  >
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span>+263 (77) 246-8101</span>
                  </a>
                  <button
                    id="mobile-nav-cta-btn"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onQuoteClick();
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg text-center font-bold shadow-lg transition-colors cursor-pointer"
                  >
                    Get a Free Quote
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
