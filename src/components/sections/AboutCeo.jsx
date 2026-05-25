import { Quote, ShieldCheck, Sparkles, Award, Star } from "lucide-react";
import CEO from "../../assets/images/Web/CEO.jpeg";

const AboutCeo = () => {
  return (
    <section className="bg-slate-50 py-24 md:py-32 border-b border-slate-200/40 relative overflow-hidden">
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-12 right-10 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: The Executive Luxury Frame (45% Width on Desktop) */}
          <div className="lg:col-span-5 flex justify-center relative group">
            {/* Geometric Backframe Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-600/10 to-amber-500/5 rounded-[40px] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Main Outer Image Border Frame */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] bg-white border border-slate-200 p-4 rounded-[36px] shadow-xl shadow-slate-200/60 transform hover:-translate-y-2 transition-all duration-500">
              {/* Inner Clip Image Container */}
              <div className="w-full h-full rounded-[24px] overflow-hidden bg-slate-100 relative group-hover:shadow-inner">
                <img
                  src={CEO}
                  alt="Allama Yaqoob Raza Haideri"
                  className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle Image Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Verification Badge on Image */}
              <div
                className="absolute -bottom-5 -right-4 bg-white border border-slate-200 p-3 rounded-2xl shadow-lg flex items-center gap-2 animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left/right pr-2">
                  <p className="text-[9px] font-black uppercase text-slate-400 tracking-wider">
                    Spiritual Guide
                  </p>
                  <p className="text-xs font-black text-slate-800">
                    100% Verified Care
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Editorial Narrative (55% Width on Desktop) */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Upper Mini Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/60 px-3 py-1 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                Leadership Statement
              </span>
            </div>

            {/* Title & Spiritual Profile */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Allama Yaqoob Raza Haideri
              </h2>
              <p className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 inline-block px-3 py-1 rounded-md">
                Founder & Chief Executive Officer
              </p>
            </div>

            {/* The Message Box with Hanging Quote Icon */}
            <div className="relative pt-4">
              <Quote className="absolute -top-3 -left-3 w-12 h-12 text-slate-200/60 pointer-events-none transform -rotate-12" />

              <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed italic relative z-10 pl-6 border-l-2 border-emerald-500/30">
                "Spiritual travel is not a commercial enterprise—it is a sacred
                trust. When a family chooses Karwan-e-Mesam, they hand over
                their peace of mind to us. Our commitment from day one has been
                to replace systemic market hidden charges with absolute
                financial clarity and flawless ground logistics. Every step of
                your pilgrimage is structured under strict spiritual compliance,
                ensuring your focus remains entirely on devotion."
              </p>
            </div>

            {/* Core Leadership Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200/60">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">
                    Scholarly Accountability
                  </h4>
                  <p className="text-slate-500 text-xs font-medium">
                    Personally verifying every spiritual lecture plan and
                    on-ground guide.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">
                    Zero Hidden Fee Vow
                  </h4>
                  <p className="text-slate-500 text-xs font-medium">
                    Enforcing transparent pricing spreadsheets with absolute
                    zero shifts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCeo;
