import React from "react";
import { motion } from "framer-motion";

const dots = [
  { x: "-30%", y: "10%", size: 10, color: "bg-yellow-400" },
  { x: "10%", y: "50%", size: 8, color: "bg-teal-400" },
  { x: "80%", y: "20%", size: 12, color: "bg-red-400" },
  { x: "50%", y: "80%", size: 6, color: "bg-blue-400" },
];

const AnimatedDots: React.FC = () => {
  return (
    <>
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className={`absolute ${dot.color} rounded-full`}
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.x,
            top: dot.y,
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
};

export default AnimatedDots;
