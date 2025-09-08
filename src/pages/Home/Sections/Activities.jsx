import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/ui/Button";
import PITBEM from "../../../assets/PITBEM.jpeg";
import CreativeDesign from "../../../assets/CreativeDesign.jpeg";
import Abdimasa from "../../../assets/Abdimasa.png";
import PKKMB from "../../../assets/PKKMBTEXT.png";
import TSA from "../../../assets/LogoTSAUB.png";

const Activities = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full min-h-screen justify-start items-center">
      <div className="flex w-full flex-col text-4xl md:text-9xl font-black group text-white overflow-hidden">
        <div className="text-left bg-cust-darker-blue px-6 sm:px-10 md:px-20 lg:px-36 py-10">
          <div className="transform transition-all duration-500 ease-in-out group-hover:translate-x-[100px]">
            HIGHLIGHTED
          </div>
        </div>
        <div className="text-right bg-cust-orange px-6 sm:px-10 md:px-20 lg:px-36 py-10">
          <div className="transform transition-all duration-500 ease-in-ou group-hover:-translate-x-[100px]">
            ACTIVITIES
          </div>
        </div>
      </div>
      <div className="w-full gap-10">
        <div className="flex flex-col w-full justify-center items-center gap-16">
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-BEM bg-cover bg-no-repeat bg-center gap-5 px-10">
              <div className="text-3xl sm:text-5xl md:text-8xl font-black text-center">
                BEM FILKOM UB 2023
              </div>
              <div className="text-base md:text-xl font-semibold text-center">
                Staff of Information and Technology Bureau
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-center items-start gap-10 md:gap-24 px-6 sm:px-10 md:px-20 lg:px-36">
              <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start gap-5">
                <div className="text-2xl md:text-5xl font-bold text-center md:text-left leading-snug">
                  Providing website needed
                  <br />
                  for BEM FILKOM 2023.
                </div>
                <hr className="bg-black opacity-50 w-full md:w-1/2 h-1 rounded-full" />
                <div className="text-base md:text-lg font-medium text-justify md:text-left">
                  As a member of Information and Technology Bureau (PIT), it
                  is our job to provide the technology needed, like website,
                  for any BEM FILKOM's needs, from open recruitment,
                  announcement, to introducing the new cabinet management.
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
              <div className="flex flex-col w-full md:w-1/2 justify-center items-center gap-10">
                <img
                  className="w-full h-72 md:h-[400px] object-cover object-center rounded-2xl"
                  src={PITBEM}
                  alt="missing img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-TSA-UB bg-cover bg-no-repeat bg-bottom gap-5 px-10">
              <div className="text-3xl sm:text-5xl md:text-8xl font-black text-center">
                TSA BRAWIJAYA
              </div>
              <div className="text-base md:text-xl font-semibold text-center">
                Head of Creative Design Department
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-center items-start gap-10 md:gap-24 px-6 sm:px-10 md:px-20 lg:px-36">
              <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start gap-5">
                <div className="text-2xl md:text-5xl font-bold text-center md:text-left leading-snug">
                  Got any digital design or editing needs? You got us!
                </div>
                <hr className="bg-black opacity-50 w-full md:w-1/2 h-1 rounded-full" />
                <div className="text-base md:text-lg font-medium text-justify md:text-left">
                  As a member of Information and Technology Bureau (PIT), it
                  is our job to provide the technology needed, like website,
                  for any BEM FILKOM's needs, from open recruitment,
                  announcement, to introducing the new cabinet management.
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
              <div className="flex flex-col w-full md:w-1/2 justify-center items-center gap-10">
                <img
                  className="w-full h-64 md:h-[400px] object-cover object-center rounded-2xl"
                  src={CreativeDesign}
                  alt="missing img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center px-10 md:px-36 gap-10">
            <div className="text-center text-4xl font-bold text-white bg-cust-darker-blue py-3 px-8 border-2 border-cust-orange rounded-2xl">
              Other Activities
            </div>
            <div className="flex flex-col md:flex-row w-full justify-between items-center text-white gap-10 font-bold">
              <div className="flex flex-col w-full md:w-1/3 h-auto md:h-[500px] justify-center items-center bg-cust-darker-blue px-8 py-8 border-4 border-cust-orange rounded-2xl gap-5">
                <img className="w-72" src={Abdimasa} alt="Missing Image" />
                <div className="text-center text-xl">FILKOM ABDIMASA</div>
              </div>
              <div className="flex flex-col w-full md:w-1/3 h-auto md:h-[500px] justify-center items-center bg-cust-darker-blue px-8 py-8 border-4 border-cust-orange rounded-2xl gap-5">
                <img className="w-72" src={PKKMB} alt="Missing Image" />
                <div className="text-center text-xl">
                  PKKMB & STARTUP ACADEMY
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/3 h-auto md:h-[500px] justify-center items-center bg-cust-darker-blue px-8 py-8 border-4 border-cust-orange rounded-2xl gap-5">
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
  );
};

export default Activities;
