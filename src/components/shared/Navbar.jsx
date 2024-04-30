import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(location.pathname !== "/");

  useEffect(() => {
    // if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollThreshold = 150;

        if (scrollTop > scrollThreshold) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    // }
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full h-16 flex justify-between items-center px-36 font-Poppins font-semibold drop-shadow-2xl ${
          isScrolled ? "bg-cust-darker-blue" : "bg-transparent"
        } transition-all duration-500 ease-in-out`}
      >
        <div className=" flex justify-between w-full items-center">
          <div
            className={`flex w-2/6 font-RammettoOne text-white justify-start items-center text-3xl`}
          >
            <a href="/">
              <span
                className={`${
                  isScrolled ? "text-cust-orange" : "text-white"
                } transition-all duration-500 ease-in-out`}
              >
                Jer
              </span>
              emmy's
            </a>
          </div>
          <div className="flex flex-row w-4/6 justify-end items-center gap-16">
            <Button
              type={"button"}
              variation={"tertiary-white"}
              path={"/"}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              type={"button"}
              variation={"tertiary-white"}
              path={"/activities"}
              onClick={() => navigate("/activities")}
            >
              Activities
            </Button>

            <Button
              type={"button"}
              variation={"tertiary-white"}
              path={"/projects"}
              onClick={() => navigate("/projects")}
            >
              Projects
            </Button>

            <Button
              type={"button"}
              variation={"tertiary-white"}
              path={"/know-more"}
              onClick={() => navigate("/know-more")}
            >
              Know More
            </Button>
            <Button
              type={"button"}
              variation={"tertiary-white"}
              path={"/connect-with-me"}
              onClick={() => navigate("/connect-with-me")}
            >
              Connect With Me
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
