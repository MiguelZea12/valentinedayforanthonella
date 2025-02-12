import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedDots from "./AnimatedDots";


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
    AOS.init({ duration: 800 });
    const interval = setInterval(() => {
      setTimePassed(calculateTimePassed());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="section2" data-aos="fade-up" className="w-full  flex flex-col items-center py-12 px-6">
      <AnimatedDots />
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Tiempo Juntos</h2>
      <p className="text-lg md:text-xl text-center mb-4">
        Tiempo transcurrido desde el 1 de septiembre de 2023:
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 w-full max-w-4xl">
        {Object.entries(timePassed).map(([key, value]) => (
          <div 
            key={key} 
            className="flex flex-col items-center bg-gray-100 p-8 rounded-xl shadow-lg w-full 
                       md:w-48 lg:w-56 xl:w-64 transition-all duration-300"
          >
            <p className="text-5xl md:text-6xl font-extrabold">{value}</p>
            <p className="text-lg md:text-xl capitalize font-medium">{key}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
