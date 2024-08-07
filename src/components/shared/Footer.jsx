import React, { useState } from "react";
import { motion } from "framer-motion";
import SVGs from "./SVGs.jsx";
import Button from "../ui/Button";

const Footer = () => {
  const [isGitHubHovered, setGitHubHovered] = useState(false);
  const [isInstagramHovered, setInstagramHovered] = useState(false);
  const [isLinkedInHovered, setLinkedInHovered] = useState(false);

  const handleHover = (socialMedia, hoverStatus) => {
    switch (socialMedia) {
      case "GitHub":
        setGitHubHovered(hoverStatus);
        break;
      case "instagram":
        setInstagramHovered(hoverStatus);
        break;
      case "linkedin":
        setLinkedInHovered(hoverStatus);
        break;
      default:
        break;
    }
  };

  const custOrange = "#FF9900";
  const custDarkerBlue = "#FF9900";

  return (
    <motion.footer
      initial={{ opacity: 0, y: 150 }}
      buhileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 2.0,
          damping: 10,
          stiffness: 100,
        },
      }}
      className="flex flex-col h-auto bg-cust-darker-blue font-Poppins text-white justify-center items-center py-8 drop-shadow-2xl z-30"
    >
      <div className="flex flex-row w-full">
        <div className="flex w-full flex-col justify-center items-center gap-5">
          <div className="font-RammettoOne text-3xl">Portfolio</div>
          <div className="">Momento Mori</div>
          <div className="flex flex-row gap-4">
            <div
              className="group"
              onMouseEnter={() => handleHover("GitHub", true)}
              onMouseLeave={() => handleHover("GitHub", false)}
            >
              <Button
                type={"button"}
                variation={"primary-round"}
                onClick={() => {
                  window.open("https://github.com/LagMad"), "_blank";
                }}
              >
                <SVGs.GitHub
                  width="20"
                  height="20"
                  fillColor={isGitHubHovered ? custOrange : "white"}
                />
              </Button>
            </div>
            <div
              className="group"
              onMouseEnter={() => handleHover("instagram", true)}
              onMouseLeave={() => handleHover("instagram", false)}
            >
              <Button
                type={"button"}
                variation={"primary-round"}
                onClick={() => {
                  window.open("https://www.instagram.com/hizkiajeremmy"),
                    "_blank";
                }}
              >
                <SVGs.Instagram
                  width="20"
                  height="20"
                  fillColor={isInstagramHovered ? custOrange : "white"}
                />
              </Button>
            </div>
            <div
              className="group"
              onMouseEnter={() => handleHover("linkedin", true)}
              onMouseLeave={() => handleHover("linkedin", false)}
            >
              <Button
                type={"button"}
                variation={"primary-round"}
                onClick={() => {
                  window.open("https://www.LinkedIn.com/in/hizkiajeremmy"),
                    "_blank";
                }}
              >
                <SVGs.LinkedIn
                  width="20"
                  height="20"
                  fillColor={isLinkedInHovered ? custOrange : "white"}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-36">
        <hr className="flex justify-center items-center border-black opacity-15 w-full border-2 rounded-lg my-8 px-36" />
      </div>
      <div className="flex flex-row w-full justify-center items-center">
        <div className="relative group flex w-full justify-center items-center text-center">
          <div className="relative group flex">
            ©2024 Hizkia Jeremmy Krisna Ananta
            <div className="absolute -right-7 opacity-0 group-hover:opacity-100 transition-all duration-500 ml-2">
              ❤️️
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
``;
export default Footer;
