import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / scrollHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 flex-col items-center hidden md:flex z-50">
      <span className="text-xs text-gray-600 rotate-90 mb-2">scroll</span>
      <div className="w-1 bg-gray-400 h-32 rounded-full relative">
        <motion.div
          className="w-3 h-3 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2"
          style={{ top: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
