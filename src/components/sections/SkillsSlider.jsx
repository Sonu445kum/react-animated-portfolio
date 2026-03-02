import React from "react";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiAmazon,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiPython
} from "react-icons/si";

const icons = [
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiHtml5, color: "#E34F26" },
  { Icon: SiCss3, color: "#1572B6" },
  { Icon: SiBootstrap, color: "#7952B3" },
  { Icon: SiNodedotjs, color: "#339933" },
  { Icon: SiExpress, color: "#FFFFFF" },
  { Icon: SiDjango, color: "#092E20" },
  { Icon: SiLaravel, color: "#FF2D20" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiMysql, color: "#4479A1" },
  { Icon: SiAmazon, color: "#FF9900" },
  { Icon: SiDocker, color: "#2496ED" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: SiGithub, color: "#FFFFFF" },
  { Icon: SiPostman, color: "#FF6C37" },
  { Icon: SiPython, color: "#3776AB" },
];

const SkillsSlider = () => {
  return (
    <section className="mt-15 relative py-28 px-6 overflow-hidden text-white">

      {/* === Unified Premium Background === */}

      {/* Radial Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1a1a40,transparent_60%),radial-gradient(circle_at_80%_80%,#0f172a,transparent_60%)]" />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[160px] rounded-full" />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 
                       bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 
                       bg-clip-text text-transparent">
          My Tech Arsenal
        </h2>

        <div className="relative w-full overflow-hidden">

          {/* Fade edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black/80 to-transparent z-20 pointer-events-none" />

          <div
            className="flex w-max gap-16 text-6xl"
            style={{
              animation: "marquee 30s linear infinite",
            }}
          >
            {[...icons, ...icons].map(({ Icon, color }, index) => (
              <Icon
                key={index}
                style={{ color }}
                className="hover:scale-125 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default SkillsSlider;