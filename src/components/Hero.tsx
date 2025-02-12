import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2"; // Importamos SweetAlert2
import confetti from "canvas-confetti"; // Importamos la librería de confeti
import { useConditions } from "../context/ConditionsContext";
import WaveBackground from "./WaveBackground";
import FloatingHearts from "./FloatingHearts";

const Hero: React.FC = () => {
  const { accepted } = useConditions();

  const handleAcceptClick = () => {
    if (accepted) {
      // Lanzar confeti
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#ff4d6d", "#ff85a2", "#ffc2d1", "#ffccd5"], // Colores románticos
      });

      // Mostrar la alerta de SweetAlert2
      Swal.fire({
        title: "Sabía que ibas a aceptar",
        text: "¡Te amo mucho! Gracias por aceptar",
        icon: "success",
        confirmButtonText: "¡Yo también te amo! ❤️",
        confirmButtonColor: "#ff4d6d",
        timer: 3500,
        timerProgressBar: true,
      });
    }
  };

  const handleRejectClick = () => {
    if (accepted) {
      Swal.fire({
        title: "🥺 ¿Por qué te caigo mal? ",
        text: "Eso me pone triste... dime qué hice mal 😞",
        icon: "warning",
        confirmButtonText: "Está bien... en realidad sí me caes bien 🙃",
        confirmButtonColor: "#ff4d6d",
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-primary to-secondary text-dark text-center p-10" id="hero">
      <FloatingHearts />
      <WaveBackground color="#17c3b2" />
      
      <motion.h2
        className="text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ¿Quieres pasar San Valentín conmigo?
      </motion.h2>
      <p className="text-lg mt-2 text-white">Tienes solo una respuesta correcta.</p>

      {!accepted && (
        <motion.p
          className="text-lg mt-4 text-red-500 px-4 py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Debes aceptar las condiciones en la Sección de Condiciones antes de responder.
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
              accepted
                ? index === 0
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
                : "bg-gray-400 cursor-not-allowed"
            } text-white`}
            onClick={index === 0 ? handleAcceptClick : handleRejectClick}
          >
            {text}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
