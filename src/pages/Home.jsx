import React, { useState, useEffect, useRef } from "react";
import MainLayout from "../components/layout/MainLayout";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HeroBG from "../assets/SchotivalOnStage.png";
import SVGs from "../components/shared/SVGs";
import Portrait from "../assets/WhoAmI.jpeg";
import Button from "../components/ui/Button";
import WhoAmICard from "../components/shared/WhoAmICard";
import PITBEM from "../assets/PITBEM.jpeg";
import SSWebBEM from "../assets/SSWebBEM.png";

const Home = () => {
  const containerRef = useRef(null);
  const [isGitHubHovered, setGitHubHovered] = useState(false);
  const [isGameHovered, setGameHovered] = useState(false);
  const [isMusicHovered, setMusicHovered] = useState(false);
  const [isSpeakHovered, setSpeakHovered] = useState(false);
  const [isTechHovered, setTechHovered] = useState(false);

  const handleHover = (icon, hoverStatus) => {
    switch (icon) {
      case "github":
        setGitHubHovered(hoverStatus);
        break;
      case "game":
        setGameHovered(hoverStatus);
        break;
      case "music":
        setMusicHovered(hoverStatus);
        break;
      case "speak":
        setSpeakHovered(hoverStatus);
        break;
      case "tech":
        setTechHovered(hoverStatus);
        break;
      default:
        break;
    }
  };

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

  const custDarkerBlue = "#001767";
  const custOrange = "#FF9900";

  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen gap-28">
        {/* HERO SECTION */}
        <div
          className="flex flex-row w-full min-h-screen bg-HeroSection bg-fixed bg-cover bg-no-repeat justify-center items-center px-36 font-Poppins text-white"
          ref={containerRef}
        >
          <div className="flex flex-col w-2/5 gap-10">
            <div className="text-5xl font-black tracking-[0.2em] leading-snug">
              Hizkia <span className="text-cust-orange">Jeremmy</span>
              <br />
              Krisna Ananta
            </div>
            <div className="text-2xl font-bold tracking-widest">
              Front-End Web Developer
              <br />
              and Informatics Engineering Student
              <br />
              of Brawijaya University
            </div>
          </div>
          <div className="w-1/5" />
          <div className="flex flex-col w-2/5 justify-center items-center gap-8">
            <div className="text-2xl w-full font-black text-right">
              Greetings and Welcome to my portfolio!
            </div>
            <div className="text-lg w-full font-medium text-right">
              My name is{" "}
              <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
                Jeremmy
              </span>{" "}
              and I am an{" "}
              <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
                informatics engineering
              </span>{" "}
              student of Brawijaya University, Indonesia, and also one of
              TELADAN Leadership Program & Scholarship 2023's{" "}
              <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
                awardee.
              </span>{" "}
              Currently, I am pursuing my interest in{" "}
              <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
                Front-End Development
              </span>{" "}
              on website, but soon I am going to learn more about{" "}
              <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
                application development
              </span>{" "}
              and{" "}
              <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
                artificial intelligence.
              </span>{" "}
              It has been a never ending learning about technology for me as it
              is{" "}
              <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
                my passion.
              </span>
            </div>
            <div className="flex flex-col w-full justify-center items-end gap-3">
              <div className="text-lg font-medium w-full text-right">
                See my other online portfolio
              </div>
              <button
                className="flex flex-col group justify-center items-center gap-2 bg-transparent hover:bg-white rounded-lg px-2 py-1 transform transition-all duration-500 ease-in-out"
                onMouseEnter={() => handleHover("github", true)}
                onMouseLeave={() => handleHover("github", false)}
                onClick={() => {
                  window.open("https://github.com/LagMad"), "_blank";
                }}
              >
                <SVGs.GitHub
                  width="50px"
                  height="50px"
                  fillColor={isGitHubHovered ? custOrange : "white"}
                />
                <div className="flex justify-center items-center overflow-hidden">
                  <div className="transform transition-all duration-500 ease-in-out -translate-y-5 group-hover:translate-y-0 text-black group-hover:text-cust-orange">
                    GitHub
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* WHO AM I? */}
        <div className="flex flex-col w-full min-h-screen justify-start items-center gap-10">
          <div className="text-7xl font-black group">
            <span className="text-cust-darker-blue group-hover:text-cust-orange bg-cust-orange group-hover:bg-cust-darker-blue transition-all duration-500 ease-in-out rounded-l-lg px-4">
              Who
            </span>
            <span className="text-cust-orange group-hover:text-cust-darker-blue bg-cust-darker-blue group-hover:bg-cust-orange transition-all duration-500 ease-in-out rounded-r-lg px-4">
              Am I?
            </span>
          </div>
          <div className="w-1/2 text-center font-semibold text-xl mt-10">
            I, who although an introvert gamer, am a person who's known for
            having the confidence to speak in front of the public that can't
            live a day with no music and passionate about technologies.
          </div>
          <div className="grid grid-cols-2 gap-5 justify-center items-center">
            <WhoAmICard
              name={"Game"}
              title={"Game Enjoyer"}
              description={
                "Gaming has been a big part of my life. I've been playing video games of my life. It has trained from my reaction time, hand-to-eye coordination, to even life moral value."
              }
            />
            <WhoAmICard
              name={"Music"}
              title={"Music as Heart"}
              description={`"If you use a stethoscope and use it on my chest or vein, you can hear a concert" is what I usually say to people about music. I just can't live a day without music.`}
            />
            <WhoAmICard
              name={"Speak"}
              title={"Voice Virtuoso"}
              description={
                "Although born as an introvert, I'm pretty well known for my confidence to speak (and also perform) in front of many audiences."
              }
            />
            <WhoAmICard
              name={"Tech"}
              title={"Tech Savvy"}
              description={
                "I've been messing around with my gadgets, like handphone and computer, since I was just a little boy. The curiosity I have towards technologies, not even I myself understand why is it so high."
              }
            />
          </div>
        </div>

        {/* HIGHLIGHTED ACTIVITIES */}
        <div className="flex flex-col w-full min-h-screen justify-start items-center gap-10">
          <div className="text-7xl font-black group">
            <span className="text-cust-darker-blue group-hover:text-cust-orange bg-cust-orange group-hover:bg-cust-darker-blue transition-all duration-500 ease-in-out rounded-l-lg px-4">
              Highlighted
            </span>
            <span className="text-cust-orange group-hover:text-cust-darker-blue bg-cust-darker-blue group-hover:bg-cust-orange transition-all duration-500 ease-in-out rounded-r-lg px-4">
              Activities
            </span>
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-10">
            <div className="flex flex-col w-full justify-center items-center gap-20">
              <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-BEM bg-cover bg-no-repeat bg-center gap-5">
                <div className="text-8xl font-black">BEM FILKOM UB 2023</div>
                <div className="text-xl font-semibold">
                  Staff of Information and Technology Bureau
                </div>
              </div>
              <div className="flex flex-row w-full justify-center items-start gap-24 px-36">
                <div className="flex flex-col w-1/2 justify-center items-start gap-10">
                  <div className="text-5xl font-bold text-left">
                    Providing website needed
                    <br />
                    for BEM FILKOM 2023.
                  </div>
                  <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                  <div className="text-lg font-medium text-left">
                    As a member of Information and Technology Bureau (PIT), it
                    is our job to provide the technology needed, like website,
                    for any BEM FILKOM's needs, from open recruitment,
                    announcement, to introducing the new cabinet management. A
                    one period use web and keep updated throughout the period,
                    BEM FILKOM 2023's website is the pride and joy of
                    Information and Technology Bureau.
                  </div>
                  <div className="flex flex-col text-lg text-left justify-start items-start">
                    <div className="">
                      <span className="font-bold">Role :</span> Front-End Developer
                    </div>
                    <div className="">
                      <span className="font-bold">Team Size :</span> 9
                    </div>
                  </div>
                  <Button
                    variation={"primary-rectangle"}
                    type={"button"}
                    onClick={() => {
                      window.open("https://bemfilkom.ub.ac.id/"), "_blank";
                    }}
                  >
                    Go To BEM FILKOM 2023's Website
                  </Button>
                </div>
                <div className="flex flex-col w-1/2 justify-center items-center gap-10">
                  <img
                    className="w-full h-[500px] object-cover object-center"
                    src={PITBEM}
                    alt="missing img"
                  />
                  <img
                    className="w-full h-auto object-cover object-center"
                    src={SSWebBEM}
                    alt="missing img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="flex flex-col w-full min-h-screen justify-start items-center">
          <div className="text-7xl font-black group">
            <span className="text-cust-darker-blue group-hover:text-cust-orange bg-cust-orange group-hover:bg-cust-darker-blue transition-all duration-500 ease-in-out rounded-l-lg pl-4">
              Pro
            </span>
            <span className="text-cust-orange group-hover:text-cust-darker-blue bg-cust-darker-blue group-hover:bg-cust-orange transition-all duration-500 ease-in-out rounded-r-lg pr-4">
              jects
            </span>
          </div>
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
