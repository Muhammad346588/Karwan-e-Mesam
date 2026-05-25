import MainLayout from "../layouts/MainLayout";

import HeroSection from "../components/sections/HeroSection";
import PackagesSection from "../components/sections/PackageSection";
import DestinationsSection from "../components/sections/DestinationSection";
import Counter from "../components/sections/Counter";
import ContactSection from "../components/sections/ContactSection";

function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <PackagesSection />
      <DestinationsSection />
      <Counter />
      <ContactSection />
    </MainLayout>
  );
}

export default Home;
