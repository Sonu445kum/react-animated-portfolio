import { useEffect, useState } from "react";

// ================================
// SCROLL SPY HOOK
// ================================

export const useScrollSpy = (sectionIds = [], offset = 100) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + offset;

          let currentSection = "";

          for (let i = 0; i < sectionIds.length; i++) {
            const section = document.getElementById(sectionIds[i]);
            if (!section) continue;

            const { top, height } = section.getBoundingClientRect();
            const sectionTop = window.scrollY + top;
            const sectionBottom = sectionTop + height;

            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionBottom
            ) {
              currentSection = sectionIds[i];
            }
          }

          if (currentSection) {
            setActiveSection(currentSection);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

// ================================
// SMOOTH SCROLL FUNCTION
// ================================

export const scrollToSection = (sectionId, offset = 80) => {
  if (typeof window === "undefined") return;

  const section = document.getElementById(sectionId);
  if (!section) return;

  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = sectionPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};