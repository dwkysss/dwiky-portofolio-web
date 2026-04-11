import { useState } from "react"; // useEffect dihapus karena nggak dipake

function App() {
  const [projects] = useState([
    {
      id: 1,
      title: "Biometric Facial Recognition Attendance",
      description:
        "Sistem presensi otomatis menggunakan OpenCV dan ArcFace yang dideploy di Diskominfo Kabupaten Bandung.",
      techStack: ["Python", "Flask", "OpenCV", "PostgreSQL"],
      category: "Computer Vision",
    },
    {
      id: 2,
      title: "Hybrid CNN-Transformer Signal Classification",
      description:
        "Riset klasifikasi sinyal biologis menggunakan arsitektur deep learning hybrid untuk akurasi tinggi.",
      techStack: ["Python", "TensorFlow", "PyTorch"],
      category: "Data Science",
    },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      title: "Staff Strategic Research and Advocacy (KASTRAD)",
      company: "BEM KMF MIPA UNJANI",
      description:
        "Bertanggung jawab dalam riset strategis dan advokasi kebijakan fakultas berdasarkan data aspirasi mahasiswa.",
      startDate: "Juni 2025",
      endDate: "Januari 2026",
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Diskominfo Kabupaten Bandung",
      description:
        "Mengembangkan sistem absensi berbasis wajah (Face Recognition) menggunakan library OpenCV.",
      startDate: "Oktober 2025",
      endDate: "Desember 2025",
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-gray-100 p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          DWIKY SUMARLIN
        </h1>
        <p className="text-gray-500 text-lg mt-2 font-medium">
          Informatics Graduate | Aspiring Data Scientist
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/dwiky-sumarlin/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm hover:border-blue-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dwkysss"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm hover:border-emerald-500 transition"
          >
            GitHub
          </a>
          <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-bold hover:bg-blue-500 transition">
            Download CV
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-24">
        {/* SECTION SKILLS */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="h-px w-12 bg-purple-500"></span> Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-gray-800 bg-gray-900/30">
              <h3 className="text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                Python • Java • TypeScript • SQL
              </div>
            </div>
            <div className="p-4 rounded-xl border border-gray-800 bg-gray-900/30">
              <h3 className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                React • Tailwind • Next.js
              </div>
            </div>
            <div className="p-4 rounded-xl border border-gray-800 bg-gray-900/30">
              <h3 className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                Spring Boot • Node.js • Flask
              </div>
            </div>
            <div className="p-4 rounded-xl border border-gray-800 bg-gray-900/30">
              <h3 className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                AI & Tools
              </h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                OpenCV • TensorFlow • Docker
              </div>
            </div>
          </div>
        </section>

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

        {/* SECTION RESEARCH */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="h-px w-12 bg-orange-500"></span> Research
          </h2>
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-orange-500/20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex-1">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase">
                  IEEE Xplore Indexed
                </span>
                <h3 className="text-2xl font-bold text-white mt-4">
                  Signal Classification using Hybrid CNN-Transformer
                  Architectures
                </h3>
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  Mempresentasikan riset di konferensi ICAICTA 2025 mengenai
                  klasifikasi sinyal biologis kompleks bekerjasama dengan tim
                  peneliti UNJANI.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-orange-400 font-bold hover:underline text-sm"
                  >
                    Read Publication
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex w-32 h-32 bg-orange-500/10 rounded-2xl border border-orange-500/20 items-center justify-center">
                <span className="text-3xl font-black text-orange-500 opacity-40">
                  IEEE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION EXPERIENCE */}
        <section className="pb-20">
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
                  <span className="text-gray-500 text-[10px] mt-1 md:mt-0 bg-gray-900 px-2 py-1 rounded border border-gray-800">
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
