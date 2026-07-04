import { motion } from "motion/react";
import { ShieldCheck, Zap, DollarSign, Award, ArrowRight } from "lucide-react";
import { IMAGES } from "../data";

interface HeroProps {
  onQuoteClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onQuoteClick, onContactClick }: HeroProps) {
  const trustBadges = [
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      label: "Same Day Service",
      sub: "Repairs done in hours",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      label: "PDR Experts",
      sub: "No painting or bondo",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-blue-500" />,
      label: "Affordable Pricing",
      sub: "Up to 70% less than body shops",
    },
    {
      icon: <Award className="w-5 h-5 text-blue-500" />,
      label: "Satisfaction Guaranteed",
      sub: "Lifetime repair warranty",
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 overflow-hidden metallic-bg hero-gradient">
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBg}
          alt="Paintless Dent Removal Technician repairing luxury car"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 opacity-40 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Dark radial and linear gradients for ultimate premium contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B18] via-[#0A0E1A]/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-[#050B18]/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 px-3.5 py-1.5 rounded-full"
            >
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase">
                #1 Rated Paintless Dent Repair
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-sans"
              >
                Professional Dent Removal <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
                  Without Repainting
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light"
              >
                Fast, affordable, and expert paintless dent repair (PDR) services that restore your vehicle's metal panels to flawless original condition in just hours.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                id="hero-cta-quote"
                onClick={onQuoteClick}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-center tracking-wide shadow-xl shadow-blue-600/20 hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                id="hero-cta-whatsapp"
                href="https://wa.me/263772468101?text=Hi%20Dent%20Doctor%2C%20I'd%20like%20to%20request%20a%20dent%20repair%20quote."
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 px-8 py-4 rounded-xl font-bold text-center hover:border-slate-600 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                {/* SVG WhatsApp icon */}
                <svg className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.729-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.112-2.905-6.979C16.24 1.9 13.761.865 11.11.865c-5.437 0-9.863 4.418-9.867 9.863-.001 1.748.47 3.453 1.365 4.966L1.611 21.84l6.232-1.635l.004-.003zM16.48 13.1c-.267-.134-1.58-.78-1.823-.867-.243-.088-.419-.133-.596.134-.176.267-.681.867-.834 1.04-.154.177-.308.2-.575.066-.267-.134-1.13-.417-2.152-1.329-.795-.71-1.332-1.588-1.488-1.854-.157-.267-.017-.411.116-.544.12-.12.267-.312.4-.469.135-.156.179-.267.268-.446.09-.178.045-.335-.022-.469-.067-.134-.596-1.437-.817-1.97-.215-.519-.432-.449-.596-.449-.153-.001-.33-.001-.507-.001-.177 0-.464.067-.707.312-.243.244-.927.913-.927 2.226s.955 2.58 1.088 2.758c.133.177 1.88 2.87 4.554 4.024.637.275 1.132.439 1.519.562.64.203 1.222.174 1.682.105.513-.077 1.58-.646 1.8-.1.22-.553.22-.1.22-.164 0-.067-.133-.267-.4-.4z" />
                </svg>
                WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Vertical Image Cards Column */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
            {[
              {
                badge: "01 / Regional HQ",
                title: "Enterprise Road Detailing Bay",
                description: "Our state-of-the-art repair and detailing facility located at 12 Enterprise Road, Highlands, Harare.",
                image: IMAGES.workshop,
              },
              {
                badge: "02 / The Art of PDR",
                title: "Paintless Metal Sculpting",
                description: "Specialized hand-tool manipulation preserves original factory coat and vehicle resale value.",
                image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=300",
              },
              {
                badge: "03 / Flush Finish",
                title: "Restored to Factory Spec",
                description: "Flawless panel curvature matching with zero paint overspray, bondo, or panel crease lines.",
                image: IMAGES.afterSlider,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * index + 0.3, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card accent-glow border border-white/10 rounded-2xl overflow-hidden shadow-xl p-3 flex gap-4 items-center group cursor-pointer transition-all duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 relative border border-white/5 bg-[#050B18]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex-grow space-y-1 pr-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase">
                    {card.badge}
                  </span>
                  <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-normal font-light line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 lg:mt-16 glass-card accent-glow rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {trustBadges.map((badge, idx) => (
              <div
                key={badge.label}
                className={`flex items-start gap-4 ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""}`}
              >
                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                  {badge.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base font-sans tracking-tight">
                    {badge.label}
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {badge.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
