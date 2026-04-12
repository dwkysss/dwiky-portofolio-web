// src/sections/Projects.tsx

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  techStackLogos: { name: string; url: string }[];
}

interface ProjectsProps {
  data: ProjectItem[];
}

// src/sections/Projects.tsx

const Projects = ({ data }: ProjectsProps) => {
  return (
    <section id="projects" className="scroll-mt-32 reveal-on-scroll">
      <h2 className="text-2xl font-bold mb-12 flex items-center gap-4 group cursor-default">
        <span className="h-px w-12 bg-blue-500 group-hover:w-24 transition-all duration-500"></span>{" "}
        Selected Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.map((p) => (
          // Bungkus kartu di sini bray
          <a
            key={p.id}
            href={p.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block" // Supaya link-nya seukuran kotak
          >
            <div className="group p-12 rounded-[3rem] border border-gray-800 bg-gray-950/80 backdrop-blur-sm hover:border-blue-500/30 hover:scale-[1.02] transition-all duration-700 shadow-2xl relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Tambahin Icon Link Kecil di Pojok (Opsional tapi keren bray) */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </div>

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
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
