import React, { useState } from "react";
import "../App.css";
import { Data7 } from "./PlansData";
import "react-toastify/dist/ReactToastify.css";

function ManageQueries() {
  const [Plans, setPlans] = useState(Data7);

  const State = (props) => {
    if (props.pick === "in Progress") {
      return <p className="text-yellow-500">{props.pick}</p>;
    } else if (props.pick === "Not Active") {
      return <p className="text-red-500">{props.pick}</p>;
    } else if (props.pick === "Complete") {
      return <p className="text-green-500">{props.pick}</p>;
    }
  };

  return (
    <div className="flex flex-col w-full -mt-5">
      <div className="w-full md:px-10 flex flex-col items-center md:flex-row md:justify-between">
        <input
          className="py-2 md:-ml-2 px-2 border border-gray-400 rounded-md w-full md:w-2/6"
          type="search"
          placeholder="Search Queries"
        />
      </div>
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
                          Name
                        </th>

                        <th className="px-6 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                          Total Queries
                        </th>

                        <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                          Top Searches
                        </th>

                        <th className=" pl-9 pr-12 md:px-8 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                          Status
                        </th>

                        <th className="pl-12 pr-14 sm:px-10 md:pl-10 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                          DATE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Plans.map((pick) => (
                        <>
                          <tr>
                            <td className="pl-3 sm:px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
                              <p className="px-12 sm:px-0"></p>

                              <p className="text-gray-900 whitespace-no-wrap">
                                {pick.name}
                              </p>
                            </td>

                            <td className=" px-14 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
                              <p className="px-8 sm:px-0"></p>

                              <p className="text-gray-900 whitespace-no-wrap">
                                {pick.query}
                              </p>
                            </td>

                            <td className="pr-10 sm:px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
                              <p className="px-20 sm:px-0"></p>

                              <p className="text-gray-900 whitespace-no-wrap">
                                {pick.top}
                              </p>
                            </td>

                            <td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="px-10 sm:px-0"></p>
                              <p
                                id="query_status_r1"
                                className="text-gray-600 whitespace-no-wrap"
                              >
                                <State pick={pick.status} />
                              </p>
                            </td>

                            <td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="px-10 sm:px-0"></p>

                              <p className="text-gray-600 whitespace-no-wrap">
                                {pick.date}
                              </p>
                            </td>
                          </tr>
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
    </div>
  );
}

export default ManageQueries;
