// src/sections/Hero.tsx
import { motion, MotionValue } from "framer-motion";

interface HeroProps {
  heroOpacity: MotionValue<number>;
  heroY: MotionValue<number>;
}

const Hero = ({ heroOpacity, heroY }: HeroProps) => {
  return (
    <header className="relative w-full min-h-[100vh] flex flex-col justify-center max-w-6xl mx-auto px-8 pt-10 md:pt-14 transition-colors duration-500">
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative"
      >
        <span className="text-blue-600 dark:text-blue-500 font-bold text-xs uppercase tracking-[0.6em] mb-10 block animate-reveal delay-1">
          Available for Work
        </span>

        {/* text-gray-900 (Light) | dark:text-white (Dark) */}
        <h1 className="text-6xl md:text-[115px] font-black text-gray-900 dark:text-white leading-[0.85] tracking-tighter cursor-default -mt-4 md:-mt-8 transition-colors duration-500">
          <motion.span
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1, ease: [0.2, 0.6, 0.2, 1] }}
            className="inline-block py-1"
          >
            DESIGNING
          </motion.span>
          <br />
          {/* Warna INTELLIGENT disesuaikan biar gak tenggelam di light mode */}
          <span className="text-gray-400 dark:text-gray-800 hover:text-blue-600 dark:hover:text-gray-700 transition-colors duration-700 inline-block py-1">
            INTELLIGENT
          </span>
          <br />
          <motion.span
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.6, 0.2, 1] }}
            className="inline-block py-1"
          >
            SOLUTIONS.
          </motion.span>
        </h1>

        <div className="mt-14 flex flex-col md:flex-row md:items-end justify-between gap-16 animate-reveal delay-3">
          {/* Deskripsi text-gray-600 (Light) | dark:text-gray-500 (Dark) */}
          <p className="max-w-2xl text-gray-600 dark:text-gray-500 text-xl leading-relaxed font-light transition-colors">
            Dwiky Sumarlin — Informatics Graduate focusing on{" "}
            <span className="text-gray-900 dark:text-gray-200 font-semibold underline decoration-blue-500 underline-offset-4 whitespace-nowrap">
              Data Science
            </span>{" "}
            ,{" "}
            <span className="text-gray-900 dark:text-gray-200 font-semibold underline decoration-blue-500 underline-offset-4 whitespace-nowrap">
              Machine Learning
            </span>{" "}
            , and{" "}
            <span className="text-gray-900 dark:text-gray-200 font-semibold underline decoration-cyan-500 underline-offset-4 whitespace-nowrap">
              FullStack Development
            </span>
            .
          </p>

          <div className="flex gap-8 items-center shrink-0">
            {/* GitHub Button: border-gray-300 (Light) | dark:border-gray-800 (Dark) */}
            <a
              href="https://github.com/dwkysss"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center border border-gray-300 dark:border-gray-800 rounded-full hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:rotate-[360deg] transition-all duration-700 shadow-xl dark:shadow-2xl text-gray-900 dark:text-white"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              href="https://wa.me/6283816377730?text=Halo%20Dwiky,%20saya%20tertarik%20bekerja%20sama%20dengan%20anda!"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Button: bg-gray-900 (Light) | dark:bg-white (Dark) */}
              <button className="px-14 py-6 bg-gray-900 dark:bg-white text-white dark:text-black font-black rounded-full hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg dark:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                Let's Talk
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;