import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Eye, Sparkles, AlertCircle } from "lucide-react";
import { BEFORE_AFTER_EXAMPLES } from "../data";
import { BeforeAfterExample } from "../types";

export default function Gallery() {
  const [activeExample, setActiveExample] = useState<BeforeAfterExample>(BEFORE_AFTER_EXAMPLES[0]);
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100 percentage
  const [isDragging, setIsDragging] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxMode, setLightboxMode] = useState<"before" | "after">("before");
  
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#050B18] relative border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block">
            Visual Proof
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-sans">
            Real Transformations
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-400 font-light text-base md:text-lg">
            Drag the slider handle on the main image below to compare the BEFORE and AFTER results of our specialized PDR treatments.
          </p>
        </div>

        {/* Gallery Interactive Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Slider Display (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div 
              ref={containerRef}
              onMouseDown={startDrag}
              onTouchStart={startDrag}
              className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl cursor-ew-resize select-none group"
            >
              {/* After Image (Full width background) */}
              <img
                src={activeExample.afterUrl}
                alt={`${activeExample.title} - After Repair`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 bg-green-500/90 text-white text-xs font-bold font-mono px-3 py-1.5 rounded-lg z-20 flex items-center gap-1 shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                AFTER (PDR FINISH)
              </div>

              {/* Before Image (Width bound by sliderPosition) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeExample.beforeUrl}
                  alt={`${activeExample.title} - Before Repair`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                  style={{ width: containerRef.current?.getBoundingClientRect().width }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-red-600/90 text-white text-xs font-bold font-mono px-3 py-1.5 rounded-lg z-20 flex items-center gap-1 shadow-lg">
                  <AlertCircle className="w-3.5 h-3.5" />
                  BEFORE (DENTED)
                </div>
              </div>

              {/* Slider Handle line & circle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white/80 z-20 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white shadow-xl cursor-ew-resize hover:scale-105 active:scale-95 transition-transform z-30">
                  <ChevronLeft className="w-4 h-4 absolute left-1" />
                  <ChevronRight className="w-4 h-4 absolute right-1" />
                </div>
              </div>

              {/* Swipe/Drag Instructions overlay */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 glass-card border border-white/10 text-xs font-semibold text-slate-300 px-4 py-2 rounded-full backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity z-10 flex items-center gap-2 pointer-events-none">
                <span>Drag slider to compare</span>
              </div>
            </div>

            {/* Slider bottom information card */}
            <div className="glass-card border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {activeExample.title}
                  </h3>
                  <p className="text-sm text-blue-400 font-mono font-medium mt-0.5">
                    {activeExample.vehicleType}
                  </p>
                </div>

                {/* Inspect Close-Ups buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setLightboxMode("before");
                      setIsLightboxOpen(true);
                    }}
                    className="bg-slate-950 hover:bg-slate-850 text-slate-300 border border-slate-850 hover:border-slate-700 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    Inspect Before
                  </button>
                  <button
                    onClick={() => {
                      setLightboxMode("after");
                      setIsLightboxOpen(true);
                    }}
                    className="bg-slate-950 hover:bg-slate-850 text-slate-300 border border-slate-850 hover:border-slate-700 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    Inspect After
                  </button>
                </div>
              </div>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                {activeExample.description}
              </p>
            </div>
          </div>

          {/* Selector panel of items (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
              Select Vehicle Case Study
            </p>

            <div className="space-y-3.5">
              {BEFORE_AFTER_EXAMPLES.map((example) => (
                <button
                  key={example.id}
                  onClick={() => {
                    setActiveExample(example);
                    setSliderPosition(50); // Reset slider position for effect
                  }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 ${
                    activeExample.id === example.id
                      ? "glass-card border-blue-500 shadow-xl shadow-blue-500/10 accent-glow"
                      : "glass-card border-white/5 hover:border-white/25 hover:bg-white/5"
                  }`}
                >
                  {/* Small avatar-thumbnail of the repair */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 bg-[#050B18]">
                    <img
                      src={example.afterUrl}
                      alt={example.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Vehicle detail text */}
                  <div className="space-y-1 min-w-0">
                    <p className={`text-sm font-bold truncate ${
                      activeExample.id === example.id ? "text-blue-400" : "text-white"
                    }`}>
                      {example.title}
                    </p>
                    <p className="text-xs text-slate-400 truncate font-mono">
                      {example.vehicleType}
                    </p>
                    <p className="text-xs text-slate-500 line-clamp-1 font-light mt-1">
                      {example.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Quality Statement Box */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950/20 border border-slate-850 rounded-2xl p-6 space-y-3">
              <p className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Reflective Precision
              </p>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Our Paintless Dent Removal technicians examine panels under parallel fluorescent line boards. This ensures that every contour of the metal matches the original vehicle geometry perfectly with zero visual waves or distortion.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Viewer Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md">
            {/* Backdrop click closes */}
            <div 
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setIsLightboxOpen(false)}
            />

            {/* Lightbox Contents */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full flex flex-col z-10"
            >
              {/* Close button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 bg-slate-900 text-slate-300 hover:text-white p-2.5 rounded-full border border-slate-800 transition-colors cursor-pointer"
              >
                <span className="text-xs font-bold px-1.5 uppercase font-mono tracking-widest">Close [Esc]</span>
              </button>

              {/* Toggle Switch */}
              <div className="mx-auto bg-slate-900 border border-slate-850 p-1.5 rounded-xl mb-6 flex gap-1 z-20">
                <button
                  onClick={() => setLightboxMode("before")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    lightboxMode === "before" 
                      ? "bg-red-600 text-white shadow-md" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  Before Damage
                </button>
                <button
                  onClick={() => setLightboxMode("after")}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    lightboxMode === "after" 
                      ? "bg-green-600 text-white shadow-md" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  After PDR Finish
                </button>
              </div>

              {/* Main Image View */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-850 bg-slate-900 shadow-2xl flex items-center justify-center">
                <img
                  src={lightboxMode === "before" ? activeExample.beforeUrl : activeExample.afterUrl}
                  alt={`${activeExample.title} - ${lightboxMode === "before" ? "Dented" : "Repaired"}`}
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title & Description under Lightbox */}
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-white tracking-tight">
                  {activeExample.title} ({lightboxMode === "before" ? "Before Repair" : "After Repair"})
                </h4>
                <p className="text-sm text-slate-400 font-light mt-1">
                  {activeExample.vehicleType} — {activeExample.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
