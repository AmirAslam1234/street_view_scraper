import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Images/logo_dark.png";

function SignUp() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [passErr, setPassErr] = useState("");

  const Check = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const indexNumber = UserName.search(/[0-9]/);
    const indexCharacter = UserName.search(
      /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    );
    const indexSpace = UserName.search(" ");

    if (FirstName === "") {
      document.getElementById("first_name").style.display = "block";
    } else document.getElementById("first_name").style.display = "none";

    if (LastName === "") {
      document.getElementById("last_name").style.display = "block";
    } else document.getElementById("last_name").style.display = "none";

    if (UserName === "") {
      document.getElementById("user_name").style.display = "block";
      document.getElementById("user_name2").style.display = "none";
      document.getElementById("user_name3").style.display = "none";
      document.getElementById("user_name4").style.display = "none";
    } else if (UserName.length < 3) {
      document.getElementById("user_name2").style.display = "block";
      document.getElementById("user_name").style.display = "none";
      document.getElementById("user_name3").style.display = "none";
      document.getElementById("user_name4").style.display = "none";
    } else if (indexNumber === 0 || indexCharacter === 0 || indexSpace >= 0) {
      document.getElementById("user_name3").style.display = "block";
      document.getElementById("user_name").style.display = "none";
      document.getElementById("user_name2").style.display = "none";
      document.getElementById("user_name4").style.display = "none";

      if (indexSpace >= 0) {
        document.getElementById("user_name3").style.display = "none";
        document.getElementById("user_name").style.display = "none";
        document.getElementById("user_name2").style.display = "none";
        document.getElementById("user_name4").style.display = "block";
      }
    } else {
      document.getElementById("user_name").style.display = "none";
      document.getElementById("user_name2").style.display = "none";
      document.getElementById("user_name3").style.display = "none";
      document.getElementById("user_name4").style.display = "none";
    }

    if (Email === "") {
      document.getElementById("email").style.display = "block";
    } else document.getElementById("email").style.display = "none";
    if (regex.test(Email)) {
      document.getElementById("email2").style.display = "none";
    } else if (!regex.test(Email) && Email.length !== 0) {
      document.getElementById("email2").style.display = "block";
    } else document.getElementById("email2").style.display = "none";

    // Password Checking
    const passNumber = Password.search(/[0-9]/);
    const passSmall = Password.search(/[a-z]/);
    const passCapital = Password.search(/[A-Z]/);
    const passSpecial = Password.search(
      /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    );
    if (Password === "") {
      document.getElementById("password").style.display = "block";
      document.getElementById("password2").style.display = "none";
      document.getElementById("password3").style.display = "none";
    } else if (Password.length < 8) {
      document.getElementById("password2").style.display = "block";
      document.getElementById("password").style.display = "none";
      document.getElementById("password3").style.display = "none";
    } else if (
      passNumber < 0 ||
      passSmall < 0 ||
      passCapital < 0 ||
      passSpecial < 0
    ) {
      var num = "",
        small = "",
        cap = "",
        special = "";
      if (passNumber < 0) {
        num = "number, ";
      }
      if (passSmall < 0) {
        small = "small letter, ";
      }
      if (passCapital < 0) {
        cap = "capital letter, ";
      }
      if (passSpecial < 0) {
        special = "special character, ";
      }
      setPassErr(num + small + cap + special + "is missing");
      document.getElementById("password3").style.display = "block";
      document.getElementById("password").style.display = "none";
      document.getElementById("password2").style.display = "none";
    } else {
      document.getElementById("password").style.display = "none";
      document.getElementById("password2").style.display = "none";
      document.getElementById("password3").style.display = "none";
    }

    if (ConfirmPassword === "") {
      document.getElementById("confirm_password").style.display = "block";
      document.getElementById("confirm_password2").style.display = "none";
    } else if (ConfirmPassword !== Password) {
      document.getElementById("confirm_password2").style.display = "block";
      document.getElementById("confirm_password").style.display = "none";
      setConfirmPassword("");
    } else {
      document.getElementById("confirm_password").style.display = "none";
      document.getElementById("confirm_password2").style.display = "none";
    }
  };

  let navigate = useNavigate();
  return (
    <div class="absolute w-screen h-screen flex">
      <div class="hidden lg:flex justify-center items-center w-5/12 h-full bg-black ">
        <img src={logo} class="w-1/2 mr-14 object-cover" />
      </div>
      <div class="w-full lg:w-7/12 scroll overflow-y-scroll py-10 relative">
        <a class="absolute text-3xl text-blue-400 cursor-pointer top-0 right-0 mt-6 mr-8">
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
        <div class="w-5/6 sm:w-1/2 mx-auto text-center">
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
            <div class="mb-3">
              <div class="flex flex-col justify-start">
                <div className="flex">
                  <span className="text-red-600">*</span>
                  <p
                    id="first_name"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    (First Name is not filled!)
                  </p>
                </div>
                <input
                  type="text"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  class="w-full border border-black-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                  placeholder="Your First Name"
                />
              </div>
            </div>

            <div class="my-3">
              <div class="flex flex-col justify-start">
                <div className="flex">
                  <span className="text-red-600">*</span>
                  <p
                    id="last_name"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    (Last Name is not filled!)
                  </p>
                </div>
                <input
                  type="text"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  class="w-full border border-black-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                  placeholder="Your Last Name"
                />
              </div>
            </div>

            <div class="my-3">
              <div class="flex flex-col items-start">
                <div className="flex">
                  <span className="text-red-600">*</span>
                  <p
                    id="user_name"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    (Username is not filled!)
                  </p>
                  <p
                    id="user_name2"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    (Username is too short!)
                  </p>
                  <p
                    id="user_name3"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    (Username must start with an alphabet!)
                  </p>
                  <p
                    id="user_name4"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    (Username must not contain spaces!)
                  </p>
                </div>
                <input
                  type="text"
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  class="w-full border border-black-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                  placeholder="Your Username"
                />
              </div>
            </div>

            <div class="mt-6">
              <div class="flex flex-col justify-start">
                <div className="flex">
                  <span className="text-red-600">*</span>
                  <p
                    id="email"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    (Email is not filled!)
                  </p>
                  <p
                    id="email2"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    (Email is not valid!)
                  </p>
                </div>
                <input
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="w-full border border-black-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                  placeholder="Your email address"
                />
              </div>
            </div>

            <div class="mb-6 mt-3">
              <div class="">
                <label
                  htmlFor="PlanDetails"
                  className="flex flex-col items-start text-gray-500"
                >
                  <span className="flex">Plan Details</span>
                  <select
                    type="select"
                    name="PlanDetails"
                    class="w-full border mt-1 border-black-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                    placeholder="Your Plan Details"
                  >
                    <option value="Free">Free ($0.00) </option>
                    <option value="Standard">Standard ($50.00) / month </option>
                    <option value="Premium">Premium ($100.00) / month </option>
                    <option value="Standard">Standard ($550.00) / year </option>
                    <option value="Premium">Premium ($1100.00) / year </option>
                  </select>
                </label>
              </div>
            </div>
            <div class="my-6">
              <div class="flex flex-col justify-start">
                <div className="flex">
                  <span className="text-red-600">*</span>
                  <p
                    id="password"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    (Password is not filled!)
                  </p>
                  <p
                    id="password2"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    (Password should at least have 8 characters!)
                  </p>

                  <p
                    id="password3"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    ({passErr})
                  </p>
                </div>
                <input
                  type="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                  placeholder="Your password"
                />
              </div>
            </div>

            <div class="my-6">
              <div class="flex flex-col justify-start">
                <div className="flex">
                  <span className="text-red-600">*</span>
                  <p
                    id="confirm_password"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    (Confirm Password is not filled!)
                  </p>
                  <p
                    id="confirm_password2"
                    className="text-red-500 hidden ml-3 text-xs font-light self-center"
                  >
                    (Passwords do not match!)
                  </p>
                </div>
                <input
                  type="password"
                  id="conf_pass_input"
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  class="w-full border border-gray-300 rounded-sm px-4 py-3 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          </div>
          <div class="my-6">
            <button
              onClick={() => Check()}
              class="inline-block rounded-sm bg-black font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white w-full"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
