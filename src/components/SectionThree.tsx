import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useConditions } from '../context/ConditionsContext';
import AnimatedDots from "./AnimatedDots";

const SectionThree: React.FC = () => {
  const { accepted, toggleAccepted } = useConditions();

    useEffect(() => {
      AOS.init({ duration: 800 });
    }, []);

  const handleClick = () => {
    toggleAccepted();
  };

  return (
    <section id="section3" data-aos="fade-up" className="w-full  flex flex-col items-center py-12 px-6">
      <AnimatedDots />
      <h2 className="text-4xl font-bold mb-6 text-center">Condiciones</h2>
      
      <p className="text-lg text-center max-w-2xl mb-6">
        San Valentín es un día especial para compartir juntos, recordar momentos inolvidables y seguir construyendo recuerdos hermosos. 
        ¿Aceptas pasar este día conmigo y hacerlo aún más especial? 💖
      </p>

      <button 
        onClick={handleClick}
        className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300
                    ${accepted ? "bg-green-500 hover:bg-green-600" : "bg-pink-500 hover:bg-pink-600"}
                    text-white`}
      >
        {accepted ? "Condiciones aceptadas 💖 (Desaceptar)" : "Aceptar condiciones"}
      </button>
    </section>
  );
};

export default SectionThree;
