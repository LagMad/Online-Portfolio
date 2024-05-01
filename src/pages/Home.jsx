import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HeroBG from "../assets/SchotivalOnStage.png";
import SVGs from "../components/shared/SVGs";
import Portrait from "../assets/WhoAmI.jpeg";
import Button from "../components/ui/Button";
import WhoAmICard from "../components/shared/WhoAmICard";
import PITBEM from "../assets/PITBEM.jpeg";
import SSWebBEM from "../assets/SSWebBEM.png";
import SideView from "../assets/SideView.jpeg";
import CreativeDesign from "../assets/CreativeDesign.jpeg";
import FinalPitching from "../assets/FinalPitching.jpeg";
import BusinessMeet from "../assets/FirstBusinessMeet.jpeg";
import Abdimasa from "../assets/Abdimasa.png";
import PKKMB from "../assets/PKKMBTEXT.png";
import TSA from "../assets/LogoTSAUB.png";
import Tentang from "../assets/TentangBEM.png";
import FitMeal from "../assets/FitMeal.png";

const Home = () => {
  const navigate = useNavigate();
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
      <div className="flex flex-col min-h-screen gap-28">
        {/* HERO SECTION */}
        <div
          className="flex flex-row w-full min-h-screen bg-HeroSection bg-fixed bg-cover bg-no-repeat justify-between items-center px-36 font-Poppins text-white"
          ref={containerRef}
        >
          <div className="flex flex-col w-2/5 gap-10">
            <div className="text-5xl font-black tracking-[0.2em] leading-snug">
              Hizkia <span className="text-cust-orange">Jeremmy</span>
              <br />
              Krisna Ananta
            </div>
          </div>
          <div className="w-1/5" />
          <div className="flex flex-col w-2/5 justify-center items-end gap-8">
            <div className="text-2xl font-bold tracking-widest text-right">
              Front-End Web Developer
              <br />
              Informatics Engineering Student
              <br />
              of Brawijaya University
            </div>
          </div>
        </div>

        {/* WHO AM I? */}
        <div className="flex flex-col w-full h-auto justify-center items-center gap-10 px-36 py-10 -mt-[112px] text-white bg-cust-darker-blue">
          <div className="flex flex-row w-full justify-center items-center gap-28">
            <div className="flex flex-col w-1/3 overflow-hidden items-end">
              <img
                className="w-[400px] h-[500px] object-cover object-center rounded-lg"
                src={Portrait}
                alt="missing img"
              />
            </div>
            <div className="flex flex-col w-2/3 justify-center items-start text-justify gap-7">
              <div className="text-2xl w-full font-black">
                Greetings and Welcome to my portfolio!
              </div>
              <div className="text-lg w-full font-medium">
                The name is{" "}
                <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
                  Hizkia Jeremmy Krisna Ananta
                </span>
                , or in short{" "}
                <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
                  Jeremmy.
                </span>{" "}
                I am an{" "}
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
                It has been a never ending learning about technology for me as
                it is{" "}
                <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
                  my passion.
                </span>
              </div>
              <div className="text-lg w-full font-medium">
                In this online portfolio, you will know more about me. There
                will be parts where you will know my journey, activites,
                projects, more skills, and how to connect with me.
              </div>
              <div className="flex flex-col w-full justify-center items-start gap-3">
                <div className="text-lg font-medium w-full">
                  See my other online portfolio
                </div>
                <button
                  className="flex flex-col group justify-center items-center gap-2 bg-transparent hover:bg-cust-orange rounded-lg px-2 py-2 transform transition-all duration-500 ease-in-out"
                  onMouseEnter={() => handleHover("github", true)}
                  onMouseLeave={() => handleHover("github", false)}
                  onClick={() => {
                    window.open("https://github.com/LagMad"), "_blank";
                  }}
                >
                  <SVGs.GitHub width="50px" height="50px" fillColor={"white"} />
                  <div className="flex justify-center items-center overflow-hidden">
                    <div className="transform transition-all duration-500 ease-in-out -translate-y-5 group-hover:translate-y-0 text-black group-hover:text-white">
                      GitHub
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto justify-center items-center px-36 gap-10">
          <div className="flex flex-col font-black text-5xl px-7 py-3 bg-cust-darker-blue text-white text-center gap-3">
            <div>
              Did <span className="bg-cust-orange py-[2.25px]">You</span> Know?
            </div>
            <div className="text-3xl">
              I can't stop seeking a way to learn more things.
            </div>
          </div>
          <div className="flex flex-row gap-20 justify-center items-center">
            <div className="text-lg w-2/3 font-medium text-justify">
              Discovering new thing and realizing I love said thing have always
              been a big part of my life. The first time I jumped into Front-End
              web development was when I joined BEM FILKOM UB 2023. I joined
              them with only basic HTML and CSS knowledge with high willingness
              to learn. I remember (and will always remember) the first task I
              got there. It was just a simple section of BEM FILKOM 2023 web's
              homepage. It took me the whole evening time to make my first ever
              section using Javascript React and Tailwind CSS. I didn't even
              sleep until I finished it and it was 8AM at the time. It wasn't
              because I was chase by deadline, but it was because I was so into
              what I work on and my curiosity was pumping to know more about it.
              From this experience of mine, I see myself as someone who is full
              of curiosity and a hard working person. I will never stop working
              until my work is done.
            </div>
            <img
              className="w-1/3 object-cover object-center rounded-lg"
              src={SideView}
              alt="missing img"
            />
          </div>
          <div className="flex flex-row gap-20 justify-center items-center">
            <img
              className="w-1/3 h-[400px] object-cover object-bottom rounded-lg"
              src={FinalPitching}
              alt="missing img"
            />
            <div className="text-lg w-2/3 font-medium text-justify">
              Although my skill in Front-End web development has grown
              significantly ever since that day, my full of curious and hard
              working traits never vanished. I always try to find myself a place
              where I can grow. Not only just for my soft skills, but also the
              hard ones. Just like here on this picture of mine, I was on an
              internship final pitching of the selection series to enter one of
              the communities in my faculty. Just like when I was working on my
              first ever project on previous paragraph, I still don't know when
              to stop when working on something I like. For almost a month me
              and my team were working to make a website and I was the only
              Front-End developer on my team simply because the rule was to only
              have one person for each role. I just don't want to sleep when I
              was working on this project. I need to get my goals done before I
              sleep. The result? Unfortunately, I didn't get accepted into that
              community, but still I can't be more proud of myself because I
              know I have given my best for it. Even my friends saw my hardworks
              and they were surprise how I didn't get accepted. But hey, it
              isn't the end of the world when you didn't get accepted into
              something, right? Of course, it is NOT.
            </div>
          </div>
          <div className="flex flex-row gap-20 justify-center items-center">
            <div className="text-lg w-2/3 font-medium text-justify">
              Just after the final pitching finished, one of my friend contacted
              me for a new project. At the time, I was still tired from one
              month of working on that internship selection series, but I see a
              big opportunity on this new project. It's still about website
              development, but this time, I'm making it for a multinational
              company working on export and import of spices. Now that's a leap
              I want to see. A bigger project, bigger responsibility, and now
              I've jumped into the professional world. By the time I made this
              portfolio, I'm still working on this website and soon my website
              will be presented to other companies in a conference in Vietnam.
            </div>
            <img
              className="w-1/3 h-[400px] object-cover object-center rounded-lg"
              src={BusinessMeet}
              alt="missing img"
            />
          </div>
          <div className="w-10/12 text-2xl text-center font-semibold py-5 px-10 rounded-2xl bg-cust-darker-blue text-white">
            I just can't stop and I will never stop learning. Just like a
            mythical bird, Garuda. In some interpretations, Garuda is said to
            possess immense power and is capable of flying continuously without
            ever needing to land, except when it dies.
          </div>
        </div>

        {/* ACTIVITIES */}
        <div className="flex flex-col w-full min-h-screen justify-start items-center">
          <div className="flex w-full flex-col text-9xl font-black group text-white overflow-hidden">
            <div className="text-left bg-cust-darker-blue px-36 py-10">
              <div className="transform transition-all duration-500 ease-in-out group-hover:translate-x-[100px]">
                HIGHLIGHTED
              </div>
            </div>
            <div className="text-right bg-cust-orange px-36 py-10">
              <div className="transform transition-all duration-500 ease-in-ou group-hover:-translate-x-[100px]">
                ACTIVITIES
              </div>
            </div>
          </div>
          <div className="w-full gap-10">
            <div className="flex flex-col w-full justify-center items-center gap-16">
              <div className="flex flex-col w-full justify-center items-center gap-10">
                <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-BEM bg-cover bg-no-repeat bg-center gap-5">
                  <div className="text-8xl font-black">BEM FILKOM UB 2023</div>
                  <div className="text-xl font-semibold">
                    Staff of Information and Technology Bureau
                  </div>
                </div>
                <div className="flex flex-row w-full justify-center items-start gap-24 px-36">
                  <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                    <div className="text-5xl font-bold text-left leading-snug">
                      Providing website needed
                      <br />
                      for BEM FILKOM 2023.
                    </div>
                    <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                    <div className="text-lg font-medium text-left">
                      As a member of Information and Technology Bureau (PIT), it
                      is our job to provide the technology needed, like website,
                      for any BEM FILKOM's needs, from open recruitment,
                      announcement, to introducing the new cabinet management.
                      {/* A
                    one period use web and keep updated throughout the period,
                    BEM FILKOM 2023's website is the pride and joy of
                    Information and Technology Bureau.*/}
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
                      className="w-full h-[400px] object-cover object-center"
                      src={PITBEM}
                      alt="missing img"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full justify-center items-center gap-10">
                <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-TSA-UB bg-cover bg-no-repeat bg-center gap-5">
                  <div className="text-8xl font-black">TSA BRAWIJAYA</div>
                  <div className="text-xl font-semibold">
                    Head of Creative Design Department
                  </div>
                </div>
                <div className="flex flex-row w-full justify-center items-start gap-24 px-36">
                  <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                    <div className="text-5xl font-bold text-left leading-snug">
                      Got any digital design or editing needs? You got us!
                    </div>
                    <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                    <div className="text-lg font-medium text-left">
                      As a member of Information and Technology Bureau (PIT), it
                      is our job to provide the technology needed, like website,
                      for any BEM FILKOM's needs, from open recruitment,
                      announcement, to introducing the new cabinet management.
                      {/* A
                    one period use web and keep updated throughout the period,
                    BEM FILKOM 2023's website is the pride and joy of
                    Information and Technology Bureau.*/}
                    </div>
                    <div className="flex flex-col text-lg text-left justify-start items-start">
                      <div className="">
                        <span className="font-bold">Role :</span> Head
                        Department
                      </div>
                      <div className="">
                        <span className="font-bold">Team Size :</span> 9
                      </div>
                      <div className="">
                        <span className="font-bold">Period :</span> 2024 -
                        Current
                      </div>
                    </div>
                    <Button
                      variation={"primary-rectangle"}
                      type={"button"}
                      onClick={() => {
                        window.open("https://instagram.com/tsa_brawijaya"),
                          "_blank";
                      }}
                    >
                      Go To TSA Brawijaya's Instagram
                    </Button>
                  </div>
                  <div className="flex flex-col w-1/2 justify-center items-center gap-10">
                    <img
                      className="w-full h-[400px] object-cover object-center"
                      src={CreativeDesign}
                      alt="missing img"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full justify-center items-center px-36 gap-10">
                <div className="text-center text-4xl font-bold text-white bg-cust-darker-blue py-3 px-8 border-2 border-cust-orange rounded-2xl">
                  Other Activities
                </div>
                <div className="flex flex-row w-full justify-between items-center text-white gap-10 font-bold">
                  <div className="flex flex-col w-1/3 h-[500px] justify-center items-center bg-cust-darker-blue px-8 py-8 border-4 border-cust-orange rounded-2xl gap-5">
                    <img className="w-72" src={Abdimasa} alt="Missing Image" />
                    <div className="text-center text-xl">FILKOM ABDIMASA</div>
                  </div>
                  <div className="flex flex-col w-1/3 h-[500px] justify-center items-center bg-cust-darker-blue px-8 py-8 border-4 border-cust-orange rounded-2xl gap-5">
                    <img className="w-72" src={PKKMB} alt="Missing Image" />
                    <div className="text-center text-xl">
                      PKKMB & STARTUP ACADEMY
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3 h-[500px] justify-center items-center bg-cust-darker-blue px-8 py-8 border-4 border-cust-orange rounded-2xl gap-5">
                    <img className="w-72" src={TSA} alt="Missing Image" />
                    <div className="text-center text-xl">TSA BRAWIJAYA</div>
                  </div>
                </div>
                <Button
                  variation={"primary-rectangle"}
                  onClick={() => navigate("/activities")}
                >
                  Other Activities
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="flex flex-col w-full min-h-screen justify-start items-center pb-20">
          <div className="flex w-full flex-col text-9xl font-black group text-white overflow-hidden">
            <div className="text-left bg-cust-darker-blue px-36 py-10">
              <div className="transform transition-all duration-500 ease-in-out group-hover:translate-x-[100px]">
                HIGHLIGHTED
              </div>
            </div>
            <div className="text-right bg-cust-orange px-36 py-10">
              <div className="transform transition-all duration-500 ease-in-ou group-hover:-translate-x-[100px]">
                PROJECTS
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-16">
            <div className="flex flex-col w-full justify-center items-center gap-10">
              <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-WebAgroIndo bg-cover bg-no-repeat bg-center gap-5">
                <div className="text-8xl font-black">AGROINDO WEBSITE</div>
                <div className="text-xl font-semibold">
                  Export and Import Spice Company
                </div>
              </div>
              <div className="flex flex-row w-full justify-center items-start gap-24 px-36">
                <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                  <div className="text-5xl font-bold text-left leading-snug">
                    Multinational Spices Needs
                  </div>
                  <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                  <div className="text-lg font-medium text-left">
                    AgroIndo is a company based in Malang which specialized in
                    exporting and importing spices across countries. My job here
                    is to create a website that fullfils the company need from
                    advertising their products to make it easy for buyer to
                    contact the company.
                  </div>
                  <div className="flex flex-col text-lg text-left justify-start items-start">
                    <div className="">
                      <span className="font-bold">Role :</span> Front-End Web
                      Developer
                    </div>
                    <div className="">
                      <span className="font-bold">Team Size :</span> 3
                    </div>
                    <div className="">
                      <span className="font-bold">Period :</span> On-Going
                    </div>
                  </div>
                  <Button
                    variation={"primary-rectangle"}
                    type={"button"}
                    onClick={() => {
                      window.open("/"), "_blank";
                    }}
                    disabled={true}
                  >
                    Coming Soon..!
                  </Button>
                </div>
                <div className="flex flex-col w-1/2 justify-center items-center gap-10">
                  <img
                    className="w-full h-[400px] object-cover object-center"
                    src={BusinessMeet}
                    alt="missing img"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-10">
              <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-WebBEM bg-cover bg-no-repeat bg-center gap-5">
                <div className="text-8xl font-black">BEM FILKOM WEBSITE</div>
                <div className="text-xl font-semibold">
                  Executive Organization of FILKOM UB
                </div>
              </div>
              <div className="flex flex-row w-full justify-center items-start gap-24 px-36">
                <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                  <div className="text-5xl font-bold text-left leading-snug">
                    A General Use Website
                    <br />
                    for BEM FILKOM
                  </div>
                  <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                  <div className="text-lg font-medium text-left">
                    A one period use web and keep updated throughout the period
                    used from introduction, information, to administration needs
                    for BEM FILKOM. BEM FILKOM 2023's website is the pride and
                    joy of Information and Technology Bureau.
                  </div>
                  <div className="flex flex-col text-lg text-left justify-start items-start">
                    <div className="">
                      <span className="font-bold">Role :</span> Front-End Web
                      Developer
                    </div>
                    <div className="">
                      <span className="font-bold">Team Size :</span> 9
                    </div>
                    <div className="">
                      <span className="font-bold">Period :</span> 2023
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
                    className="w-full h-[400px] object-cover object-left"
                    src={Tentang}
                    alt="missing img"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center px-36 gap-10">
              <div className="text-center text-4xl font-bold text-white bg-cust-darker-blue py-3 px-8 border-2 border-cust-orange rounded-2xl">
                Other Projects
              </div>
              <div className="flex flex-row w-full justify-between items-center text-white gap-10 font-bold">
                <div className="flex flex-col w-1/3 h-[500px] justify-center items-center bg-cust-darker-blue px-8 py-8 border-4 border-cust-orange rounded-2xl gap-5">
                  <img className="w-72" src={Abdimasa} alt="Missing Image" />
                  <div className="text-center text-xl">DESA PUNTEN WEBSITE</div>
                </div>
                <div className="flex flex-col w-1/3 h-[500px] justify-center items-center bg-cust-darker-blue px-8 py-8 border-4 border-cust-orange rounded-2xl gap-5">
                  <img className="w-72" src={PKKMB} alt="Missing Image" />
                  <div className="text-center text-xl">
                    SIMABA FILKOM
                  </div>
                </div>
                <div className="flex flex-col w-1/3 h-[500px] justify-center items-center bg-cust-darker-blue px-8 py-8 border-4 border-cust-orange rounded-2xl gap-5">
                <img className="w-72" src={FitMeal} alt="Missing Image" />
                  <div className="text-center text-xl">FITMEAL</div>
                </div>
              </div>
              <Button
                variation={"primary-rectangle"}
                onClick={() => navigate("/projects")}
              >
                Other Projects
              </Button>
            </div>
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