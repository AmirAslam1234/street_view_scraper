import React, { useEffect, useState } from "react";
import "../App.css";
import { Data4 } from "./PlansData";
import { nanoid } from "nanoid";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditableRowMessages from "./EditableRowMessages";
import ReadOnlyRowMessages from "./ReadOnlyRowMessages";

function Messages() {
  const [Active, setActive] = useState(false);
  const [Pop, setPop] = useState(false);
  const [AddPlan, setAddPlan] = useState(false);
  const [EditPlansID, setEditPlansID] = useState(null);
  const [Plans, setPlans] = useState(Data4);
  const [addForm, setAddForm] = useState({
    name: "",
    message: "",
    date: "",
  });

  const [editForm, setEditForm] = useState({
    name: "",
    message: "",
    date: "",
  });

  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...addForm };
    newFormData[fieldName] = fieldValue;

    setAddForm(newFormData);

    if (fieldValue !== "") {
      setActive(true);
    }

    console.log(addForm);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editForm };
    newFormData[fieldName] = fieldValue;

    setEditForm(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newPlan = {
      id: nanoid(),
      name: addForm.name,
      message: addForm.message,
      date: addForm.date,
    };

    const newPlans = [...Plans, newPlan];
    setPlans(newPlans);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedPlan = {
      id: editForm.id,
      name: editForm.name,
      message: editForm.message,
      date: editForm.date,
    };

    const newPlans = [...Plans];
    const index = Plans.findIndex((pick) => pick.id === EditPlansID);
    newPlans[index] = editedPlan;
    setPlans(newPlans);
    setEditPlansID(null);
  };

  const handleEditClick = (e, pick) => {
    e.preventDefault();
    setEditPlansID(pick.id);

    const formValues = {
      name: pick.name,
      message: pick.message,
      date: pick.date,
    };

    setEditForm(formValues);
  };

  const handleCancelClick = () => {
    setEditPlansID(null);
  };

  const handleDeleteClick = (planID) => {
    const newPlans = [...Plans];
    const index = Plans.findIndex((pick) => pick.id === planID);
    newPlans.splice(index, 1);
    setPlans(newPlans);
  };

  const handlePop = () => {
    setPop(!Pop);
  };

  const notify = () => toast("Plan Added Successfully");

  return (
    <div className="flex flex-col w-full -mt-5">
      <div className="w-full md:px-10 flex flex-col items-center md:flex-row md:justify-between">
        <input
          className="py-2 md:-ml-2 px-2 border border-gray-400 rounded-md w-full md:w-2/6"
          type="search"
          placeholder="Search Messages"
        />
        <button
          className="py-3 px-10 mt-5 md:mt-0 w-full md:w-fit rounded-md bg-emerald-500 hover:bg-emerald-400 text-white"
          onClick={() => setAddPlan(!AddPlan)}
        >
          Message
        </button>
      </div>
      <section className="w-full flex justify-center">
        <div className="container w-full mx-auto px-4 sm:px-8">
          <div className="">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <form onSubmit={handleEditFormSubmit}>
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr className="bg-gray-100 text-gray-800 py-4">
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold  uppercase tracking-wider">
                          NAME
                        </th>

                        <th className="px-6 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                          MESSAGE
                        </th>

                        <th className="px-12 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold  uppercase tracking-wider">
                          DATE
                        </th>
                        <th className="px-7 sm:px-6 md:pl-6 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold  uppercase tracking-wider">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Plans.map((pick) => (
                        <>
                          <div
                            className={
                              Pop === true
                                ? "edit-table-modal2 w-full h-full absolute left-0 top-0 flex justify-center items-center"
                                : "hidden"
                            }
                          >
                            {EditPlansID === pick.id ? (
                              <EditableRowMessages
                                editForm={editForm}
                                handlePop={handlePop}
                                handleEditFormChange={handleEditFormChange}
                                handleCancelClick={handleCancelClick}
                              />
                            ) : null}
                          </div>
                          <ReadOnlyRowMessages
                            pick={pick}
                            handlePop={handlePop}
                            handleDeleteClick={handleDeleteClick}
                            handleEditClick={handleEditClick}
                          />
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

      {/* ADD Message SECTION  */}
      <section
        className={
          AddPlan === true
            ? "fixed flex top-0 left-0 w-full h-screen justify-center items-center edit-table-modal"
            : "hidden"
        }
      >
        <div className="w-full mx-5 relative md:w-3/5 flex flex-col sm:flex-row bg-white shadow-lg rounded-lg">
          <AiOutlineCloseCircle
            onClick={() => setAddPlan(!AddPlan)}
            className="absolute top-3 right-5 cursor-pointer text-2xl hover:text-gray-400"
          />

          <div className="w-full sm:w-60 p-5 text-center sm:text-left bg-gray-100 rounded-l-lg">
            <h2 className="text-lg">Message A User</h2>
            <p className="py-2 text-xs text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, cum.
            </p>
          </div>
          <div className="w-full md:w-5/6 p-5">
            <form className="flex flex-col p-5" onSubmit={handleAddFormSubmit}>
              <label htmlFor="user-name ">
                User Name
                <input
                  onChange={handleAddFormChange}
                  type="text"
                  name="name"
                  className="p-2 mt-1 mb-5 w-full text-sm border rounded-md"
                  placeholder="Name"
                  required
                />
              </label>

              <label htmlFor="user-message ">
                Message
                <textarea
                  onChange={handleAddFormChange}
                  type="text"
                  name="message"
                  className="p-2 mt-1 mb-5 w-full h-52 text-sm border rounded-md"
                  placeholder="Message"
                  required
                />
              </label>

              <div className="w-full flex justify-end">
                {Active === true ? (
                  <button
                    onClick={() => notify()}
                    type="submit"
                    className="py-3 px-6 text-sm bg-black text-white mt-5"
                  >
                    ADD
                  </button>
                ) : (
                  <button className="py-3 px-6 text-sm bg-gray-600 text-gray-400 mt-5 cursor-not-allowed">
                    ADD
                  </button>
                )}

                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Messages;
