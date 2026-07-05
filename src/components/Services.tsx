import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Wrench, 
  CloudLightning, 
  Sparkles, 
  ShieldAlert, 
  Activity, 
  Truck, 
  FileCheck, 
  Navigation,
  CheckCircle2,
  X,
  ArrowRight
} from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";

interface ServicesProps {
  onQuoteClick: (serviceId?: string) => void;
}

export default function Services({ onQuoteClick }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Map icon names to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Wrench":
        return <Wrench className="w-6 h-6" />;
      case "CloudLightning":
        return <CloudLightning className="w-6 h-6" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6" />;
      case "Activity":
        return <Activity className="w-6 h-6" />;
      case "Truck":
        return <Truck className="w-6 h-6" />;
      case "FileCheck":
        return <FileCheck className="w-6 h-6" />;
      case "Navigation":
        return <Navigation className="w-6 h-6" />;
      default:
        return <Wrench className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#050B18]/50 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-sans">
            Expert Dent Repair Solutions
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-400 font-light text-base md:text-lg">
            From minor car door dings to massive hail storm damage, we use state-of-the-art paintless techniques to deliver factory-perfect restorations.
          </p>
        </div>

        {/* Services Grid — Arch / Capsule Card Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative flex flex-col items-center glass-card border border-white/10 rounded-[999px] p-3 pb-8 md:pb-10 hover:accent-glow hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 shadow-xl cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Arch Image */}
              <div className="w-full aspect-[3/3.4] rounded-[999px] overflow-hidden relative">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform scale-102 group-hover:scale-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all duration-300" />
              </div>

              {/* Numbered Circle Badge */}
              <div className="-mt-7 relative z-10 w-14 h-14 rounded-full bg-slate-900 group-hover:bg-blue-600 border-4 border-slate-950 flex items-center justify-center shadow-lg transition-colors duration-300">
                <span className="font-mono font-bold text-sm text-slate-100 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Service Title */}
              <h3 className="mt-3 px-3 text-center text-sm md:text-base font-bold text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              {/* Hover hint */}
              <span className="mt-2 flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-widest text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ArrowRight className="w-3 h-3" />
              </span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Learn More Modal Dialog */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-30 bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white p-2 rounded-full border border-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Banner */}
              <div className="h-56 w-full relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                  <div className="bg-blue-600 text-white p-2.5 rounded-xl border border-blue-500/30">
                    {getIcon(selectedService.iconName)}
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-mono font-bold text-blue-400 uppercase tracking-widest">
                    Service Overview
                  </p>
                  <p className="text-slate-300 font-light leading-relaxed">
                    {selectedService.detailedDescription || selectedService.description}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-3">
                  <p className="text-sm font-mono font-bold text-blue-400 uppercase tracking-widest">
                    Key Advantages
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300 font-light">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-400">Restoration Method</p>
                    <p className="text-sm font-bold text-white">100% Paintless, Factory Finish Preserved</p>
                  </div>
                  <button
                    onClick={() => {
                      const id = selectedService.id;
                      setSelectedService(null);
                      onQuoteClick(id);
                    }}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer text-center"
                  >
                    Select Service & Get Quote
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
