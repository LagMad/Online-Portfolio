import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY;
        containerRef.current.style.backgroundPositionY = `-${
          scrollPosition * 0.5
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row w-full min-h-screen bg-HeroSection bg-fixed bg-cover bg-center bg-no-repeat justify-center md:justify-between items-center px-6 sm:px-10 md:px-20 lg:px-36 font-Poppins text-white gap-10 md:gap-0"
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
        className="flex flex-col w-full md:w-1/2 gap-10"
      >
        <div className="text-2xl md:text-5xl font-black tracking-[0.2em] leading-loose flex flex-col gap-0 md:gap-5 text-center md:text-left">
          <span>
            Hizkia <span className="text-cust-orange">Jeremmy</span>
          </span>
          <span>Krisna Ananta</span>
        </div>
      </motion.div>
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
        className="flex flex-col w-full md:w-1/2 justify-center items-end gap-8"
      >
        <div className="text-base md:text-2xl font-bold tracking-widest text-center md:text-right">
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
