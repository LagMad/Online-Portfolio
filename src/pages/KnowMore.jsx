import React from "react";
import MainLayout from "../components/layout/MainLayout";

const KnowMore = () => {
  return (
    <MainLayout>
      <div className="flex flex-col w-full pt-20">
        <div className="flex flex-row w-full min-h-screen bg-cover bg-no-repeat bg-center">
          Mission Statement
        </div>
        <div className="flex flex-row w-full min-h-screen bg-cover bg-no-repeat bg-center">
          KnowMore
        </div>
      </div>
    </MainLayout>
  );
};

export default KnowMore;
