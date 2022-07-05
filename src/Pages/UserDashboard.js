import React, { useState } from "react";
import "../App.css";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {
  AiOutlineMessage,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdDashboardCustomize, MdHistory } from "react-icons/md";
import logo from "../Assets/Images/logo_dark.png";

const UserDashboard = () => {
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
              to="main-dashboard-user"
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
                setActive(2);
                setActive2(0);
                toggle2();
              }}
              className="pl-5 py-4 w-full flex justify-between text-gray-800 hover:text-emerald-500"
              to="query-history"
            >
              <MdHistory size="1.3em" className="mr-3 self-center" />
              <div className="flex w-full">
                <div className="text-[13px] self-center font-light cursor-pointer">
                  Query History
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
                setActive(3);
                setActive2(0);
                toggle2();
              }}
              className="pl-5 py-4 w-full flex justify-between text-gray-800 hover:text-emerald-500"
              to="plan-info"
            >
              <AiOutlineInfoCircle size="1.3em" className="mr-3 self-center" />
              <div className="flex w-full">
                <div className="text-[13px] self-center font-light cursor-pointer">
                  Plan Info
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
                setActive(4);
                setActive2(0);
                toggle2();
              }}
              className="pl-5 py-4 w-full flex justify-between text-gray-800 hover:text-emerald-500"
              to="contacts"
            >
              <AiOutlineMessage size="1.3em" className="mr-3 self-center" />
              <div className="flex w-full">
                <div className="text-[13px] self-center font-light cursor-pointer">
                  Contacts
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
              <div className="md:hidden z-20  fixed top-0 left-0 h-full bg-emerald-300 md:w-[230px] ">
                <div className="container pr-5 w-full bg-black py-4 flex items-center justify-between">
                  <div className="closing-menu text-white w-full flex items-center justify-between">
                    <div className="flex pl-4 pr-10">
                      <img className="w-28" src={logo} alt="" />
                    </div>
                    <FiMenu
                      className="zindex-dropdown"
                      color="darkgray"
                      onClick={() => setShowMenu(!showMenu)}
                      size="1.2em"
                    />
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
                    to="main-dashboard-user"
                  >
                    <MdDashboardCustomize
                      size="1.3em"
                      className="mr-3 self-center"
                    />
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
                      setActive(2);
                      setActive2(0);
                      toggle2();
                    }}
                    className="pl-5 py-4 w-full flex justify-between text-gray-800 hover:text-emerald-500"
                    to="query-history"
                  >
                    <MdHistory size="1.3em" className="mr-3 self-center" />
                    <div className="flex w-full">
                      <div className="text-[13px] self-center font-light cursor-pointer">
                        Query History
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
                      setActive(3);
                      setActive2(0);
                      toggle2();
                    }}
                    className="pl-5 py-4 w-full flex justify-between text-gray-800 hover:text-emerald-500"
                    to="plan-info"
                  >
                    <MdHistory size="1.3em" className="mr-3 self-center" />
                    <div className="flex w-full">
                      <div className="text-[13px] self-center font-light cursor-pointer">
                        Plan Info
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
                      setActive(4);
                      setActive2(0);
                      toggle2();
                    }}
                    className="pl-5 py-4 w-full flex justify-between text-gray-800 hover:text-emerald-500"
                    to="contacts"
                  >
                    <AiOutlineMessage
                      size="1.3em"
                      className="mr-3 self-center"
                    />
                    <div className="flex w-full">
                      <div className="text-[13px] self-center font-light cursor-pointer">
                        Contacts
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* MOBILE MENU ENDS HERE */}

            <div className="w-full flex justify-between">
              <h2 className=" pl-3 md:px-0 self-center text-gray-800 text-lg">
                User-Dashboard
              </h2>
              <span className="flex space-x-3">
                <FaUser
                  size="1.2em"
                  className={
                    active === 7 || active === 8 || active === 9
                      ? "text-emerald-500 self-center"
                      : "text-gray-800 self-center"
                  }
                />
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
                  <div className="w-5/12 sm:w-4/12 md:w-2/12 h-fit flex flex-col relative mt-16 mr-10 bg-white border rounded-lg p-5 text-xs">
                    <AiOutlineCloseCircle
                      onClick={() => setUserModal(!UserModal)}
                      size="1.6em"
                      className="absolute top-2 right-3 cursor-pointer hover:text-gray-400"
                    />
                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive ? "#10B981" : "",
                      })}
                      onClick={() => {
                        setActive(7);
                        setActive2(0);
                        toggle2();
                      }}
                      className="pb-2 cursor-pointer hover:underline hover:text-emerald-500"
                      to="view-profile-user"
                    >
                      View Profile
                    </NavLink>
                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive ? "#10B981" : "",
                      })}
                      onClick={() => {
                        setActive(8);
                        setActive2(0);
                        toggle2();
                      }}
                      className="pb-2 cursor-pointer hover:underline hover:text-emerald-500"
                      to="edit-profile-user"
                    >
                      Edit Profile
                    </NavLink>

                    <NavLink
                      end
                      style={({ isActive }) => ({
                        color: isActive ? "#10B981" : "",
                      })}
                      onClick={() => {
                        setActive(9);
                        setActive2(0);
                        toggle2();
                      }}
                      className="pb-2 cursor-pointer hover:underline hover:text-emerald-500"
                      to="change-password-user"
                    >
                      Change Password
                    </NavLink>
                    <a
                      onClick={() => navigate("/user-login")}
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

export default UserDashboard;
