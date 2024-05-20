import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ScrollToTop from "./ScrollToTop";

const MainLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-white text-black font-Poppins">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
