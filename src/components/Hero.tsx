import React from "react";
import { useConditions } from "../context/ConditionsContext";

const Hero: React.FC = () => {
  const { accepted } = useConditions();

  const handleYesClick = () => {
    alert("¡Gracias por aceptar pasar San Valentín conmigo! 💖");
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-blue-400 text-white text-center p-10 w-full">
      <h2 className="text-5xl font-bold">¿Quieres pasar San Valentín conmigo?</h2>
      <p className="text-lg mt-2">Tienes dos opciones, pero solo una respuesta correcta.</p>
      {!accepted && (
        <p className="text-lg mt-4 text-red-600 px-4 py-2 ">
          Debes aceptar las condiciones en la Sección 3 antes de responder.
        </p>
      )}
      <div className="flex space-x-4 mt-6">
        <button
          onClick={handleYesClick}
          disabled={!accepted}
          className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300
                      ${accepted ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"}
                      text-white`}
        >
          Sí, acepto!
        </button>

        <button
          disabled={!accepted}
          className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300
                      ${accepted ? "bg-red-500 hover:bg-red-600" : "bg-gray-400 cursor-not-allowed"}
                      text-white`}
        >
          No, me caes culo!
        </button>
      </div>
    </section>
  );
};

export default Hero;
