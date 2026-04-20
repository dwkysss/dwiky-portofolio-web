import { useMemo } from "react";

const Snowfall = ({ isDarkMode }: { isDarkMode: boolean }) => {
  // Pakai useMemo biar posisi partikel nggak "loncat" pas ganti mode
  const particles = useMemo(() => {
    return [...Array(30)].map(() => ({
      width: Math.random() * 8 + 4,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full transition-all duration-[2000ms] ${
            isDarkMode
              ? "bg-white opacity-20 animate-snow blur-[1px]"
              : "bg-blue-400 opacity-15 animate-float-up blur-[0.5px] border border-blue-300/30"
          }`}
          style={{
            width: `${p.width}px`,
            height: `${p.width}px`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            // Kalau salju mulai dari atas, kalau bubble mulai dari bawah
            top: isDarkMode ? "-10px" : "auto",
            bottom: isDarkMode ? "auto" : "-20px",
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
