import { motion } from "motion/react";
import { CheckCircle, Calendar, ShieldCheck, Award } from "lucide-react";
import { IMAGES } from "../data";

export default function About() {
  const stats = [
    { icon: <Calendar className="w-5 h-5 text-blue-500" />, value: "15+", label: "Years of Craftsmanship" },
    { icon: <ShieldCheck className="w-5 h-5 text-blue-500" />, value: "100%", label: "Satisfaction Guaranteed" },
    { icon: <Award className="w-5 h-5 text-blue-500" />, value: "12,000+", label: "Vehicles Restored" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#050B18] relative overflow-hidden border-t border-white/5">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Workshop Image Section */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-45 transition duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
              <img
                src={IMAGES.workshop}
                alt="Dent Doctor clean, professional state-of-the-art workshop repair bay"
                className="w-full h-[380px] md:h-[450px] object-cover object-center transform transition duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass-card border border-white/10 rounded-xl p-4 backdrop-blur-md">
                <p className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                  Our Headquarters
                </p>
                <p className="text-sm text-slate-300 font-medium mt-1">
                  Fully equipped workshop with certified master PDR technicians.
                </p>
              </div>
            </div>
          </div>

          {/* About Content Section */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                The Leaders in Paintless <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Dent Restoration
                </span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-300 font-light leading-relaxed text-base">
              <p>
                Founded on the principles of immaculate precision and outstanding customer convenience, <strong className="text-white font-medium">Dent Doctor</strong> has grown into the region's premier vehicle paintless dent removal (PDR) specialist.
              </p>
              <p>
                Unlike traditional body shops that rely on heavy body fillers and full-panel repainting, our specialized technicians utilize state-of-the-art metal massages and light-reflection board diagnostics. We operate behind the damaged panels to gently ease dents out, keeping your original paint untouched and conserving the vehicle's secondary value.
              </p>
              <p>
                Whether you have a minor door ding, complex creased panels, or comprehensive hail damage, our master-certified experts treat every vehicle with surgical detail.
              </p>
            </div>

            {/* Quick checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Certified PDR Master Craftsmen",
                "Retains Original Factory Paint Finish",
                "Insurance Approved Claims Specialist",
                "Lifetime Warranty on All Repairs",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-200">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 justify-center sm:justify-start">
                    <span className="hidden sm:inline-block">{stat.icon}</span>
                    <span className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 font-sans font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
