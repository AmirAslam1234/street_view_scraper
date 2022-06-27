import React, { useState } from "react";
import "../App.css";
import { AiFillFire } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Header() {
  const [Menu, setMenu] = useState(false);

  return (
    <div className="w-full border-2 h-[85px] bg-white">
      <div className="w-full flex items-center justify-between px-5 py-4 bg-white">
        <span className="sm:px-5 md:pl-10 text-3xl">logo</span>

        <div className="space-x-2 text-sm hidden lg:flex justify-center">
          <NavLink
            end
            style={({ isActive }) => ({
              color: isActive ? "white" : "",
              backgroundColor: isActive ? "#10B981" : "",
            })}
            className="p-2 pl-8 lg:px-4 md:mx-2 text-gray-900 rounded hover:bg-emerald-500 hover:text-gray-50 transition-colors duration-300"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            end
            style={({ isActive }) => ({
              color: isActive ? "white" : "",
              backgroundColor: isActive ? "#10B981" : "",
            })}
            className="p-2 pl-8 lg:px-4 md:mx-2 text-gray-900 rounded hover:bg-emerald-500 hover:text-gray-50 transition-colors duration-300"
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            end
            style={({ isActive }) => ({
              color: isActive ? "white" : "",
              backgroundColor: isActive ? "#10B981" : "",
            })}
            className="p-2 pl-8 lg:px-4 md:mx-2 text-gray-900 rounded hover:bg-emerald-500 hover:text-gray-50 transition-colors duration-300"
            to="/pricing"
          >
            Pricing
          </NavLink>

          <NavLink
            end
            style={({ isActive }) => ({
              color: isActive ? "white" : "",
              backgroundColor: isActive ? "#10B981" : "",
            })}
            className="p-2 pl-8 lg:px-4 md:mx-2 text-gray-900 rounded hover:bg-emerald-500 hover:text-gray-50 transition-colors duration-300"
            to="/contact-us"
          >
            Contact
          </NavLink>
        </div>

        <div className="flex justify-end space-x-5">
          {/* Mobile Menu  */}
          {Menu === true ? (
            <div
              onClick={() => setMenu(!Menu)}
              className={
                Menu === true
                  ? "fixed my-background top-0 left-0 h-screen w-full max-h-screen overflow-hidden flex flex-col lg:hidden z-10"
                  : "absolute top-0 w-full max-h-0 overflow-hidden flex flex-col items-center bg-gray-900 lg:hidden"
              }
            >
              <div className="w-3/6 space-y-5 absolute top-0 left-0 h-screen bg-gradient-to-t to-emerald-400 from-white flex flex-col">
                <a className="font-bold ml-4 py-3 font-serif text-4xl text-gray-100">
                  logo
                </a>
                <NavLink
                  end
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "",
                    backgroundColor: isActive ? "#10B981" : "",
                  })}
                  className="p-2 pl-8 lg:px-4 md:mx-2 text-gray-100 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  to="/"
                >
                  Home
                </NavLink>

                <NavLink
                  end
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "",
                    backgroundColor: isActive ? "#10B981" : "",
                  })}
                  className="p-2 pl-8 lg:px-4 md:mx-2 text-gray-100 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                  to="/about"
                >
                  About
                </NavLink>
              </div>
            </div>
          ) : null}

          <div
            onClick={() => setMenu(!Menu)}
            className="px-6 py-3 flex lg:hidden items-center text-white text-sm bg-emerald-500 hover:bg-gray-800 rounded-md"
          >
            <RiMenu4Fill size="2em" />
          </div>
          <button className="px-6 py-4 hidden sm:flex items-center text-white text-sm bg-emerald-500 hover:bg-gray-800 rounded-md">
            <AiFillFire size="1.3em" className="mr-2 self-center" /> Get Started
          </button>
          <button className="px-6 py-4 hidden sm:flex items-center text-white text-sm bg-gray-800 hover:bg-emerald-500 rounded-md">
            <BiLogIn size="1.3em" className="mr-2 self-center" /> Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
