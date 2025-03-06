import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import SVGs from "./SVGs";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
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
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[9999] w-full h-16 flex justify-between items-center px-10 md:px-36 font-Poppins font-semibold drop-shadow-2xl ${
        isScrolled ? "bg-cust-darker-blue" : "bg-transparent"
      } transition-all duration-500 ease-in-out`}
    >
      {/* <div className="flex justify-between w-full items-center"> */}
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
      <div className="hidden lg:flex flex-row w-4/6 justify-end items-center gap-16">
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
      <div className="flex lg:hidden flex-row w-1/2 justify-end items-center gap-16">
        <div className="relative flex justify-center items-center">
          <button onClick={toggleDropdown}>
            <SVGs.BurgerMenu width="25" height="25" fillColor="white" />
          </button>
          {isOpen && (
            <ul className="absolute flex flex-col z-[9999] gap-1 right-0 top-16 min-w-[200px] text-center text-white justify-center items-center bg-transparent bg-opacity-40 backdrop-blur-md p-2">
              <li
                className="w-full px-8 py-2 bg-black bg-opacity-40 hover:bg-gray-700 backdrop-blur-md"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              >
                Home
              </li>
              <li
                className="w-full px-8 py-2 bg-black bg-opacity-40 hover:bg-gray-700"
                onClick={() => navigate("/activities")}
                style={{ cursor: "pointer" }}
              >
                Activities
              </li>
              <li
                className="w-full px-8 py-2 bg-black bg-opacity-40 hover:bg-gray-700"
                onClick={() => navigate("/projects")}
                style={{ cursor: "pointer" }}
              >
                Projects
              </li>
              <li
                className="w-full px-8 py-2 bg-black bg-opacity-40 hover:bg-gray-700"
                onClick={() => navigate("/know-more")}
                style={{ cursor: "pointer" }}
              >
                Know More
              </li>
              <li
                className="w-full px-8 py-2 bg-black bg-opacity-40 hover:bg-gray-700"
                onClick={() => navigate("/connect-with-me")}
                style={{ cursor: "pointer" }}
              >
                Connect With Me
              </li>
            </ul>
          )}
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
