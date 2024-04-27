import React, { useState } from "react";
import SVGs from "../shared/SVGs"; // Make sure to import your SVG component

const WhoAmICard = ({ name, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const custOrange = "#FF9900";

  const handleHover = (hoverStatus) => {
    setIsHovered(hoverStatus);
  };

  return (
    <div
      className="flex flex-col group drop-shadow-none hover:drop-shadow-xl justify-center items-center h-72 w-[500px] py-5 px-10 gap-2 border-4 border-transparent hover:border-cust-orange rounded-xl bg-transparent hover:bg-cust-darker-blue transform transition-all duration-500 ease-in-out"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className="bg-transparent group-hover:bg-white rounded-full p-3 border-4 border-transparent group-hover:border-cust-orange transform transition-all duration-500 ease-in-out">
        {React.createElement(SVGs[name], {
          width: "50px",
          height: "50px",
          fillColor: isHovered ? custOrange : "black",
        })}
      </div>
      <div className="text-3xl font-black text-black group-hover:text-cust-orange transform transition-all duration-500 ease-in-out">{title}</div>
      <div className="transform transition-all duration-500 ease-in-out text-black group-hover:text-cust-orange text-center">
        {description}
      </div>
    </div>
  );
};

export default WhoAmICard;
