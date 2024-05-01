import React from "react";
import MainLayout from "../components/layout/MainLayout";
import SVGs from "../components/shared/SVGs";

const ConnectWithMe = () => {
  return (
    <MainLayout>
      <div className="flex flex-row w-full">
        <div className="flex flex-row w-1/2 min-h-screen bg-WithCat bg-cover bg-no-repeat bg-bottom" />
        <div className="flex flex-col w-1/2 min-h-screen bg-cust-darker-blue pt-20 justify-center items-start pr-36 pl-10 text-white gap-10">
          <div className="text-5xl font-black leading-tight">
            Linking Hearts,
            <br />
            Sharing Paths.
          </div>
          <hr className="border-2 border-cust-orange bg-cust-orange rounded-full h-1 w-full " />
          <div className="flex flex-col text-semibold text-lg gap-6 text-justify">
            <div>
              In our journey of growth and success, connecting hearts and
              sharing paths fosters understanding and unity, propelling us
              forward together towards collective achievement.
            </div>
            <div>
              If you're inspired to explore this synergy further, I'm here to
              connect and collaborate with you on our shared journey.
            </div>
            <div className="flex flex-row w-full justify-start items-center gap-5">
              <SVGs.Email fillColor="white" width="35" height="35" />
              <div>hizkiajeremmy@gmail.com</div>
            </div>
            <div className="flex flex-row w-full justify-start items-center gap-5">
              <button
                className="flex flex-col group justify-center items-center gap-2 bg-transparent hover:bg-cust-orange rounded-lg px-2 py-2 transform transition-all duration-500 ease-in-out"
                onClick={() => {
                  window.open("https://github.com/LagMad"), "_blank";
                }}
              >
                <SVGs.GitHub width="50px" height="50px" fillColor={"white"} />
                <div className="flex justify-center items-center overflow-hidden">
                  <div className="transform transition-all duration-500 ease-in-out -translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 text-black group-hover:text-white">
                    GitHub
                  </div>
                </div>
              </button>
              <button
                className="flex flex-col group justify-center items-center gap-2 bg-transparent hover:bg-cust-orange rounded-lg px-2 py-2 transform transition-all duration-500 ease-in-out"
                onClick={() => {
                  window.open("https://instagram.com/hizkiajeremmy"), "_blank";
                }}
              >
                <SVGs.Instagram
                  width="50px"
                  height="50px"
                  fillColor={"white"}
                />
                <div className="flex justify-center items-center overflow-hidden">
                  <div className="transform transition-all duration-500 ease-in-out -translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 text-black group-hover:text-white">
                    Instagram
                  </div>
                </div>
              </button>
              <button
                className="flex flex-col group justify-center items-center gap-2 bg-transparent hover:bg-cust-orange rounded-lg px-2 py-2 transform transition-all duration-500 ease-in-out"
                onClick={() => {
                  window.open("https://linkedin.com/in/hizkiajeremmy"),
                    "_blank";
                }}
              >
                <SVGs.LinkedIn width="50px" height="50px" fillColor={"white"} />
                <div className="flex justify-center items-center overflow-hidden">
                  <div className="transform transition-all duration-500 ease-in-out -translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 text-black group-hover:text-white">
                    LinkedIn
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ConnectWithMe;