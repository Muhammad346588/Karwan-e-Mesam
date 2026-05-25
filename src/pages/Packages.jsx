import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import Packagehero from "../components/sections/Packagehero";
import PackageFilter from "../components/sections/PackageFilter";
import PackagesCard from "../components/sections/PackagesCard";
import ValuePackage from "../components/sections/ValuePackage";
import PackageFAQ from "../components/sections/PackageFAQ";
import Footer from "../components/shared/Footer";

const Packages = () => {
  // Global state jo filter aur cards ko aapas mein connect karegi
  // Default value "all" hogi
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-emerald-500 selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      <main className="overflow-hidden">
        <Packagehero />

        <PackageFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <PackagesCard activeCategory={activeCategory} />

        <ValuePackage />

        <PackageFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Packages;
