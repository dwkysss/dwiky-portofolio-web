// src/components/Footer.tsx

const Footer = () => {
  return (
    <>
      {/* SECTION READY TO SCALE / CTA */}
      <section className="py-40 text-center relative overflow-hidden reveal-on-scroll">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            Ready to <span className="text-blue-500 italic">Scale?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-12 px-6">
            Let's turn your vision into a digital masterpiece. Dwiky is ready to
            bring your boldest ideas to life with AI and modern tech.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:dwikysumarlin01@gmail.com"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
            >
              <span>Let's Work Together</span>
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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

      {/* FOOTER MAIN */}
      <footer className="relative bg-blue-600 text-black px-8 pt-20 pb-10 rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
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
              <a
                href="https://wa.me/083816377730"
                className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>{" "}
                CHAT ON WHATSAPP
              </a>
            </div>

            <div className="w-full lg:w-[450px]">
              <div className="bg-black/5 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 space-y-10">
                {[
                  {
                    label: "Instagram",
                    handle: "@dwikysmrln",
                    url: "https://instagram.com/dwikysmrln",
                    icon: "https://cdn.simpleicons.org/instagram/black",
                  },
                  {
                    label: "LinkedIn",
                    handle: "Dwiky Sumarlin",
                    url: "https://www.linkedin.com/in/dwiky-sumarlin/",
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
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all text-black">
                      {typeof social.icon === "string" ? (
                        <img
                          src={social.icon}
                          alt={social.label}
                          className="w-6 h-6"
                        />
                      ) : (
                        social.icon
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
    </>
  );
};

export default Footer;
