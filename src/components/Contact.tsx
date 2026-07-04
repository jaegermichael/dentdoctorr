import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  Check,
  Smartphone
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#050B18]/50 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-sans">
            Contact Our Workshop
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
          <p className="text-slate-400 font-light text-base md:text-lg">
            Whether dropping off your vehicle or requesting a mobile technician to visit your office, we are here to help. Reach out today.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info and Operating Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight">Workshop Information</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Stop by our physical detailing bay or contact our scheduling desk. Our central dispatch coordinates mobile repair vans across a 50 km radius.
              </p>
            </div>

            {/* Contacts list */}
            <div className="space-y-4 font-sans">
              <a
                href="tel:+263772468101"
                className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/5 hover:border-blue-500/30 hover:accent-glow transition-all group"
              >
                <div className="p-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Call Us (Harare Office)</p>
                  <p className="text-sm font-bold text-white tracking-wide mt-0.5">+263 (77) 246-8101</p>
                </div>
              </a>

              <a
                href="https://wa.me/263772468101?text=Hi%20Dent%20Doctor%2C%20I'd%20like%20to%20chat%20about%20a%20car%20dent."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/5 hover:border-emerald-500/30 hover:accent-glow transition-all group"
              >
                <div className="p-3 bg-green-500/10 text-green-400 border border-green-500/20 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">WhatsApp Chat (24/7 Support)</p>
                  <p className="text-sm font-bold text-emerald-400 tracking-wide mt-0.5">Click to Chat Now</p>
                </div>
              </a>

              <a
                href="mailto:appointments@dentdoctor.co.zw"
                className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/5 hover:border-blue-500/30 hover:accent-glow transition-all group"
              >
                <div className="p-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Address</p>
                  <p className="text-sm font-bold text-white tracking-wide mt-0.5">appointments@dentdoctor.co.zw</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/5">
                <div className="p-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Workshop Location</p>
                  <p className="text-sm font-bold text-white tracking-wide mt-0.5">12 Enterprise Road, Highlands, Harare, Zimbabwe</p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="glass-card border border-white/10 rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Operating Hours
              </h4>
              <div className="space-y-2.5">
                {[
                  { day: "Monday - Friday", hours: "7:30 AM - 6:00 PM" },
                  { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Closed (WhatsApp Desk Open)" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center text-sm">
                    <span className="text-slate-300 font-light">{item.day}</span>
                    <span className="font-bold text-white font-mono">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Custom Map & Messaging Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Interactive styled SVG Map of central dispatch radiuses */}
            <div className="glass-card border border-white/10 rounded-2xl p-4 overflow-hidden relative shadow-lg">
              <div className="absolute top-4 left-4 bg-slate-900/90 border border-white/10 text-xs font-bold text-white px-3 py-1.5 rounded-lg z-10 font-mono flex items-center gap-1.5 shadow-md">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping" />
                <span>HQ Workshop & Mobile Dispatch map</span>
              </div>

              {/* Styled SVG grid map */}
              <svg viewBox="0 0 500 240" className="w-full h-[220px] bg-[#050B18] rounded-xl border border-white/5 select-none">
                {/* Dots background grid */}
                <defs>
                  <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#1e293b" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dotGrid)" />

                {/* Dispatch Ring Radiuses */}
                <circle cx="250" cy="120" r="100" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                <circle cx="250" cy="120" r="60" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                <circle cx="250" cy="120" r="25" fill="rgba(37, 99, 235, 0.08)" />

                {/* Road schematic lines */}
                <path d="M 50,120 L 450,120" stroke="#1e293b" strokeWidth="4" />
                <path d="M 250,20 L 250,220" stroke="#1e293b" strokeWidth="4" />
                <path d="M 120,40 L 380,200" stroke="#1e293b" strokeWidth="2" />

                {/* HQ Glow Pin */}
                <circle cx="250" cy="120" r="12" fill="rgba(37, 99, 235, 0.4)" className="animate-pulse" />
                <circle cx="250" cy="120" r="5" fill="#3b82f6" />

                {/* Central label */}
                <rect x="190" y="140" width="120" height="24" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                <text x="250" y="156" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
                  DENT DOCTOR HQ
                </text>

                {/* Mobile dispatch labels */}
                <rect x="330" y="50" width="130" height="22" rx="6" fill="#0f172a" stroke="#2563eb" strokeWidth="1" opacity="0.8" />
                <text x="395" y="64" fill="#3b82f6" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                  MOBILE COVERAGE AREA
                </text>
              </svg>

              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mt-2 px-1">
                <span>Central Dispatch Radius: 50 km</span>
                <span>Includes Harare & Surrounding Suburbs</span>
              </div>
            </div>

            {/* Messaging Form */}
            <div className="glass-card border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                  Send Us a Direct Message
                </h4>
                <p className="text-xs text-slate-400 font-light">Have general questions? Fill in your details below and we will contact you directly.</p>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-500 flex items-center justify-center mx-auto border border-blue-500/30">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Message Dispatched!</h5>
                    <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">Thank you for writing. We've routed your inquiry to our general desk and will email you within 1 hour.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-300">Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-[#050B18] border border-white/10 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-300">Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-[#050B18] border border-white/10 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300">Message</label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      placeholder="Type your message or special repair notes here..."
                      className="w-full bg-[#050B18] border border-white/10 text-white rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
