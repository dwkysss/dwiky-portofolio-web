import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// KOMPONEN SALJU JATUH
const Snowfall = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-20 animate-snow"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

function App() {
  // Logic untuk Scroll Parallax
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, -100]);

  // Logic untuk merubah style Nav saat scroll
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgba(10,10,10,0.8)"],
  );
  const navPadding = useTransform(scrollY, [0, 100], ["24px", "12px"]);
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"],
  );
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
    {
      id: 3,
      title: "Warung Digital Inventory System",
      description:
        "Sistem manajemen inventaris dan transaksi real-time untuk toko kelontong, mengintegrasikan Google Sheets sebagai database cloud yang ringan.",
      techStackLogos: [
        { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
        {
          name: "Tailwind",
          url: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        },
        {
          name: "Google Sheets",
          url: "https://cdn.simpleicons.org/googlesheets/34A853",
        },
        {
          name: "Node.js",
          url: "https://cdn.simpleicons.org/nodedotjs/339933",
        },
      ],
    },
    {
      id: 4,
      title: "TrashIssue - Smart Waste Management App",
      description:
        "Aplikasi berbasis mobile untuk meningkatkan kesadaran lingkungan melalui fitur campaign bersih-bersih, donasi, dan klasifikasi sampah menggunakan machine learning. Dilengkapi sistem rekomendasi untuk meningkatkan partisipasi pengguna.",
      techStackLogos: [
        {
          name: "TensorFlow",
          url: "https://cdn.simpleicons.org/tensorflow/FF6F00",
        },
        { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
        {
          name: "Firebase",
          url: "https://cdn.simpleicons.org/firebase/FFCA28",
        },
        { name: "Android", url: "https://cdn.simpleicons.org/android/3DDC84" },
        { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
      ],
    },
  ]);

  const techStack = {
    languages: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Java", icon: "/java.svg" }, // Tetap pake lokal bray biar kenceng
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql/white" },
    ],
    frontend: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      {
        name: "Tailwind",
        icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
      {
        name: "Bootstrap",
        icon: "https://cdn.simpleicons.org/bootstrap/7952B3",
      },
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      {
        name: "CSS3",
        // Pake SVG kodingan langsung bray biar anti-mati
        icon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#1572B6">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
          </svg>
        ),
      },
    ],
    backend: [
      {
        name: "Spring Boot",
        icon: "https://cdn.simpleicons.org/springboot/6DB33F",
      },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Flask", icon: "https://cdn.simpleicons.org/flask/white" },
      { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
      {
        name: "CodeIgniter",
        icon: "https://cdn.simpleicons.org/codeigniter/EF4223",
      },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
    ],
    tools: [
      { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv/white" },
      {
        name: "TensorFlow",
        icon: "https://cdn.simpleicons.org/tensorflow/FF6F00",
      },
      { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Blender", icon: "https://cdn.simpleicons.org/blender/F5792A" },
      { name: "Unity", icon: "https://cdn.simpleicons.org/unity/white" },
    ],
  };

  const [experiences] = useState([
    {
      id: 0, // I
      title: "Machine Learning Cohort (Distinction Graduate)",
      company: "Bangkit Academy led by Google, GoTo, & Traveloka",
      description:
        "Terpilih sebagai salah satu lulusan terbaik (Distinction) dari 4.000+ peserta. Menguasai end-to-end Machine Learning mulai dari pengumpulan data, preprocessing, hingga deployment model menggunakan TensorFlow dan Google Cloud Platform.",
      startDate: "Februari 2025",
      endDate: "Juli 2025",
    },
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
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      <Snowfall />

      {/* NAVIGATION BAR - FIXED & STICKY (Rata Kanan) */}
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
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
            <span className="text-white font-black text-xs">DS</span>
          </div>
          <span className="text-white font-black tracking-tighter text-xl">
            Dwiky.
          </span>
        </div>

        {/* SISI KANAN: Nav Links (Tanpa WA, Rata Kanan) */}
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">
          <a href="#" className="hover:text-blue-500 transition-colors">
            Home
          </a>
          <a href="#stack" className="hover:text-white transition-colors">
            Stack
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#research" className="hover:text-white transition-colors">
            Research
          </a>
        </div>
      </motion.nav>

      <style>{`
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(40px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes snow {
          0% { transform: translateY(-10vh) translateX(0); }
          25% { transform: translateY(20vh) translateX(15px); }
          50% { transform: translateY(50vh) translateX(-15px); }
          75% { transform: translateY(80vh) translateX(15px); }
          100% { transform: translateY(110vh) translateX(0); }
        }
        .animate-reveal { animation: revealUp 1.2s cubic-bezier(0.2, 0.6, 0.2, 1) forwards; }
        .animate-snow { animation: snow linear infinite; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.5s; }
        .tooltip-container:hover .tooltip-text { visibility: visible; opacity: 1; }
        @keyframes spin-slow {
        from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>

      {/* HEADER / HERO SECTION */}
      <header className="relative w-full min-h-[100vh] flex flex-col justify-center max-w-6xl mx-auto px-8 pt-18 md:pt-22">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative" // pt-20 di sini bisa dihapus karena udah dihandle header
        >
          <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.6em] mb-10 block animate-reveal delay-1">
            Available for Work
          </span>

          {/* Leading dinaikkan sedikit ke 0.85 agar tidak kepotong, py-1 kasih ruang napas dikit */}
          <h1 className="text-6xl md:text-[115px] font-black text-white leading-[0.85] tracking-tighter cursor-default -mt-4 md:-mt-8">
            <motion.span
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1, ease: [0.2, 0.6, 0.2, 1] }}
              className="inline-block py-1"
            >
              DESIGNING
            </motion.span>
            <br />
            <span className="text-gray-800 hover:text-gray-700 transition-colors duration-700 inline-block py-1">
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

          {/* max-w diganti ke max-w-2xl agar tulisan Developer punya ruang buat naik ke atas */}
          <div className="mt-14 flex flex-col md:flex-row md:items-end justify-between gap-16 animate-reveal delay-3">
            <p className="max-w-2xl text-gray-500 text-xl leading-relaxed font-light">
              Dwiky Sumarlin — Informatics Graduate focusing on{" "}
              <span className="text-gray-200 font-semibold underline decoration-blue-500 underline-offset-4 whitespace-nowrap">
                Data Science
              </span>{" "}
              ,{" "}
              <span className="text-gray-200 font-semibold underline decoration-blue-500 underline-offset-4 whitespace-nowrap">
                Machine Learning
              </span>{" "}
              , and{" "}
              <span className="text-gray-200 font-semibold underline decoration-cyan-500 underline-offset-4 whitespace-nowrap">
                FullStack Development
              </span>
              .
            </p>

            <div className="flex gap-8 items-center shrink-0">
              <a
                href="https://github.com/dwkysss"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center border border-gray-800 rounded-full hover:bg-white hover:text-black hover:rotate-[360deg] transition-all duration-700 shadow-2xl"
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
              <button className="px-14 py-6 bg-white text-black font-black rounded-full hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                Let's Talk
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* MAIN CONTENT SECTION */}
      <main className="max-w-6xl mx-auto px-8 py-20 space-y-32 relative z-10">
        {/* TECH STACK */}
        <section id="stack" className="scroll-mt-32">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-4 group cursor-default">
            <span className="h-px w-12 bg-purple-500 group-hover:w-24 transition-all duration-500"></span>{" "}
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, items], i) => (
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
                      {/* LOGIC PERBAIKAN DI SINI BRAY */}
                      <div className="h-8 w-auto grayscale opacity-40 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 group-hover/icon:scale-125 group-hover/icon:rotate-6 transition-all duration-300 flex items-center justify-center">
                        {typeof tech.icon === "string" ? (
                          // Kalau icon-nya URL (String), pake tag img
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-full w-auto object-contain"
                          />
                        ) : (
                          // Kalau icon-nya kodingan SVG (JSX), render langsung
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

        <section id="services" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* SISI KIRI: List Keahlian */}
            <div className="flex-1 w-full">
              <div className="mb-10">
                <h2 className="text-5xl font-black text-white mb-4">
                  What I{" "}
                  <span className="px-4 py-1 bg-blue-600 rounded-xl inline-block -rotate-2">
                    Do
                  </span>
                </h2>
                <p className="text-gray-500 text-lg">
                  Membangun solusi cerdas dengan integrasi AI dan pengembangan
                  web modern.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { id: "01", title: "Data Science" },
                  { id: "02", title: "Machine Learning" },
                  { id: "03", title: "Fullstack Development" },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="group flex items-center justify-between p-6 border border-gray-900 rounded-full hover:bg-gray-900/50 hover:border-gray-700 transition-all duration-500 cursor-default"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-gray-700 font-bold group-hover:text-blue-500 transition-colors">
                        {item.id}
                      </span>
                      <span className="text-xl font-bold text-white group-hover:translate-x-2 transition-transform duration-500">
                        {item.title}
                      </span>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center border border-gray-800 rounded-full group-hover:border-white transition-all">
                      <span className="group-hover:rotate-45 transition-transform duration-500">
                        →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SISI TENGAH: Foto Lu + Teks Melingkar */}
            <div className="relative flex-shrink-0 w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
              {/* Teks Melingkar (SVG) */}
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[6.5px] font-black uppercase tracking-[3px] fill-gray-500">
                    <textPath xlinkHref="#circlePath">
                      • DWIKY SUMARLIN •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Foto Lu di Tengah */}
              <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-600/20 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                <img
                  src="/foto-profil.jpeg" // <--- Ganti pake nama file foto lu di folder public bray!
                  alt="Dwiky Sumarlin"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue-600/10 opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-4xl">✦</span>
                </div>
              </div>
            </div>

            {/* SISI KANAN: Bento Cards */}
            <div className="flex flex-col gap-6 w-full lg:w-72">
              {/* Card 1 */}
              <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-[2.5rem] hover:border-gray-600 transition-all">
                <p className="text-gray-400 text-sm mb-6 font-light italic">
                  "Innovation distinguishes between a leader and a follower."
                </p>
                <h4 className="text-xl font-bold text-white mb-4 leading-tight">
                  See how I build things
                </h4>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center rotate-45">
                  →
                </div>
              </div>

              {/* Card 2 (CTA) */}
              <div className="p-8 bg-blue-600 rounded-[2.5rem] hover:scale-[1.03] transition-all shadow-2xl shadow-blue-500/20">
                <p className="text-blue-100 text-sm mb-6 font-bold uppercase tracking-widest">
                  Let's Connect
                </p>
                <h4 className="text-2xl font-black text-white mb-6 leading-tight">
                  Ready for new challenges?
                </h4>
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold -rotate-45 text-xl">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-32">
          <h2 className="text-2xl font-bold mb-12 flex items-center gap-4 group cursor-default">
            <span className="h-px w-12 bg-blue-500 group-hover:w-24 transition-all duration-500"></span>{" "}
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((p) => (
              <div
                key={p.id}
                className="group p-12 rounded-[3rem] border border-gray-800 bg-gray-950/80 backdrop-blur-sm hover:border-blue-500/30 hover:scale-[1.02] transition-all duration-700 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <h3 className="text-3xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 group-hover:text-gray-400 transition-colors duration-500">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-6">
                  {p.techStackLogos.map((tech) => (
                    <img
                      key={tech.name}
                      src={tech.url}
                      alt={tech.name}
                      className="h-6 w-auto grayscale opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" className="scroll-mt-32">
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
                  Signal Classification using Hybrid CNN-Transformer
                  Architectures
                </h3>
                <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mb-12 group-hover:text-gray-400 transition-colors">
                  Research on biological signal classification using hybrid deep
                  learning models for maximum accuracy.
                </p>
                <a
                  href="#"
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

        {/* EXPERIENCE & EDUCATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pb-20">
          <section>
            <h2 className="text-2xl font-bold mb-16 flex items-center gap-4 group cursor-default">
              <span className="h-px w-12 bg-emerald-500 group-hover:w-24 transition-all duration-500"></span>{" "}
              Experience
            </h2>
            <div className="space-y-16">
              {experiences.map((exp) => (
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

          <section>
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
                  <span className="text-yellow-500 font-black">/</span>{" "}
                  Artificial Intelligence & Game (AIG)
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
        {/* SECTION READY TO SCALE / CTA */}
        <section className="py-40 text-center relative overflow-hidden">
          {/* Efek Glow di Background (Biar lebih cinematic) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
              Ready to <span className="text-blue-500 italic">Scale?</span>
            </h2>

            <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-12 px-6">
              Let's turn your vision into a digital masterpiece. Dwiky is ready
              to bring your boldest ideas to life with AI and modern tech.
            </p>

            <div className="flex justify-center">
              <a
                href="mailto:dwkysumarlin@email.com" // <--- Ganti email lu bray!
                className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
              >
                <span>Let's Work Together</span>
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 11.5L11.5 4.5M11.5 4.5H4.5M11.5 4.5V11.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative bg-blue-600 text-black px-8 pt-20 pb-10 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
            {/* SISI KIRI: Brand & CTA */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-xl">DS</span>
                </div>
                <span className="text-2xl font-black tracking-tighter">
                  Dwiky Sumarlin
                </span>
              </div>

              <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-12">
                LET'S <br /> CONNECT
              </h2>

              <p className="text-black/70 text-lg max-w-sm mb-12 font-medium">
                Transforming ideas into intelligent solutions. Let's build the
                future together.
              </p>

              <a
                href="https://wa.me/yournumber" // <--- Ganti nomor WA lu bray
                className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                CHAT ON WHATSAPP
              </a>
            </div>
            <div className="w-full lg:w-[450px]">
              <div className="bg-black/5 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 space-y-10">
                {[
                  {
                    label: "Instagram",
                    handle: "@dwkysss",
                    url: "https://instagram.com/dwkysss",
                    icon: "https://cdn.simpleicons.org/instagram/black",
                  },
                  {
                    label: "LinkedIn",
                    handle: "Dwiky Sumarlin",
                    url: "https://linkedin.com/in/dwkysumarlin",
                    // GANTI BAGIAN INI BRAY, PAKE SVG KODINGAN LANGSUNG:
                    icon: (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    label: "GitHub",
                    handle: "dwkysss",
                    url: "https://github.com/dwkysss",
                    icon: "https://cdn.simpleicons.org/github/black",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer" // Tambahin ini bray biar aman
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 text-black">
                      {/* LOGIC UNTUK NGEBEDAIN SVG SAMA LINK GAMBAR: */}
                      {typeof social.icon === "string" ? (
                        <img
                          src={social.icon}
                          alt={social.label}
                          className="w-6 h-6"
                        />
                      ) : (
                        social.icon // Ini buat LinkedIn yang SVG
                      )}
                    </div>
                    <div>
                      <h4 className="font-black text-xl leading-none">
                        {social.label}
                      </h4>
                      <p className="text-black/60 text-sm font-bold mt-1">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-black/10 gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
              COPYRIGHT © 2026 DWIKY SUMARLIN — ALL RIGHTS RESERVED.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-2xl"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
