import React from "react";

function EditableRow({
  editForm,
  handleEditFormChange,
  handleCancelClick,
  handlePop,
}) {
  return (
    <tr className="flex z-50 flex-col bg-white p-5 w-96 rounded-lg shadow-lg">
      <p>Edit Plan</p>
      <td className="space-x-2 py-5 border-b border-gray-200 bg-white text-sm">
        <input
          type="text"
          name="name"
          className="p-2 border border-gray-400 rounded-md w-full"
          placeholder="Name..."
          value={editForm.name}
          onChange={handleEditFormChange}
          required
        />
      </td>

      <td className=" space-x-2 py-5 border-b border-gray-200 bg-white text-sm">
        <input
          type="text"
          name="limit"
          className="p-2 border border-gray-400 rounded-md w-full"
          placeholder="Limit..."
          value={editForm.limit}
          onChange={handleEditFormChange}
          required
        />
      </td>

      <td className=" py-5 border-b border-gray-200 bg-white text-sm">
        <input
          type="text"
          name="price"
          className="p-2 border border-gray-400 rounded-md w-full"
          placeholder="Price..."
          value={editForm.price}
          onChange={handleEditFormChange}
          required
        />
      </td>

      <td className=" py-5 border-b border-gray-200 bg-white text-sm">
        <input
          type="text"
          name="time"
          className="p-2 border border-gray-400 rounded-md w-full"
          placeholder="Time..."
          value={editForm.time}
          onChange={handleEditFormChange}
          required
        />
      </td>

      <td className=" py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => handlePop()}
          type="submit"
          className="px-3 py-2 mx-2 bg-emerald-500 text-sm text-white"
        >
          Save
        </button>
        <button
          onClick={() => {
            handleCancelClick();
            handlePop();
          }}
          type="button"
          className="px-3 py-2 mx-2 bg-red-600 text-sm text-white"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}

export default EditableRow;
