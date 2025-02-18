import React from "react";

export const InputPlace = ({ setInput, setFormSearch }) => {
  return (
    <>
      <form className="form flex gap-2 justify-center" onSubmit={setFormSearch}>
        <input
          type="text"
          className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
          placeholder="Ingresa una ciudad "
          onChange={setInput}
        />
        <button type="submit" className="bg-cyan-600 p-2 rounded-lg">
          Consultar
        </button>
      </form>
    </>
  );
};
