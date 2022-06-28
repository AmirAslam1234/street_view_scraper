import React, { useState } from "react";
import "../App.css";
import { AiFillFire, AiFillGift, AiOutlineCheckCircle } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillPlayFill, BsCodeSlash } from "react-icons/bs";
import screen from "../Assets/Images/screen.png";
import feature1 from "../Assets/Images/feature1.png";
import feature2 from "../Assets/Images/feature2.png";
import feature3 from "../Assets/Images/feature3.png";
import feature4 from "../Assets/Images/feature4.png";

import FeatureCard from "../Components/FeatureCard";
import Header from "../Components/Header";

import Pricing from "../Components/Pricing";
import GetToKnowUs from "../Components/GetToKnowUs";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Header />

      {/* HERO SECTION  */}
      <section>
        <div className="w-full flex flex-col lg:flex-row bg-emerald-500 h-screen">
          {/* LEFT HAND SIDE  */}
          <div className="w-full lg:w-1/2 flex justify-center items-center pt-10 lg:pt-0">
            <img className="w-2/3" src={screen} alt="" />
          </div>

          {/* RIGHT HAND SIDE  */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left px-5 lg:px-0 lg:pr-10">
            <h1 className=" text-white text-3xl lg:text-5xl pt-10 lg:pt-0 lg:py-5 font-bold">
              Manage your business strategy in one placeholder
            </h1>
            <p className="text-white py-5">
              Our passion to work hard and deliver excellent results. It could
              solve the needs of your customers and develop innovation. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
            <div className="w-full flex justify-center lg:justify-start space-x-5">
              <button className="px-6 py-3 flex items-center text-white hover:text-black text-sm bg-gray-800 hover:bg-white rounded-md">
                <AiFillFire
                  size="1.3em"
                  color="orange"
                  className="mr-2 self-center"
                />{" "}
                Get Started
              </button>
              <button className="px-6 flex items-center text-white text-sm rounded-md">
                <span className=" bg-white hover:bg-black flex justify-center items-center rounded-full border-white mr-3">
                  <BsFillPlayFill
                    color="orange"
                    size="2em"
                    className="self-center m-1"
                  />
                </span>{" "}
                Watch Videos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TOP FEATURES  */}
      <section>
        <div className="w-full px-5 md:px-0 md:p-10 bg-gray-100">
          <div className="w-full py-10 flex text-center justify-center items-center">
            <h2 className=" text-3xl md:text-4xl font-semibold">
              Our Top Features
            </h2>
          </div>

          <div className="w-full pb-20">
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 md:gap-10 md:m-6 text-center">
              {/* cards */}
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
            </ul>
          </div>
        </div>
      </section>

      {/* Services offered  */}
      <section>
        <div className="w-full flex flex-col lg:flex-row py-20">
          {/* LEFT HAND SIDE  */}
          <div className="w-full lg:w-1/2 flex justify-center items-center pb-10 lg:pb-0 lg:pt-10">
            <img className="w-full lg:w-5/6" src={feature1} alt="" />
          </div>

          {/* RIGHT HAND SIDE  */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left px-5 lg:px-0 lg:pr-10 space-y-10">
            {/* SERVICE 1  */}
            <div className="w-full flex px-5 lg:px-10">
              {/* left side or icon side  */}
              <div className="h-full  ">
                {/* icon bg  */}
                <div className="mr-7 py-1 px-1 bg-emerald-500 rounded-tl-none hover:rounded-tl-full transition-all ease-in-out duration-500 rounded-r-full text-white rounded-b-full rounded-l-full w-fit">
                  <BiPhoneCall size="2em" className="m-4" />
                </div>
              </div>

              {/* right or heading side  */}
              <div className="w-full">
                {" "}
                <h2 className="text-xl font-bold py-2">Free Calling Service</h2>
                <p>
                  Plan ahead by day, week, or month, and see project status at a
                  glance. Search and filter to focus in on anything form a
                  single project to an individual person's workload.
                </p>
              </div>
            </div>

            {/* SERVICE 2  */}
            <div className="w-full flex px-5 lg:px-10">
              {/* left side or icon side  */}
              <div className="h-full  ">
                {/* icon bg  */}
                <div className="mr-7 py-1 px-1 bg-blue-500 rounded-tl-none hover:rounded-tl-full transition-all ease-in-out duration-500 rounded-r-full text-white rounded-b-full rounded-l-full w-fit">
                  <AiFillGift size="2em" className="m-4" />
                </div>
              </div>

              {/* right or heading side  */}
              <div className="w-full">
                {" "}
                <h2 className="text-xl font-bold py-2">Daily Free Gift</h2>
                <p>
                  Plan ahead by day, week, or month, and see project status at a
                  glance. Search and filter to focus in on anything form a
                  single project to an individual person's workload.
                </p>
              </div>
            </div>

            {/* SERVICE 3  */}
            <div className="w-full flex px-5 lg:px-10">
              {/* left side or icon side  */}
              <div className="h-full  ">
                {/* icon bg  */}
                <div className="mr-7 py-1 px-1 bg-orange-500 rounded-tl-none hover:rounded-tl-full transition-all ease-in-out duration-500 rounded-r-full text-white rounded-b-full rounded-l-full w-fit">
                  <BsCodeSlash size="2em" className="m-4" />
                </div>
              </div>

              {/* right or heading side  */}
              <div className="w-full">
                {" "}
                <h2 className="text-xl font-bold py-2">QR Code Scanner</h2>
                <p>
                  Plan ahead by day, week, or month, and see project status at a
                  glance. Search and filter to focus in on anything form a
                  single project to an individual person's workload.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More to discover 1 */}
      <section className="py-20 bg-gray-100">
        <div className="w-full text-center flex flex-col items-center">
          <h2 className="text-4xl font-bold pb-5">More To Discover</h2>
          <p className="w-1/2 lg:pb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque
            reprehenderit maxime totam blanditiis molestias laborum nam, dolores
            quo provident.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row ">
          {/* LEFT HAND SIDE  */}
          <div className="w-full lg:w-1/2 flex justify-center items-center pb-10 lg:pb-0 pt-10 lg:pt-0">
            <img className="w-full" src={feature2} alt="" />
          </div>

          {/* RIGHT HAND SIDE  */}
          <div className="w-full lg:w-1/2 flex flex-col px-5 lg:px-0 lg:pr-10">
            {/* SERVICE 1  */}
            <div className="w-full flex flex-col items-center lg:items-start pb-2">
              {/* icon bg  */}
              <div className="mr-7 py-1 px-1 bg-emerald-500 rounded-full text-white w-fit">
                <p className="px-2 py-1">01</p>
              </div>
            </div>

            {/* right or heading side  */}
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              {" "}
              <h2 className="text-xl font-bold py-2">Getting Started Page</h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur ea voluptate harum unde alias? Assumenda atque hic
                mollitia? Pariatur, mollitia.
              </p>
              {/* points  */}
              <div className="w-full space-y-2 pt-5">
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
              </div>
              <button className="px-6 py-4 mt-10 flex items-center text-white hover:text-white text-sm bg-gray-800 hover:bg-emerald-500 rounded-md">
                <AiFillFire
                  size="1.3em"
                  color="orange"
                  className="mr-2 self-center"
                />{" "}
                Record More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* More to discover 2 */}
      <section className="lg:pt-10 bg-gray-100">
        <div className="w-full flex flex-col-reverse lg:flex-row ">
          {/* Left HAND SIDE  */}
          <div className="w-full lg:w-1/2 flex flex-col px-5 lg:px-10">
            {/* SERVICE 1  */}
            <div className="w-full pt-10 lg:pt-0 flex flex-col items-center lg:items-start pb-2">
              {/* icon bg  */}
              <div className="mr-7 py-1 px-1 bg-emerald-500 rounded-full text-white w-fit">
                <p className="px-2 py-1">02</p>
              </div>
            </div>

            {/* left or heading side  */}
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-start">
              {" "}
              <h2 className="text-xl font-bold py-2">
                Outdated Comments Toggling
              </h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur ea voluptate harum unde alias? Assumenda atque hic
                mollitia? Pariatur, mollitia.
              </p>
              {/* points  */}
              <div className="w-full space-y-2 pt-5">
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
              </div>
              <button className="px-6 py-4 mt-10 flex items-center text-white hover:text-white text-sm bg-gray-800 hover:bg-emerald-500 rounded-md">
                <AiFillFire
                  size="1.3em"
                  color="orange"
                  className="mr-2 self-center"
                />{" "}
                Record More
              </button>
            </div>
          </div>

          {/* Right HAND SIDE  */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img className="w-full" src={feature3} alt="" />
          </div>
        </div>
      </section>

      {/* More to discover 3 */}
      <section className="lg:pt-10 pb-20 bg-gray-100">
        <div className="w-full flex flex-col lg:flex-row ">
          {/* LEFT HAND SIDE  */}
          <div className="w-full lg:w-1/2 flex justify-center items-center pt-10 lg:pt-0">
            <img className="w-full" src={feature4} alt="" />
          </div>

          {/* RIGHT HAND SIDE  */}
          <div className="w-full pt-10 lg:pt-0 lg:w-1/2 flex flex-col px-5 lg:px-10">
            {/* SERVICE 1  */}
            <div className="w-full flex flex-col items-center lg:items-start pb-2">
              {/* icon bg  */}
              <div className="mr-7 py-1 px-1 bg-emerald-500 rounded-full text-white w-fit">
                <p className="px-2 py-1">03</p>
              </div>
            </div>

            {/* right or heading side  */}
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
              {" "}
              <h2 className="text-xl font-bold py-2">
                Code Review Illustrators
              </h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur ea voluptate harum unde alias? Assumenda atque hic
                mollitia? Pariatur, mollitia.
              </p>
              {/* points  */}
              <div className="w-full space-y-2 pt-5">
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
              </div>
              <button className="px-6 py-4 mt-10 flex items-center text-white hover:text-white text-sm bg-gray-800 hover:bg-emerald-500 rounded-md">
                <AiFillFire
                  size="1.3em"
                  color="orange"
                  className="mr-2 self-center"
                />{" "}
                Record More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 achievements  */}
      <section className="w-full lg:mt-0 pb-10 px-5 text-center lg:px-10 py-20">
        <div className="flex justify-around space-y-10 lg:space-y-0 flex-wrap w-full">
          <div className="w-full lg:w-60 flex flex-col items-center">
            <div className="bg-gray-100 p-5 rounded-full mb-2 lg:mb-5">
              <AiOutlineCheckCircle size="2.3em" color="#10B981" />
            </div>
            <h2 className="text-2xl text-red-500 pb-2 font-bold">850+</h2>
            <p className="text-center">Completed Projects</p>
          </div>

          <div className="w-full lg:w-60 flex flex-col items-center">
            <div className="bg-gray-100 p-5 rounded-full mb-2 lg:mb-5">
              <AiOutlineCheckCircle size="2.3em" color="#10B981" />
            </div>
            <h2 className="text-2xl text-red-500 pb-2 font-bold">5000+</h2>
            <p className="text-center">Happy Clients</p>
          </div>

          <div className="w-full lg:w-60 flex flex-col items-center">
            <div className="bg-gray-100 p-5 rounded-full mb-2 lg:mb-5">
              <AiOutlineCheckCircle size="2.3em" color="#10B981" />
            </div>
            <h2 className="text-2xl text-red-500 pb-2 font-bold">120+</h2>
            <p className="text-center">On Going Projects</p>
          </div>

          <div className="w-full lg:w-60 flex flex-col items-center">
            <div className="bg-gray-100 p-5 rounded-full mb-2 lg:mb-5">
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

      {/* TESTIMONIALS  */}
      <section>
        <Testimonials />
      </section>

      <section>
        <Pricing />
      </section>

      <section className="py-20">
        <GetToKnowUs />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
