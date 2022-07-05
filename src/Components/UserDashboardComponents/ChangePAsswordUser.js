import React, { useState } from "react";
import Helmet from "react-helmet";

function ChangePasswordUser() {
  const [OldPassword, setOldPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [passErr, setPassErr] = useState("");
  const Check = (e) => {
    if (OldPassword === "") {
      document.getElementById("oldpassword").style.display = "block";
    } else document.getElementById("oldpassword").style.display = "none";

    // Checking New Password
    const passNumber = NewPassword.search(/[0-9]/);
    const passSmall = NewPassword.search(/[a-z]/);
    const passCapital = NewPassword.search(/[A-Z]/);
    const passSpecial = NewPassword.search(
      /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    );
    if (NewPassword === "") {
      document.getElementById("newpassword").style.display = "block";
      document.getElementById("newpassword2").style.display = "none";
      document.getElementById("newpassword3").style.display = "none";
    } else if (NewPassword.length < 8) {
      document.getElementById("newpassword2").style.display = "block";
      document.getElementById("newpassword").style.display = "none";
      document.getElementById("newpassword3").style.display = "none";
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
      document.getElementById("newpassword3").style.display = "block";
      document.getElementById("newpassword").style.display = "none";
      document.getElementById("newpassword2").style.display = "none";
    } else {
      document.getElementById("newpassword").style.display = "none";
      document.getElementById("newpassword2").style.display = "none";
      document.getElementById("newpassword3").style.display = "none";
    }
    if (ConfirmPassword === "") {
      document.getElementById("confirmpassword").style.display = "block";
      document.getElementById("confirmpassword2").style.display = "none";
    } else if (ConfirmPassword !== NewPassword) {
      document.getElementById("confirmpassword2").style.display = "block";
      document.getElementById("confirmpassword").style.display = "none";
      setConfirmPassword("");
    } else {
      document.getElementById("confirmpassword").style.display = "none";
      document.getElementById("confirmpassword2").style.display = "none";
    }

    // if (ConfirmPassword === "") {
    //   document.getElementById("confirmpassword").style.display = "block";
    // } else document.getElementById("confirmpassword").style.display = "none";
    // if (ConfirmPassword !== NewPassword) {
    //   document.getElementById("confirmpassword2").style.display = "block";
    // } else document.getElementById("confirmpassword2").style.display = "none";
    // if (ConfirmPassword === NewPassword) {
    //   document.getElementById("confirmpassword2").style.display = "none";
    // }
    // if (ConfirmPassword !== NewPassword) {
    //   document.getElementById("conf_pass_input").value = "";
    // }
    e.stopPropagation();
  };

  return (
    <>
      <Helmet>
        <title>Change Password</title>
      </Helmet>
      <div className="w-3/4 ">
        <div
          className={
            "bg-white w-full rounded-lg mx-auto mt-8 flex flex-col md:flex-row overflow-hidden shadow-lg"
          }
        >
          <div
            className={
              "bg-gray-100 w-full md:w-1/3  py-8 px-3 md:px-8 inline-block"
            }
          >
            <div className="mb-5 text-center">
              <div className="mx-auto w-20 h-20 md:w-32 md:h-32 border rounded-full relative bg-gray-100 mb-4 shadow-inset">
                <img
                  id="image"
                  className="object-cover w-20 h-20 md:w-full md:h-32 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                />
              </div>
              <div
                className={
                  "mx-auto w-40 text-gray-500 text-xl text-center -mt-1"
                }
              >
                Name
              </div>
            </div>
            <div className="w-full">
              <h2
                className={
                  "font-medium text-base text-center text-gray-700 mb-4 tracking-wide"
                }
              >
                Change Password
              </h2>
            </div>

            <p className={"text-xs text-center text-gray-500"}>
              To Change the password enter your old password, new password and
              confirm it!
            </p>
          </div>
          <div className="md:w-full w-full">
            <div className="py-2 pt-12 px-10">
              <label for="name" className="text-sm flex text-gray-600">
                Old Password<span className="text-red-800">*</span>
                <p
                  id="oldpassword"
                  className="text-red-500 hidden ml-3 text-xs font-light self-center"
                >
                  (Old Password is not filled!)
                </p>
              </label>
              <input
                className={
                  "border-gray-200 mt-2 border-2  px-3 py-2 block w-full rounded text-base text-gray-900 focus:outline-none focus:border-gray-900"
                }
                type="password"
                value={OldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter Old Password"
              />
            </div>
            <div className="py-2 px-10">
              <label for="name" className="text-sm flex text-gray-600">
                New Password<span className="text-red-800">*</span>
                <p
                  id="newpassword"
                  className="text-red-500 hidden ml-3 text-xs font-light self-center"
                >
                  (New password is not filled!)
                </p>
                <p
                  id="newpassword2"
                  className="text-red-500 hidden ml-3 text-xs font-light self-center"
                >
                  (Password must have 8 characters!)
                </p>
                <p
                  id="newpassword3"
                  className="text-red-500 hidden ml-3 text-xs font-light self-center"
                >
                  ({passErr})
                </p>
              </label>
              <input
                className={
                  "border-gray-200 mt-2 border-2  px-3 py-2 block w-full rounded text-base text-gray-900 focus:outline-none focus:border-gray-900"
                }
                type="password"
                value={NewPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter New Password"
              />
            </div>
            <div className="py-2 px-10">
              <label for="name" className="text-sm flex text-gray-600">
                Confirm Password<span className="text-red-800">*</span>
                <p
                  id="confirmpassword"
                  className="text-red-500 hidden ml-3 text-xs font-light self-center"
                >
                  (Confirm password is not filled!)
                </p>
                <p
                  id="confirmpassword2"
                  className="text-red-500 hidden ml-3 text-xs font-light self-center"
                >
                  (Passwords do not match!)
                </p>
              </label>
              <input
                className={
                  "border-gray-200 mt-2 border-2  px-3 py-2 block w-full rounded text-base text-gray-900 focus:outline-none focus:border-gray-900"
                }
                type="password"
                id="conf_pass_input"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter Confirm Password"
              />
            </div>
          </div>
        </div>
        <div
          className={
            " pt-6 md:pt-7 flex justify-between md:justify-end clearfix rounded-b-lg border-t"
          }
        >
          <button
            onClick={() => Check()}
            className={
              "bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-medium px-5 py-3 rounded float-right uppercase cursor-pointer"
            }
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangePasswordUser;
