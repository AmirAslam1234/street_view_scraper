import React, { useState } from "react";
import "../App.css";

function ManagePlans() {
  const [PlanName, setPlanName] = useState("");
  const [PlanLimit, setPlanLimit] = useState("");
  const [PlanPrice, setPlanPrice] = useState("");
  const [PlanTime, setPlanTime] = useState("");

  return (
    <div className="flex flex-col">
      <section className="w-full flex justify-center items-center md:px-10">
        <div className="w-full md:w-5/6 flex flex-col sm:flex-row bg-white shadow-lg rounded-lg">
          <div className="w-full sm:w-60 p-5 text-center sm:text-left bg-gray-100 rounded-l-lg">
            <h2 className="text-lg">Plan Details</h2>
            <p className="py-2 text-xs text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, cum.
            </p>
          </div>
          <div className="w-5/6 p-5">
            <form action="plans">
              <label htmlFor="plan-name ">
                Plan Name
                <input
                  type="text"
                  name="plan-name"
                  value={PlanName}
                  onChange={(e) => setPlanName(e.target.value)}
                  className="p-2 mt-1 mb-5 w-full text-sm border rounded-md"
                  placeholder="Plan Name"
                />
              </label>

              <label htmlFor="plan-limit ">
                Plan Limit
                <input
                  type="text"
                  name="plan-limit"
                  value={PlanLimit}
                  onChange={(e) => setPlanLimit(e.target.value)}
                  className="p-2 mt-1 mb-5 w-full text-sm border rounded-md"
                  placeholder="Weekly, Monthly, 6 months, yearly ?"
                />
              </label>

              <label htmlFor="plan-price">
                <span className="flex">Plan Price</span>
                <input
                  type="number"
                  name="plan-price"
                  value={PlanPrice}
                  onChange={(e) => setPlanPrice(e.target.value)}
                  className="p-2 mt-1 mb-5 w-full text-sm appearance-none border rounded-md"
                  placeholder="Plan Price"
                  required
                />
              </label>

              <label htmlFor="plan-time">
                Plan Time
                <input
                  type="date"
                  name="plan-time"
                  value={PlanTime}
                  onChange={(e) => setPlanTime(e.target.value)}
                  className="p-2 mt-1 w-full text-sm border rounded-md"
                />
              </label>
            </form>

            <div className="w-full flex justify-end">
              <button className="py-3 px-6 text-sm bg-black text-white mt-5">
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ManagePlans;
