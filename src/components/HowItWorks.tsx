import { motion } from "motion/react";
import { Camera, FileText, CalendarRange, CarFront, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onQuoteClick: () => void;
}

export default function HowItWorks({ onQuoteClick }: HowItWorksProps) {
  const steps = [
    {
      step: "01",
      icon: <Camera className="w-6 h-6 text-blue-500" />,
      title: "Send Photos of Damage",
      desc: "Use our Instant AI damage estimator. Take a few photos of the dent from multiple angles on your phone and upload them to our quote request form.",
    },
    {
      step: "02",
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: "Receive a Free Quote",
      desc: "Our AI tool generates an instant cost assessment. For complex damage, our master technicians review details and send a formal estimate within 15 minutes.",
    },
    {
      step: "03",
      icon: <CalendarRange className="w-6 h-6 text-blue-500" />,
      title: "Book Your Repair",
      desc: "Select a date and time that fits your schedule. Drop off your car at our state-of-the-art workshop, or choose our mobile van to repair it at your home.",
    },
    {
      step: "04",
      icon: <CarFront className="w-6 h-6 text-blue-500" />,
      title: "Drive Away Dent-Free",
      desc: "In just 1-2 hours, our PDR masters restore the panel back to original factory specification. Original paint stays flawless, with lifetime warranty included.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#050B18]/50 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-sans">
            How It Works
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-400 font-light text-base md:text-lg">
            We've eliminated the stress of car dent repair. From instant quotes to on-site service, your car is restored in four simple steps.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="relative">
          {/* Horizontal connecting line for desktop/lg screens */}
          <div className="hidden lg:block absolute top-[68px] left-[12%] right-[12%] h-0.5 bg-white/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 glass-card p-6 md:p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 hover:accent-glow transition-all duration-300 shadow-xl"
              >
                {/* Step Icon and Number row */}
                <div className="flex items-center justify-between w-full">
                  <div className="p-3.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-white/10 font-mono select-none tracking-tight">
                    {step.step}
                  </span>
                </div>

                {/* Step Title & Desc */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline CTA Box */}
        <div className="mt-16 text-center">
          <button
            onClick={onQuoteClick}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/15 hover:shadow-blue-500/35 transition-all duration-300 cursor-pointer text-sm"
          >
            <span>Start Step 1: Upload Your Photos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
