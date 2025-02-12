import React from "react";
import { motion } from "framer-motion";

const WavyLinesBackground: React.FC<{ color?: string }> = ({ color = "#00A896" }) => {
  return (
    <div className="absolute w-full h-full overflow-hidden z-[-1]">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-1"
          style={{
            top: `${i * 20}%`,
            backgroundColor: color,
          }}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>
  );
};

export default WavyLinesBackground;
