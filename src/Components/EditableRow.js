import React from "react";

function EditableRow({ editForm, handleEditFormChange, handleCancelClick }) {
  return (
    <tr>
      <td className="px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
        <input
          type="text"
          name="name"
          className="p-1 border"
          placeholder="Name..."
          value={editForm.name}
          onChange={handleEditFormChange}
          required
        />
      </td>

      <td className="px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
        <input
          type="text"
          name="limit"
          className="p-1 border"
          placeholder="Limit..."
          value={editForm.limit}
          onChange={handleEditFormChange}
          required
        />
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <input
          type="text"
          name="price"
          className="p-1 border "
          placeholder="Price..."
          value={editForm.price}
          onChange={handleEditFormChange}
          required
        />
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <input
          type="text"
          name="time"
          className="p-1 border "
          placeholder="Time..."
          value={editForm.time}
          onChange={handleEditFormChange}
          required
        />
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          type="submit"
          className="px-3 py-2 mx-2 bg-emerald-500 text-xs text-white"
        >
          Save
        </button>
        <button
          onClick={handleCancelClick}
          type="button"
          className="px-3 py-2 mx-2 bg-red-600 text-xs text-white"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}

export default EditableRow;
