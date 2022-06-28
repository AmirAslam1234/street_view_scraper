import React from "react";
import faq from "../Assets/Images/faq-img1.png";
import Accordion from "./Accordion";

function GetToKnowUs() {
  return (
    <section className="lg:py-20">
      <div className="w-full flex flex-col lg:flex-row">
        {/* left hand side  */}
        <div className="w-full px-5 lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-4xl py-5">Get To Know Us</h2>
          <Accordion />
        </div>

        {/* Right hand side  */}
        <div className="w-full lg:w-1/2 pt-10 lg:pt-0 flex justify-center items-center">
          <img src={faq} alt="" />
        </div>
      </div>
    </section>
  );
}

export default GetToKnowUs;
