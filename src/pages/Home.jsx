import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HeroBG from "../assets/SchotivalOnStage.png";

const Home = () => {
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
    <MainLayout>
      <div className="flex flex-col min-h-screen">
        {/* HERO SECTION */}
        <div
          className="flex flex-row w-full min-h-screen bg-HeroSection bg-fixed bg-cover bg-no-repeat justify-center items-center px-36 font-Poppins"
          ref={containerRef}
          style={{ backgroundPosition: "center bottom" }} // Set initial background position
        >
          <div className="flex flex-col w-1/2 text-white gap-10">
            <div className="text-5xl font-black tracking-[0.2em] leading-snug">
              Hizkia Jeremmy
              <br />
              Krisna Ananta
            </div>
            <div className="text-2xl font-bold tracking-widest">
              Personal Website Portfolio
            </div>
          </div>
          <div className="flex flex-col w-1/2"></div>
        </div>
        

        {/* <Parallax pages={2}>
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={1}
            style={{
              backgroundImage: `url(${HeroBG})`,
              backgroundSize: 'cover',
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-row w-full min-h-screen bg-HeroSection bg-fixed bg-cover bg-no-repeat justify-center items-center px-36" />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5} factor={1}>
            <div className="flex flex-row w-full min-h-screen justify-center items-center px-36">
              <div className="flex flex-col w-1/2 text-gray-200 gap-10">
                <div className="text-5xl font-black tracking-[0.2em] leading-snug">
                  Hizkia Jeremmy
                  <br />
                  Krisna Ananta
                </div>
                <div className="text-2xl font-bold tracking-widest">
                  Personal Website Portfolio
                </div>
              </div>
              <div className="flex flex-col w-1/2"></div>
            </div>
          </ParallaxLayer>
        </Parallax> */}

        {/* <div className="flex flex-row w-full min-h-screen">Coming Soon</div> */}
      </div>
    </MainLayout>
  );
};

export default Home;
