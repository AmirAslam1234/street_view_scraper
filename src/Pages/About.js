import React from "react";
import GetToKnowUs from "../Components/GetToKnowUs";
import Header from "../Components/Header";
import aboutimg from "../Assets/Images/about-img.jpg";
import { AiOutlineCheckCircle } from "react-icons/ai";

function About() {
  return (
    <div>
      <Header />

      <section>
        <div className="w-full flex flex-col justify-center items-center h-96 bg-emerald-500 text-white text-5xl">
          <h2>About Us</h2>
          <p className="text-2xl pt-3">The Spectators Story</p>
        </div>
      </section>

      {/* More to discover 2 */}
      <section className="py-20 ">
        <div className="w-full flex flex-col lg:flex-row ">
          {/* Left HAND SIDE  */}
          <div className="w-full lg:w-1/2 flex flex-col px-5 lg:pl-20">
            <p className=" text-emerald-500 py-1">How We Are Featured</p>

            {/* left or heading side  */}
            <div className="w-full">
              {" "}
              <h2 className="text-4xl font-bold py-3">
                Take Your Business To The Next Level
              </h2>
              <p className="text-gray-500 pb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur ea voluptate harum unde alias? Assumenda atque hic
                mollitia? Pariatur, mollitia.
              </p>
              <p className="text-gray-500 pb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur ea.
              </p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur ea voluptate harum unde alias? Assumenda atque hic
                mollitia? Pariatur, mollitia.
              </p>
            </div>
          </div>

          {/* Right HAND SIDE  */}
          <div className="w-full lg:w-1/2 flex justify-center items-center pt-10 lg:pt-0">
            <img className="w-10/12" src={aboutimg} alt="" />
          </div>
        </div>
      </section>

      {/* 4 achievements  */}
      <section className="w-full lg:mt-0 pb-10 px-5 text-center lg:px-10 py-20 bg-gray-100">
        <div className="flex justify-around space-y-10 lg:space-y-0 flex-wrap w-full">
          <div className="w-full lg:w-60 flex flex-col items-center">
            <div className="bg-white p-5 rounded-full mb-2 lg:mb-5">
              <AiOutlineCheckCircle size="2.3em" color="#10B981" />
            </div>
            <h2 className="text-2xl text-red-500 pb-2 font-bold">850+</h2>
            <p className="text-center">Completed Projects</p>
          </div>

          <div className="w-full lg:w-60 flex flex-col items-center">
            <div className="bg-white p-5 rounded-full mb-2 lg:mb-5">
              <AiOutlineCheckCircle size="2.3em" color="#10B981" />
            </div>
            <h2 className="text-2xl text-red-500 pb-2 font-bold">5000+</h2>
            <p className="text-center">Happy Clients</p>
          </div>

          <div className="w-full lg:w-60 flex flex-col items-center">
            <div className="bg-white p-5 rounded-full mb-2 lg:mb-5">
              <AiOutlineCheckCircle size="2.3em" color="#10B981" />
            </div>
            <h2 className="text-2xl text-red-500 pb-2 font-bold">120+</h2>
            <p className="text-center">On Going Projects</p>
          </div>

          <div className="w-full lg:w-60 flex flex-col items-center">
            <div className="bg-white p-5 rounded-full mb-2 lg:mb-5">
              <AiOutlineCheckCircle size="2.3em" color="#10B981" />
            </div>
            <h2 className="text-2xl text-red-500 pb-2 font-bold">50+</h2>
            <p className="text-center">Awards Won</p>
          </div>
        </div>

        {/* BANNER red2  */}
        <div className="w-full flex justify-center">
          <div className="border w-10/12 mt-10 lg:mt-20 py-5 px-5 md:px-10 md:h-32 flex flex-col lg:flex-row lg:justify-between items-center justify-center">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold pb-2 text-center lg:text-left">
                  Have Any Questions about us ?
                </h2>
                <p className="text-sm text-gray-500 text-center lg:text-left">
                  Don't hesitate to contact us
                </p>
              </div>
            </div>

            <button className="text-white flex self-center lg:mt-2 bg-emerald-500 hover:bg-red-500 font-medium text-sm px-10 rounded py-3 mt-3 md:mt-0">
              Contact us
            </button>
          </div>
        </div>
      </section>

      <GetToKnowUs />
    </div>
  );
}

export default About;
