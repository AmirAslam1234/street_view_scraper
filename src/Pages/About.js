import React from "react";
import GetToKnowUs from "../Components/GetToKnowUs";
import Header from "../Components/Header";

function About() {
  return (
    <div>
      <Header />
      <section>
        <div className="w-full flex flex-col justify-center items-center h-96 bg-orange-500 text-white text-5xl">
          <h2>About Us</h2>
          <p className="text-2xl pt-3">The Spectators Story</p>
        </div>
      </section>
      <GetToKnowUs />
    </div>
  );
}

export default About;
