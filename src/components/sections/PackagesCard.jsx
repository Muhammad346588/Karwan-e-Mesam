import {
  Plane,
  Hotel,
  Bus,
  FileText,
  Utensils,
  UserCheck,
  Calendar,
  ArrowRight,
} from "lucide-react";

const PackagesCard = ({ activeCategory }) => {
  // Absolute Real-World Data Provided By You
  const packagesData = [
    {
      id: 1,
      title: "Arbaeen 2026 Gold Package (Iraq Only)",
      category: "iraq-iran",
      duration: "15 Days",
      price: "$1,300",
      hasGroundOption: true,
      groundPrice: "$550",
      lastBookingDate: "August 15, 2026",
      badge: "Arbaeen 2026",
      stayDetail1: "Najaf Near Holy Shrine",
      stayDetail2: "Karbala Holy Walking Distance",
      features: [
        "Complete Air Travel (By Air)",
        "Luxury Hotel Accommodations",
        "3-Time Catering Meals",
        "Expert Arbaeen Guide",
        "Visa Processing Services",
        "Full Local Transport Support",
      ],
    },
    {
      id: 2,
      title: "Arbaeen 2026 Grand Ziyarat (Iran + Iraq)",
      category: "mix",
      duration: "22 Days",
      price: "$1,500",
      hasGroundOption: true,
      groundPrice: "$750",
      lastBookingDate: "August 15, 2026",
      badge: "Grand Ziyarat",
      stayDetail1: "Mashhad & Qom Luxury Stay",
      stayDetail2: "Karbala & Najaf Premium",
      features: [
        "Complete Air Travel (By Air)",
        "Luxury Hotel Accommodations",
        "3-Time Catering Meals",
        "Professional Arbaeen Guide",
        "Visa Processing Services",
        "Cross-Border Secure Transport",
      ],
    },
    {
      id: 3,
      title: "Premium Executive Umrah Package",
      category: "saudi",
      duration: "15 Days",
      price: "PKR 325,000",
      hasGroundOption: false,
      lastBookingDate: "Open Booking",
      badge: "Comfort Tier",
      stayDetail1: "Makkah 4★ Close Proximity",
      stayDetail2: "Madinah Markazia Walking",
      features: [
        "By Air Return Tickets",
        "Premium Star Accommodations",
        "Breakfast Included Layout",
        "Complete Umrah Visa Support",
        "Luxury AC Bus Transport",
        "Ziyarat of Holy Places Included",
      ],
    },
  ];

  // JavaScript Live Filtering Engine
  const filteredPackages =
    activeCategory === "all"
      ? packagesData
      : packagesData.filter((pkg) => pkg.category === activeCategory);

  return (
    <section className="bg-slate-50 py-16 min-h-[550px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPackages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/60 shadow-sm max-w-xl mx-auto">
            <p className="text-slate-400 font-bold text-lg">
              No packages active in this category right now.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Please select another tab or contact admin for custom quote.
            </p>
          </div>
        ) : (
          /* Main Multi-Column Responsive Layout Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Header Badge Section */}
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 pt-8 text-white">
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    {pkg.badge}
                  </div>

                  <div className="inline-block bg-white/10 backdrop-blur-sm text-emerald-300 font-bold text-xs px-2.5 py-1 rounded-md mb-3 border border-white/10">
                    {pkg.duration}
                  </div>

                  <h3 className="text-xl font-black tracking-tight leading-snug group-hover:text-emerald-400 transition-colors duration-300">
                    {pkg.title}
                  </h3>

                  {/* Last Booking Date Notification Strip */}
                  <div className="flex items-center gap-1.5 mt-4 text-xs font-medium text-amber-400/90 bg-white/[0.05] w-fit px-2.5 py-1 rounded-lg border border-white/[0.05]">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      Last Booking: <strong>{pkg.lastBookingDate}</strong>
                    </span>
                  </div>
                </div>

                {/* Core Inclusions / Amenities Icon Blocks */}
                <div className="p-6 flex-1 space-y-6 bg-white">
                  {/* Dynamic Grid Matrix For Facilities */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Plane className="w-4 h-4 text-emerald-600" />
                      <span className="text-[10px] font-bold text-slate-700">
                        By Air Journey
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Hotel className="w-4 h-4 text-emerald-600" />
                      <span className="text-[10px] font-bold text-slate-700">
                        Premium Stay
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Utensils className="w-4 h-4 text-emerald-600" />
                      <span className="text-[10px] font-bold text-slate-700">
                        3-Time Meals
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 mt-2">
                      <Bus className="w-4 h-4 text-emerald-600" />
                      <span className="text-[10px] font-bold text-slate-700">
                        Transport
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 mt-2">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      <span className="text-[10px] font-bold text-slate-700">
                        Visa Support
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 mt-2">
                      <UserCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-[10px] font-bold text-slate-700">
                        Ziyarat Guide
                      </span>
                    </div>
                  </div>

                  {/* Accommodations Mapping Layout */}
                  <div className="space-y-2 text-xs border-b border-slate-100 pb-4">
                    <div className="flex items-start gap-2">
                      <span className="font-extrabold text-slate-400 uppercase tracking-wider w-14 shrink-0">
                        Route 1:
                      </span>
                      <span className="text-slate-700 font-semibold">
                        {pkg.stayDetail1}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-extrabold text-slate-400 uppercase tracking-wider w-14 shrink-0">
                        Route 2:
                      </span>
                      <span className="text-slate-700 font-semibold">
                        {pkg.stayDetail2}
                      </span>
                    </div>
                  </div>

                  {/* Full List of Specific Features */}
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Package Includes:
                    </p>
                    <ul className="grid grid-cols-1 gap-2">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs font-bold text-slate-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing & Custom Call To Action Footer */}
                <div className="p-6 pt-0 bg-white border-t border-slate-50">
                  <div className="flex items-center justify-between pt-4">
                    {/* Multi-Currency Price Layout block */}
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Full Package
                      </p>
                      <p className="text-xl font-black text-slate-900 leading-none">
                        {pkg.price}
                      </p>
                      {pkg.hasGroundOption && (
                        <p className="text-[10px] text-emerald-600 font-extrabold mt-1">
                          Ground Tour: {pkg.groundPrice}
                        </p>
                      )}
                    </div>

                    {/* Dedicated WhatsApp Linking API with Pre-compiled Urgently Structured Text */}
                    <a
                      href={`https://wa.me/923001234567?text=Assalam-o-Alaikum! I am highly interested in booking your "${pkg.title}" package with Last Date ${pkg.lastBookingDate}. Please provide full confirmation roadmap and available seat configurations.`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-emerald-600 text-white font-bold text-xs px-4 py-3 rounded-xl shadow-md shadow-emerald-600/10 hover:bg-slate-900 hover:shadow-none transition-all duration-300 group/btn"
                    >
                      Book Seats
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PackagesCard;
