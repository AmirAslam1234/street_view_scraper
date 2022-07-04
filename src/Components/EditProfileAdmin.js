import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

function EditProfileAdmin() {
  const [Name, setName] = useState("Ali Ahmad");
  const [Contact, setContact] = useState("9212345678");
  const [Email, setEmail] = useState("aliahmad@123.com");
  const [Address, setAddress] = useState("H.No.123 123 city");

  const Check = (e) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const indexSpace = Name.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    const nameCharacter = Name.search(
      /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    );

    if (Name === "") {
      document.getElementById("name").style.display = "block";
      document.getElementById("name2").style.display = "none";
      document.getElementById("name3").style.display = "none";
    } else if (Name.length < 3) {
      document.getElementById("name2").style.display = "block";
      document.getElementById("name").style.display = "none";
      document.getElementById("name3").style.display = "none";
    } else if (nameCharacter >= 0) {
      document.getElementById("name3").style.display = "block";
      document.getElementById("name2").style.display = "none";
      document.getElementById("name").style.display = "none";
    } else if (Name !== indexSpace) {
      document.getElementById("name3").style.display = "block";
      document.getElementById("name2").style.display = "none";
      document.getElementById("name").style.display = "none";
    } else {
      document.getElementById("name3").style.display = "none";
      document.getElementById("name2").style.display = "none";
      document.getElementById("name").style.display = "none";
    }

    if (Email === "") {
      document.getElementById("email").style.display = "block";
    } else document.getElementById("email").style.display = "none";
    if (regex.test(Email)) {
      document.getElementById("email2").style.display = "none";
    } else if (!regex.test(Email) && Email !== "") {
      document.getElementById("email2").style.display = "block";
    } else document.getElementById("email2").style.display = "none";

    if (Contact === "") {
      document.getElementById("contact").style.display = "block";
    } else document.getElementById("contact").style.display = "none";
    if (Contact.length < 8) {
      document.getElementById("contact2").style.display = "block";
    } else document.getElementById("contact2").style.display = "none";
    if (Contact.length === 0) {
      document.getElementById("contact2").style.display = "none";
    }

    if (Address === "") {
      document.getElementById("address").style.display = "block";
    } else document.getElementById("address").style.display = "none";
    e.stopPropagation();
  };

  return (
    <div className="flex flex-col w-[80%]">
      <div className="w-full">
        {/* BASIC INFO  */}
        <div
          className={
            "bg-white w-full shadow-lg rounded-lg mx-auto mt-4 flex flex-col md:flex-row overflow-hidden"
          }
        >
          <div
            className={
              "bg-gray-100 w-full md:w-1/3 py-7 px-3 md:px-8 inline-block"
            }
          >
            <div className=" w-full rounded-lg relative shadow-inset">
              <h2>Basic Information</h2>
              <h3 className={"text-gray-400 text-sm"}>
                Edit Your Account Info
              </h3>
            </div>
          </div>

          {/* RIGHT HAND SIDE  */}
          <div className="md:w-2/3 pt-4 pb-6 w-full">
            <div className="py-2 pt-4 px-10">
              <label for="name" className="flex text-sm text-gray-600">
                Name
                <p
                  id="name"
                  className="text-red-500 hidden ml-3 text-xs font-light self-center"
                >
                  (Name is not filled!)
                </p>
                <p
                  id="name2"
                  className="text-red-500 hidden ml-3 text-xs font-light self-center"
                >
                  (Name is too short!)
                </p>
                <p
                  id="name3"
                  className="text-red-500 hidden ml-3 text-xs font-light self-center"
                >
                  (Invalid Name!)
                </p>
              </label>
              <input
                className={
                  "border-gray-200 mt-2 border-2  px-3 py-2 block w-full rounded text-base text-gray-900 focus:outline-none focus:border-gray-900"
                }
                type="text"
                placeholder="Enter Your Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="py-2 px-10">
              <label for="name" className="text-sm flex text-gray-600">
                Contact
                <p
                  id="contact"
                  className="text-red-500 hidden ml-3 text-xs font-light self-center"
                >
                  (Contact is not filled!)
                </p>
                <p
                  id="contact2"
                  className="text-red-500 hidden ml-3 text-xs font-light self-center"
                >
                  (Contact is too short!)
                </p>
              </label>
              <input
                className={
                  "border-gray-200 mt-2 border-2  px-3 py-2 block w-full rounded text-base text-gray-900 focus:outline-none focus:border-gray-900"
                }
                type="number"
                placeholder="Enter Your Phone Number"
                value={Contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="py-2 px-10">
              <label for="name" className="text-sm flex text-gray-600">
                Email
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
              </label>
              <input
                className={
                  "border-gray-200 mt-2 border-2  px-3 py-2 block w-full rounded text-base text-gray-900 focus:outline-none focus:border-gray-900"
                }
                type="email"
                placeholder="Enter Your  Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-2 px-10">
              <label for="name" className="text-sm flex text-gray-600">
                Address
              </label>
              <p
                id="address"
                className="text-red-500 hidden ml-3 text-xs font-light self-center"
              >
                (Address is not filled!)
              </p>
              <input
                className={
                  "border-gray-200 mt-2 border-2  px-3 py-2 block w-full rounded text-base text-gray-900 focus:outline-none focus:border-gray-900"
                }
                type="text"
                name="name"
                placeholder="Enter Your Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* PROFILE SETTINGS  */}
        <div
          className={
            "bg-white w-full shadow-lg rounded-lg mx-auto mt-4 flex flex-col md:flex-row overflow-hidden"
          }
        >
          <div
            className={
              "bg-gray-100 w-full md:w-1/3 py-7 px-3 md:px-8 inline-block"
            }
          >
            <div className=" w-full rounded-full relative shadow-inset">
              <h2>Profile Settings</h2>
              <h3 className={"text-gray-400 text-sm"}>
                Update your profile with meaningful information
              </h3>
            </div>
          </div>

          {/* RIGHT HAND SIDE  */}
          <div className="md:w-2/3 w-full">
            <div className="py-2 pt-8 px-10">
              <label
                for="fileInput"
                type="button"
                className={
                  "text-gray-600 bg-white hover:bg-gray-100 md:w-44 cursor-pointer  inline-flex  md:flex-row justify-between text-center items-center focus:outline-none border py-2 px-1 md:px-4 rounded-lg shadow-sm md:text-left  font-medium"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={" inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"}
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                  <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
                Browse Photo
              </label>
              <input
                name="photo"
                id="fileInput"
                accept="image/*"
                className="hidden"
                type="file"
              />
            </div>
            <div className="py-2 px-10">
              <label for="name" className="text-sm flex text-gray-600">
                Description
              </label>
              <textarea
                className={
                  "border-gray-200 mt-2 border-2  px-3 py-2 block w-full rounded text-base text-gray-900 focus:outline-none focus:border-gray-900"
                }
                type="Text Area"
                placeholder="Enter description here..."
              />
            </div>
            <div className="py-2 pb-8 px-10">
              <label for="name" className="text-sm flex text-gray-600">
                Social Links
              </label>
              <div className="flex relative items-center">
                <AiFillFacebook
                  color="blue"
                  size="2.8em"
                  className="absolute self-center right-0 top-2"
                />
                <input
                  className={
                    "border-gray-200 mt-2 border-2  px-3 py-2 block w-full rounded text-base text-gray-900 focus:outline-none focus:border-gray-900"
                  }
                  type="text"
                  placeholder="Facebook"
                  value=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex relative items-center">
                <AiFillTwitterSquare
                  color="aqua"
                  size="2.8em"
                  className="absolute self-center right-0 top-2"
                />
                <input
                  className={
                    "border-gray-200 mt-2 border-2  px-3 py-2 block w-full rounded text-base text-gray-900 focus:outline-none focus:border-gray-900"
                  }
                  type="text"
                  placeholder="Twitter"
                  value=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex relative items-center">
                <AiFillInstagram
                  color="deeppink"
                  size="2.8em"
                  className="absolute self-center right-0 top-2"
                />
                <input
                  className={
                    "border-gray-200 mt-2 border-2  px-3 py-2 block w-full rounded text-base text-gray-900 focus:outline-none focus:border-gray-900"
                  }
                  type="text"
                  placeholder="Instagram"
                  value=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <hr className="border-gray-200" />
          </div>
        </div>
      </div>

      <div className="mt-5 w-full flex justify-end">
        <button
          onClick={() => Check()}
          className={
            "bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-medium px-5 py-3 rounded float-right uppercase cursor-pointer"
          }
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditProfileAdmin;
