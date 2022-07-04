import React, { useRef } from "react";
import Helmet from "react-helmet";
import ReactToPrint from "react-to-print";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Invoice() {
  const componentRef = useRef();

  return (
    <div ref={componentRef}>
      <Helmet>
        <title>Invoice</title>
      </Helmet>

      <Header />

      <section className="w-full">
        <div className="w-full flex flex-col justify-center items-center h-96 bg-emerald-500 text-white text-5xl">
          <h2>Your Invoice</h2>
          <p className="text-2xl pt-3">Let's build a relation of trust</p>
        </div>
      </section>

      <section className="w-full pt-10 flex flex-col items-center lg:flex-row lg:justify-around">
        {/* left hand side */}
        <div className="w-full lg:w-1/4 py-3 lg:py-0 lg:px-10 flex flex-col items-center lg:items-start justify-center">
          <h2 className="text-2xl lg:text-left text-emerald-500">
            Your Invoice
          </h2>
          <div className="w-44 lg:pl-1 mt-5">
            <h3 className="font-bold text-center lg:text-left text-xs">
              Street View Spectator
            </h3>
            <p className="text-xs text-center lg:text-left text-gray-400 pt-2 pb-1">
              P. Sherman, 42, Volley Bay Way, Sydney
            </p>
            <p className="text-xs text-center lg:text-left text-gray-400">
              admin@lms-system.com
            </p>
          </div>
        </div>

        {/* right hand side  */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center">
          <div className="w-2/3 bg-gray-200 p-5">
            <div className="flex space-x-10 pb-2">
              <div className="w-1/2">
                <h3 className="text-xs font-bold">Invoice ID:</h3>
              </div>
              <p className="text-xs text-gray-500">0123</p>
            </div>

            <div className="flex space-x-10 pb-2">
              <div className="w-1/2">
                <h3 className="text-xs font-bold">PO Number:</h3>
              </div>
              <p className="text-xs text-gray-500">54321</p>
            </div>

            <div className="flex space-x-10 pb-2">
              <div className="w-1/2">
                <h3 className="text-xs font-bold">Invoice Date:</h3>
              </div>
              <p className="text-xs text-gray-500">Feb 07, 2022</p>
            </div>

            <div className="flex space-x-10 pb-2">
              <div className="w-1/2">
                <h3 className="text-xs font-bold">Due Date:</h3>
              </div>
              <p className="text-xs text-gray-500">Feb 14, 2022</p>
            </div>

            <div className="flex space-x-10 pb-2">
              <div className="w-1/2">
                <h3 className="text-xs font-bold">Balance Due:</h3>
              </div>
              <p className="text-xs text-gray-500">$49.00</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center pb-10">
        <div className="container w-[80%] mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="pl-10 pr-12 sm:px-9 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-5 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
                        PRICE
                      </th>
                      <th className="px-5 py-4 border-b-2 border-gray-200 bg-gray-100 text-center  md:text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
                        QUERIES ABAILABLE
                      </th>
                      <th className=" px-6 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
                        START-DATE
                      </th>
                      <th className="px-7 py-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">
                        END DATE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200bg-white text-sm">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              inv 1.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">$49</p>
                      </td>
                      <td className="px-16 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">15</p>
                      </td>
                      <td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          25-06-2022
                        </p>
                        <p className="w-28 sm:w-0"></p>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          24-07-2022
                        </p>
                        <p className="w-28 sm:w-0"></p>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200bg-white text-sm">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              inv 2.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">$79</p>
                      </td>
                      <td className="px-16 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">20</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          25-06-2022
                        </p>
                        <p className="w-28 sm:w-0"></p>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          24-07-2022
                        </p>
                        <p className="w-28 sm:w-0"></p>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200bg-white text-sm">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              inv 3.
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">$49</p>
                      </td>
                      <td className="px-16 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">15</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          25-06-2022
                        </p>
                        <p className="w-28 sm:w-0"></p>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          24-07-2022
                        </p>
                        <p className="w-28 sm:w-0"></p>
                      </td>
                    </tr>

                    <tr>
                      <td className=" px-5 md:py-5 border-b border-gray-200 bg-white text-sm"></td>
                      <td className=" px-5 md:py-5 border-b border-gray-200 bg-white text-sm"></td>
                      <td className=" px-5 md:py-5 border-b border-gray-200 bg-white text-sm"></td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 font-bold whitespace-no-wrap">
                          Grand Total
                        </p>
                      </td>
                      <td className="px-5 pb-1 lg:py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-EMERALD-500 font-semibold whitespace-no-wrap">
                          $147.00
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-full flex justify-end">
                <ReactToPrint
                  trigger={() => {
                    return (
                      <button className="w-full lg:w-fit py-3 px-5 mt-8 rounded-md bg-emerald-500 hover:bg-emerald-400 text-sm text-white">
                        Print as PDF
                      </button>
                    );
                  }}
                  content={() => componentRef.current}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Invoice;
