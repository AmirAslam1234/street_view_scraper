import React, { useState } from "react";
import "../App.css";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaUser, FaUserFriends } from "react-icons/fa";
import {
  MdDashboardCustomize,
  MdOutlineAddTask,
  MdOutlineRateReview,
} from "react-icons/md";
import logo from "../Assets/Images/logo_dark.png";

const AdminDashboard = () => {
  const [active, setActive] = useState(1);
  const [active2, setActive2] = useState(0);
  const [nightMode, setNightMode] = useState(
    localStorage.getItem("themeMode") === "1" ? 1 : 0
  );
  const [Accordion, setAccordion] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [UserModal, setUserModal] = useState(false);

  let navigate = useNavigate();

  const toggle2 = () => {
    if (Accordion === 1) {
      return setAccordion(0);
    }
    setAccordion(1);
  };

  const toggle4 = () => {
    if (Accordion === 3) {
      return setAccordion(0);
    }
    setAccordion(3);
  };

  const toggle = () => {
    if (nightMode === 1) {
      localStorage.setItem("themeMode", 0);
      return setNightMode(0);
    }
    setNightMode(1);
    localStorage.setItem("themeMode", 1);
  };

  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <div
      className={
        nightMode === 1
          ? "w-full flex justify-center bg-gray-600"
          : "w-full flex justify-center bg-gray-200"
      }
    >
      <div className="min-w-[230px] w-20% relative hidden md:block h-screen ">
        <div className="fixed h-full bg-gray-100 md:w-[230px] ">
          <div className="container w-full bg-black pl-6 pr-3 py-4 flex items-center justify-between">
            <div className="flex">
              <img className="ml-5 w-28" src={logo} alt="" />
            </div>
          </div>

          <div className=" container h-screen pt-14 pb-3 flex flex-col">
            {/* MENU ITEM 1 */}
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "white" : "",
                backgroundColor: isActive ? "#10B981" : "",
              })}
              onClick={() => {
                setActive(1);
                setActive2(0);
                toggle2();
              }}
              className="pl-5 py-4 w-full flex justify-between text-gray-800 hover:text-emerald-500"
              to="main-dashboard"
            >
              <MdDashboardCustomize size="1.3em" className="mr-3 self-center" />
              <div className="flex w-full">
                <div className="text-[13px] self-center font-light cursor-pointer">
                  Dashboard
                </div>
              </div>
            </NavLink>

            {/* MENU ITEM 2 */}
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "white" : "",
                backgroundColor: isActive ? "#10B981" : "",
              })}
              onClick={() => {
                setActive(4);
                setActive2(0);
                toggle2();
              }}
              className="pl-5 py-4 w-full flex justify-between text-gray-800 hover:text-emerald-500"
              to="manage-plans"
            >
              <MdOutlineAddTask size="1.3em" className="mr-3 self-center" />
              <div className="flex w-full">
                <div className="text-[13px] self-center font-light cursor-pointer">
                  Manage Plans
                </div>
              </div>
            </NavLink>

            {/* MENU ITEM 3 */}
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "white" : "",
                backgroundColor: isActive ? "#10B981" : "",
              })}
              onClick={() => {
                setActive(2);
                setActive2(0);
                toggle2();
              }}
              className="pl-5 py-4 w-full flex justify-between text-gray-800 hover:text-emerald-500"
              to="manage-users"
            >
              <FaUserFriends size="1.3em" className="mr-3 self-center" />
              <div className="flex w-full">
                <div className="text-[13px] self-center font-light cursor-pointer">
                  Manage Users
                </div>
              </div>
            </NavLink>

            {/* MENU ITEM 4 */}
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "white" : "",
                backgroundColor: isActive ? "#10B981" : "",
              })}
              onClick={() => {
                setActive(3);
                setActive2(0);
                toggle2();
              }}
              className="pl-5 py-4 w-full flex justify-between text-gray-800 hover:text-emerald-500"
              to="manage-Reviews"
            >
              <MdOutlineRateReview size="1.3em" className="mr-3 self-center" />
              <div className="flex w-full">
                <div className="text-[13px] self-center font-light cursor-pointer">
                  Manage Reviews
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      {/* HEADER  */}
      <div className=" w-full lg:w-full flex flex-col items-start">
        <div className="w-full bg-gray-100 relative flex flex-col items-center justify-center h-fit">
          <div className="w-full bg-gray-100 top-0 flex justify-between items-center px-3 md:px-0 md:pl-7 md:pr-7 py-6">
            {/* Mobile Menu  */}
            <div className="flex md:hidden items-center">
              <FiMenu
                className="cursor-pointer"
                color="darkgray"
                onClick={() => setShowMenu(!showMenu)}
                size="1.3em"
              />
            </div>

            {/* MENU ITEMS START  */}
            {showMenu === true ? (
              <div className="md:hidden z-20 fixed top-0 left-0 h-full bg-gray-900 md:w-[230px] ">
                <div className="container w-full bg-black py-4 flex items-center justify-between">
                  <div className="closing-menu text-white w-full flex items-center justify-between">
                    <div className="flex px-7">
                      <h2 className="text-xl text-white  ">LMS-</h2>{" "}
                      <h2 className="text-red-600 text-xl ">SYSTEM</h2>
                    </div>
                    <FiMenu
                      className="zindex-dropdown"
                      color="darkgray"
                      onClick={() => setShowMenu(!showMenu)}
                      size="1.2em"
                    />
                  </div>
                </div>

                <div className=" container h-screen pt-14 pb-3 px-3 flex flex-col">
                  {/* MENU ITEM 1 */}
                  <div className="pl-5 py-4 w-full">
                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive ? "white" : "",
                      })}
                      className={"d-icons flex w-full"}
                      to="test"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                        />
                      </svg>
                      <div
                        onClick={() => {
                          setActive(1);
                          setActive2(0);
                          // setScreen(1);
                          // navigate("dashboard");
                          toggle2();
                        }}
                        className="flex pl-3 justify-between text-gray-500 hover:text-gray-100 w-full"
                      >
                        <NavLink
                          end
                          style={({ isActive }) => ({
                            color: isActive ? "white" : "",
                          })}
                          className="text-[13px] self-center font-light cursor-pointer"
                          to="/"
                        >
                          Dashboard
                        </NavLink>
                      </div>
                    </NavLink>
                  </div>

                  {/* MENU ITEM 2 */}
                  <div className="pl-5 py-5 w-full">
                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive ? "white" : "",
                      })}
                      className={"d-icons flex w-full"}
                      to="manage-instructors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>

                      <div
                        onClick={() => {
                          setActive(2);
                          setActive2(0);
                          // setScreen(2);
                          // navigate("manage-instructors");
                          toggle2();
                        }}
                        className="flex pl-3 justify-between text-gray-500 hover:text-gray-100 w-full"
                      >
                        <NavLink
                          end
                          style={({ isActive }) => ({
                            color: isActive ? "white" : "",
                          })}
                          className={
                            "text-[13px] self-center font-light cursor-pointer"
                          }
                          to="manage-instructors"
                        >
                          Manage Instructors
                        </NavLink>
                      </div>
                    </NavLink>
                  </div>

                  {/* MENU ITEM 3 */}
                  <div className="pl-5 py-4 w-full">
                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive ? "white" : "",
                      })}
                      className={"d-icons flex w-full"}
                      to="manage-courses"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>

                      <div
                        onClick={() => {
                          setActive(3);
                          setActive2(0);
                          // setScreen(3);
                          // navigate("manage-courses");
                          toggle2();
                        }}
                        className="flex pl-3 justify-between text-gray-500 hover:text-gray-100 w-full"
                      >
                        <NavLink
                          end
                          style={({ isActive }) => ({
                            color: isActive ? "white" : "",
                          })}
                          className={
                            "text-[13px] self-center font-light cursor-pointer"
                          }
                          to="manage-courses"
                        >
                          Manage Courses
                        </NavLink>
                      </div>
                    </NavLink>
                  </div>

                  <div className="container pl-5 py-5 pr-2 flex flex-col justify-between">
                    {/* MENU ITEM 4 */}
                    <div className="flex flex-col w-full text-gray-500 hover:text-white hover:opacity-100 ">
                      <a
                        className={
                          active === 4
                            ? "active flex w-full"
                            : "d-icons flex w-full"
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>

                        <div
                          onClick={() => {
                            setActive(4);
                            toggle4();
                          }}
                          className="flex pl-3 justify-between text-gray-500 hover:text-gray-100 w-full"
                        >
                          <a
                            className={
                              active === 4
                                ? "active text-[13px] font-light pointer"
                                : "text-[13px] font-light pointer"
                            }
                          >
                            Account
                          </a>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={
                              active === 4 ? "active h-5 w-5" : "h-5 w-5"
                            }
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            {Accordion === 3 ? (
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            ) : (
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            )}
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* ITEM 1 BOTTOM CONTENT  */}
                  <div
                    className={
                      Accordion === 3
                        ? " flex flex-col text-[13px]"
                        : "flex flex-col max-h-0 overflow-hidden"
                    }
                  >
                    <a></a>

                    <NavLink
                      onClick={() => {
                        setActive2("a");
                        // setScreen(4);
                        // navigate("edit-profile");
                      }}
                      end
                      style={({ isActive }) => ({
                        color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#B91C1C" : "",
                      })}
                      className={
                        "text-gray-500 hover:text-gray-100 py-3 pl-8 mr-2"
                      }
                      to="edit-profile"
                    >
                      <ul className="list-inside list-disc pointer">
                        <li>Edit Profile</li>
                      </ul>
                    </NavLink>

                    <NavLink
                      onClick={() => {
                        setActive2("b");
                        // setScreen(5);
                        // navigate("change-password");
                      }}
                      end
                      style={({ isActive }) => ({
                        color: isActive ? "white" : "",
                        backgroundColor: isActive ? "#B91C1C" : "",
                      })}
                      className={
                        "text-gray-500 hover:text-gray-100 py-3 pl-12 mr-2"
                      }
                      to="change-password"
                    >
                      <ul className="list-outside list-disc pointer">
                        <li>Change Password</li>
                      </ul>
                    </NavLink>
                  </div>

                  {/* Sigin signout section  */}
                  <div className="container py-3 pl-5 pr-2 flex flex-col justify-between">
                    <div className="w-full bg-gray-900">
                      {/* BOTTOM LEFT BUTTON  */}
                      <div className="w-full pb-5 flex text-gray-500 hover:text-white cursor-pointer ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <a className="px-3 text-[13px] cursor-pointer">
                          Log out
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {/* MOBILE MENU ENDS HERE */}
            <div className="w-full flex justify-between">
              <h2 className=" pl-3 md:px-0 self-center text-gray-800 text-lg">
                Admin-Dashboard
              </h2>
              <span className="flex space-x-3">
                <FaUser size="1.2em" className="self-center" />
                <h2
                  onClick={() => setUserModal(!UserModal)}
                  className="self-center text-sm text-gray-400 cursor-pointer hover:underline"
                >
                  User Info
                </h2>
              </span>

              {UserModal === true ? (
                <div
                  onClick={() => setUserModal(!UserModal)}
                  className=" w-screen h-screen absolute top-0 right-0 user-modal flex justify-end"
                >
                  <div className="w-2/12 h-fit flex flex-col relative mt-16 mr-10 bg-white border rounded-lg p-5 text-xs">
                    <AiOutlineCloseCircle
                      onClick={() => setUserModal(!UserModal)}
                      size="1.6em"
                      className="absolute top-2 right-3 cursor-pointer hover:text-gray-400"
                    />
                    <a className="pb-2 cursor-pointer hover:underline hover:text-emerald-500">
                      View Profile
                    </a>
                    <a className="pb-2 cursor-pointer hover:underline hover:text-emerald-500">
                      Edit Profile
                    </a>
                    <a
                      onClick={() => navigate("/admin-login")}
                      className="cursor-pointer hover:underline hover:text-emerald-500"
                    >
                      Log Out
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {/* DASHBOARD SCREEN  */}
        <div className=" py-10 px-3 md:px-0 w-full md:w-full md:h-full flex justify-center items-start">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
