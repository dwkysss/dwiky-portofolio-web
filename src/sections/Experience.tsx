// src/sections/Experience.tsx

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface ExperienceProps {
  data: ExperienceItem[];
}

const Experience = ({ data }: ExperienceProps) => {
  return (
    <div className="space-y-32">
      {/* RESEARCH SECTION */}
      <section id="research" className="scroll-mt-32 reveal-on-scroll">
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-4 group cursor-default">
          <span className="h-px w-12 bg-orange-500 group-hover:w-24 transition-all duration-500"></span>{" "}
          Research
        </h2>
        <div className="group bg-gray-950/80 backdrop-blur-sm p-12 rounded-[3.5rem] border border-gray-900 hover:border-orange-500/20 hover:-translate-y-2 transition-all duration-700 shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="flex-1">
              <span className="px-5 py-2 rounded-full text-[10px] font-black bg-orange-500/10 text-orange-400 border border-orange-500/10 uppercase tracking-[0.3em]">
                IEEE ICAICTA 2025
              </span>
              <h3 className="text-4xl font-black text-white mt-10 mb-8 leading-tight group-hover:text-orange-100 transition-colors">
                Signal Classification using Hybrid CNN-Transformer Architectures
              </h3>
              <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mb-12 group-hover:text-gray-400 transition-colors">
                Research on biological signal classification using hybrid deep
                learning models for maximum accuracy.
              </p>
              <a
                href="https://ieeexplore.ieee.org/document/11335101"
                className="px-10 py-5 bg-orange-500/5 border border-orange-500/20 rounded-full text-orange-400 text-sm font-black inline-flex items-center gap-4 transition-all hover:gap-6 hover:bg-orange-500/10 shadow-lg"
              >
                View Publication <span>→</span>
              </a>
            </div>
            <div className="hidden lg:flex w-56 h-56 bg-white/[0.02] rounded-[3rem] items-center justify-center border border-white/5 rotate-3 group-hover:rotate-0 transition-all duration-700">
              <span className="text-6xl font-black text-white/5">IEEE</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pb-20">
        <section className="reveal-on-scroll">
          <h2 className="text-2xl font-bold mb-16 flex items-center gap-4 group cursor-default">
            <span className="h-px w-12 bg-emerald-500 group-hover:w-24 transition-all duration-500"></span>{" "}
            Experience
          </h2>
          <div className="space-y-16">
            {data.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-12 border-l-2 border-gray-900 group"
              >
                <div className="absolute w-5 h-5 bg-gray-900 border-2 border-gray-700 rounded-full -left-[11px] top-1 group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-all duration-500 shadow-2xl"></div>
                <div className="group-hover:translate-x-4 transition-transform duration-500">
                  <h3 className="text-2xl font-black text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-emerald-500 font-bold text-lg mb-4">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                    {exp.startDate} — {exp.endDate}
                  </p>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal-on-scroll">
          <h2 className="text-2xl font-bold mb-16 flex items-center gap-4 group cursor-default">
            <span className="h-px w-12 bg-yellow-500 group-hover:w-24 transition-all duration-500"></span>{" "}
            Education
          </h2>
          <div className="bg-gray-950/80 backdrop-blur-sm p-14 rounded-[3rem] border border-gray-900 hover:border-yellow-500/20 hover:scale-[1.01] transition-all duration-700 shadow-2xl">
            <h3 className="text-3xl font-black text-white mb-4 leading-tight">
              Universitas Jenderal Achmad Yani
            </h3>
            <p className="text-yellow-500 font-black text-xl mb-10 tracking-tight">
              Bachelor of Informatics
            </p>
            <ul className="space-y-8 text-gray-500 text-lg">
              <li className="flex gap-5 hover:translate-x-2 transition-transform duration-300">
                <span className="text-yellow-500 font-black">/</span> Artificial
                Intelligence & Game (AIG)
              </li>
              <li className="flex gap-5 hover:translate-x-2 transition-transform duration-300">
                <span className="text-yellow-500 font-black">/</span> Bangkit
                Academy 2025 (Distinction)
              </li>
              <li className="flex gap-5 hover:translate-x-2 transition-transform duration-300">
                <span className="text-yellow-500 font-black">/</span> Head of
                Sport Saintech Championship '26
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
