import { Compass, ShieldCheck, Users2, Building2 } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-slate-100">
      {/* Subtle Aesthetic Light Accents - Strictly No Dark Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Left Side: Modern Clear Typography */}
          <div className="lg:col-span-7 space-y-6">
            {/* Premium Mini Badge */}
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
                About Karwan-e-Mesam
              </span>
            </div>

            {/* Premium Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Honest Guidance for Your <br />
              Sacred Obligations & <br />
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 bg-clip-text text-transparent">
                Spiritual Journeys
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
              We believe that Umrah and Ziyarat are profoundly emotional and
              spiritual duties. Our focus is entirely on removing logistical
              complications, ensuring 100% transparent pricing, and delivering
              on-ground hospitality that leaves you free to focus solely on your
              prayers.
            </p>

            {/* Inline Badges Instead of Bulky Boxes */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-700">
                  Licensed Tour Operator
                </span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-slate-700">
                  Zero Hidden Charges
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Clean Structured Trust Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Trust Metric 1 */}
            <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:bg-white transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 border border-emerald-100">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Thousands</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mt-0.5">
                Zaireen Guided
              </p>
              <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                Trusted by families across Pakistan for organized group
                departures.
              </p>
            </div>

            {/* Trust Metric 2 */}
            <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:bg-white transition-all duration-300 sm:translate-y-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4 border border-amber-100">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Verified</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mt-0.5">
                Hotel Alliances
              </p>
              <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                Guaranteed walking distances and clean, monitored catering
                menus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
