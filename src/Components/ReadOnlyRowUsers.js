import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Data } from "./PlansData";

function ReadOnlyRowUsers({
  pick,
  handleEditClick,
  handleDeleteClick,
  handlePop,
  currentItems,
}) {
  return (
    <>
      <tr>
        <td className="px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
          <p className="text-gray-900 whitespace-no-wrap">{pick.name}</p>
        </td>

        <td className="px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
          <p className="text-gray-900 whitespace-no-wrap">{pick.email}</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-600 whitespace-no-wrap">{pick.contact}</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-600 whitespace-no-wrap">{pick.address}</p>
        </td>
        <td className=" py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={(e) => {
              handleEditClick(e, pick);
              handlePop();
            }}
            type="button"
            className="px-3 py-2 mx-2 bg-emerald-500 text-xs text-white"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteClick(pick.id)}
            type="button"
            className="px-3 py-2 mx-2 bg-red-600 text-xs text-white"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default ReadOnlyRowUsers;
