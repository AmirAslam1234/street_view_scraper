import React from "react";

function EditableRowUsers({
  editForm,
  handleEditFormChange,
  handleCancelClick,
  handlePop,
}) {
  return (
    <tr className="flex z-50 mx-5 flex-col bg-white p-5 w-[450px] rounded-lg shadow-lg">
      <p>Edit Plan</p>
      <td className="space-x-2 py-3 bg-white text-sm">
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

      <td className=" space-x-2 py-3 bg-white text-sm">
        <input
          type="email"
          name="email"
          className="p-2 border border-gray-400 rounded-md w-full"
          placeholder="Limit..."
          value={editForm.email}
          onChange={handleEditFormChange}
          required
        />
      </td>

      <td className=" py-3 bg-white text-sm">
        <input
          type="text"
          name="contact"
          className="p-2 border border-gray-400 rounded-md w-full"
          placeholder="Price..."
          value={editForm.contact}
          onChange={handleEditFormChange}
          required
        />
      </td>

      <td className=" py-3 bg-white text-sm">
        <input
          type="text"
          name="address"
          className="p-2 border border-gray-400 rounded-md w-full"
          placeholder="Time..."
          value={editForm.address}
          onChange={handleEditFormChange}
          required
        />
      </td>

      <td className=" py-3 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => handlePop()}
          type="submit"
          className="px-3 py-2 mx-2 bg-emerald-500 hover:bg-emerald-400 rounded-md text-sm text-white"
        >
          Save
        </button>
        <button
          onClick={() => {
            handleCancelClick();
            handlePop();
          }}
          type="button"
          className="px-3 py-2 mx-2 bg-red-600 hover:bg-red-400 rounded-md text-sm text-white"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}

export default EditableRowUsers;
