import React from "react";
import { AiOutlineCheckCircle, AiFillFire } from "react-icons/ai";

function PricingCard() {
  return (
    <div className="w-96 lg:w-[370px] py-10 bg-white rounded-lg hover:-translate-y-2 hover:duration-500 hover:shadow-lg hover:shadow-emerald-100 ">
      <div className="w-full pl-10 lg:pl-16 text-2xl">
        <p>Free</p>
      </div>
      <div className="w-full flex pl-10 lg:pl-16 py-5 text-2xl">
        <p className="text-sm mr-1">$</p>
        <p className="text-4xl self-end mr-1">0</p>
        <p className="text-gray-500 text-sm mb-1 self-end">/ monthly</p>
      </div>

      <div className="w-full space-y-2 pt-5 pl-14 lg:pl-20">
        {/* point 1  */}
        <div className="flex items-center">
          <div className="text-emerald-500 ">
            <AiOutlineCheckCircle />
          </div>
          <p className=" px-5 text-gray-500">Unique Design</p>
        </div>
        {/* point 2  */}
        <div className="flex items-center">
          <div className="text-emerald-500 ">
            <AiOutlineCheckCircle />
          </div>
          <p className=" px-5 text-gray-500">Unlimited Video Call</p>
        </div>
        {/* point 2  */}
        <div className="flex items-center">
          <div className="text-emerald-500 ">
            <AiOutlineCheckCircle />
          </div>
          <p className="px-5 text-gray-500">Add Favorite Contact </p>
        </div>
        {/* point 2  */}
        <div className="flex items-center">
          <div className="text-emerald-500 ">
            <AiOutlineCheckCircle />
          </div>
          <p className=" px-5 text-gray-500">Camera Filter </p>
        </div>
        {/* point 2  */}
        <div className="flex items-center">
          <div className="text-emerald-500 ">
            <AiOutlineCheckCircle />
          </div>
          <p className=" px-5 text-gray-500">Unique Design</p>
        </div>
        {/* point 2  */}
        <div className="flex items-center">
          <div className="text-emerald-500 ">
            <AiOutlineCheckCircle />
          </div>
          <p className=" px-5 text-gray-500">Unlimited Video Call</p>
        </div>
        {/* point 2  */}
        <div className="flex items-center">
          <div className="text-emerald-500 ">
            <AiOutlineCheckCircle />
          </div>
          <p className="px-5 text-gray-500">Add Favorite Contact </p>
        </div>
        {/* point 2  */}
        <div className="flex items-center">
          <div className="text-emerald-500 ">
            <AiOutlineCheckCircle />
          </div>
          <p className=" px-5 text-gray-500">Camera Filter </p>
        </div>
        {/* point 2  */}
        <div className="flex items-center">
          <div className="text-emerald-500 ">
            <AiOutlineCheckCircle />
          </div>
          <p className=" px-5 text-gray-500">Unique Design</p>
        </div>
      </div>
      <button className="px-6 ml-14 lg:ml-20 py-4 mt-10 flex items-center text-white hover:text-white text-sm bg-gray-800 hover:bg-emerald-500 rounded-md">
        <AiFillFire size="1.3em" color="orange" className="mr-2 self-center" />{" "}
        Try it Free Now
      </button>
    </div>
  );
}

export default PricingCard;
