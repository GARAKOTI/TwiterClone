import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPersonHearts } from "react-icons/bs";
import { FaBell, FaBook, FaCode, FaEnvelope, FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { BsFeather } from "react-icons/bs";

const LeftSidebar = () => {
  return (
    <div className="min-h-screen lg:border-r-2 ">
      <div className="p-4 rounded-[50%] lg:rounded-full hover:bg-gray-100 items-center  lg:flex-start justify-center px-3">
        <img
          width={30}
          className="object-contain "
          src="/public/X.png"
          alt=""
        />
      </div>

      <div>
        <div className="flex gap-2 items-center my-2 p-4 hover:bg-gray-200 rounded-full">
          <p className="text-3xl">
            <AiFillHome />
          </p>
          <h1 className=" hidden lg:flex font-bold">Home</h1>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center my-2 p-4 hover:bg-gray-200 rounded-full">
          <p className="text-3xl">
            <FaSearch />
          </p>
          <h1 className=" hidden lg:flex font-bold">Explore</h1>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center my-2 p-4 hover:bg-gray-200 rounded-full">
          <p className="text-3xl">
            <FaBell />
          </p>
          <h1 className=" hidden lg:flex font-bold">Notifications</h1>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center my-2 p-4 hover:bg-gray-200 rounded-full">
          <p className="text-3xl">
            <FaEnvelope />
          </p>
          <h1 className=" hidden lg:flex font-bold">Messages</h1>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center my-2 p-4 hover:bg-gray-200 rounded-full">
          <p className="text-3xl">
            <FaCode />
          </p>
          <h1 className=" hidden lg:flex font-bold">Grok</h1>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center my-2 p-4 hover:bg-gray-200 rounded-full">
          <p className="text-3xl">
            <FaBook />
          </p>
          <h1 className=" hidden lg:flex font-bold">Lists</h1>
        </div>
      </div>

      <div>
        <div className="flex gap-2 items-center my-2 p-4 hover:bg-gray-200 rounded-full">
          <p className="text-3xl">
            <BsPersonHearts />
          </p>
          <h1 className=" hidden lg:flex font-bold">Communication</h1>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center my-2 p-4 hover:bg-gray-200 rounded-full">
          <span className="rounded-full">
            <img
              className="object-fill"
              width={25}
              src="/public/X.png"
              alt=""
            />
          </span>
          <h1 className=" hidden lg:flex font-bold">Premium</h1>
        </div>
      </div>
      <div>
        <div className="flex gap-2 items-center my-2 p-4 hover:bg-gray-200 rounded-full">
          <p className="text-3xl">
            <IoPerson />
          </p>
          <h1 className=" hidden lg:flex font-bold">Profile</h1>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start rounded-full">
        <span className="text-3xl lg:hidden hover:bg-blue-400 p-2 rounded-full">
          <BsFeather />
        </span>
        <button className="hidden lg:flex  bg-blue-400  items-center justify-center px-20 py-3 rounded-full hover:opacity-[0.8] ">
          Post
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
