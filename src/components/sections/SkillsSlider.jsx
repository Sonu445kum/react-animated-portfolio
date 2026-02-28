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
  SiPython,
];

const SkillsSlider = () => {
  return (
    <section className="mt-15 py-22 bg-gradient-to-r from-indigo-900 via-black to-purple-900 overflow-hidden">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        My Tech Arsenal
      </h2>

      <div className="relative w-full overflow-hidden">

        <div
          className="flex w-max gap-16 text-5xl"
          style={{
            animation: "marquee 25s linear infinite",
          }}
        >
          {[...icons, ...icons].map((Icon, index) => (
            <Icon
              key={index}
              className="text-indigo-400 hover:scale-125 transition duration-300"
            />
          ))}
        </div>

      </div>

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

    </section>
  );
};

export default SkillsSlider;