import { motion } from "motion/react";
import { ArrowRight, Star, MapPin, BadgeCheck, CheckCircle2, Circle, Clock, DollarSign } from "lucide-react";
import { IMAGES } from "../data";

interface HeroProps {
  onQuoteClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onQuoteClick, onContactClick }: HeroProps) {
  const brands = ["TESLA", "BMW", "AUDI", "PORSCHE", "FORD", "MERCEDES"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 overflow-hidden metallic-bg hero-gradient"
    >
      {/* Soft decorative glows */}
      <div className="absolute top-24 -right-24 w-[36rem] h-[36rem] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ---------- Left: Editorial copy ---------- */}
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-500 uppercase"
            >
              <span className="w-6 h-px bg-blue-500" />
              Paintless Dent Repair
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.02] font-sans"
            >
              Where dents
              <br />
              simply
              <span className="relative inline-block ml-3">
                <span className="font-medium">disappear</span>
                {/* Hand-drawn arrow flourish */}
                <svg
                  className="absolute -top-6 -right-8 w-10 h-10 text-blue-500 hidden sm:block"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 34 C 16 30, 30 22, 40 10" />
                  <path d="M30 9 L 41 8 L 40 19" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-400 max-w-lg font-light leading-relaxed"
            >
              Dent Doctor makes it easy to restore your vehicle's factory finish —
              expert paintless dent repair that's fast, affordable, and done in hours,
              never days.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <button
                id="hero-cta-quote"
                onClick={onQuoteClick}
                className="px-7 py-3.5 rounded-full font-semibold text-center tracking-wide shadow-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                style={{ backgroundColor: "var(--text-bright)", color: "var(--bg-app)" }}
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="glass-card border border-white/10 hover:border-blue-500/40 text-slate-200 px-7 py-3.5 rounded-full font-semibold text-center transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                Talk to an Expert
              </button>
            </motion.div>

            {/* Trusted by */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-6 space-y-4"
            >
              <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                Trusted by drivers of
              </p>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="text-slate-400/70 font-bold tracking-[0.2em] text-sm select-none hover:text-slate-300 transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ---------- Right: Organic blob image + floating cards ---------- */}
          <div className="relative lg:h-[34rem] flex items-center justify-center">
            {/* Blob-masked hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[20rem] h-[22rem] sm:w-[24rem] sm:h-[27rem] lg:w-[26rem] lg:h-[30rem] overflow-hidden shadow-2xl"
              style={{ borderRadius: "62% 38% 42% 58% / 55% 48% 52% 45%" }}
            >
              <img
                src={IMAGES.workshop}
                alt="Dent Doctor technician performing paintless dent repair"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
            </motion.div>

            {/* Floating card: Vehicle rating (top) */}
            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-4 right-0 sm:-right-2 lg:right-2 glass-card border border-white/10 rounded-2xl shadow-xl p-4 w-52 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Vehicle · <MapPin className="inline w-3 h-3" /> Harare
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-slate-200">
                  4.9 <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">Tesla Model Y</h3>
                <BadgeCheck className="w-5 h-5 text-blue-500" />
              </div>
            </motion.div>

            {/* Floating card: Instant AI estimate (bottom-right) */}
            <motion.div
              initial={{ opacity: 0, y: 24, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="absolute bottom-2 right-0 sm:-right-4 lg:-right-6 glass-card border border-white/10 rounded-2xl shadow-xl p-5 w-64 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-blue-600/10 rounded-lg text-blue-500">
                  <DollarSign className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">Instant Estimate</h3>
                <span className="ml-auto text-[10px] font-bold bg-emerald-500/15 text-emerald-500 px-2 py-0.5 rounded-full">
                  PDR ✓
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide">Cost range</p>
                  <p className="text-sm font-bold text-slate-200">$150–$250</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Time
                  </p>
                  <p className="text-sm font-bold text-slate-200">1–3 hrs</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card: Checklist (bottom-left) */}
            <motion.div
              initial={{ opacity: 0, y: 24, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-16 left-0 sm:-left-2 lg:-left-6 glass-card border border-white/10 rounded-2xl shadow-xl p-5 w-52 backdrop-blur-md hidden sm:block"
            >
              <h3 className="text-base font-bold text-white tracking-tight mb-3">Checklist</h3>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  Upload dent photo
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  Get instant AI quote
                </li>
                <li className="flex items-center gap-2 text-xs text-slate-400">
                  <Circle className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  Book mobile repair
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
