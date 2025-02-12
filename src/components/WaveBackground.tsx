import React from "react";
import { motion } from "framer-motion";

const WaveBackground: React.FC<{ color?: string }> = ({ color = "#17c3b2" }) => {
  return (
    <motion.div
      className="absolute w-full bottom-0 left-0"
      initial={{ y: 10 }}
      animate={{ y: [10, -10, 10] }} // Movimiento ondulante
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 1440 320"
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          fillOpacity="1"
          d="M0,192L48,208C96,224,192,256,288,266.7C384,277,480,267,576,250.7C672,235,768,213,864,202.7C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </motion.div>
  );
};

export default WaveBackground;
