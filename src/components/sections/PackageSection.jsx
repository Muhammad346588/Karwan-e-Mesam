import { Button } from "../ui/button";

import {
  MessageCircle,
  Plane,
  Hotel,
  Bus,
  ShieldCheck,
  Utensils,
  BadgeCheck,
} from "lucide-react";

const PackagesSection = () => {
  const number = "923016143561";

  const openWhatsApp = (packageName, price) => {
    const message = `

🕋 Booking Inquiry



📦 Package: ${packageName}

💰 Price: ${price}



Please provide full details.

    `;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const packages = [
    {
      title: "Package 1",

      subtitle: "Most Booked",

      price: "$1300",

      ground: "$550",

      color: "from-emerald-600 to-teal-500",

      border: "border-emerald-200",
    },

    {
      title: "Package 2",

      subtitle: "Premium Choice",

      price: "$1500",

      ground: "$750",

      color: "from-blue-600 to-cyan-500",

      border: "border-blue-200",
    },

    {
      title: "Package 3",

      subtitle: "VIP Luxury",

      price: "$1700",

      ground: "$850",

      color: "from-purple-600 to-pink-500",

      border: "border-purple-200",
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full"></div>

      {/* HEADER */}

      <div className="container-custom relative z-10 text-center mb-16">
        <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
          🔥 Arbaeen Special 2026
        </span>

        <h2 className="mt-5 text-4xl md:text-6xl font-bold heading-font text-slate-900 leading-tight">
          Premium Iraq Ziyarat Packages
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Departure: <span className="font-bold text-emerald-600">Coming Soon (Announcing Shortly)</span>
          Limited seats available for Arbaeen 2026 Group. Experience a peaceful
          spiritual journey with complete comfort, guidance & premium services.
        </p>
      </div>

      {/* CARDS */}

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {packages.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-[32px] border ${item.border} bg-white shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-500`}
          >
            {/* TOP GRADIENT */}

            <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

            {/* BADGE */}

            <div className="absolute top-5 right-5">
              <span className="bg-slate-900 text-white text-xs px-3 py-1 rounded-full">
                {item.subtitle}
              </span>
            </div>

            {/* CONTENT */}

            <div className="p-7">
              {/* TITLE */}

              <h3 className="text-3xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-slate-500 mt-2">
                12–14 Days Spiritual Journey
              </p>

              {/* PRICE */}

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-black text-slate-900">
                  {item.price}
                </span>

                <span className="text-slate-500 mb-1">Full Package</span>
              </div>

              <div className="mt-2 inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl">
                <span className="text-sm text-slate-600">Ground Package:</span>

                <span className="font-bold text-slate-900">{item.ground}</span>
              </div>

              {/* FEATURES */}

              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-2 rounded-xl">
                    <Plane className="w-4 h-4 text-emerald-700" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Visa & Air Ticket
                    </h4>

                    <p className="text-sm text-slate-500">
                      Complete visa processing with flight arrangements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Hotel className="w-4 h-4 text-blue-700" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Hotel Accommodation
                    </h4>

                    <p className="text-sm text-slate-500">
                      Comfortable hotel stay during entire ziyarat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-xl">
                    <Utensils className="w-4 h-4 text-orange-700" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800">
                      3 Time Meals
                    </h4>

                    <p className="text-sm text-slate-500">
                      Fresh breakfast, lunch & dinner included.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-xl">
                    <Bus className="w-4 h-4 text-purple-700" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Full Transport
                    </h4>

                    <p className="text-sm text-slate-500">
                      Guided transport for all ziyarat locations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-red-700" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Professional Guidance
                    </h4>

                    <p className="text-sm text-slate-500">
                      Experienced group leaders & support team.
                    </p>
                  </div>
                </div>
              </div>

              {/* FOOTER */}

              <div className="mt-8">
                <div className="flex items-center gap-2 text-sm text-emerald-700 font-medium mb-4">
                  <BadgeCheck className="w-4 h-4" />
                  Limited Ashura Seats Available
                </div>

                <Button
                  onClick={() =>
                    openWhatsApp(
                      `${item.title} - Ashura Package`,

                      `${item.price} / ${item.ground}`,
                    )
                  }
                  className={`w-full h-14 rounded-2xl text-white text-base font-semibold bg-gradient-to-r ${item.color} hover:scale-[1.02] transition-all duration-300 shadow-lg flex items-center justify-center gap-3`}
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Your Seat Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;
