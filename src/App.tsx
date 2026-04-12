import { useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";

// Import Components
import Snowfall from "./components/Snowfall";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Sections
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";

// Import Data
import {
  projectsData,
  techStackData,
  experiencesData,
} from "./data/portfolioData";

function App() {
  // Logic untuk Scroll Parallax
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -100]);

  // Logic untuk merubah style Nav saat scroll
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgba(10,10,10,0.8)"],
  );
  const navPadding = useTransform(scrollY, [0, 100], ["24px", "12px"]);
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"],
  );

  useEffect(() => {
    document.title = "Dwiky Sumarlin | Informatics Graduate & AI Researcher";

    // Logic deteksi scroll (Intersection Observer)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(".reveal-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      <Snowfall />

      <Navbar
        navBg={navBg}
        navPadding={navPadding}
        navWidth={navWidth}
        navBorder={navBorder}
      />

      <Hero heroOpacity={heroOpacity} heroY={heroY} />

      <main className="max-w-6xl mx-auto px-8 py-20 space-y-32 relative z-10">
        <TechStack data={techStackData} />
        <Services />
        <Projects data={projectsData} />
        <Experience data={experiencesData} />
      </main>

      <Footer />

      {/* Global CSS tetap di sini untuk handling animasinya bray */}
      <style>{`
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(40px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes snow {
          0% { transform: translateY(-10vh) translateX(0); }
          25% { transform: translateY(20vh) translateX(15px); }
          50% { transform: translateY(50vh) translateX(-15px); }
          75% { transform: translateY(80vh) translateX(15px); }
          100% { transform: translateY(110vh) translateX(0); }
        }
        html { scroll-behavior: smooth; }
        .animate-reveal { animation: revealUp 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) forwards; }
        .animate-snow { animation: snow linear infinite; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-3 { animation-delay: 0.5s; }
        .tooltip-container:hover .tooltip-text { visibility: visible; opacity: 1; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        .reveal-on-scroll { 
          opacity: 0; 
          transform: translateY(30px); 
          filter: blur(10px); 
          transition: all 1s cubic-bezier(0.2, 0.6, 0.2, 1); 
        }
        .reveal-visible { opacity: 1; transform: translateY(0); filter: blur(0); }
      `}</style>
    </div>
  );
}

export default App;
