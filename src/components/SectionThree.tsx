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
    const wasAccepted = accepted; // Guardamos el estado antes de cambiarlo
    toggleAccepted();

    // Solo redirigir si se está aceptando, no al desaceptar
    if (!wasAccepted) {
      setTimeout(() => {
        const heroSection = document.querySelector("#hero");
        if (heroSection) {
          const offset = 80; // Ajuste para evitar que el header tape el título
          const sectionPosition = heroSection.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
      }, 500);
    }
  };

  return (
    <section id="section3" data-aos="fade-up" className="w-full flex flex-col items-center py-12 px-6">
      <AnimatedDots />
      <h2 className="text-4xl font-bold mb-6 text-center">Condiciones</h2>

      <div className="text-lg text-justify max-w-2xl mb-6">
        <ul className="list-disc pl-6">
          <li>La más importante es que estés feliz.</li>
          <li>Que no te va a importar si es mucho o poco lo de ese dia, si no que sera un significado lindo.</li>
          <li>Que te haya gustado el sitio web. Lo hice mostrando el tiempo que llevamos juntos y algunas de nuestras últimas fotos, como un recordatorio de lo especial que es nuestra historia. 📸</li>
          <li>Que llenaremos este sitio con todas nuestras fotos. Porque quisiera llenar este sitio con muchas cosas más, pensando en el futuro.</li>
          <li>Que nuestros hijos lo veran algún día para que sepan que así le pedí a su mamá que pasáramos San Valentín.</li>
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
