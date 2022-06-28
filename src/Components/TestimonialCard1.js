import React from "react";
import { AiFillStar } from "react-icons/ai";

function TestimonialCard1() {
  return (
    <div className="w-full h-fit mt-20 flex bg-white rounded-lg">
      <div className="hidden lg:block px-14 w-96 overflow-visible relative"></div>

      <div className="flex flex-col justify-end lg:justify-center px-5 lg:px-0 text-center lg:text-left py-5">
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo et
          nostrum, assumenda quod ipsam provident expedita beatae, veniam nisi
        </p>
        <div className="flex py-4 justify-center lg:justify-start">
          <AiFillStar color="orange" />
          <AiFillStar color="orange" />
          <AiFillStar color="orange" />
          <AiFillStar color="orange" />
          <AiFillStar color="orange" />
        </div>
        <h2 className=" text-lg font-semibold">Sarah Tayler</h2>
        <p className="text-gray-500 text-sm">CEO at Evata</p>
      </div>
    </div>
  );
}

export default TestimonialCard1;
