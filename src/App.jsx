import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

import { Toaster } from "sonner";

function App() {
  return (
    <>
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* GLOBAL TOASTER (POPUP SYSTEM) */}
      <Toaster position="top-center" richColors />
    </>
  );
}

export default App;
