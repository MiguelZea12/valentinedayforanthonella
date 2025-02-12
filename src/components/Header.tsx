import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 p-4 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md text-dark" : "bg-transparent text-dark"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wide">LoveDay</h1>

        {/* Botón de menú móvil */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FiX size={32} /> : <FiMenu size={32} />}
        </motion.button>

        {/* Menú móvil con mejor animación */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-lg md:hidden"
            >
              <ul className="flex flex-col text-center p-4 space-y-4 font-bold">
                {["Fotos Juntos", "Tiempo Juntos", "Condiciones"].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={`#section${index + 1}`}
                      className="block px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all"
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Menú desktop */}
        <nav className="hidden md:flex space-x-6 font-bold">
          {["Fotos Juntos", "Tiempo Juntos", "Condiciones"].map((item, index) => (
            <motion.a
              key={index}
              href={`#section${index + 1}`}
              className="px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
