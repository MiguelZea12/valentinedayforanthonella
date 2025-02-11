import React, { useState, useEffect } from "react";

const calculateTimePassed = () => {
  const startDate = new Date("2023-09-01").getTime();
  const now = new Date().getTime();
  const difference = now - startDate;

  const seconds = Math.floor(difference / 1000) % 60;
  const minutes = Math.floor(difference / (1000 * 60)) % 60;
  const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  return { years, months, weeks, days, hours, minutes, seconds };
};

const SectionTwo: React.FC = () => {
  const [timePassed, setTimePassed] = useState(calculateTimePassed());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimePassed(calculateTimePassed());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="section2" className="w-full flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6">Sección 2</h2>
      <p className="text-lg">Tiempo transcurrido desde el 1 de septiembre de 2024:</p>
      <div className="flex space-x-4 mt-6">
        {Object.entries(timePassed).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg w-24">
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm capitalize">{key}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;