import React, { useEffect, useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(
    NAV_LINKS.map((link) => link.id),
    120
  );

  // Detect scroll background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId, 100);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-[1000] py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Code className="w-6 h-6 text-primary" />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/60 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            {PERSONAL_INFO.name.split(" ")[0]}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative text-base font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}

              {/* Active underline animation */}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full transition-all duration-300" />
              )}
            </button>
          ))}

          {/* CTA Button */}
          <button
            onClick={() => handleNavClick("contact")}
            className="ml-4 px-6 py-2.5 bg-white text-black font-medium rounded-xl hover:bg-white/90 transition-all duration-300 shadow-md"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-6 space-y-6 transition-all duration-300">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left text-lg ${
                activeSection === link.id
                  ? "text-white"
                  : "text-white/70"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="w-full px-6 py-3 bg-white text-black rounded-xl font-medium"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;