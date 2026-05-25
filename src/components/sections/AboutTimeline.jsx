import {
  Compass,
  ShieldCheck,
  Award,
  Star,
  Milestone,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";

const AboutTimeline = () => {
  const corporateSteps = [
    {
      year: "2015",
      badge: "The Foundation",
      title: "Founding with Pure Intention",
      description:
        "Karwan-e-Mesam initiated operations with a critical focus: to dismantle the deceptive middle-agent culture in Pakistan's religious travel market and deliver verified, honest Ziyarat structures.",
      icon: <Compass className="w-5 h-5" />,
      metric: "01",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      year: "2019",
      badge: "Regulatory Expansion",
      title: "Licensing & Direct Direct Bulk Procurement",
      description:
        "Secured our official government registrations. We bypassed third-party service aggregators to establish direct corporate contracts with hospitality networks in Makkah and Madinah.",
      icon: <ShieldCheck className="w-5 h-5" />,
      metric: "02",
      accent: "from-amber-500 to-orange-500",
    },
    {
      year: "2022",
      badge: "Spiritual Integrity",
      title: "Scholarly Supervision Standards",
      description:
        "Revolutionized pilgrim care by standardizing the inclusion of verified scholars (Alims) on every single group departure, ensuring error-free ritual execution and daily educational seminars.",
      icon: <Award className="w-5 h-5" />,
      metric: "03",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      year: "2026",
      badge: "The Present Era",
      title: "The Ultimate Luxury Benchmark",
      description:
        "Today, we operate as Pakistan’s most reliable boutique pilgrimage network, retaining a verified 100% price protection status against inflation fluctuations for pre-booked families.",
      icon: <Star className="w-5 h-5" />,
      metric: "04",
      accent: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-b border-slate-100 relative overflow-hidden">
      {/* Background Soft Luxury Blur Nodes */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-emerald-50/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury Content Layout Header */}
        <div className="max-w-3xl text-left space-y-4 mb-24">
          <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/60 px-3 py-1 rounded-full shadow-sm">
            <Milestone className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
              The Karwan Legacy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
            A Decadel Evolution Of <br />
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 bg-clip-text text-transparent">
              Uncompromised Trust
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl pt-1">
            From our baseline origins in 2015 to Pakistan's premier boutique
            network in 2026, we have continuously elevated the benchmark for
            premium spiritual logistics.
          </p>
        </div>

        {/* Asymmetric Alternating Row Track */}
        <div className="space-y-12">
          {corporateSteps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-stretch gap-6 w-full ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Year Block (Left/Right Dominant Accent Panel) */}
                <div className="w-full lg:w-1/3 bg-slate-50/80 border border-slate-100 p-8 rounded-[24px] flex flex-col justify-between relative overflow-hidden group hover:bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-500">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-slate-200 to-slate-100 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-500" />

                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-600 transition-colors duration-300">
                      {step.badge}
                    </span>
                    <span className="text-sm font-black text-slate-300 group-hover:text-slate-400">
                      // {step.metric}
                    </span>
                  </div>

                  <div className="mt-8 text-left relative z-10">
                    <h3 className="text-5xl sm:text-6xl font-black tracking-tighter text-slate-900 group-hover:scale-105 transform origin-left transition-transform duration-500">
                      {step.year}
                    </h3>
                  </div>
                </div>

                {/* Narrative Detail Block (The Wider Informational Panel) */}
                <div className="w-full lg:w-2/3 bg-white border border-slate-200/60 p-8 md:p-10 rounded-[24px] shadow-sm flex flex-col justify-between group hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-100 transition-all duration-500 relative text-left">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      {/* Icon Container with Floating Background Glow */}
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-600 border border-slate-200/50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-500 shadow-sm">
                        {step.icon}
                      </div>

                      {/* Interactive Subtle Micro Arrow */}
                      <div className="w-6 h-6 text-slate-300 group-hover:text-emerald-600 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">
                        {step.title}
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Operational Quality Assurance Badge */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Corporate Service Verified
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
