import React, { useState } from "react";
import { motion } from "framer-motion";
import SVGs from "./SVGs.jsx";
import Button from "../ui/Button";

const custOrange = "#FF9900";

const SocialButton = ({ name, url, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group transform transition-all ease-in-out duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button type="button" variation="primary-round" onClick={() => window.open(url, "_blank")}> 
        <Icon width="20" height="20" fillColor={isHovered ? custOrange : "white"} />
      </Button>
    </div>
  );
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 150 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", duration: 2.0, damping: 10, stiffness: 100 },
      }}
      className="flex flex-col h-auto bg-cust-darker-blue font-Poppins text-white justify-center items-center p-10 drop-shadow-2xl z-30"
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="font-RammettoOne text-3xl">Portfolio</div>
        <div>Momento Mori</div>
        <div className="flex flex-row gap-4">
          <SocialButton name="GitHub" url="https://github.com/LagMad" Icon={SVGs.GitHub} />
          <SocialButton name="Instagram" url="https://www.instagram.com/hizkiajeremmy" Icon={SVGs.Instagram} />
          <SocialButton name="LinkedIn" url="https://www.LinkedIn.com/in/hizkiajeremmy" Icon={SVGs.LinkedIn} />
        </div>
      </div>
      <div className="w-full px-36">
        <hr className="border-black opacity-15 w-full border-2 rounded-lg my-8" />
      </div>
      <div className="flex flex-row w-full justify-center items-center">
        <div className="relative group flex w-full justify-center items-center text-center">
          <span className="relative group flex">
            ©2024 Hizkia Jeremmy Krisna Ananta
            <span className="absolute -right-7 opacity-0 group-hover:opacity-100 transition-all duration-500 ml-2">❤️️</span>
          </span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;