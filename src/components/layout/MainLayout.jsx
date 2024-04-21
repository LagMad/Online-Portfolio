import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white pt-16 text-black font-Poppins">
      {/* <Navbar /> */}
      {children}
      {/* <Footer/> */}
    </div>
  );
};

export default MainLayout;
