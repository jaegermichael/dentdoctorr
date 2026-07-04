import { motion } from "motion/react";
import { 
  Users, 
  Sparkles, 
  Clock, 
  Coins, 
  Hammer, 
  HeartHandshake 
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Certified Technicians",
      desc: "Our masters are Vale-Certified and undergo extensive annual training to handle even the most complex aluminum panels and sharp crease lines.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-blue-400" />,
      title: "Paintless Repair Specialists",
      desc: "We specialize strictly in pure PDR. No sanders, body fillers, primers, or resprays. We preserve 100% of your vehicle's factory paint and resale value.",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: "Quick Turnaround Times",
      desc: "Skip the weeks of rental cars. Most of our PDR door dings and dent repairs are completed within 1-2 hours while you comfortably wait.",
    },
    {
      icon: <Coins className="w-6 h-6 text-blue-400" />,
      title: "Cost Effective Solutions",
      desc: "Our repairs bypass expensive paint sprays, parts replacement, and hours of body shop labor, costing up to 70% less than a conventional shop.",
    },
    {
      icon: <Hammer className="w-6 h-6 text-blue-400" />,
      title: "Advanced Repair Tools",
      desc: "We use high-power LED diagnostic line boards, carbon fiber hand rods, specialized cold glue tabs, and thermal heat expanders.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-blue-400" />,
      title: "Customer Satisfaction Focused",
      desc: "We provide an ironclad, lifetime warranty on all dent work. If you're not completely satisfied with the repair, you don't pay a single cent.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#050B18] border-t border-white/5 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-sans">
            Crafting Flawless Reflections
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-400 font-light text-base md:text-lg">
            We've built our reputation on high-caliber dent repair, transparent pricing, and stellar speed. We treat your vehicle like our own.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl hover:shadow-2xl hover:border-blue-500/30 hover:accent-glow hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="p-3.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-md">
                {feature.icon}
              </div>

              {/* Text Context */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner / Seal of Quality */}
        <div className="mt-16 glass-card border border-blue-500/30 accent-glow rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Lifetime Warranty Included On All PDR Repairs</h4>
            <p className="text-sm text-slate-300 font-light">We stand behind the quality of our craftsmanship forever, ensuring peace of mind.</p>
          </div>
          <div className="bg-blue-600 text-white font-mono font-bold px-6 py-2.5 rounded-xl border border-blue-500/40 text-xs uppercase tracking-wider shadow-lg">
            Guaranteed PDR Excellence
          </div>
        </div>

      </div>
    </section>
  );
}
