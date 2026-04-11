import { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]); // 1. State buat experience

  useEffect(() => {
    // Ambil Projects
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));

    // 2. Ambil Experiences
    fetch("http://localhost:3000/experiences")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          DWIKY SUMARLIN
        </h1>
        <p className="text-gray-500 text-lg mt-2 font-medium">
          Informatics Graduate | Aspiring Data Scientist
        </p>

        {/* Tambahkan Baris Sosmed Ini */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/dwiky-sumarlin/"
            target="_blank"
            className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm hover:border-blue-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dwkysss"
            target="_blank"
            className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm hover:border-emerald-500 transition"
          >
            GitHub
          </a>
          <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-bold hover:bg-blue-500 transition">
            Download CV
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-20">
        {/* SECTION PROJECTS */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="h-px w-12 bg-blue-500"></span> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p: any) => (
              <div
                key={p.id}
                className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:bg-gray-800 transition"
              >
                <h3 className="text-xl font-bold text-blue-400">{p.title}</h3>
                <p className="text-gray-400 my-3 text-sm">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.techStack?.map((t: string) => (
                    <span
                      key={t}
                      className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION EXPERIENCE (BARU!) */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="h-px w-12 bg-emerald-500"></span> Experiences
          </h2>
          <div className="space-y-6">
            {experiences.map((exp: any) => (
              <div
                key={exp.id}
                className="relative pl-8 border-l border-gray-800 group"
              >
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition">
                      {exp.title}
                    </h3>
                    <p className="text-emerald-500/80 font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-500 text-xs mt-1 md:mt-0 bg-gray-900 px-2 py-1 rounded border border-gray-800">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
