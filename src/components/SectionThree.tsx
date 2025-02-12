import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useConditions } from "../context/ConditionsContext";
import AnimatedDots from "./AnimatedDots";

const SectionThree: React.FC = () => {
  const { accepted, toggleAccepted } = useConditions();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleClick = () => {
    toggleAccepted();
    setTimeout(() => {
      window.location.hash = "#hero"; // Redirige a la sección Hero
    }, 500); // Pequeño delay para suavizar la transición
  };

  return (
    <section id="section3" data-aos="fade-up" className="w-full flex flex-col items-center py-12 px-6">
      <AnimatedDots />
      <h2 className="text-4xl font-bold mb-6 text-center">Condiciones</h2>

      <div className="text-xl text-justify max-w-2xl mb-6">
        <ul className="list-disc pl-6">
          <li>La más importante es que estés feliz. 😊</li>
          <li>Aunque no pueda ser mucho, tiene un gran significado para mí. 💖</li>
          <li>Espero que te haya gustado el sitio web 🤭.</li>
          <li>Lo hice mostrando el tiempo que llevamos juntos y algunas de nuestras últimas fotos, como un recordatorio de lo especial que es nuestra historia. 📸</li>
          <li>Me encantaría poner todas nuestras fotos, pero son muchísimas 😆.</li>
          <li>Quisiera llenar este sitio con muchas cosas más, pensando en el futuro. 👨‍👩‍👧‍👦</li>
          <li>Para que nuestros hijos puedan verlo algún día y sepan que así le pedí a su mamá que pasáramos San Valentín. ❤️</li>
        </ul>
      </div>

      <button
        onClick={handleClick}
        className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 ${
          accepted ? "bg-green-500 hover:bg-green-600" : "bg-pink-500 hover:bg-pink-600"
        } text-white`}
      >
        {accepted ? "Condiciones aceptadas 💖 (Desaceptar)" : "Aceptar condiciones"}
      </button>
    </section>
  );
};

export default SectionThree;
