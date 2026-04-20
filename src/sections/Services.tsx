// src/sections/Services.tsx

const Services = () => {
  return (
    <section
      id="services"
      className="reveal-on-scroll scroll-mt-32 transition-colors duration-500"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* SISI KIRI: List Keahlian */}
        <div className="flex-1 w-full">
          <div className="mb-10">
            {/* Teks utama adaptif */}
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4 transition-colors">
              What I{" "}
              <span className="px-4 py-1 bg-blue-600 text-white rounded-xl inline-block -rotate-2">
                Do
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-500 text-lg transition-colors">
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
                /* Item list: bg transparan -> abu-abu muda di Light Mode */
                className="group flex items-center justify-between p-6 border border-gray-200 dark:border-gray-900 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900/50 hover:border-blue-500 dark:hover:border-gray-700 transition-all duration-500 cursor-default"
              >
                <div className="flex items-center gap-6">
                  <span className="text-gray-400 dark:text-gray-700 font-bold group-hover:text-blue-500 transition-colors">
                    {item.id}
                  </span>
                  <span className="text-xl font-bold text-gray-800 dark:text-white group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </span>
                </div>
                <div className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-800 rounded-full group-hover:border-blue-600 dark:group-hover:border-white transition-all text-gray-900 dark:text-white">
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
          {/* Teks Melingkar (SVG) - Warna teks adaptif */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[6.5px] font-black uppercase tracking-[3px] fill-gray-400 dark:fill-gray-500 transition-colors">
                <textPath xlinkHref="#circlePath">
                  • DWIKY SUMARLIN • DWIKY SUMARLIN •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Foto Lu: Border adaptif & Shadow */}
          <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-600/20 shadow-2xl dark:shadow-[0_0_50px_rgba(37,99,235,0.2)]">
            <img
              src="/foto-profil.jpeg"
              alt="Dwiky Sumarlin"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-blue-600/10 opacity-0 hover:opacity-100 transition-opacity">
              <span className="text-4xl text-white">✦</span>
            </div>
          </div>
        </div>

        {/* SISI KANAN: Bento Cards */}
        <div className="flex flex-col gap-6 w-full lg:w-72">
          {/* Card Quote: Putih di Light, Gelap di Dark */}
          <div
            onClick={() => {
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-8 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-[2.5rem] hover:border-blue-500 dark:hover:border-blue-500/50 transition-all shadow-md dark:shadow-none cursor-pointer group active:scale-[0.98]"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 font-light italic">
              "Innovation distinguishes between a leader and a follower."
            </p>

            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
              See how I build things
            </h4>

            {/* Icon Panah: Pas card di-hover, warna background dan rotasinya berubah bray */}
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full flex items-center justify-center rotate-45 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-90">
              →
            </div>
          </div>

          {/* Card CTA: Navigasi ke Footer */}
          <div
            onClick={() => {
              document
                .querySelector("#footer")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="p-8 bg-blue-600 rounded-[2.5rem] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-xl shadow-blue-500/20 dark:shadow-blue-500/10 cursor-pointer group"
          >
            <p className="text-blue-100 text-sm mb-6 font-bold uppercase tracking-widest">
              Let's Connect
            </p>
            <h4 className="text-2xl font-black text-white mb-6 leading-tight">
              Ready for new challenges?
            </h4>

            {/* Button Panah: Gue tambahin group-hover biar pas card disentuh, panahnya ikut bereaksi */}
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              <span className="text-black font-bold -rotate-45 text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
