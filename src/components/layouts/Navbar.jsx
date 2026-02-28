import React, { useEffect, useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { PERSONAL_INFO } from "../../utils/constants";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-[15px] font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* CTA BUTTON */}
          <button
            onClick={() => navigate("/contact")}
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

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } backdrop-blur-2xl bg-white/5 border-t border-white/10`}
      >
        <div className="px-6 py-6 space-y-6">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block text-lg transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={() => {
              navigate("/contact");
              setIsMenuOpen(false);
            }}
            className="w-full btn-primary"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;