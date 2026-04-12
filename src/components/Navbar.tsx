// src/components/Navbar.tsx
import { motion, MotionValue } from "framer-motion";

interface NavbarProps {
  navBg: MotionValue<string>;
  navPadding: MotionValue<string>;
  navWidth: MotionValue<string>;
  navBorder: MotionValue<string>;
}

const Navbar = ({ navBg, navPadding, navWidth, navBorder }: NavbarProps) => {
  return (
    <motion.nav
      style={{
        backgroundColor: navBg,
        paddingTop: navPadding,
        paddingBottom: navPadding,
        width: navWidth,
        borderColor: navBorder,
      }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] border backdrop-blur-md rounded-full px-12 transition-all duration-500 hidden md:flex items-center justify-between"
    >
      {/* SISI KIRI: Brand Logo */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-3 group cursor-pointer"
      >
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
          <span className="text-white font-black text-xs">DS</span>
        </div>
        <span className="text-white font-black tracking-tighter text-xl">
          Dwiky.
        </span>
      </div>

      {/* SISI KANAN: Nav Links */}
      <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
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
            document
              .querySelector("#stack")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-white transition-colors"
        >
          Stack
        </a>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#services")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-white transition-colors"
        >
          Services
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-white transition-colors"
        >
          Projects
        </a>
        <a
          href="#research"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#research")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-white transition-colors"
        >
          Research
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
