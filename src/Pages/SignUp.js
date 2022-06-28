import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Images/logo_dark.png";

function SignUp() {
  let navigate = useNavigate();
  return (
    <div class="absolute w-screen h-screen flex">
      <div class="hidden lg:flex justify-center items-center w-5/12 h-full bg-black ">
        <img src={logo} class="w-1/2 mr-14 object-cover" />
      </div>
      <div class="w-full lg:w-7/12 overflow-scroll py-10 relative">
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
            <h2 class="text-3xl font-bold text-black-800">Welcome</h2>
            <p class="mt-3 text-gray-800">
              Already have an account ??{" "}
              <a
                onClick={() => navigate("/admin-login")}
                class="text-red-600 cursor-pointer"
              >
                Log in
              </a>
            </p>
          </div>
          <div class="mt-12">
            <div class="my-6">
              <div class="">
                <div class="">
                  <input
                    type="text"
                    name="username"
                    class="w-full border border-black-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                    placeholder="Your Username"
                  />
                </div>
              </div>
            </div>

            <div class="my-6">
              <div class="">
                <div class="">
                  <input
                    type="email"
                    name="email"
                    class="w-full border border-black-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                    placeholder="Your email address"
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
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>

            <div class="my-6">
              <button
                onClick={() => navigate("/admin-dashboard/test")}
                class="inline-block rounded-sm bg-black font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white w-full"
                type="submit"
              >
                Register Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
