import React from "react";
import { AiTwotoneHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiRun } from "react-icons/bi";

function FeatureCard() {
  return (
    <div>
      <div className="w-72 pt-10 sm:w-[370px] hover:-translate-y-2 hover:duration-500 hover:shadow-lg bg-white rounded-lg shadow-lg shadow-gray-200 flex flex-col items-center">
        <h2 className="text-xl pb-2 font-semibold">Fast And Optimized</h2>
        <p className=" text-gray-400 text-center px-5 pt-2 pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor dolore magna.
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;