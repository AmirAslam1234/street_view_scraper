import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Contact() {
  return (
    <div>
      <Header />

      <section>
        <div className="w-full flex flex-col justify-center items-center h-96 bg-emerald-500 text-white text-5xl">
          <h2>Contact Us</h2>
          <p className="text-2xl pt-3">Drop Us Message For Any Querry</p>
        </div>
      </section>

      <section>
        <div class="grid grid-cols-1">
          <div class="p-5">
            <h1 class="text-center text-2xl	 mb-10">Contact Us Now</h1>
            <div class="mt-10 px-5 lg:px-20 sm:mt-0">
              <form>
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-gray-50 sm:p-6">
                    <div class="grid grid-cols-6 gap-6 ">
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="first-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autocomplete="given-name"
                          class="mt-1 px-2 focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="First Name"
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-3">
                        <label
                          for="last-name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autocomplete="family-name"
                          class="mt-1 px-2 focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="Last Name"
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-6">
                        <label
                          for="subject"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          autocomplete="subject"
                          class="mt-1 px-2 focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="Subject"
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-6">
                        <label
                          for="email"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          id="email"
                          autocomplete="email"
                          class="mt-1 px-2 focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="Email Address"
                        />
                      </div>
                      <div class="col-span-6 sm:col-span-6">
                        <label
                          for="message"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <textarea
                          id="about"
                          name="about"
                          rows="7"
                          class="shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Your Message"
                        ></textarea>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
