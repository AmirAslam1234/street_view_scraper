import React, { useState } from "react";
import "./Accordion.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";

function EditCourseAccordion(props) {
  const [Accord, setAccord] = useState(1);

  const toggle = () => {
    if (Accord === 1) {
      return setAccord(null);
    }
    setAccord(1);
  };

  const toggle2 = () => {
    if (Accord === 2) {
      return setAccord(null);
    }
    setAccord(2);
  };

  const toggle3 = () => {
    if (Accord === 3) {
      return setAccord(null);
    }
    setAccord(3);
  };

  const toggle4 = () => {
    if (Accord === 4) {
      return setAccord(null);
    }
    setAccord(4);
  };

  const toggle5 = () => {
    if (Accord === 5) {
      return setAccord(null);
    }
    setAccord(5);
  };

  const toggle6 = () => {
    if (Accord === 6) {
      return setAccord(null);
    }
    setAccord(6);
  };

  return (
    <div className="wrapper flex flex-col space-y-5 w-full items-center">
      {/* Accordion 1  */}
      <div className="accordian">
        <div
          className={
            Accord == 1 ? "item active py-0 w-full" : "item py-0 w-full"
          }
          onClick={() => toggle()}
        >
          <div
            className={
              "bg-purple-50 title cursor-pointer border-2 rounded-md w-full flex items-center space-x-3 px-5 py-3 "
            }
            onClick={() => toggle()}
          >
            <div className="arrow  ">
              {Accord == 1 ? (
                <BsChevronUp
                  className={
                    (props.mode === 1 ? "text-white" : "text-black") +
                    " self-center"
                  }
                />
              ) : (
                <BsChevronDown
                  className={
                    (props.mode === 1 ? "text-white" : "text-black") +
                    " self-center"
                  }
                />
              )}
            </div>
            <h2
              className={
                (props.mode === 1 ? "text-white" : "") + " text-nowrap w-full "
              }
            >
              What access do I have on the free plan ?
            </h2>
          </div>
          <div
            className={
              Accord == 1
                ? "content border-2 rounded-md show w-full px-3 break-all flex justify-between md:py-3 "
                : "content"
            }
          >
            <div className="w-full flex flex-col items-center">
              <p className="text-sm text-gray-500 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dolorem eveniet aspernatur, recusandae illum
                laboriosam ea quo minus. Eius velit sit reiciendis, libero ipsum
                animi voluptas necessitatibus et ratione earum!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion 2  */}
      <div className="accordian">
        <div
          className={Accord == 2 ? "item active py-0" : "item py-0 w-full"}
          onClick={() => toggle2()}
        >
          <div
            className={
              "bg-purple-50 title cursor-pointer border-2 rounded-md w-full flex items-center space-x-3 px-5 py-3 "
            }
            onClick={() => toggle2()}
          >
            <div className="arrow  ">
              {Accord == 2 ? (
                <BsChevronUp
                  className={
                    (props.mode === 1 ? "text-white" : "text-black") +
                    " self-center"
                  }
                />
              ) : (
                <BsChevronDown
                  className={
                    (props.mode === 1 ? "text-white" : "text-black") +
                    " self-center"
                  }
                />
              )}
            </div>
            <h2
              className={
                (props.mode === 1 ? "text-white" : "") + " text-nowrap w-full "
              }
            >
              What access do I have on a free trial ?
            </h2>
          </div>
          <div
            className={
              Accord == 2
                ? "content border-2 rounded-md show w-full px-3 break-all flex justify-between md:py-3 "
                : "content"
            }
          >
            <div className="w-full flex flex-col items-center">
              <p className="text-sm text-gray-500 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dolorem eveniet aspernatur, recusandae illum
                laboriosam ea quo minus. Eius velit sit reiciendis, libero ipsum
                animi voluptas necessitatibus et ratione earum!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion 3  */}
      <div className="accordian">
        <div
          className={Accord == 3 ? "item active py-0" : "item py-0 w-full"}
          onClick={() => toggle3()}
        >
          <div
            className={
              "bg-purple-50 title cursor-pointer border-2 rounded-md w-full flex items-center space-x-3 px-5 py-3 "
            }
            onClick={() => toggle3()}
          >
            <div className="arrow  ">
              {Accord == 3 ? (
                <BsChevronUp
                  className={
                    (props.mode === 3 ? "text-white" : "text-black") +
                    " self-center"
                  }
                />
              ) : (
                <BsChevronDown
                  className={
                    (props.mode === 3 ? "text-white" : "text-black") +
                    " self-center"
                  }
                />
              )}
            </div>
            <h2
              className={
                (props.mode === 3 ? "text-white" : "") + " text-nowrap w-full "
              }
            >
              Does the price go up as the team gets larger ?
            </h2>
          </div>
          <div
            className={
              Accord == 3
                ? "content border-2 rounded-md show w-full px-3 break-all flex justify-between md:py-3 "
                : "content"
            }
          >
            <div className="w-full flex flex-col items-center">
              <p className="text-sm text-gray-500 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dolorem eveniet aspernatur, recusandae illum
                laboriosam ea quo minus. Eius velit sit reiciendis, libero ipsum
                animi voluptas necessitatibus et ratione earum!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion 4  */}
      <div className="accordian">
        <div
          className={Accord == 4 ? "item active py-0" : "item py-0 w-full"}
          onClick={() => toggle4()}
        >
          <div
            className={
              "bg-purple-50 title cursor-pointer border-2 rounded-md w-full flex items-center space-x-3 px-5 py-3 "
            }
            onClick={() => toggle4()}
          >
            <div className="arrow  ">
              {Accord == 4 ? (
                <BsChevronUp
                  className={
                    (props.mode === 4 ? "text-white" : "text-black") +
                    " self-center"
                  }
                />
              ) : (
                <BsChevronDown
                  className={
                    (props.mode === 4 ? "text-white" : "text-black") +
                    " self-center"
                  }
                />
              )}
            </div>
            <h2
              className={
                (props.mode === 4 ? "text-white" : "") + " text-nowrap w-full "
              }
            >
              How can I cancel / Pause my subscription ?
            </h2>
          </div>
          <div
            className={
              Accord == 4
                ? "content border-2 rounded-md show w-full px-3 break-all flex justify-between md:py-3 "
                : "content"
            }
          >
            <div className="w-full flex flex-col items-center">
              <p className="text-sm text-gray-500 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dolorem eveniet aspernatur, recusandae illum
                laboriosam ea quo minus. Eius velit sit reiciendis, libero ipsum
                animi voluptas necessitatibus et ratione earum!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion 5  */}
      <div className="accordian">
        <div
          className={Accord == 5 ? "item active py-0" : "item py-0 w-full"}
          onClick={() => toggle5()}
        >
          <div
            className={
              "bg-purple-50 title cursor-pointer border-2 rounded-md w-full flex items-center space-x-3 px-5 py-3 "
            }
            onClick={() => toggle5()}
          >
            <div className="arrow  ">
              {Accord == 5 ? (
                <BsChevronUp
                  className={
                    (props.mode === 5 ? "text-white" : "text-black") +
                    " self-center"
                  }
                />
              ) : (
                <BsChevronDown
                  className={
                    (props.mode === 5 ? "text-white" : "text-black") +
                    " self-center"
                  }
                />
              )}
            </div>
            <h2
              className={
                (props.mode === 5 ? "text-white" : "") + " text-nowrap w-full "
              }
            >
              What access do I have on the free plan ?
            </h2>
          </div>
          <div
            className={
              Accord == 5
                ? "content border-2 rounded-md show w-full px-3 break-all flex justify-between md:py-3 "
                : "content"
            }
          >
            <div className="w-full flex flex-col items-center">
              <p className="text-sm text-gray-500 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dolorem eveniet aspernatur, recusandae illum
                laboriosam ea quo minus. Eius velit sit reiciendis, libero ipsum
                animi voluptas necessitatibus et ratione earum!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion 6  */}
      <div className="accordian">
        <div
          className={Accord == 6 ? "item active py-0" : "item py-0 w-full"}
          onClick={() => toggle6()}
        >
          <div
            className={
              "bg-purple-50 title cursor-pointer border-2 rounded-md w-full flex items-center space-x-3 px-5 py-3 "
            }
            onClick={() => toggle6()}
          >
            <div className="arrow  ">
              {Accord == 1 ? (
                <BsChevronUp
                  className={
                    (props.mode === 6 ? "text-white" : "text-black") +
                    " self-center"
                  }
                />
              ) : (
                <BsChevronDown
                  className={
                    (props.mode === 6 ? "text-white" : "text-black") +
                    " self-center"
                  }
                />
              )}
            </div>
            <h2
              className={
                (props.mode === 6 ? "text-white" : "") + " text-nowrap w-full "
              }
            >
              Can I pay via an invoice ?
            </h2>
          </div>
          <div
            className={
              Accord == 6
                ? "content border-2 rounded-md show w-full px-3 break-all flex justify-between md:py-3 "
                : "content"
            }
          >
            <div className="w-full flex flex-col items-center">
              <p className="text-sm text-gray-500 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique dolorem eveniet aspernatur, recusandae illum
                laboriosam ea quo minus. Eius velit sit reiciendis, libero ipsum
                animi voluptas necessitatibus et ratione earum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCourseAccordion;
