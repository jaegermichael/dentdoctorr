import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#050B18]/40 border-y border-white/5 relative overflow-hidden">
      {/* Decorative quote back-pattern */}
      <Quote className="absolute top-10 right-10 w-96 h-96 text-white/5 -rotate-12 pointer-events-none select-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-sans">
            What Our Clients Say
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-400 font-light text-base md:text-lg">
            Don't just take our word for it. Read the stories of luxury car owners, daily drivers, and fleet operators who chose Dent Doctor.
          </p>
        </div>

        {/* Carousel Block */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="relative overflow-hidden glass-card accent-glow border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl min-h-[350px] flex flex-col justify-between">
            
            {/* Top quote and stars row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-blue-500/20" />
            </div>

            {/* Testimonial body content */}
            <div className="my-8">
              <p className="text-lg md:text-xl text-slate-100 font-light leading-relaxed italic">
                "{current.text}"
              </p>
            </div>

            {/* Author details row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                {/* Photo */}
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500/30 flex-shrink-0 bg-[#050B18]">
                  <img
                    src={current.photoUrl}
                    alt={current.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Info */}
                <div>
                  <h4 className="font-bold text-white text-base tracking-tight font-sans">
                    {current.name}
                  </h4>
                  <p className="text-xs text-blue-400 font-mono font-medium">
                    {current.vehicle}
                  </p>
                </div>
              </div>

              {/* Date & Verified Badge */}
              <div className="flex flex-col sm:items-end gap-1">
                <span className="text-xs text-slate-400 font-medium">
                  {current.date}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  Verified Repair
                </span>
              </div>
            </div>

          </div>

          {/* Navigation Buttons floating */}
          <div className="flex justify-center sm:justify-between items-center gap-4 mt-8 sm:mt-0 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:-left-6 sm:-right-6 z-20">
            <button
              onClick={handlePrev}
              className="glass-card hover:bg-blue-600 text-slate-300 hover:text-white p-3 rounded-full border border-white/10 hover:border-blue-500 shadow-xl transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="glass-card hover:bg-blue-600 text-slate-300 hover:text-white p-3 rounded-full border border-white/10 hover:border-blue-500 shadow-xl transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Indicators dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "w-8 bg-blue-500" : "w-2 bg-slate-800 hover:bg-slate-700"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
