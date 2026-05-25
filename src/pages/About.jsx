import Navbar from "../components/shared/Navbar";
import AboutHero from "../components/sections/AboutHero";
import AboutVision from "../components/sections/AboutVision";
import AboutTimeline from "../components/sections/AboutTimeline";
import AboutCeo from "../components/sections/AboutCeo";
import Footer from "../components/shared/Footer";

const AboutPage = () => {
  return (
    <main className="bg-white min-h-screen overflow-hidden">
      <Navbar />

      <AboutHero />

      <AboutVision />

      <AboutTimeline />

      <AboutCeo />

      <Footer />
    </main>
  );
};

export default AboutPage;
