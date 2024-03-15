import React from "react";
import Avatar from "react-avatar";
import { FaRegHeart } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { RxLoop } from "react-icons/rx";
import { ImStatsBars } from "react-icons/im";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";

const Tweet = () => {
  return (
    <div>
      <div>
        <div className="flex gap-2 p-2">
          <Avatar
            src="/Gojo.jpeg"
            size="40"
            className="rounded-full object-cover"
          />
          <div className="ml-2 w-full">
            <div className="flex items-center gap-2">
              <h1 className="font-bold">Rahul</h1>
              <p className=" text-gray-500 lowercase ">
                @RahulSinghGarkoti .{"1m"}
              </p>
            </div>
            <div className="mt-2">
              <p>Hello this is Rahul From india</p>
            </div>

            <div className="flex  justify-between text-gray-500">
              <div className="flex gap-1 items-center justify-center ">
                <div className="p-2 rounded-full ">
                  <LuMessageCircle
                    size={20}
                    className="hover:text-yellow-400"
                  />
                </div>
                <p className="text-xs text-gray-500 hover:text-yellow-400 ">
                  1.2k
                </p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <div className="p-2 rounded-full">
                  <RxLoop size={15} className="hover:text-green-500" />
                </div>
                <p className="text-xs text-gray-500 hover:text-green-500">
                  1.2k
                </p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <div className="p-2 rounded-full ">
                  <FaRegHeart size={15} className="hover:text-red-400" />
                </div>
                <p className="text-xs text-gray-500  hover:text-red-400">
                  1.2k
                </p>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <div className="p-2 rounded-full hover:text-blue-300">
                  <ImStatsBars size={15} />
                </div>
                <p className="text-xs text-gray-500 hover:text-blue-300">
                  1.2k
                </p>
              </div>
              <div className="flex gap-2">
                <div className="p-2 rounded-full">
                  <CiBookmark size={15} className=" hover:text-purple-400 " />
                </div>
                <div className="p-2 rounded-full">
                  <FiShare size={15} className=" hover:text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
