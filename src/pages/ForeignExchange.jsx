import React from "react";
import { ArrowDownIcon, EyeIcon } from "@heroicons/react/24/solid";

const ForeignExchange = () => {
  return (
    <div className="flex items-center flex-col w-3/4 fixed top-28 right-20">
      <h1>Foreign Exchange</h1>
      <form className="flex items-center w-1/4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <ArrowDownIcon className="h-6 w-6 text-blue-600" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-10 p-2.5 "
            placeholder="Search"
            autoComplete="off"
            required
          />
        </div>
        <button
          type="submit"
          class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-600 rounded-lg border hover:bg-blue-700"
        >
          <EyeIcon className="h-5 w-5 text-blue-300" />
        </button>
      </form>
    </div>
  );
};

export default ForeignExchange;
