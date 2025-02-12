import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

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

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 p-4 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md text-dark" : "bg-transparent bg-opacity-80 text-dark"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wide">LoveDay</h1>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </motion.button>
        <nav
          className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row text-center p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 font-bold">
            {["Fotos Juntos", "Tiempo Juntos", "Condiciones"].map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a href={`#section${index + 1}`} className="px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
