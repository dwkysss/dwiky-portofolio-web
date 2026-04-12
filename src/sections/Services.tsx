// src/sections/Services.tsx

const Services = () => {
  return (
    <section id="services" className="reveal-on-scroll scroll-mt-32">
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
              Membangun solusi cerdas dengan integrasi AI dan pengembangan web
              modern.
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
                  • DWIKY SUMARLIN • DWIKY SUMARLIN •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Foto Lu di Tengah */}
          <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-600/20 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
            <img
              src="/foto-profil.jpeg"
              alt="Dwiky Sumarlin"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-blue-600/10 opacity-0 hover:opacity-100 transition-opacity">
              <span className="text-4xl">✦</span>
            </div>
          </div>
        </div>

        {/* SISI KANAN: Bento Cards */}
        <div className="flex flex-col gap-6 w-full lg:w-72">
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

          <div className="p-8 bg-blue-600 rounded-[2.5rem] hover:scale-[1.03] transition-all shadow-2xl shadow-blue-500/20">
            <p className="text-blue-100 text-sm mb-6 font-bold uppercase tracking-widest">
              Let's Connect
            </p>
            <h4 className="text-2xl font-black text-white mb-6 leading-tight">
              Ready for new challenges?
            </h4>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-black font-bold -rotate-45 text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
