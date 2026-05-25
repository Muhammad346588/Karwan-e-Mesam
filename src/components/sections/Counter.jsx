import { motion } from "framer-motion";
import { Users, Plane, Star, Headphones, Sparkles } from "lucide-react";

const stats = [
  {
    number: "1K+",
    label: "Pilgrims Registered",
    icon: Users,
    gradient: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    number: "50+",
    label: "Successful Tours",
    icon: Plane,
    gradient: "from-cyan-500 to-sky-500",
    glow: "shadow-cyan-500/20",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    number: "99%",
    label: "Pilgrim Satisfaction",
    icon: Star,
    gradient: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/20",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    number: "24/7",
    label: "Ground Support",
    icon: Headphones,
    gradient: "from-violet-500 to-fuchsia-500",
    glow: "shadow-violet-500/20",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
];

const Counter = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-200/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-200/30 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#0f172a_1px,transparent_1px)] bg-[size:22px_22px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Trusted By Thousands
          </div>

          <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Pilgrims Travel <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Command Center
            </span>
          </h2>

          <p className="mt-5 text-slate-600 text-base md:text-lg font-medium leading-relaxed">
            Thousands of pilgrims trust our spiritual journeys every year with
            premium support, seamless planning, and luxury hospitality.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden rounded-[2rem] border ${item.border} bg-white/80 backdrop-blur-xl p-7 shadow-xl ${item.glow} transition-all duration-500`}
              >
                {/* Glow Orb */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${item.gradient}`}
                />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/40 pointer-events-none" />

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center border ${item.border} shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-slate-900" />
                </div>

                {/* Number */}
                <motion.h3
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.15,
                    duration: 0.4,
                  }}
                  className={`mt-6 text-5xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                >
                  {item.number}
                </motion.h3>

                {/* Label */}
                <p className="mt-3 text-slate-600 font-semibold text-base leading-relaxed">
                  {item.label}
                </p>

                {/* Bottom Accent */}
                <div
                  className={`mt-6 h-1.5 rounded-full bg-gradient-to-r ${item.gradient}`}
                />

                {/* Hover Shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] -translate-x-full group-hover:translate-x-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Floating Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-violet-500/5" />

          <div className="relative px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-slate-900 font-black text-lg">
                Your Sacred Journey Starts Here
              </h4>

              <p className="text-slate-600 text-sm mt-1 font-medium">
                Luxury ziyarat packages with complete visa, transport, hotel,
                and spiritual guidance support.
              </p>
            </div>

            <a
              href="https://wa.me/923016143561"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-black shadow-[0_15px_40px_rgba(16,185,129,0.25)] hover:scale-[1.03] transition-all duration-300"
            >
              <Plane className="w-5 h-5" />

              <span>Book Your Seat Now</span>

              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
              >
                →
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Counter;
