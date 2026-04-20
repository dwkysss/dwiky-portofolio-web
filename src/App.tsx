import { useEffect, useState } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Logic Toggle Mode & Inject CSS Variables (Tailwind v4 & Framer Motion Sync)
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      // Warna target Navbar saat Dark Mode
      root.style.setProperty("--nav-bg-target", "rgba(10,10,10,0.8)");
      root.style.setProperty("--nav-border-target", "rgba(255,255,255,0.1)");
    } else {
      root.classList.remove("dark");
      // Warna target Navbar saat Light Mode
      root.style.setProperty("--nav-bg-target", "rgba(255,255,255,0.8)");
      root.style.setProperty("--nav-border-target", "rgba(0,0,0,0.1)");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Logic Scroll Parallax
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -100]);

  // Framer Motion Nav Logic
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "var(--nav-bg-target)"],
  );

  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "var(--nav-border-target)"],
  );

  // Perkecil padding awal biar ga nutupin tulisan "Available for work" di Hero
  const navPadding = useTransform(scrollY, [0, 100], ["12px", "10px"]);
  const navWidth = useTransform(scrollY, [0, 100], ["95%", "90%"]);

  useEffect(() => {
    document.title = "Dwiky Sumarlin | Informatics Graduate & AI Researcher";

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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-blue-500/30 overflow-x-hidden relative transition-colors duration-500">
      {/* Snowfall dipanggil tanpa kondisi agar bisa switch ke Bubbles secara smooth */}
      <Snowfall isDarkMode={isDarkMode} />

      <Navbar
        navBg={navBg}
        navPadding={navPadding}
        navWidth={navWidth}
        navBorder={navBorder}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <Hero heroOpacity={heroOpacity} heroY={heroY} />

      <main className="max-w-6xl mx-auto px-8 py-20 space-y-32 relative z-10">
        <TechStack data={techStackData} />
        <Services />
        <Projects data={projectsData} />
        <Experience data={experiencesData} />
      </main>

      <Footer />

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
        @keyframes float-up {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 0.5; }
          50% { transform: translateY(-50vh) translateX(20px); }
          80% { opacity: 0.5; }
          100% { transform: translateY(-110vh) translateX(-20px); opacity: 0; }
        }
        html { scroll-behavior: smooth; }
        .animate-reveal { animation: revealUp 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) forwards; }
        .animate-snow { animation: snow linear infinite; }
        .animate-float-up { animation: float-up linear infinite; }
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
