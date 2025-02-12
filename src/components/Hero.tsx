import React from "react";
import { motion } from "framer-motion";
import { useConditions } from "../context/ConditionsContext";
import WaveBackground from "./WaveBackground";
import FloatingHearts from "./FloatingHearts";

const Hero: React.FC = () => {
  const { accepted } = useConditions();

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-primary to-secondary text-dark text-center p-10">
      <FloatingHearts />
      {/* Fondo SVG */}
      <WaveBackground color="#17c3b2" />
      
      <motion.h2
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ¿Quieres pasar San Valentín conmigo?
      </motion.h2>
      <p className="text-lg mt-2">Tienes solo una respuesta correcta.</p>

      {!accepted && (
        <motion.p
          className="text-lg mt-4 text-red-500 px-4 py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Debes aceptar las condiciones en la Sección 3 antes de responder.
        </motion.p>
      )}

      <div className="flex space-x-4 mt-6">
        {["Sí, acepto!", "No, me caes mal!"].map((text, index) => (
          <motion.button
            key={index}
            disabled={!accepted}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 ${
              accepted ? (index === 0 ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600") : "bg-gray-400 cursor-not-allowed"
            } text-white`}
          >
            {text}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
