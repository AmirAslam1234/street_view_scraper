import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Images/logo_dark.png";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Login() {
  const [ForgotPass, setForgotPass] = useState(false);
  let navigate = useNavigate();
  return (
    <div class="w-screen h-screen flex z-10">
      <div class="hidden lg:flex justify-center items-center z-10 w-5/12 h-full bg-black ">
        <img src={logo} class="w-1/2 mr-14 object-cover" />
      </div>
      <div class="w-full lg:w-7/12 py-24 relative">
        <a
          href="#"
          class="absolute text-3xl text-blue-400 cursor-pointer top-0 right-0 mt-6 mr-8"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            class="svg-inline--fa fa-times fa-w-11"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </svg>
        </a>
        <form class="w-5/6 sm:w-1/2 mx-auto text-center">
          <div class="mt-10">
            <h2 class="text-3xl font-bold text-black-800">Welcome back</h2>
            <p class="mt-3 text-gray-800">
              New to Street View Spectator?{" "}
              <a
                onClick={() => navigate("/signup")}
                class="text-red-600 cursor-pointer"
              >
                Sign up
              </a>
            </p>
          </div>
          <div class="mt-12">
            <div class="my-6">
              <div class="">
                <div class="">
                  <input
                    type="email"
                    name="email"
                    class="w-full border border-black-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="my-6">
              <div class="">
                <div class="">
                  <input
                    type="password"
                    name="password"
                    class="w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                    placeholder="Your password"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="my-6">
              <button
                onClick={() => navigate("/admin-dashboard/main-dashboard")}
                class="inline-block rounded-sm bg-black font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white w-full"
                type="submit"
              >
                Log In
              </button>
            </div>
            <div class="text-right">
              <a
                onClick={() => setForgotPass(!ForgotPass)}
                class="text-red-600 cursor-pointer"
              >
                Forgot your password?
              </a>
            </div>

            {/* FORGOT PASSWORD MODAL  */}
            {ForgotPass === true ? (
              <div className="z-40 w-screen h-screen absolute top-0 right-0 user-modal flex justify-center items-center">
                <div className="w-4/12 h-fit flex flex-col relative bg-white border rounded-lg p-5 text-xs">
                  <AiOutlineCloseCircle
                    onClick={() => setForgotPass(!ForgotPass)}
                    size="1.6em"
                    className="absolute top-2 right-3 cursor-pointer hover:text-gray-400"
                  />
                  <h2 className="text-lg py-3 cursor-pointer">
                    Forgot Password ?
                  </h2>
                  <input
                    type="email"
                    name="email"
                    className="rounded-md border py-2 px-2 w-full text-base"
                    placeholder="Email Address"
                  />
                  <div className="w-full flex justify-end mt-5">
                    <button className="bg-black px-5 py-3 text-white">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
