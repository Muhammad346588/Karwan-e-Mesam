import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building,
  Milestone,
  MapPin,
  Luggage,
  UserCheck,
} from "lucide-react";

const DestinationSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const destinations = [
    {
      country: "Iraq",
      flag: "🇮🇶",
      tagline: "Sacred Ziyarat Experience",
      description:
        "Embark on a profound spiritual journey to Karbala, Najaf, and other holy sites with premium hospitality, seamless logistics, and expert guidance.",
      cities: ["Karbala Moazzama", "Najaf-e-Ashraf", "Kazmain", "Samarra"],
      hotels: "4-Star & 5-Star (Near Haram)",
      duration: "10 - 12 Days",
      color: "#10b981",
      gradient: "from-emerald-600 to-teal-600",
      bgLight: "bg-emerald-50",
      borderLight: "border-emerald-200",
      textDark: "text-emerald-800",
      stages: [
        "Lahore/Karachi Hub",
        "Document Clearance",
        "Najaf Intl. Airport",
        "Haram Premium Check-in",
      ],
    },
    {
      country: "Saudi Arabia",
      flag: "🇸🇦",
      tagline: "Umrah & Hajj Luxury Packages",
      description:
        "Experience the ultimate spiritual fulfillment in Makkah and Madinah with our front-row luxury accommodations, dedicated scholars, and custom itineraries.",
      cities: ["Makkah Mukarramah", "Madinah Munawwarah"],
      hotels: "Premium Front-Row Luxury Hotels",
      duration: "14 - 21 Days",
      color: "#f59e0b",
      gradient: "from-amber-600 to-orange-600",
      bgLight: "bg-amber-50",
      borderLight: "border-amber-200",
      textDark: "text-amber-800",
      stages: [
        "Pakistan Core Hub",
        "Saudi eVisa Processing",
        "Jeddah/Madinah Arrival",
        "Luxury Front-Row Stay",
      ],
    },
    {
      country: "Iran",
      flag: "🇮🇷",
      tagline: "Spiritual Enlightenment",
      description:
        "Visit the sacred shrines of Mashhad and Qom with complete peace of mind, fully curated high-end catering, and comprehensive local transport services.",
      cities: ["Mashhad", "Qom Al-Muqaddasa", "Tehran"],
      hotels: "Premium VIP Accommodations",
      duration: "7 - 9 Days",
      color: "#06b6d4",
      gradient: "from-cyan-600 to-blue-600",
      bgLight: "bg-cyan-50",
      borderLight: "border-cyan-200",
      textDark: "text-cyan-800",
      stages: [
        "Departure Station",
        "Group Visa Approval",
        "Mashhad International",
        "VIP Hotel Transfer",
      ],
    },
  ];

  const activeDest = destinations[activeIdx];

  // Trigger a brief plane takeoff reset animation when destination changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1200);
    return () => clearTimeout(timer);
  }, [activeIdx]);

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/50 to-slate-100 font-sans text-slate-800">
      {/* Background Ambient Graphics */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-emerald-200 bg-emerald-50 px-4 py-1.5 rounded-full text-emerald-700 text-xs md:text-sm font-semibold uppercase tracking-wider shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            Where Your Spiritual Journey Begins
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight"
          >
            Explore Our Sacred <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">
              Destinations & Active Routes
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-medium"
          >
            From departure to your safe return, we manage every step of your
            sacred itinerary. Select a country below to see your customized
            transit itinerary roadmap.
          </motion.p>
        </div>

        {/* MAIN INTERACTIVE GRID */}
        <div className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-8 items-center">
          {/* ✈️ NEW LIVE CUSTOM ANIMATION ROUTE TRACKER (LEFT) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-[2.5rem] p-5 md:p-7 shadow-xl shadow-slate-200/50 relative overflow-hidden h-[500px] md:h-[580px] flex flex-col justify-between">
            {/* Header Interactive Tabs */}
            <div className="relative z-20 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between bg-slate-50 p-2.5 rounded-2xl border border-slate-150">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2 flex items-center gap-1.5">
                <Milestone className="w-4 h-4 text-slate-400" />
                Select Route To Track:
              </span>
              <div className="flex gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                {destinations.map((dest, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                      activeIdx === idx
                        ? `bg-slate-900 text-white shadow-md shadow-slate-900/20`
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <span>{dest.flag}</span>
                    <span>{dest.country}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* HIGH-END ROUTE ANIMATION CANVAS */}
            <div className="relative flex-1 my-5 rounded-3xl bg-slate-950 p-6 flex flex-col justify-center overflow-hidden border border-slate-800 shadow-inner">
              {/* Subtle background tech grid layout overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />

              {/* Dynamic color orb reflecting active destination type */}
              <div
                className="absolute w-60 h-60 rounded-full blur-[110px] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
                style={{ backgroundColor: activeDest.color }}
              />

              {/* LIVE HORIZONTAL FLIGHT LINE */}
              <div className="relative w-full py-8">
                {/* Connecting track line */}
                <div className="absolute h-1 left-4 right-4 bg-slate-800 rounded-full top-1/2 -translate-y-1/2 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    key={activeIdx}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: activeDest.color }}
                  />
                </div>

                {/* ANIMATED JET ENGINE SIMULATOR */}
                <div className="absolute inset-0 pointer-events-none flex items-center px-4">
                  <motion.div
                    key={activeIdx}
                    initial={{ x: "-5%", opacity: 0 }}
                    animate={{ x: "92%", opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 2.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.5,
                    }}
                    className="flex flex-col items-center relative"
                  >
                    {/* Engine Thrust Particle Trail */}
                    <div
                      className="absolute right-6 w-20 h-1.5 opacity-40 rounded-full blur-xs"
                      style={{
                        background: `linear-gradient(to left, ${activeDest.color}, transparent)`,
                      }}
                    />
                    <Plane
                      className="w-7 h-7 rotate-90 transform drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                      style={{ color: activeDest.color }}
                    />
                  </motion.div>
                </div>

                {/* THE 4 VERIFIED TRANSIT MILESTONES STAGES */}
                <div className="relative z-10 flex justify-between w-full">
                  {activeDest.stages.map((stage, sIdx) => {
                    // Stage icons helper array mapping contextually
                    const stageIcons = [
                      <MapPin className="w-4 h-4" />,
                      <UserCheck className="w-4 h-4" />,
                      <Plane className="w-4 h-4" />,
                      <Luggage className="w-4 h-4" />,
                    ];

                    return (
                      <div
                        key={sIdx}
                        className="flex flex-col items-center max-w-[22%] text-center"
                      >
                        {/* Animated Nodes */}
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: sIdx * 0.15 }}
                          className={`w-9 h-9 rounded-xl flex items-center justify-center border-2 transition-all duration-500 bg-slate-900 ${
                            sIdx === 0 || sIdx === 3
                              ? "border-white shadow-md shadow-white/10"
                              : "border-slate-700"
                          }`}
                          style={{
                            color:
                              sIdx === 0 || sIdx === 3
                                ? activeDest.color
                                : "#94a3b8",
                          }}
                        >
                          {stageIcons[sIdx]}
                        </motion.div>

                        {/* Stage Text Label */}
                        <span className="mt-3 text-[10px] font-bold text-slate-300 tracking-tight leading-tight uppercase min-h-[32px] flex items-center justify-center">
                          {stage}
                        </span>

                        {/* Status Check Indicator */}
                        <span
                          className="text-[9px] mt-1 px-1.5 py-0.5 rounded-md font-semibold tracking-wider"
                          style={{
                            backgroundColor:
                              sIdx === 3 ? `${activeDest.color}20` : "#1e293b",
                            color: sIdx === 3 ? activeDest.color : "#64748b",
                          }}
                        >
                          {sIdx === 3 ? "Target" : "Verified"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Helper Explainer Footer Strip */}
            <div className="relative z-10 w-full bg-slate-900 text-slate-300 p-3.5 rounded-2xl flex items-center justify-between text-xs font-medium border border-slate-800 shadow-md">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>
                  Live Route Optimizer: <strong>Pakistan Hub Departure</strong>{" "}
                  guaranteed.
                </span>
              </span>
              <span className="hidden sm:inline bg-white/10 px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wide text-slate-200">
                Direct Transit
              </span>
            </div>
          </div>

          {/* 📄 PRODUCT CARDS / INFORMATION DETAILS (RIGHT) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-xl shadow-slate-100 relative overflow-hidden"
              >
                {/* Visual Top Highlight Accent Strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${destinations[activeIdx].gradient}`}
                />

                {/* Card Title Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold ${destinations[activeIdx].bgLight} ${destinations[activeIdx].textDark} ${destinations[activeIdx].borderLight} border mb-2`}
                    >
                      {destinations[activeIdx].tagline}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-2">
                      <span>{destinations[activeIdx].flag}</span>
                      <span>Journey to {destinations[activeIdx].country}</span>
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                  {destinations[activeIdx].description}
                </p>

                <hr className="my-5 border-slate-100" />

                {/* Package Quick Key-Points */}
                <div className="space-y-4">
                  {/* Cities Included */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Major Cities Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {destinations[activeIdx].cities.map((city, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 bg-slate-50 border border-slate-200/60 px-2.5 py-1 rounded-xl text-slate-700 text-xs font-semibold"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{city}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accommodation & Duration Details */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center gap-2.5">
                      <Building className="w-5 h-5 text-slate-500 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] text-slate-400 font-bold uppercase block leading-none">
                          Hotels
                        </span>
                        <span className="text-xs font-bold text-slate-800 block mt-1 truncate">
                          {destinations[activeIdx].hotels}
                        </span>
                      </div>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center gap-2.5">
                      <Calendar className="w-5 h-5 text-slate-500 flex-shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block leading-none">
                          Duration
                        </span>
                        <span className="text-xs font-bold text-slate-800 block mt-1">
                          {destinations[activeIdx].duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* TRUSTED FOOTER BADGES WITH MAIN ACTION CTA */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-slate-200 rounded-2xl p-4 flex gap-3 items-start shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">
                      100% Visa Approval
                    </h5>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-tight font-medium">
                      Fast-track visa filing and high-priority document
                      handling.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-4 flex gap-3 items-start shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">
                      24/7 Ground Support
                    </h5>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-tight font-medium">
                      Dedicated on-site tour guides and local transport
                      managers.
                    </p>
                  </div>
                </div>
              </div>

              {/* DYNAMIC COLORED SUBMIT CALL-TO-ACTION */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <a
                  href="https://wa.me/923016143561"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white font-bold shadow-lg text-sm transition-all duration-300 bg-gradient-to-r ${destinations[activeIdx].gradient} hover:brightness-105`}
                >
                  <Plane className="w-4 h-4 fill-current text-white/90" />
                  <span>
                    Begin Your Journey ({destinations[activeIdx].country})
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
