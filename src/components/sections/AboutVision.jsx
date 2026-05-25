import { Target, Eye, Sparkles, Compass, CheckCircle } from "lucide-react";

const AboutVision = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-28 border-b border-slate-200/40 relative overflow-hidden">
      {/* Absolute Geometric Floating Orbs for Engagement */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ animationDuration: "4s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <div
            className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200/50 animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">
              Core Foundations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Our Blueprint For Your <br />
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 bg-clip-text text-transparent">
              Spiritual Peace Of Mind
            </span>
          </h2>
        </div>

        {/* High-End Floating Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Mission Card (Floating Up-Down Interaction) */}
          <div className="bg-white border border-slate-200/60 p-8 md:p-10 rounded-[32px] shadow-sm hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-500 text-left relative overflow-hidden group flex flex-col justify-between hover:-translate-y-3 transform backdrop-blur-sm">
            {/* Top Right Luxury Subtle Watermark Icon */}
            <Compass className="absolute -top-6 -right-6 w-32 h-32 text-slate-100/60 group-hover:text-emerald-500/[0.04] transition-colors duration-500 pointer-events-none transform group-hover:rotate-45" />

            <div className="space-y-6 relative z-10">
              {/* Animated Floating Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 relative">
                <Target className="w-6 h-6 relative z-10" />
                <span className="absolute inset-0 rounded-2xl bg-emerald-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                  The Daily Drive
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Our Dedicated{" "}
                  <span className="text-emerald-600">Mission</span>
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Our core mission is to streamline every logistical aspect of
                your sacred pilgrimage. We are committed to lifting the burden
                of travel coordination—managing premium hotel stays, verified
                catering, and comfortable transport options—leaving you entirely
                free to immerse yourself in prayer and spiritual reflection.
              </p>

              {/* Inline Interactive Checklist */}
              <div className="pt-2 grid grid-cols-2 gap-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Verified Hotels</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>On-Ground Guides</span>
                </div>
              </div>
            </div>

            {/* Smooth Expanding Border Bottom Bar */}
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mt-8 group-hover:w-full group-hover:bg-emerald-600 transition-all duration-500" />
          </div>

          {/* Vision Card (Floating Up-Down Interaction) */}
          <div
            className="bg-white border border-slate-200/60 p-8 md:p-10 rounded-[32px] shadow-sm hover:shadow-2xl hover:border-amber-500/30 transition-all duration-500 text-left relative overflow-hidden group flex flex-col justify-between hover:-translate-y-3 transform backdrop-blur-sm sm:mt-0 mt-6"
            style={{ transitionDelay: "50ms" }}
          >
            {/* Top Right Luxury Subtle Watermark Icon */}
            <Sparkles className="absolute -top-6 -right-6 w-32 h-32 text-slate-100/60 group-hover:text-amber-500/[0.04] transition-colors duration-500 pointer-events-none transform group-hover:scale-110" />

            <div className="space-y-6 relative z-10">
              {/* Animated Floating Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shadow-sm group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-500 relative">
                <Eye className="w-6 h-6 relative z-10" />
                <span className="absolute inset-0 rounded-2xl bg-amber-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">
                  The Ultimate Benchmark
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Our Long-Term <span className="text-amber-600">Vision</span>
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                To establish Karwan-e-Mesam as the most trusted and transparent
                travel network for spiritual journeys in Pakistan. We aim to set
                an industry benchmark where corporate transparency overrides
                typical commercial shortcuts, ensuring that every package
                feature promised is exactly what is delivered on the ground.
              </p>

              {/* Inline Interactive Checklist */}
              <div className="pt-2 grid grid-cols-2 gap-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                  <span>100% Transparency</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500" />
                  <span>Zero Price Changes</span>
                </div>
              </div>
            </div>

            {/* Smooth Expanding Border Bottom Bar */}
            <div className="w-12 h-1.5 bg-slate-200 rounded-full mt-8 group-hover:w-full group-hover:bg-amber-500 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
