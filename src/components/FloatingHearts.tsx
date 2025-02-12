import React from "react";
import { motion } from "framer-motion";

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 12 }); // Cantidad de corazones en la animación

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {hearts.map((_, index) => {
        const randomX = Math.random() * 100; // Posición horizontal aleatoria
        const duration = Math.random() * (7 - 4) + 4; // Velocidad entre 4 y 7 seg
        const delay = Math.random() * 2; // Retardo aleatorio

        return (
          <motion.div
            key={index}
            className="absolute text-purple-400"
            initial={{ opacity: 0, y: "100vh", x: `${randomX}vw`, scale: 0.5 }}
            animate={{ opacity: [0, 1, 1, 0], y: "-10vh", scale: 1 }}
            transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg> {/* Emoji de corazón, puedes cambiarlo por SVG */}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingHearts;
