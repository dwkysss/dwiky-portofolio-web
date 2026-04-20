// src/components/Navbar.tsx
import { motion, MotionValue } from "framer-motion";
import { useState } from "react";

interface NavbarProps {
  navBg: MotionValue<string>;
  navPadding: MotionValue<string>;
  navWidth: MotionValue<string>;
  navBorder: MotionValue<string>;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar = ({
  navBg,
  navPadding,
  navWidth,
  navBorder,
  toggleDarkMode,
  isDarkMode,
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      style={{
        backgroundColor: navBg,
        paddingTop: navPadding,
        paddingBottom: navPadding,
        width: navWidth,
        borderColor: navBorder,
      }}
      /* PENTING: 
         - Hapus 'hidden' agar muncul di HP.
         - 'flex-col' di HP agar menu link bisa turun ke bawah (dropdown).
      */
      className="fixed top-2 md:top-4 left-1/2 -translate-x-1/2 z-[100] border border-gray-200 dark:border-gray-800 backdrop-blur-md rounded-[2.5rem] md:rounded-full px-6 md:px-12 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between overflow-hidden"
    >
      {/* BARIS UTAMA: Logo di Kiri, Nav Controls (Toggle & Burger) di Kanan */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700 shrink-0">
            <span className="text-white font-black text-xs">DS</span>
          </div>
          <span className="text-gray-900 dark:text-white font-black tracking-tighter text-xl">
            Dwiky.
          </span>
        </div>

        {/* CONTROLS (Mobile Only) */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Tombol Siang/Malam Berseberangan dengan Logo bray */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleDarkMode();
            }}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all active:scale-90"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          {/* Tombol Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 flex flex-col gap-1.5"
          >
            <span
              className={`h-0.5 w-6 bg-gray-900 dark:bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-gray-900 dark:bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-gray-900 dark:bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* NAV LINKS: Muncul di bawah logo/nama pas burger diklik (Mobile Dropdown) */}
      <div
        className={`${
          isOpen
            ? "max-h-[400px] opacity-100 mt-8 pb-4"
            : "max-h-0 opacity-0 md:opacity-100 md:max-h-none"
        } md:flex items-center gap-10 transition-all duration-500 ease-in-out w-full md:w-auto overflow-hidden md:overflow-visible`}
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-blue-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#stack"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              document
                .querySelector("#stack")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Stack
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#research"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              document
                .querySelector("#research")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Research
          </a>
        </div>

        {/* Tombol Toggle Desktop (Sembunyi di HP karena sudah ada di Baris Utama) */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:flex p-2 ml-4 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-transparent transition-all hover:scale-110 active:scale-90"
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
