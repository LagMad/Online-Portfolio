import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/ui/Button";
import BusinessMeet from "../../../assets/FirstBusinessMeet.jpeg";
import Tentang from "../../../assets/TentangBEM.png";
import Abdimasa from "../../../assets/Abdimasa.png";
import PKKMB from "../../../assets/PKKMBTEXT.png";
import FitMeal from "../../../assets/FitMeal.png";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full min-h-screen justify-start items-center pb-20">
      <div className="flex w-full flex-col text-4xl md:text-9xl font-black group text-white overflow-hidden">
        <div className="text-left bg-cust-darker-blue px-6 sm:px-10 md:px-20 lg:px-36 py-10">
          <div className="transform transition-all duration-500 ease-in-out group-hover:translate-x-[100px]">
            HIGHLIGHTED
          </div>
        </div>
        <div className="text-right bg-cust-orange px-6 sm:px-10 md:px-20 lg:px-36 py-10">
          <div className="transform transition-all duration-500 ease-in-ou group-hover:-translate-x-[100px]">
            PROJECTS
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-16">
        <div className="flex flex-col w-full justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-WebAgroIndo bg-cover bg-no-repeat bg-center gap-5 px-10">
            <div className="text-3xl sm:text-5xl md:text-8xl font-black text-center">
              AGROINDO WEBSITE
            </div>
            <div className="text-base md:text-xl font-semibold text-center">
              Export and Import Spice Company
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-center items-start gap-10 md:gap-24 px-6 sm:px-10 md:px-20 lg:px-36">
            <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start gap-5">
              <div className="text-2xl md:text-5xl font-bold text-center md:text-left leading-snug">
                Multinational Spices Needs
              </div>
              <hr className="bg-black opacity-50 w-full md:w-1/2 h-1 rounded-full" />
              <div className="text-base md:text-lg font-medium text-justify md:text-left">
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
            <div className="flex flex-col w-full md:w-1/2 justify-center items-center gap-10">
              <img
                className="w-full h-72 md:h-[400px] object-cover object-center rounded-2xl"
                src={BusinessMeet}
                alt="missing img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-WebBEM bg-cover bg-no-repeat bg-center gap-5 px-10">
            <div className="text-3xl sm:text-5xl md:text-8xl font-black text-center">
              BEM FILKOM WEBSITE
            </div>
            <div className="text-base md:text-xl font-semibold text-center">
              Executive Organization of FILKOM UB
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-center items-start gap-10 md:gap-24 px-6 sm:px-10 md:px-20 lg:px-36">
            <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start gap-5">
              <div className="text-2xl md:text-5xl font-bold text-center md:text-left leading-snug">
                A General Use Website
                <br />
                for BEM FILKOM
              </div>
              <hr className="bg-black opacity-50 w-full md:w-1/2 h-1 rounded-full" />
              <div className="text-base md:text-lg font-medium text-justify md:text-left">
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
            <div className="flex flex-col w-full md:w-1/2 justify-center items-center gap-10">
              <img
                className="w-full h-auto md:h-[400px] object-cover object-left rounded-2xl"
                src={Tentang}
                alt="missing img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center px-10 md:px-36 gap-10">
          <div className="text-center text-4xl font-bold text-white bg-cust-darker-blue py-3 px-8 border-2 border-cust-orange rounded-2xl">
            Other Projects
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between items-center text-white gap-10 font-bold">
            <div className="flex flex-col w-full md:w-1/3 h-auto md:h-[500px] justify-center items-center bg-cust-darker-blue px-8 py-8 border-4 border-cust-orange rounded-2xl gap-5">
                  <img className="w-72" src={Abdimasa} alt="Missing Image" />
                  <div className="text-center text-xl">DESA PUNTEN WEBSITE</div>
                </div>
              <div className="flex flex-col w-full md:w-1/3 h-auto md:h-[500px] justify-center items-center bg-cust-darker-blue px-8 py-8 border-4 border-cust-orange rounded-2xl gap-5">
                <img className="w-72" src={PKKMB} alt="Missing Image" />
                <div className="text-center text-xl">SIMABA FILKOM</div>
              </div>
              <div className="flex flex-col w-full md:w-1/3 h-auto md:h-[500px] justify-center items-center bg-cust-darker-blue px-8 py-8 border-4 border-cust-orange rounded-2xl gap-5">
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
  );
};

export default Projects;
