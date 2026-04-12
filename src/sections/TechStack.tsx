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
    <section id="stack" className="reveal-on-scroll scroll-mt-32">
      <h2 className="text-2xl font-bold mb-12 flex items-center gap-4 group cursor-default">
        <span className="h-px w-12 bg-purple-500 group-hover:w-24 transition-all duration-500"></span>{" "}
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(data).map(([category, items], i) => (
          <div
            key={category}
            className="p-10 rounded-[2rem] border border-gray-900 bg-gray-950/80 backdrop-blur-sm hover:border-gray-700 hover:-translate-y-3 transition-all duration-500 group/card shadow-xl"
          >
            <h3
              className={`text-[10px] font-black uppercase tracking-[0.2em] mb-10 ${
                i === 0
                  ? "text-purple-400"
                  : i === 1
                    ? "text-blue-400"
                    : i === 2
                      ? "text-emerald-400"
                      : "text-orange-400"
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
                  <div className="h-8 w-auto grayscale opacity-40 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 group-hover/icon:scale-125 group-hover/icon:rotate-6 transition-all duration-300 flex items-center justify-center">
                    {typeof tech.icon === "string" ? (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-full w-auto object-contain"
                      />
                    ) : (
                      <div className="h-full w-auto flex items-center justify-center">
                        {tech.icon}
                      </div>
                    )}
                  </div>

                  <span className="tooltip-text invisible opacity-0 absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-[10px] font-bold rounded-md border border-gray-800 shadow-2xl transition-all whitespace-nowrap z-50">
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
