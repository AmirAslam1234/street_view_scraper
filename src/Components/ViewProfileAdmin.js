import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillTrophy,
  AiFillLike,
  AiOutlineHeart,
  AiTwotoneBell,
} from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BiErrorAlt } from "react-icons/bi";
import { GiAchievement, GiRun, GiAchillesHeel } from "react-icons/gi";

function ViewProfileAdmin() {
  return (
    <div className="flex flex-col w-11/12 justify-start ">
      {/* MAIN BODY  */}
      <div
        className={
          "bg-white flex flex-col lg:flex-row mt-2 rounded-md md:p-4 p-2 shadow-lg"
        }
      >
        {/* LEFT HAND SIDE  */}
        <div className="w-full lg:w-64 lg:mr-5 border-2 rounded-md flex flex-col items-center py-5">
          <div className="w-full flex flex-col items-center">
            <img
              id="image"
              className="object-cover w-20 h-20 md:w-28 md:h-28 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
            />
            <h2 className="pt-4">Jesica Lockheart</h2>

            <h3
              className={
                "text-gray-400 text-sm text-center px-3 md:px-5 pt-2 pb-3"
              }
            >
              “You don't get what you wish for. You get what you work for.” -
              Daniel Milstein
            </h3>

            {/* SOCIAL ICONS  */}
            <div className="flex">
              <AiFillFacebook
                color="blue"
                size="2em"
                className=" self-center "
              />

              <AiFillTwitterSquare
                color="aqua"
                size="2em"
                className=" self-center "
              />
              <AiFillInstagram
                color="deeppink"
                size="2em"
                className=" self-center "
              />
            </div>

            {/* Achievements  */}
            <div className="flex w-full flex-col items-center">
              <div className={"bg-gray-100 w-full text-center px-3 py-3 my-3"}>
                <h2>Achievements</h2>
              </div>

              <div className="flex justify-center items-center space-y-2 px-3 flex-wrap">
                <p></p>
                <GiAchievement
                  color="white"
                  size="2.5em"
                  className="bg-red-600 p-2 mx-2 rounded-full"
                />
                <GiRun
                  color="white"
                  size="2.5em"
                  className="bg-blue-600 p-2 mx-2 rounded-full"
                />
                <GiAchillesHeel
                  color="white"
                  size="2.5em"
                  className="bg-green-600 p-2 mx-2 rounded-full"
                />
                <AiFillTrophy
                  color="white"
                  size="2.5em"
                  className="bg-orange-400 p-2 mx-2 rounded-full"
                />
              </div>
            </div>

            {/* Skills  */}
            <div className="flex w-full flex-col mt-2 items-center">
              <div className={"bg-gray-100 w-full text-center px-3 py-3 my-3"}>
                <h2>Recently Added</h2>
              </div>

              <div className="flex w-full flex-col justify-center items-center space-y-5 px-3 flex-wrap">
                {/* progress bar 1  */}
                <div className="flex items-center text-xs ">
                  <h2>Ali Ahmad - 25/06/2022</h2>
                </div>

                {/* progress bar 2  */}
                <div className="flex items-center text-xs ">
                  <h2>Ali Ahmad - 25/06/2022</h2>
                </div>

                {/* progress bar 3  */}
                <div className="flex items-center text-xs ">
                  <h2>Ali Ahmad - 25/06/2022</h2>
                </div>

                {/* progress bar 4  */}
                <div className="flex items-center text-xs ">
                  <h2>Ali Ahmad - 25/06/2022</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT HAND SIDE  */}
        <div className="w-full lg:w-[70%] mt-10 h lg:mt-0">
          {/* cards  */}
          <div className="w-full flex flex-col items-center md:flex-row flex-wrap md:items-start">
            {/* card 1  */}
            <div className="border-2 w-full md:w-[45%] flex py-5 pr-5 md:mr-5 rounded shadow-lg">
              <div className=" flex px-5 justify-center items-center">
                <div className="rounded-full bg-blue-200 px-3 py-3 flex justify-center items-center">
                  <AiTwotoneBell color="blue" size="1.3em" />
                </div>
              </div>

              <div>
                <h2 className={"text-gray-500"}>Subscriptions</h2>
                <h3 className={"font-bold text-lg"}>19</h3>
              </div>
            </div>

            {/* card 2  */}
            <div className="border-2 w-full md:w-[45%] flex py-5 pr-5 md:mr-5 rounded shadow-lg">
              <div className=" flex px-5 justify-center items-center">
                <div className="rounded-full bg-green-200 px-3 py-3 flex justify-center items-center">
                  <BsFillHandThumbsUpFill color="green" size="1.3em" />
                </div>
              </div>
              <div>
                <h2 className={"text-gray-500"}>Liked</h2>
                <h3 className={" font-bold text-lg"}>45</h3>
              </div>
            </div>

            {/* card 3  */}
            <div className="border-2 w-full md:w-[45%] flex py-5 pr-5 md:mr-5 rounded shadow-lg mt-5">
              <div className=" flex px-5 justify-center items-center">
                <div className="rounded-full bg-yellow-200 px-3 py-3 sm:h-1/2 lg:h-3/4 flex justify-center items-center">
                  <BiErrorAlt
                    color="orange"
                    size="1.3em"
                    className="self-center"
                  />
                </div>
              </div>
              <div>
                <h2 className={"text-gray-500"}>Expired</h2>
                <h3 className={"font-bold text-lg"}>3</h3>
              </div>
            </div>
          </div>
          <div className="overflow-y-auto">
            {/* COMMENTS 1 */}
            <div
              className={"bg-white w-full flex rounded-md py-3 mt-5 border-2"}
            >
              <div className="px-5 py-3 w-40 md:w-32">
                <img
                  id="image"
                  className="object-cover w-8 h-8 md:w-18 md:h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                />
              </div>

              {/* right hand comments side  */}
              <div className="flex flex-col">
                <div className="flex pt-2">
                  <h2 className={"text-gray-800 font-bold self-center mr-3"}>
                    Ali Ahmad
                  </h2>
                  <p className="text-xs text-gray-400 self-center">
                    2 days ago
                  </p>
                </div>

                <p className={"text-gray-400 text-sm pr-3 pt-2 "}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero minima necessitatibus error nobis? Iusto ducimus
                  deserunt reiciendis assumenda. Itaque, voluptates!
                </p>

                <p className={"text-gray-400 text-sm pr-3 pt-2 "}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero minima
                </p>

                <p className="text-sm text-blue-500 pr-3 pt-2 ">
                  #Books #Studies #Coding
                </p>

                <div className="flex space-x-5 py-3  text-gray-500">
                  <p className="flex">
                    <AiOutlineHeart
                      color={"gray"}
                      className="mr-1 self-center"
                    />{" "}
                    30
                  </p>

                  <p className="flex">
                    <AiFillLike color={"gray"} className="mr-1 self-center" />{" "}
                    41
                  </p>
                </div>
              </div>
            </div>

            {/* COMMENTS 2 */}
            <div
              className={
                "bg-white w-full flex rounded-md py-3 mt-5 border-2 shadow-lg"
              }
            >
              <div className="px-5 py-3 w-40 md:w-32">
                <img
                  id="image"
                  className="object-cover w-8 h-8 md:w-18 md:h-18 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                />
              </div>

              {/* right hand comments side  */}
              <div className="flex flex-col">
                <div className="flex pt-2">
                  <h2 className={"text-gray-800 font-bold self-center mr-3"}>
                    Ali Ahmad
                  </h2>
                  <p className="text-xs text-gray-400 self-center">
                    2 days ago
                  </p>
                </div>

                <p className={"text-gray-400 text-sm pr-3 pt-2 "}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero minima necessitatibus error nobis? Iusto ducimus
                  deserunt reiciendis assumenda. Itaque, voluptates!
                </p>

                <p className={"text-gray-400 text-sm pr-3 pt-2 "}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero minima
                </p>

                <p className="text-sm text-blue-500 pr-3 pt-2 ">
                  #Books #Studies #Coding
                </p>

                <div className="flex space-x-5 py-3  text-gray-500">
                  <p className="flex">
                    <AiOutlineHeart
                      color={"gray"}
                      className="mr-1 self-center"
                    />{" "}
                    137
                  </p>

                  <p className="flex">
                    <AiFillLike color={"gray"} className="mr-1 self-center" />{" "}
                    809
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfileAdmin;
