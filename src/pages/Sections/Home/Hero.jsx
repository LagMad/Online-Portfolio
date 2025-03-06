import React, { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  return (
    <div
      className="flex flex-row w-full min-h-screen bg-HeroSection bg-fixed bg-cover bg-no-repeat justify-between items-center px-36 font-Poppins text-white"
      ref={containerRef}
    >
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            duration: 2.0,
            damping: 10,
            stiffness: 100,
          },
        }}
        className="flex flex-col w-2/5 gap-10"
      >
        <div className="text-5xl font-black tracking-[0.2em] leading-snug">
          Hizkia <span className="text-cust-orange">Jeremmy</span>
          <br />
          Krisna Ananta
        </div>
      </motion.div>
      <div className="w-1/5" />
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            duration: 2.0,
            damping: 10,
            stiffness: 100,
          },
        }}
        className="flex flex-col w-2/5 justify-center items-end gap-8"
      >
        <div className="text-2xl font-bold tracking-widest text-right">
          Front-End Web Developer
          <br />
          Informatics Engineering Student
          <br />
          of Brawijaya University
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
