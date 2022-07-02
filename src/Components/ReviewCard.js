import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function ReviewCard() {
  return (
    <div className="w-full h-fit mx-5 relative md:w-3/5 flex flex-col sm:flex-row bg-white shadow-lg rounded-lg">
      <div className="w-full sm:w-32 p-5 text-center sm:text-left bg-white rounded-l-lg">
        <img
          className="w-full rounded-full"
          src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt=""
        />
      </div>
      <div className="w-full md:w-5/6 py-5 pr-5">
        <div className="flex flex-col pr-5">
          <h2>Jessica Adams</h2>

          <div className="flex py-3">
            <AiFillStar color="orange" />
            <AiFillStar color="orange" />
            <AiFillStar color="orange" />
            <AiFillStar color="orange" />
            <AiOutlineStar color="gray" />

            <p className="text-xs text-gray-500 ml-5">(24 Reviews Total)</p>
          </div>

          <p className="text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse
            aliquid sunt saepe harum eum nemo, repudiandae commodi debitis
            perspiciatis animi quae rem illum delectus autem quod unde repellat
            veritatis!
          </p>
          <div className="w-full flex justify-end">
            <button className="py-2 px-6 text-sm rounded-md bg-emerald-500 hover:bg-emerald-400 text-white mt-5">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
