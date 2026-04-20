// src/sections/TechStack.tsx
import React from "react";

interface TechItem {
  name: string;
  icon: string | React.ReactNode;
}

interface TechStackProps {
  data: Record<string, TechItem[]>;
}

const TechStack = ({ data }: TechStackProps) => {
  return (
    <section id="stack" className="reveal-on-scroll scroll-mt-32 transition-colors duration-500">
      {/* Heading adaptif: text-gray-900 (Light) | dark:text-white (Dark) */}
      <h2 className="text-2xl font-bold mb-12 flex items-center gap-4 group cursor-default text-gray-900 dark:text-white">
        <span className="h-px w-12 bg-purple-500 group-hover:w-24 transition-all duration-500"></span>{" "}
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(data).map(([category, items], i) => (
          <div
            key={category}
            /* KARTU: 
               Light: bg-gray-50, border-gray-200
               Dark: dark:bg-gray-950/80, dark:border-gray-900
            */
            className="p-10 rounded-[2rem] border border-gray-200 dark:border-gray-900 bg-gray-50 dark:bg-gray-950/80 backdrop-blur-sm hover:border-purple-500 dark:hover:border-gray-700 hover:-translate-y-3 transition-all duration-500 group/card shadow-lg dark:shadow-xl"
          >
            <h3
              className={`text-[10px] font-black uppercase tracking-[0.2em] mb-10 ${
                i === 0
                  ? "text-purple-600 dark:text-purple-400"
                  : i === 1
                    ? "text-blue-600 dark:text-blue-400"
                    : i === 2
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-orange-600 dark:text-orange-400"
              }`}
            >
              {category}
            </h3>

            <div className="flex flex-wrap gap-8">
              {items.map((tech) => (
                <div
                  key={tech.name}
                  className="tooltip-container relative group/icon"
                >
                  {/* Icon opacity lebih tinggi dikit di light mode biar kelihatan bray */}
                  <div className="h-8 w-auto grayscale opacity-60 dark:opacity-40 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 group-hover/icon:scale-125 group-hover/icon:rotate-6 transition-all duration-300 flex items-center justify-center">
                    {typeof tech.icon === "string" ? (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className={`h-full w-auto object-contain transition-all duration-300 
                          grayscale opacity-60 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 
                          /* INI KUNCINYA BRAY: */
                          dark:invert-0 invert`} 
                      />
                    ) : (
                      <div className="h-full w-auto flex items-center justify-center text-gray-900 dark:text-white">
                        {tech.icon}
                      </div>
                    )}
                  </div>

                  {/* TOOLTIP: bg-black text-white (tetap konsisten biar kebaca di kedua mode) */}
                  <span className="tooltip-text invisible opacity-0 absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-800 text-white text-[10px] font-bold rounded-md border border-gray-800 shadow-2xl transition-all whitespace-nowrap z-50">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;