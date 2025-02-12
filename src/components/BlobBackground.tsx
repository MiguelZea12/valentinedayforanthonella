import React from "react";
import { motion } from "framer-motion";

const BlobBackground: React.FC<{ color?: string }> = ({ color = "#17c3b2" }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full -z-10"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }} // Efecto de respiración
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 200 200" className="absolute w-[500px] h-[500px] -top-40 left-1/2 transform -translate-x-1/2 opacity-30">
        <path
          fill={color}
          d="M40,-55C50,-50,60,-40,69,-25C78,-10,86,10,83,26C80,42,66,55,49,66C32,77,16,87,0,90C-16,92,-32,86,-44,75C-56,64,-64,48,-67,31C-69,14,-66,-5,-60,-24C-54,-42,-44,-60,-30,-65C-16,-71,8,-62,20,-55Z"
          transform="translate(100 100)"
        />
      </svg>
    </motion.div>
  );
};

export default BlobBackground;
