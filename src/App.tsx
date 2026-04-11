import { useState, useEffect } from "react";

function App() {
  // Metadata Logic
  useEffect(() => {
    document.title = "Dwiky Sumarlin | Informatics Graduate & AI Researcher";
  }, []);

  const [projects] = useState([
    {
      id: 1,
      title: "Biometric Facial Recognition Attendance",
      description:
        "Sistem presensi otomatis menggunakan OpenCV dan ArcFace yang dideploy di Diskominfo Kabupaten Bandung.",
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

  // Data Tech Stack dengan Logo
  const techStack = {
    languages: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/white" },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql/white" },
    ],
    frontend: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      {
        name: "Tailwind",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    ],
    backend: [
      {
        name: "Spring Boot",
        icon: "https://cdn.simpleicons.org/springboot/6DB33F",
      },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Flask", icon: "https://cdn.simpleicons.org/flask/white" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/white" },
    ],
    tools: [
      { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/white" },
      {
        name: "TensorFlow",
        icon: "https://cdn.simpleicons.org/tensorflow/FF6F00",
      },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    ],
  };

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
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <style>{`
      @keyframes revealUp {
        0% { opacity: 0; transform: translateY(40px); filter: blur(10px); }
        100% { opacity: 1; transform: translateY(0); filter: blur(0); }
      }
      .animate-reveal { animation: revealUp 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) forwards; }
      .delay-1 { animation-delay: 0.1s; }
      .delay-2 { animation-delay: 0.3s; }
      .delay-3 { animation-delay: 0.5s; }
      .tooltip-container:hover .tooltip-text { visibility: visible; opacity: 1; }
    `}</style>

      {/* HEADER / HERO - Dikasih h-screen biar dia makan satu layar penuh */}
      <header className="max-w-6xl mx-auto px-8 min-h-screen flex flex-col justify-center relative">
        {/* Navigasi - Dibuat Absolute biar nempel paling atas */}
        <div className="absolute top-12 left-8 right-8 flex justify-between items-center animate-reveal">
          <div className="text-white font-black tracking-tighter text-2xl">
            DS.
          </div>
          <nav className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#research" className="hover:text-white transition">
              Research
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>

        {/* Main Content Hero */}
        <div className="mt-20">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.5em] mb-6 block animate-reveal delay-1">
            Available for Work
          </span>
          <h1 className="text-6xl md:text-[120px] font-black text-white leading-[0.85] tracking-tighter animate-reveal delay-2">
            DESIGNING <br />
            <span className="text-gray-800">INTELLIGENT</span> <br />
            SOLUTIONS.
          </h1>

          <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between gap-12 animate-reveal delay-3">
            <p className="max-w-md text-gray-500 text-xl leading-relaxed font-light">
              Dwiky Sumarlin — Lulusan Informatika yang berfokus pada{" "}
              <span className="text-gray-300 font-medium">Computer Vision</span>{" "}
              dan{" "}
              <span className="text-gray-300 font-medium">Data Science</span>.
            </p>

            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/dwkysss"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center border border-gray-800 rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
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
              <button className="px-12 py-6 bg-white text-black font-black rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </header>

      <main
        className="max-w-6xl mx-auto px-8 space-y-40 pb-32 animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        {/* SECTION TECH STACK DENGAN LOGO & TOOLTIP */}
        <section>
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-purple-500"></span> Tech Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, items], i) => (
              <div
                key={category}
                className="p-6 rounded-3xl border border-gray-800 bg-gray-900/20 hover:border-gray-700 transition-all duration-300 group/card"
              >
                {/* Judul Kategori dengan Warna Berbeda */}
                <h3
                  className={`text-[10px] font-black uppercase tracking-widest mb-6 ${
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

                {/* Barisan Logo */}
                <div className="flex flex-wrap gap-5">
                  {items.map((tech) => (
                    <div
                      key={tech.name}
                      className="tooltip-container relative group/icon"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-7 w-auto grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 group-hover/icon:scale-110 transition-all duration-300 cursor-help"
                      />

                      {/* TOOLTIP TEXT (Muncul saat hover logo) */}
                      <span className="tooltip-text invisible opacity-0 absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-[10px] font-bold rounded-lg pointer-events-none transition-all duration-300 whitespace-nowrap border border-gray-700 shadow-2xl z-50">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION PROJECTS */}
        <section>
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-blue-500"></span> Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <div
                key={p.id}
                className="group relative bg-gray-900/30 p-8 rounded-[2rem] border border-gray-800 hover:border-blue-500/40 transition-all duration-500 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition mb-4">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  {p.techStackLogos.map((tech) => (
                    <div
                      key={tech.name}
                      className="tooltip-container relative group"
                    >
                      <img
                        src={tech.url}
                        alt={tech.name}
                        className="h-5 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      />
                      <span className="tooltip-text invisible opacity-0 absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[10px] rounded transition-all duration-300 whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESEARCH, EXPERIENCE, EDUCATION TETAP SAMA SEPERTI SEBELUMNYA... */}
        <section>
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-orange-500"></span> Research
            Publication
          </h2>
          <div className="group bg-gradient-to-br from-gray-900 to-black p-10 rounded-[2.5rem] border border-orange-500/10 hover:border-orange-500/30 transition-all duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
              <div className="flex-1">
                <span className="px-4 py-1 rounded-full text-[10px] font-black bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase">
                  IEEE ICAICTA 2025
                </span>
                <h3 className="text-3xl font-bold text-white mt-6 group-hover:text-orange-100 transition">
                  Signal Classification using Hybrid CNN-Transformer
                  Architectures
                </h3>
                <p className="text-gray-400 mt-6 text-sm leading-relaxed max-w-2xl">
                  Riset optimasi pengenalan sinyal biologis menggunakan
                  arsitektur deep learning hybrid. Dipublikasikan secara
                  internasional.
                </p>
                <div className="mt-10">
                  <a
                    href="#"
                    className="px-8 py-3 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-orange-400 text-sm font-bold inline-flex items-center gap-3 transition hover:bg-orange-500/20"
                  >
                    View Publication
                  </a>
                </div>
              </div>
              <div className="hidden md:flex w-44 h-44 bg-white/5 rounded-3xl items-center justify-center border border-white/5 rotate-3">
                <span className="text-5xl font-black text-white/10 group-hover:text-white/20 transition">
                  IEEE
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pb-20">
          <section>
            <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-emerald-500"></span> Experience
            </h2>
            <div className="space-y-10">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-10 border-l-2 border-gray-900 group"
                >
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-emerald-500/80 text-sm font-bold mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest bg-gray-900 w-fit px-2 py-1 rounded">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="text-gray-400 text-sm mt-4 leading-relaxed">
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
            <div className="bg-gray-900/30 p-10 rounded-[2.5rem] border border-gray-800 hover:border-yellow-500/20 transition-all">
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                Universitas Jenderal Achmad Yani
              </h3>
              <p className="text-yellow-500 font-bold mb-1 text-sm">
                Bachelor of Informatics
              </p>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-6 font-bold">
                Class of 2026
              </p>
              <ul className="text-gray-400 text-sm space-y-4">
                <li className="flex gap-3">
                  <span className="text-yellow-500">▹</span>Fokus riset Computer
                  Vision & Biometric.
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500">▹</span>Lulusan Distinction
                  Bangkit Academy 2025.
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-500">▹</span>Head of Sport
                  Saintech Championship 2026.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto py-16 border-t border-gray-900 text-center opacity-50 hover:opacity-100 transition-opacity">
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">
          Handcrafted by{" "}
          <span className="text-white font-black">Dwiky Sumarlin</span> • 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
