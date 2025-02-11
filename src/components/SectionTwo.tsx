import React, { useState, useEffect } from "react";

const calculateTimePassed = () => {
  const startDate = new Date("2023-09-01");
  const now = new Date();
  
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const weeks = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 7));

  return { years, months, weeks, days };
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
      <p className="text-lg">Tiempo transcurrido desde el 1 de septiembre de 2023:</p>
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