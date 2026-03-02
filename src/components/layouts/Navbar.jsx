import React, { useEffect, useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { PERSONAL_INFO } from "../../utils/constants";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 ScrollSpy
  const activeSection = useScrollSpy(
    navItems.map((item) => item.id),
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }

    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-2xl bg-white/5 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
            <Code className="w-5 h-5 text-white" />
          </div>

          <span className="text-2xl font-bold gradient-text">
            {PERSONAL_INFO.name.split(" ")[0]}
          </span>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-[15px] font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}

          <button
            onClick={() => handleNavClick("contact")}
            className="ml-6 btn-primary"
          >
            Hire Me
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;