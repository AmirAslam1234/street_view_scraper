import React, { useState } from "react";
import "../App.css";
import { AiFillFire } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Assets/Images/logo_dark.png";
import logo2 from "../Assets/Images/logo.png";

function Header() {
  const [Menu, setMenu] = useState(false);

  let navigate = useNavigate();

  return (
    <div className="w-full border-2 h-[85px] bg-white">
      <div className="w-full flex items-center justify-between px-5 py-4 bg-white">
        <span>
          <img className="w-28" src={logo2} alt="" />
        </span>

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
              <div className="w-3/6 space-y-5 absolute top-0 left-0 h-screen mobile-bg flex flex-col">
                <span className="pt-5 pl-2">
                  <img className="w-28" src={logo} alt="" />
                </span>
                <NavLink
                  end
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "white",
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
                    color: isActive ? "white" : "white",
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
                    color: isActive ? "white" : "white",
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
                    color: isActive ? "white" : "white",
                    backgroundColor: isActive ? "#10B981" : "",
                  })}
                  className="p-2 pl-8 lg:px-4 md:mx-2 text-gray-900 rounded hover:bg-emerald-500 hover:text-gray-50 transition-colors duration-300"
                  to="/contact-us"
                >
                  Contact
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
          <button
            onClick={() => navigate("/admin-dashboard")}
            className="px-6 py-4 hidden sm:flex items-center text-white text-sm bg-gray-800 hover:bg-emerald-500 rounded-md"
          >
            <BiLogIn size="1.3em" className="mr-2 self-center" /> Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
