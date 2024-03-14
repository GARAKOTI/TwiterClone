import React from "react";
import {
  MdOutlinePoll,
  MdOutlineSettings,
  MdOutlineGifBox,
  MdOutlineLocationOn,
} from "react-icons/md";
import Avatar from "react-avatar";
import { GrGallery } from "react-icons/gr";
import { FiSmile } from "react-icons/fi";
import { RiBookFill } from "react-icons/ri";

const CreatePost = () => {
  return (
    <div className="w-[50%] w-full border-b-[1px]">
      <div className=" w-full">
        <div className="flex items-center justify-between border-b-[1px] ">
          <div className=" cursor-pointer hover:bg-gray-200 w-full py-2 text-center ">
            <h1 className="font-semibold text-gray-600">For You</h1>
          </div>
          <div className="cursor-pointer  hover:bg-gray-200 w-full py-2 text-center ">
            <h1 className="font-semibold text-gray-600">Following</h1>
            <div className="hidden hover: bg-blue-400 mt-1 w-[70px] h-[2px] ml-[35%]"></div>
          </div>
          <div className="cursor-pointer p-2 text-2xl hover:bg-gray-200 rounded-full">
            <MdOutlineSettings />
          </div>
        </div>
        <div className="m-4">
          <div className="  flex items-center">
            <Avatar
              src="/public/Gojo.jpeg"
              size="40"
              round={true}
              className="border object-cover hover:opacity-[0.8]"
            />
            <input
              type="text"
              placeholder="What is happening ? !"
              className="w-full ml-2  text-lg outline-none border-none"
            />
          </div>

          <div className="ml-14 mt-4 mb-2 flex justify-between ">
            <div className="  flex items-center justify-center gap-2 lg:gap-4 text-lg">
              <span className="opacity-[0.6]">
                <GrGallery color="blue" />
              </span>
              <span className="opacity-[0.6]">
                <MdOutlineGifBox color="blue" />
              </span>
              <span className="opacity-[0.6]">
                <MdOutlinePoll color="blue" />
              </span>
              <span className="opacity-[0.6]">
                <FiSmile color="blue" />
              </span>
              <span className="opacity-[0.6]">
                <RiBookFill color="blue" />
              </span>
              <span className="opacity-[0.6]">
                <MdOutlineLocationOn color="blue" />
              </span>
            </div>
            <button className=" bg-blue-400 px-4 py-2 rounded-full text-white text-lg font-semibold text-center">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
