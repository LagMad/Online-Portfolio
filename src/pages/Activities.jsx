import React, { useRef, useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import BusinessMeet from "../assets/FirstBusinessMeet.jpeg";
import SSWebBEM from "../assets/SSWebBEM.png";
import DesaPunten from "../assets/DesaPunten_SS.png";
import FinalPitching from "../assets/FinalPitching.jpeg";
import PIT from "../assets/PIT-Comprof.jpeg";
import Abdimasa from "../assets/AbdimasaTeam.jpeg";
import SIMABA from "../assets/SIMABA_SS_Info.png";
import SchotivalExplaining from "../assets/TanotoSchotival.jpeg";
import SchotivalTogether from "../assets/SchotivalTogether_alt.png";
import TsaExternal from "../assets/TsaExternal.jpeg";
import CreativeDesign from "../assets/CreativeDesign.jpeg";
import AgroIndoMeet from "../assets/AgroIndoMeet.jpeg";
import PMKGabungan from "../assets/PMK-PdGabungan.jpeg";
import FGTSPresenting from "../assets/FGTSPresenting.jpeg";
import InauSecurity from "../assets/InauSecurity.jpeg";

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
        <div className="flex flex-col w-full justify-center items-center gap-10 pb-10">
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-TSA-UB bg-cover bg-no-repeat bg-bottom gap-5">
              <div className="text-8xl font-black">TSA BRAWIJAYA</div>
              <div className="text-xl font-semibold">
                Tanoto Scholars Association of Brawijaya University
              </div>
            </div>
            <div className="flex flex-row w-full justify-center items-start gap-24 px-36">
              <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                <div className="text-5xl font-bold text-left leading-snug">
                  A Community for TELADAN Scholarship Awardee
                </div>
                <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                <div className="text-lg font-medium text-justify">
                  TSA UB serves as an internal organization within Brawijaya
                  University, providing a networking platform and facilitating
                  the development of skills for TELADAN Scholars Awardees.
                </div>
                <div className="flex flex-col text-lg text-left justify-start items-start">
                  <div className="flex flex-col justify-center items-start w-full gap-5">
                    <div className="flex flex-col justify-center items-start w-full">
                      <div>
                        <span className="font-bold">Role :</span> Staff of
                        External Division
                      </div>
                      <div>
                        <span className="font-bold">Period :</span> 2023
                      </div>
                      • Responsible for TSA UB’s graphic design and
                      documentation needs.
                    </div>
                    <div className="flex flex-col justify-center items-start w-full">
                      <div>
                        <span className="font-bold">Role :</span> Head of
                        Creative Design Department
                      </div>
                      <div>
                        <span className="font-bold">Period :</span> 2024 -
                        Current
                      </div>
                      • Responsible for coordinating staffs member for every
                      creative design department’s working program, such as new
                      logo, year book, id cards, after movie, and design queue.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-1/2 justify-center items-center gap-10">
                <img
                  className="w-full h-[400px] object-cover object-center rounded-2xl drop-shadow-2xl"
                  src={TsaExternal}
                  alt="missing img"
                />
                <img
                  className="w-full h-[400px] object-cover object-center rounded-2xl drop-shadow-2xl"
                  src={CreativeDesign}
                  alt="missing img"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-FirstBusinessMeet bg-cover bg-no-repeat bg-center gap-5">
              <div className="text-8xl font-black">AGROINDO DEVTEAM</div>
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
                    <span className="font-bold">Period :</span> Current
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-1/2 justify-center items-center gap-10">
                <img
                  className="w-full h-[400px] object-cover object-center rounded-2xl drop-shadow-2xl"
                  src={AgroIndoMeet}
                  alt="missing img"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-PIT-TO bg-cover bg-no-repeat bg-center gap-5">
              <div className="text-8xl font-black">BEM FILKOM NAWASENA</div>
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
                <div className="flex flex-col gap-3 text-lg font-medium text-justify">
                  <div>
                    BEM FILKOM UB is an executive organization within FILKOM
                    Brawijaya University which purpose is to execute many
                    working program within BEM FILKOM itself to have positive
                    impact around them.
                  </div>
                  <div>
                    As a member of Information and Technology Bureau (PIT), it
                    is our job to provide the technology needed, like website,
                    for any BEM FILKOM's needs, from open recruitment,
                    announcement, to introducing the new cabinet management.
                  </div>
                </div>
                <div className="flex flex-col text-lg text-left justify-start items-start">
                  <div className="">
                    <span className="font-bold">Role :</span> Staff of
                    Information and Technology Bureau (PIT) || Front-End Web
                    Developer
                  </div>
                  <div className="">
                    <span className="font-bold">Period :</span> 2023
                  </div>
                  • Responsible for BEM FILKOM UB 2023 website development as a
                  Front-End Developer using Javascript React
                  <br />• Responsible for one of Information and Technology
                  Bureau’s working program, IT NOW, which provides technological
                  information and knowledge through BEM FILKOM UB’s social media
                </div>
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
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-PK2Cat bg-cover bg-no-repeat bg-center gap-5">
              <div className="text-8xl font-black">PKKMB & STARTUP ACADEMY</div>
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
                  PKKMB and Startup Academy is an event within FILKOM which
                  focuses on new student’s orientation about FILKOM UB itself.
                  PKKMB and Startup Academy events consists of introducing
                  FILKOM UB’s environments, competitions made for new students,
                  to FILKOM Inauguration.
                </div>
                <div className="flex flex-col text-lg text-left justify-start items-start">
                  <div className="">
                    <span className="font-bold">Role :</span> Staff of
                    Information and Technology Division (PIT) || Front-End Web
                    Developer
                  </div>
                  <div className="">
                    <span className="font-bold">Period :</span> 2023
                  </div>
                  • Responsible for PKKMB and Startup Academy’s website
                  development as a Front-End Developer using TypeScript React
                  <br />• PKKMB and Startup Academy’s website, SIMABA, works as
                  a platform where new students get information about any event
                  within PKKMB and Startup Academy itself and submitting their
                  tasks. It’s purpose is also to make help other division tasks
                  easier. For example, Quality Control Division in giving tasks
                  and scoring new student’s submission.
                </div>
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
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-AbdimasaDesa bg-cover bg-no-repeat bg-center gap-5">
              <div className="text-8xl font-black">FILKOM ABDIMASA</div>
              <div className="text-xl font-semibold">Tourism Guide Website</div>
            </div>
            <div className="flex flex-row w-full justify-center items-start gap-24 px-36">
              <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                <div className="text-5xl font-bold text-left leading-snug">
                  Helping Tourists And Locals Alike
                </div>
                <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                <div className="text-lg font-medium text-justify">
                  FILKOM ABDIMASA is one of BEM FILKOM’s working program which
                  focuses on helping local village to advertise their businesses
                  through website development. In 2023 FILKOM ABDIMASA, we
                  helped Desa Punten, which located in Batu, Malang, and made
                  them a website for them to use.
                </div>
                <div className="flex flex-col text-lg text-left justify-start items-start">
                  <div className="">
                    <span className="font-bold">Role :</span> Staff of
                    Development Team || Front-End Web Developer
                  </div>
                  <div className="">
                    <span className="font-bold">Period :</span> 2023
                  </div>
                  • Responsible for Desa Punten’s website development as a
                  Front-end using wordpress website template.
                </div>
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
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-FitMealTeam bg-cover bg-no-repeat bg-center gap-5">
              <div className="text-8xl font-black">BCC INTERNSHIP</div>
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
                    <span className="font-bold">Period :</span> Feb - Mar 2024
                  </div>
                  • Responsible for FitMeal's website development as a Front-End
                  developer using Javascript with React and Tailwind CSS as the
                  framework.
                </div>
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
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-SchotivalOnStage bg-cover bg-no-repeat bg-center gap-5">
              <div className="text-8xl font-black">SCHOTIVAL</div>
              <div className="text-xl font-semibold">Scholarship Festival</div>
            </div>
            <div className="flex flex-row w-full justify-center items-start gap-24 px-36">
              <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                <div className="text-5xl font-bold text-left leading-snug">
                  Scholarship Showroom for College Students
                </div>
                <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                <div className="text-lg font-medium text-justify">
                  Schotival, or Scholarship Festival, is one of BEM FILKOM’s
                  working program which focuses on providing scholarship
                  information for university students in Malang. The event
                  itself consists of a talk show and scholarship information
                  booth for audiences to ask about scholarship to many
                  scholarship program’s awardees.
                </div>
                <div className="flex flex-col text-lg text-left justify-start items-start">
                  <div className="">
                    <span className="font-bold">Role :</span> Moderator
                  </div>
                  <div className="">
                    <span className="font-bold">Period :</span> Sept 2023
                  </div>
                  • Leading the talk show in Schotival and discuss about
                  scholarship with Schotival’s source person.
                </div>
                <div className="flex flex-col text-lg text-left justify-start items-start">
                  <div className="">
                    <span className="font-bold">Role :</span> Booth Informant
                    for Tanoto Foundation’s TELADAN Scholarship
                  </div>
                  <div className="">
                    <span className="font-bold">Period :</span> Sept 2023
                  </div>
                  • Provides information for anyone asking about TELADAN
                  Scholarship.
                </div>
              </div>
              <div className="flex flex-col w-1/2 justify-center items-center gap-10">
                <img
                  className="w-full h-[400px] object-cover object-center rounded-2xl drop-shadow-2xl"
                  src={SchotivalExplaining}
                  alt="missing img"
                />
                <img
                  className="w-full h-[400px] object-cover object-center rounded-2xl drop-shadow-2xl"
                  src={SchotivalTogether}
                  alt="missing img"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-PMKDaniel bg-cover bg-no-repeat bg-center gap-5">
              <div className="text-8xl font-black">PMK DANIEL</div>
              <div className="text-xl font-semibold">
                Christian Organization of FILKOM UB
              </div>
            </div>
            <div className="flex flex-row-reverse w-full justify-center items-start gap-24 px-36">
              <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                <div className="text-5xl font-bold text-left leading-snug">
                  A Place For Christian Students To Grow
                </div>
                <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                <div className="text-lg font-medium text-justify">
                  PMK Daniel or Persekutuan Mahasiswa Kristen Daniel is a
                  community for christian students within FILKOM UB to commute.
                  PMK Daniel not only provides christian students in FILKOM UB
                  to pray and worship together according to christian beliefs,
                  but also to bond and help each other in daily life.
                </div>
                <div className="flex flex-col text-lg text-left justify-start items-start">
                  <div className="">
                    <span className="font-bold">Role :</span> Head of Minat,
                    Bakat, dan Misi Pelayanan Division
                  </div>
                  <div className="">
                    <span className="font-bold">Period :</span> 2024
                  </div>
                  • Coordinating the talents needed to lead the pray and
                  worship.
                  <br />• Coordinating the bonding events, such as PMK Sehat.
                  <br />• Helping fellow christian students who wants to study
                  together, academically and non-academically.
                </div>
              </div>
              <div className="flex flex-col w-1/2 justify-center items-center gap-10">
                <img
                  className="w-full h-[350px] object-cover object-center rounded-2xl drop-shadow-2xl"
                  src={PMKGabungan}
                  alt="missing img"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-FGTSTogether bg-cover bg-no-repeat bg-center gap-5">
              <div className="text-8xl font-black">FILKOM GOES TO SCHOOL</div>
              <div className="text-xl font-semibold">Visiting High Schools</div>
            </div>
            <div className="flex flex-row w-full justify-center items-start gap-24 px-36">
              <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                <div className="text-5xl font-bold text-left leading-snug">
                  Helping High School Students About College
                </div>
                <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                <div className="text-lg font-medium text-justify">
                  FILKOM Goes To School is one of BEM FILKOM’s working program
                  which focuses on promoting FILKOM UB to high school throughout
                  Indonesia. Although it's main purpose was to promote FILKOM
                  UB, we also help high school students by answering questions
                  and giving tips and tricks about college registration, tests,
                  life.
                </div>
                <div className="flex flex-col text-lg text-left justify-start items-start">
                  <div className="">
                    <span className="font-bold">Role :</span> Volunteer for
                    Magelang City
                  </div>
                  <div className="">
                    <span className="font-bold">Period :</span> 2023
                  </div>
                  • Responsible for promoting FILKOM UB throughout highschools
                  in Magelang, Central Java.
                </div>
              </div>
              <div className="flex flex-col w-1/2 justify-center items-center gap-10">
                <img
                  className="w-full h-[400px] object-cover object-center rounded-2xl drop-shadow-2xl"
                  src={FGTSPresenting}
                  alt="missing img"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center w-full py-60 text-white bg-InauTeam bg-cover bg-no-repeat bg-center gap-5">
              <div className="text-8xl font-black">INAUGURASI FILKOM</div>
              <div className="text-xl font-semibold">
                By New Students, For New Students
              </div>
            </div>
            <div className="flex flex-row-reverse w-full justify-center items-start gap-24 px-36">
              <div className="flex flex-col w-1/2 justify-center items-start gap-5">
                <div className="text-5xl font-bold text-left leading-snug">
                  Newbies To Fully Become Family Of FILKOM UB
                </div>
                <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
                <div className="text-lg font-medium text-justify">
                  FILKOM UB Inauguration is an event in FILKOM Brawijaya
                  University which purporse is to inaugurate new students of
                  FILKOM UB and change their new student status into a full
                  student just like the rest of students in FILKOM UB. The
                  events within FILKOM UB Inauguration itself consists of
                  competition awarding, many entertaining shows, and also the
                  peak of PKKMB & Startup Academy of FILKOM UB 2022.
                </div>
                <div className="flex flex-col text-lg text-left justify-start items-start">
                  <div className="">
                    <span className="font-bold">Role :</span> Co-Head of
                    Security Division
                  </div>
                  <div className="">
                    <span className="font-bold">Period :</span> 2022
                  </div>
                  • Ensuring the security of the audiences and guests throughout
                  the event
                  <br />• Responsible for audiences and guests mobility
                  <br />• Coordinating security team
                </div>
              </div>
              <div className="flex flex-col w-1/2 justify-center items-center gap-10">
                <img
                  className="w-full h-[400px] object-cover object-top rounded-2xl drop-shadow-2xl"
                  src={InauSecurity}
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

export default Activities;
