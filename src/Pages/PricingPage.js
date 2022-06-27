import React from "react";
import GetToKnowUs from "../Components/GetToKnowUs";
import Header from "../Components/Header";
import Pricing from "../Components/Pricing";

function PricingPage() {
  return (
    <div>
      <Header />

      <section>
        <div className="w-full flex flex-col justify-center items-center h-96 bg-emerald-500 text-white text-5xl">
          <h2>Transparent Pricing</h2>
          <p className="text-2xl pt-3">Border-less Account Pricing</p>
        </div>
      </section>

      <section>
        <Pricing />
      </section>

      <GetToKnowUs />
    </div>
  );
}

export default PricingPage;
