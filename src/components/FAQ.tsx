import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#050B18] border-t border-white/5 relative">
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block">
            Information
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-sans">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-400 font-light text-base md:text-lg">
            Have questions about Paintless Dent Repair? Find quick answers here from our master craftsmen.
          </p>
        </div>

        {/* FAQ Accordions Grid */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="glass-card border border-white/10 hover:border-blue-500/30 hover:accent-glow rounded-2xl overflow-hidden transition-all duration-200"
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5.5 h-5.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base font-bold text-white tracking-tight leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`p-1.5 rounded-lg bg-[#050B18] border border-white/10 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-blue-450" : ""
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-300 font-light leading-relaxed border-t border-white/10 pl-14">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Banner bottom */}
        <div className="mt-12 text-center glass-card border border-white/10 rounded-2xl p-6">
          <p className="text-sm text-slate-300 font-light">
            Don't see your question listed here? Contact us directly at{" "}
            <a href="mailto:support@dentdoctor.com" className="text-blue-400 font-medium hover:underline">
              support@dentdoctor.com
            </a>{" "}
            or message us via WhatsApp for a personalized answer.
          </p>
        </div>

      </div>
    </section>
  );
}
