import { Compass, ShieldCheck, Clock } from "lucide-react";

const Packagehero = () => {
  return (
    <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-100">
      {/* Subtle Light Theme Artistic Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft Mint/Emerald Light Burst (Top Left) */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-[100px]" />
        {/* Soft Golden Sand Warmth (Center Right) */}
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[130px]" />

        {/* Geometric Luxury Pattern Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Light Mode Premium Pills Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50/80 border border-emerald-100 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Sacred Journeys 2026
            </span>
          </div>

          {/* Luxury Typography for Light Theme */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight md:leading-none">
            Explore Our Premium & <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
              Comfort-First Packages
            </span>
          </h1>

          {/* Description with Clean Contrast */}
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Tailored for spiritual serenity, ultimate ease, and transparent
            pricing. Choose the perfect gateway for your sacred Umrah & Ziyarat
            obligations with absolute peace of mind.
          </p>

          {/* Minimal Divider */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mx-auto pt-2" />

          {/* Premium Light Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="flex items-center gap-3 bg-slate-50/50 backdrop-blur-sm border border-slate-100 p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-100 hover:border-emerald-500/30 text-left group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  Flexible Tiers
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Luxury & economy options
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-3 bg-slate-50/50 backdrop-blur-sm border border-slate-100 p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-100 hover:border-emerald-500/30 text-left group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  Verified Stays
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Closest hotels guaranteed
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-3 bg-slate-50/50 backdrop-blur-sm border border-slate-100 p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-100 hover:border-emerald-500/30 text-left group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  24/7 Assistance
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Ground support in Iran & Iraq
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packagehero;
