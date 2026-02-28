import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const ScrollReveal = ({
  children,
  animation = "fadeUp", // fadeUp | fadeIn | slideLeft | slideRight | zoomIn
  delay = 0,
  duration = 700,
  threshold = 0.1,
  triggerOnce = true,
  className = ""
}) => {
  const { ref, isVisible } = useScrollReveal({
    threshold,
    triggerOnce
  });

  const animationMap = {
    fadeUp: "opacity-0 translate-y-10",
    fadeIn: "opacity-0",
    slideLeft: "opacity-0 -translate-x-12",
    slideRight: "opacity-0 translate-x-12",
    zoomIn: "opacity-0 scale-90"
  };

  const hiddenClasses = animationMap[animation] || animationMap.fadeUp;

  const visibleClasses =
    "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      className={`transition-all ease-out will-change-transform ${
        isVisible ? visibleClasses : hiddenClasses
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;