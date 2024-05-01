import React, { useRef, useState, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import BusinessMeet from "../assets/FirstBusinessMeet.jpeg";
import SSWebBEM from "../assets/SSWebBEM.png";
import DesaPunten from "../assets/DesaPunten_SS.png";
import FinalPitching from "../assets/FinalPitching.jpeg";
import PIT from "../assets/PIT-Comprof.jpeg"
import Abdimasa from "../assets/AbdimasaTeam.jpeg"
import SIMABA from "../assets/SIMABA_SS_Info.png"

const Projects = () => {
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
          className="flex flex-row w-full min-h-screen bg-ProjectsHero bg-fixed bg-cover bg-no-repeat justify-center items-center"
          ref={containerRef}
        >
          <div
            className="text-9xl font-black border-[5px] border-white px-8 py-2 transition-all duration-500 ease-in-out"
            style={{
              WebkitTextStrokeWidth: "5px", // Outline width
              WebkitTextStrokeColor: "white", // Outline color
              color: isHovered ? "white" : "transparent", // Text color
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            PROJECTS
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-10 pb-10">
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-WebAgroIndo bg-cover bg-no-repeat bg-center gap-5">
              <div className="text-8xl font-black">AGROINDO</div>
              <div className="text-xl font-semibold">
                Export and Import Spice Company
              </div>
            </div>
            <div className="flex flex-row-reverse w-full justify-center items-start gap-24 px-36">
              <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                <div className="text-5xl font-bold text-left leading-snug">
                  Multinational Spices Needs
                </div>
                <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                <div className="text-lg font-medium text-justify">
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
                  className="w-full h-[400px] object-cover object-center rounded-2xl drop-shadow-2xl"
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
                <div className="text-lg font-medium text-justify">
                  A one period use web and keep updated throughout the period
                  used from introduction, information, to administration needs
                  for BEM FILKOM. BEM FILKOM 2023's website is the pride and joy
                  of Information and Technology Bureau.
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
                  className="w-full h-[400px] object-cover object-center rounded-2xl drop-shadow-2xl"
                  src={PIT}
                  alt="missing img"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-SIMABA_SS bg-cover bg-no-repeat bg-top gap-5">
              <div className="text-8xl font-black">SIMABA FILKOM</div>
              <div className="text-xl font-semibold">FILKOM UB Orientation</div>
            </div>
            <div className="flex flex-row-reverse w-full justify-center items-start gap-24 px-36">
              <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                <div className="text-5xl font-bold text-left leading-snug">
                  Orientation Website
                  <br />
                  for New Student
                </div>
                <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                <div className="text-lg font-medium text-justify">
                  Used by both new student and organizing committee, SIMABA
                  FILKOM acts as a platform for announcing and gathering
                  orientation information, giving and submitting task, and
                  database of the new students.
                </div>
                <div className="flex flex-col text-lg text-left justify-start items-start">
                  <div className="">
                    <span className="font-bold">Role :</span> Front-End Web
                    Developer
                  </div>
                  <div className="">
                    <span className="font-bold">Team Size :</span> 7
                  </div>
                  <div className="">
                    <span className="font-bold">Period :</span> 2023
                  </div>
                </div>
                <Button
                  variation={"primary-rectangle"}
                  type={"button"}
                  onClick={() => {
                    window.open("simaba-filkom.ub.ac.id"), "_blank";
                  }}
                >
                  Go To SIMABA FILKOM
                </Button>
              </div>
              <div className="flex flex-col w-1/2 justify-center items-center gap-10">
                <img
                  className="w-full h-[350px] object-cover object-center rounded-2xl drop-shadow-2xl"
                  src={SIMABA}
                  alt="missing img"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-DesaPunten_SS bg-cover bg-no-repeat bg-top gap-5">
              <div className="text-8xl font-black">DESA WISATA PUNTEN</div>
              <div className="text-xl font-semibold">Tourism Guide Website</div>
            </div>
            <div className="flex flex-row w-full justify-center items-start gap-24 px-36">
              <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                <div className="text-5xl font-bold text-left leading-snug">
                  Helping Tourists And Locals Alike
                </div>
                <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                <div className="text-lg font-medium text-justify">
                  Desa Punten's website was created to serve as a tourist guide
                  for the local community and visitors who come to the village.
                </div>
                <div className="flex flex-col text-lg text-left justify-start items-start">
                  <div className="">
                    <span className="font-bold">Role :</span> Front-End Web
                    Developer
                  </div>
                  <div className="">
                    <span className="font-bold">Team Size :</span> 4
                  </div>
                  <div className="">
                    <span className="font-bold">Period :</span> 2023
                  </div>
                </div>
                <Button
                  variation={"primary-rectangle"}
                  type={"button"}
                  onClick={() => {
                    window.open("https://desawisatapunten.com/"), "_blank";
                  }}
                >
                  Go To Desa Wisata Punten
                </Button>
              </div>
              <div className="flex flex-col w-1/2 justify-center items-center gap-10">
                <img
                  className="w-full h-[400px] object-cover object-center rounded-2xl drop-shadow-2xl"
                  src={Abdimasa}
                  alt="missing img"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-FITMEAL_SS bg-cover bg-no-repeat bg-center gap-5">
              <div className="text-8xl font-black">FITMEAL</div>
              <div className="text-xl font-semibold">
                Basic Computing Community (BCC) Internship 2024
              </div>
            </div>
            <div className="flex flex-row-reverse w-full justify-center items-start gap-24 px-36">
              <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                <div className="text-5xl font-bold text-left leading-snug">
                  Helping People To Have A Healthy Diet
                </div>
                <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                <div className="text-lg font-medium text-justify">
                  FITMEAL was made because it was an internship project to be
                  selected as the new member of Basic Computing Community (BCC).
                  The website itself was to encourage people, especially college
                  student, to have a better diet or food lifestyle.
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
                    window.open("https://fitmeal-internship-bcc-2024.vercel.app/"), "_blank";
                  }}
                >
                  Go To FITMEAL
                </Button>
              </div>
              <div className="flex flex-col w-1/2 justify-center items-center gap-10">
                <img
                  className="w-full h-[400px] object-cover object-center rounded-2xl drop-shadow-2xl"
                  src={FinalPitching}
                  alt="missing img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
