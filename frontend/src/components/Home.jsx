import React from "react";
import LeftSidebar from "./LeftSidebar";
import MainFeedSection from "./MainFeedSection";
import RightSidebar from "./RightSidebar";

const Home = () => {
  return (
    <div className="flex justify-between md:w-[60%] mx-auto my-2 ">
      <LeftSidebar />
      <MainFeedSection />
      <RightSidebar />
    </div>
  );
};

export default Home;
