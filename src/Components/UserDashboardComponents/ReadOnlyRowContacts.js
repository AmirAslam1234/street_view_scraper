import React from "react";
import { AiFillDelete } from "react-icons/ai";

function ReadOnlyRowContacts({ pick, handleDeleteClick }) {
  return (
    <>
      <tr>
        <td className="px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
          <p className="text-gray-900 whitespace-no-wrap">{pick.name}</p>
        </td>

        <td className="px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
          <p className="text-gray-900 whitespace-no-wrap">{pick.message}</p>
        </td>

        <td className=" px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-600 whitespace-no-wrap">{pick.date}</p>
        </td>

        <td className=" py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={() => handleDeleteClick(pick.id)}
            type="button"
            className="px-8 py-2 mx-2 rounded-full border text-red-600 hover:text-red-400 text-lg border-white hover:border-red-400"
          >
            <AiFillDelete className="self-center" />
          </button>
        </td>
      </tr>
    </>
  );
}

export default ReadOnlyRowContacts;
