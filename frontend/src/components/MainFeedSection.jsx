import React from "react";
import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

const MainFeedSection = () => {
  return (
    <div className="w-[80%] border border-gray-200">
      <CreatePost />
      <Tweet />
    </div>
  );
};

export default MainFeedSection;
