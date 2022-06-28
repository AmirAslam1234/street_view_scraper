import React from "react";
import { BsBarChart, BsPersonCheck, BsPersonPlus } from "react-icons/bs";

function MainDashboard() {
  return (
    <div className="flex flex-col min-w-[90%]">
      <div className=" min-w-[90%] h-full flex flex-col md:flex-row items-center md:justify-between md:items-start">
        <div
          className={
            "w-full h-36 md:h-44 lg:h-36 my-5 md:w-[48%] flex flex-col justify-center bg-white shadow-lg text-3xl rounded"
          }
        >
          <div className="w-full px-5 py-5 flex justify-between items-center md:flex-col md:justify-start md:items-start">
            <div className="flex flex-col mt-1">
              <h2 className={"text-gray-900 tracking-wider text-lg font-bold"}>
                Users Registered
              </h2>
              <h3 className="text-gray-400  tracking-wider text-xs font-light">
                Total Number Of Users Registered
              </h3>
            </div>
            <div className="flex w-full justify-between px-0 mt-4">
              <h2 className="text-blue-400 tracking-wider text-lg font-bold">
                24,500
              </h2>
              <BsPersonCheck
                className="bg-blue-800 w-10 h-10 p-2 rounded"
                color="white"
                size="0.6em"
              />
            </div>
          </div>
        </div>
        <div
          className={
            "w-full h-36 md:h-44 lg:h-36 my-5 md:w-[48%] flex flex-col justify-center bg-white shadow-lg text-3xl rounded"
          }
        >
          <div className="w-full px-5 py-5 flex justify-between items-center md:flex-col md:justify-start md:items-start">
            <div className="flex flex-col mt-1">
              <h2 className={"text-gray-900 tracking-wider text-lg font-bold"}>
                Services Available
              </h2>
              <h3 className="text-gray-400  tracking-wider text-xs font-light">
                Total Number Of Services Available
              </h3>
            </div>
            <div className="flex w-full justify-between px-0 mt-4">
              <h2 className="text-blue-400 tracking-wider text-lg font-bold">
                57
              </h2>
              <BsBarChart
                className="bg-green-800 w-10 h-10 p-2 rounded"
                color="white"
                size="0.6em"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "w-full h-36 md:h-44 lg:h-36 my-5 md:w-[48%] flex flex-col justify-center bg-white shadow-lg text-3xl rounded"
        }
      >
        <div className="w-full px-5 py-5 flex justify-between items-center md:flex-col md:justify-start md:items-start">
          <div className="flex flex-col mt-1">
            <h2 className={"text-gray-900 tracking-wider text-lg font-bold"}>
              Premium Users
            </h2>
            <h3 className="text-gray-400  tracking-wider text-xs font-light">
              Total Number Of Users With Premium Subscription
            </h3>
          </div>
          <div className="flex w-full justify-between px-0 mt-4">
            <h2 className="text-blue-400 tracking-wider text-lg font-bold">
              54,700
            </h2>
            <BsPersonPlus
              className="bg-red-700 w-10 h-10 p-2 rounded"
              color="white"
              size="0.6em"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
