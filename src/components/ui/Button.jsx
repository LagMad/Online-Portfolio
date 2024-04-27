import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Button = ({
  variation,
  type,
  children,
  onClick,
  className,
  path,
  disabled = false,
}) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(location.pathname !== "/");

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    setIsScrolled(location.pathname !== "/");
    if (location.pathname === "/") {
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
    }
  }, [location]);

  const getButtonVariation = (variation, path) => {
    switch (variation) {
      case "primary-rectangle":
        return "py-2 md:py-2.5 px-3 md:px-8 bg-cust-darker-blue hover:bg-cust-orange rounded-xl text-white border-transparent border-2 hover:border-cust-darker-blue font-semibold";
      case "secondary-rectangle":
        return "py-2 md:py-2.5 px-3 md:px-8 bg-white hover:bg-cust-orange text-cust-orange hover:text-white rounded-xl font-semibold border-2 border-cust-orange hover:border-2 hover:border-white";
      case "primary-round":
        return "bg-cust-orange hover:bg-white py-3 px-3 rounded-full text-white hover:text-cust-orange border-transparent border-2 hover:border-2 hover:border-white drop-shadow-lg";
      case "secondary-round":
        return "bg-white hover:bg-cust-orange py-3 px-3 text-cust-orange hover:text-white rounded-full";
      case "tertiary-white":
        return `transition-all duration-500 ease-in-out bg-transparent hover:bg-cust-darker-blue px-0 hover:px-5 py-0 hover:py-1 rounded-none ${
          isScrolled ? "" : "hover:rounded-lg"
        } ${
          isActive(path)
            ? "text-cust-orange border-b-cust-orange border-b-2"
            : "text-white hover:text-cust-orange hover:border-b-cust-orange hover:border-b-2"
        }`;
      default:
        return "";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonVariation(variation, path)}
       font-medium text-sm md:text-sm transition-all duration-500 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
