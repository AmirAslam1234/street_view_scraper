import React, { useState } from "react";
import "../App.css";
import { Data } from "./PlansData";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

function ManagePlans() {
  const [EditPlansID, setEditPlansID] = useState(null);
  const [Plans, setPlans] = useState(Data);
  const [addForm, setAddForm] = useState({
    name: "",
    limit: "",
    price: "",
    time: "",
  });

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...addForm };
    newFormData[fieldName] = fieldValue;

    setAddForm(newFormData);

    console.log(addForm);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newPlan = {
      id: nanoid(),
      name: addForm.name,
      limit: addForm.limit,
      price: addForm.price,
      time: addForm.time,
    };

    const newPlans = [...Plans, newPlan];
    setPlans(newPlans);
  };

  const handleEditClick = (e, pick) => {
    e.preventDefault();
    setEditPlansID(pick.id);
  };

  const [PlanName, setPlanName] = useState("");
  const [PlanLimit, setPlanLimit] = useState("");
  const [PlanPrice, setPlanPrice] = useState("");
  const [PlanTime, setPlanTime] = useState("");

  return (
    <div className="flex flex-col">
      <section className="w-full flex justify-center">
        <div className="container w-full mx-auto px-4 sm:px-8">
          <div className="">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <form>
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr className="bg-gray-100 text-gray-800 py-4">
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold  uppercase tracking-wider">
                          NAME
                        </th>

                        <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold  uppercase tracking-wider">
                          LIMIT
                        </th>

                        <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold  uppercase tracking-wider">
                          PRICE
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold  uppercase tracking-wider">
                          TIME
                        </th>
                        <th className="px-2 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold  uppercase tracking-wider">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* table row 1  */}
                      {Plans.map((pick) => (
                        <>
                          {EditPlansID === pick.id ? (
                            <EditableRow />
                          ) : (
                            <ReadOnlyRow
                              pick={pick}
                              handleEditClick={handleEditClick}
                            />
                          )}
                        </>
                      ))}
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <h2 className="text-4xl">ADD NEW DATA</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            onChange={handleAddFormChange}
            type="text"
            name="name"
            className="p-2 border mx-2"
            placeholder="Name..."
            required
          />
          <input
            onChange={handleAddFormChange}
            type="text"
            name="limit"
            className="p-2 border mx-2"
            placeholder="Limit..."
            required
          />
          <input
            onChange={handleAddFormChange}
            type="text"
            name="price"
            className="p-2 border mx-2"
            placeholder="Price..."
            required
          />
          <input
            onChange={handleAddFormChange}
            type="text"
            name="time"
            className="p-2 border mx-2"
            placeholder="Time..."
            required
          />
          <button type="submit" className="px-10 py-3 bg-green-500">
            ADD
          </button>
        </form>
      </section>

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
