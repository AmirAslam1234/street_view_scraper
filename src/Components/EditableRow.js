import React from "react";

function EditableRow() {
  return (
    <tr>
      <td className="px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
        <input
          type="text"
          name="name"
          className="p-1 border"
          placeholder="Name..."
          required
        />
      </td>

      <td className="px-5 space-x-2 py-5 border-b border-gray-200 bg-white text-xs">
        <input
          type="text"
          name="limit"
          className="p-1 border"
          placeholder="Limit..."
          required
        />
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <input
          type="text"
          name="price"
          className="p-1 border "
          placeholder="Price..."
          required
        />
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <input
          type="text"
          name="time"
          className="p-1 border "
          placeholder="Time..."
          required
        />
      </td>
    </tr>
  );
}

export default EditableRow;
