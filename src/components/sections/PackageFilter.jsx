import { CalendarDays, Compass, Landmark, Map } from "lucide-react";

const PackageFilter = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: "all", name: "All Packages", icon: CalendarDays },
    { id: "saudi", name: "Saudi Arabia (Umrah)", icon: Compass },
    { id: "iraq-iran", name: "Iraq & Iran Ziyarat", icon: Landmark },
    { id: "mix", name: "Iran & Iraq (Mix Tour)", icon: Map },
  ];

  return (
    <section className="bg-slate-50 py-8 border-b border-slate-200/60 sticky top-[72px] z-30 backdrop-blur-md bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center sm:hidden">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Filter By Destination
            </p>
          </div>

          {/* Premium Pill Tabs Container with Inline Scrollbar Hiding Style */}
          <div
            className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl w-full max-w-3xl overflow-x-auto scroll-smooth shadow-sm border border-slate-200/50"
            style={{
              scrollbarWidth: "none" /* Firefox ke liye */,
              msOverflowStyle: "none" /* IE aur Edge ke liye */,
            }}
          >
            {/* Chrome, Safari aur Opera ke liye pseudo-element injection style block */}
            <style>{`
              div::-webkit-scrollbar {
                display: none;                 /* Webkit browsers ke liye absolute hide */
              }
            `}</style>

            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition-all duration-300 shrink-0 ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 translate-y-[-1px]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  <IconComponent
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? "scale-110 text-white" : "text-slate-400"
                    }`}
                  />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageFilter;
