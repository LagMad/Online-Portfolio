import React, { useRef, useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import SSWebBEM from "../assets/SSWebBEM.png";

const Activities = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
    <MainLayout>
      <div className="flex flex-col w-full">
        <div
          className="flex flex-row w-full min-h-screen bg-SchotivalTogether bg-fixed bg-cover bg-no-repeat justify-center items-center"
          ref={containerRef}
        >
          <div
            className="text-9xl font-black border-[5px] border-white px-8 py-2 transition-all duration-500 ease-in-out"
            style={{
              WebkitTextStrokeWidth: "5px",
              WebkitTextStrokeColor: "white",
              color: isHovered ? "white" : "transparent",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            ACTIVITIES
          </div>
        </div>
        
      </div>
    </MainLayout>
  );
};

export default Activities;
