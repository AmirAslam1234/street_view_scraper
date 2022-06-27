import React, { useState } from "react";
import PricingCard from "../Components/PricingCard";
import PricingCardYearly from "../Components/PricingCardYearly";
import { BsFillCalendarCheckFill } from "react-icons/bs";

function Pricing() {
  const [PricingTab, setPricingTab] = useState(1);

  return (
    <section className="py-20 bg-blue-50">
      <div className="w-full">
        <div className="w-full text-center flex flex-col items-center">
          <h2 className="lg:w-1/2 leading-tight w-full text-4xl font-bold pb-5">
            Choose The Pricing Tag
          </h2>
        </div>

        <div className="w-full py-10 flex justify-center">
          <button
            onClick={() => setPricingTab(1)}
            className={
              PricingTab === 1
                ? "px-10 py-3 flex rounded-l-full bg-black text-white"
                : "px-10 py-3 flex rounded-l-full bg-white text-black"
            }
          >
            <BsFillCalendarCheckFill
              color="orange"
              className="mr-2 self-center"
            />{" "}
            Monthly
          </button>
          <button
            onClick={() => setPricingTab(2)}
            className={
              PricingTab === 2
                ? "px-10 py-3 flex rounded-r-full bg-black text-white"
                : "px-10 py-3 flex rounded-r-full bg-white text-black"
            }
          >
            <BsFillCalendarCheckFill
              color="orange"
              className="mr-2 self-center"
            />{" "}
            Yearly
          </button>
        </div>

        <div className="w-full md:px-10">
          {PricingTab === 1 ? (
            <div className="w-full grid md:grid-col-2 lg:grid-col-3 xl:grid-cols-3 place-items-center gap-5 lg:gap-10">
              <PricingCard />
              <PricingCard />
              <PricingCard />
            </div>
          ) : null}

          {PricingTab === 2 ? (
            <div className="w-full grid md:grid-col-2 lg:grid-col-3 xl:grid-cols-3 place-items-center gap-5 lg:gap-10">
              <PricingCardYearly />
              <PricingCardYearly />
              <PricingCardYearly />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
