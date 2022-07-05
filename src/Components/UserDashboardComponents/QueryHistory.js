import React, { useState, useEffect } from "react";
import "../../App.css";
import { Data5 } from "../PlansData";
import ReactPaginate from "react-paginate";
import "react-toastify/dist/ReactToastify.css";

function QueryHistory() {
  const State = (props) => {
    if (props.pick === "in Progress") {
      return <p className="text-yellow-500">{props.pick}</p>;
    } else if (props.pick === "Not Active") {
      return <p className="text-red-500">{props.pick}</p>;
    } else if (props.pick === "Complete") {
      return <p className="text-green-500">{props.pick}</p>;
    }
  };

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((pick) => (
            <>
              <tr>
                <td className="px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
                  <p className="text-gray-900 whitespace-no-wrap">{pick.id}</p>
                </td>

                <td className="px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {pick.link}
                  </p>
                </td>

                <td className="px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {pick.search}
                  </p>
                </td>

                <td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p
                    id="query_status_r1"
                    className="text-gray-600 whitespace-no-wrap"
                  >
                    <State pick={pick.status} />
                  </p>
                </td>

                <td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-600 whitespace-no-wrap">
                    {pick.date}
                  </p>
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
      setCurrentItems(Data5.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(Data5.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % Data5.length;
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
          className="flex space-x-5 py-5 px-3 text-emerald-500"
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
          placeholder="Search Queries"
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
                          ID.
                        </th>

                        <th className="px-6 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                          LINK
                        </th>

                        <th className="px-6 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                          Search String
                        </th>

                        <th className="pl-9 pr-12 md:px-8 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                          STATUS
                        </th>
                        <th className="pl-12 pr-14 sm:px-10 md:pl-10 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
                          DATE
                        </th>
                      </tr>
                    </thead>
                    <tbody className="rounded-b-lg">
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

export default QueryHistory;
