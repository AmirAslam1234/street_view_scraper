import React, { useState, useEffect } from "react";
import "../../App.css";
import { Data6 } from "../PlansData";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import ReactPaginate from "react-paginate";
function PlanInfo() {
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((pick) => (
            <>
              <tr>
                <td className="px-5 space-x-2 py-3 border-b border-gray-200 bg-white text-xs">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {pick.plan}
                  </p>
                </td>

                <td className="px-14 py-3 border-b border-gray-200 bg-white text-xs">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {pick.remaining}
                  </p>
                </td>

                <td className=" px-5 py-3 border-b border-gray-200 bg-white text-sm">
                  <p
                    id="query_status_r1"
                    className="text-gray-600 whitespace-no-wrap"
                  >
                    {pick.start}
                  </p>
                </td>

                <td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-600 whitespace-no-wrap">
                    {pick.expiry}
                  </p>
                </td>
                <td className="flex border-b border-gray-200 bg-white text-sm">
                  <button
                    type="button"
                    className="py-5 mx-2 flex flex-col items-center rounded-full border text-emerald-500 hover:text-emerald-400 text-xs border-white "
                  >
                    <AiOutlineArrowUp />
                    <p>Upgrade</p>
                  </button>
                  <button
                    type="button"
                    className="py-5 mx-2 flex flex-col items-center rounded-full border text-red-600 hover:text-red-400 text-xs border-white "
                  >
                    <AiOutlineArrowDown />
                    <p>Downgrade</p>
                  </button>
                </td>
              </tr>
            </>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(Data6.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(Data6.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % Data6.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="flex absolute space-x-5 py-5 px-3 text-emerald-500"
          pageLinkClassName="bg-white rounded-md px-4 py-2 border border-emerald-500"
          activeLinkClassName="bg-emerald-500 rounded-md border border-white px-4 py-2 text-white"
          previousClassName="hover:text-emerald-400"
          nextClassName="hover:text-emerald-400"
        />
      </>
    );
  }

  return (
    <div className="flex flex-col w-full -mt-5">
      <div className="w-full md:px-10 flex flex-col items-center md:flex-row md:justify-between">
        <input
          className="py-2 md:-ml-2 px-2 border border-gray-400 rounded-md w-full md:w-2/6"
          type="search"
          placeholder="Search Your Plans"
        />
      </div>
      <section className="w-full flex justify-center">
        <div className="container w-full mx-auto px-4 sm:px-8">
          <div className="">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full rounded-lg overflow-hidden">
                <form>
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr className="bg-gray-100 text-gray-800 py-4">
                        <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold  uppercase tracking-wider">
                          PLAN
                        </th>

                        <th className="px-3 py-3 border-b-2 border-gray-200 text-center md:text-left text-xs font-semibold uppercase tracking-wider">
                          QUERIES REMAINING
                        </th>

                        <th className=" md:px-6 py-3 border-b-2 border-gray-200 text-center md:text-left text-xs font-semibold uppercase tracking-wider">
                          <p className="w-32 md:w-0"></p>
                          START DATE
                        </th>

                        <th className="md:px-10 py-3 border-b-2 border-gray-200 text-center md:text-left text-xs font-semibold uppercase tracking-wider">
                          <p className="w-32 md:w-0"></p>
                          EXPIRY
                        </th>
                        <th className="md:pl-12 py-3 border-b-2 border-gray-200  text-center md:text-left text-xs font-semibold uppercase tracking-wider">
                          UPDATE
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <PaginatedItems itemsPerPage={4} />
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

export default PlanInfo;
