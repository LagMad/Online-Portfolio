import React from "react";

import MainLayout from "../components/layout/MainLayout";
import Hero from "./Home/Sections/Hero";
import WhoAmI from "./Home/Sections/WhoAmI";
import DidYouKnow from "./Home/Sections/DidYouKnow";
import Activities from "./Home/Sections/Activities";
import Projects from "./Home/Sections/Projects";

const Home = () => {
  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen gap-10 md:gap-28">
        <Hero />
        <WhoAmI />
        <DidYouKnow />
        <Activities />
        <Projects />
      </div>
    </MainLayout>
  );
};

export default Home;