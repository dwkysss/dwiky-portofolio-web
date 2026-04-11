import { useState } from "react";

function App() {
  const [projects] = useState([
    {
      id: 1,
      title: "Biometric Facial Recognition Attendance",
      description:
        "Sistem presensi otomatis menggunakan OpenCV dan ArcFace yang dideploy di Diskominfo Kabupaten Bandung.",
      category: "Computer Vision",
      techStackLogos: [
        { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "Flask", url: "https://cdn.simpleicons.org/flask/white" },
        { name: "OpenCV", url: "https://cdn.simpleicons.org/opencv/white" },
        {
          name: "PostgreSQL",
          url: "https://cdn.simpleicons.org/postgresql/white",
        },
      ],
    },
    {
      id: 2,
      title: "Hybrid CNN-Transformer Signal Classification",
      description:
        "Riset klasifikasi sinyal biologis menggunakan arsitektur deep learning hybrid untuk akurasi tinggi.",
      category: "Data Science",
      techStackLogos: [
        { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
        {
          name: "TensorFlow",
          url: "https://cdn.simpleicons.org/tensorflow/white",
        },
        { name: "PyTorch", url: "https://cdn.simpleicons.org/pytorch/white" },
      ],
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
    <div className="min-h-screen bg-black text-gray-100 p-8 font-sans selection:bg-blue-500/30">
      {/* HEADER SECTION */}
      <header className="max-w-6xl mx-auto mb-16 animate-in fade-in slide-in-from-top-4 duration-1000">
        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent tracking-tighter">
          DWIKY SUMARLIN
        </h1>
        <p className="text-gray-500 text-lg md:text-xl mt-4 font-medium uppercase tracking-widest">
          Informatics Graduate | Aspiring Data Scientist
        </p>

        {/* QUICK STATS */}
        <div className="flex gap-8 mt-10 py-6 border-y border-gray-900 w-fit">
          <div>
            <p className="text-white font-bold text-2xl">1</p>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
              IEEE Paper
            </p>
          </div>
          <div className="border-x border-gray-800 px-8">
            <p className="text-white font-bold text-2xl">5+</p>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
              AI Projects
            </p>
          </div>
          <div>
            <p className="text-white font-bold text-2xl">Distinction</p>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
              Bangkit '25
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="https://www.linkedin.com/in/dwiky-sumarlin/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-2xl text-sm font-bold hover:border-blue-500 hover:bg-blue-500/5 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dwkysss"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-2xl text-sm font-bold hover:border-emerald-500 hover:bg-emerald-500/5 transition-all"
          >
            GitHub
          </a>
          <button className="px-6 py-3 bg-blue-600 rounded-2xl text-sm font-bold hover:bg-blue-500 transition-transform active:scale-95 shadow-lg shadow-blue-900/20">
            Download CV
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-32 animate-in fade-in duration-1000 delay-300">
        {/* SECTION SKILLS */}
        <section>
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-purple-500"></span> Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl border border-gray-800 bg-gray-900/20 hover:bg-gray-900/40 transition">
              <h3 className="text-purple-400 text-[10px] font-black uppercase tracking-widest mb-4">
                Languages
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Python, Java, TypeScript, SQL, HTML/CSS
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-gray-800 bg-gray-900/20 hover:bg-gray-900/40 transition">
              <h3 className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
                Frontend
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                React, Tailwind CSS, Next.js, Figma
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-gray-800 bg-gray-900/20 hover:bg-gray-900/40 transition">
              <h3 className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">
                Backend
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Spring Boot, Node.js, Express, Flask, Prisma
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-gray-800 bg-gray-900/20 hover:bg-gray-900/40 transition">
              <h3 className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-4">
                Data & Dev
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                OpenCV, TensorFlow, Docker, Git, PostgreSQL
              </p>
            </div>
          </div>
        </section>

        {/* SECTION PROJECTS */}
        <section>
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-blue-500"></span> Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p: any) => (
              <div
                key={p.id}
                className="group relative bg-gray-900/30 p-8 rounded-[2rem] border border-gray-800 hover:border-blue-500/40 transition-all duration-500 shadow-2xl"
              >
                <div className="absolute inset-0 bg-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] -z-10"></div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition mb-4">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  {p.techStackLogos?.map((tech: any) => (
                    <img
                      key={tech.name}
                      src={tech.url}
                      alt={tech.name}
                      title={tech.name}
                      className="h-5 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION RESEARCH (IEEE) */}
        <section>
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-orange-500"></span> Research
            Publication
          </h2>
          <div className="group bg-gradient-to-br from-gray-900 to-black p-10 rounded-[2.5rem] border border-orange-500/10 hover:border-orange-500/30 shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
              <div className="flex-1">
                <span className="px-4 py-1 rounded-full text-[10px] font-black bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-widest">
                  IEEE ICAICTA 2025
                </span>
                <h3 className="text-3xl font-bold text-white mt-6 tracking-tight group-hover:text-orange-100 transition">
                  Signal Classification using Hybrid CNN-Transformer
                  Architectures
                </h3>
                <p className="text-gray-400 mt-6 text-sm leading-relaxed max-w-2xl">
                  Riset yang memadukan keunggulan CNN untuk ekstraksi fitur
                  spasial dan Transformer untuk dependensi temporal sinyal
                  biologis. Dipublikasikan secara internasional.
                </p>
                <div className="mt-10 flex items-center gap-6">
                  <a
                    href="#"
                    className="px-8 py-3 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-2xl text-orange-400 text-sm font-bold transition flex items-center gap-3 w-fit"
                  >
                    View Publication
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex w-44 h-44 bg-white/5 rounded-3xl items-center justify-center border border-white/5 rotate-3 group-hover:rotate-0 transition-transform">
                <span className="text-5xl font-black text-white/10 group-hover:text-white/20 transition">
                  IEEE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION EDUCATION & EXPERIENCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pb-20">
          <section>
            <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-emerald-500"></span> Experience
            </h2>
            <div className="space-y-10">
              {experiences.map((exp: any) => (
                <div
                  key={exp.id}
                  className="relative pl-10 border-l-2 border-gray-900 group"
                >
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition">
                    {exp.title}
                  </h3>
                  <p className="text-emerald-500/80 text-sm font-bold mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-4 bg-gray-900 w-fit px-2 py-1 rounded">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-yellow-500"></span> Education
            </h2>
            <div className="bg-gray-900/30 p-10 rounded-[2.5rem] border border-gray-800 hover:border-yellow-500/20 transition-all shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                Universitas Jenderal Achmad Yani
              </h3>
              <p className="text-yellow-500 font-bold mb-1">
                Bachelor of Informatics
              </p>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 italic">
                Class of 2026
              </p>
              <ul className="text-gray-400 text-sm space-y-4 list-none">
                <li className="flex gap-3">
                  <span className="text-yellow-500">▹</span>
                  Fokus riset pada Computer Vision & Biometric Systems.
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500">▹</span>
                  Lulusan Distinction Bangkit Academy 2025 (Machine Learning).
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500">▹</span>
                  Aktif dalam organisasi kemahasiswaan (BEM KMF MIPA).
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto py-16 border-t border-gray-900 text-center opacity-50 hover:opacity-100 transition-opacity">
        <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.4em]">
          Handcrafted by <span className="text-white">Dwiky Sumarlin</span> •
          2026
        </p>
      </footer>
    </div>
  );
}

export default App;
