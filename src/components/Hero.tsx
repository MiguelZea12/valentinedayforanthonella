import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-blue-400 text-white text-center p-10 w-full">
      <h2 className="text-5xl font-bold">Ten el control de tus finanzas</h2>
      <p className="text-lg mt-2">Gestiona tus gastos, reportes y mucho más en un solo lugar.</p>
      <button className="mt-4 bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-200 transition">
        Solicita una Demo
      </button>
    </section>
  );
};

export default Hero;