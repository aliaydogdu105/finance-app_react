import React, { useEffect, useState } from "react";
import { ArrowDownIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Coins } from "../config/api";

const Cryptocurrency = () => {
  const [coinsData, setCoinsData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(Coins);
      setCoinsData(result.name);
      console.log(coinsData);
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center flex-col w-3/4 fixed top-28 right-12">
      <h1 className=" mb-6 font-bold text-2xl">Cryptocurrency</h1>
      <form className="flex items-center w-2/4 mb-6">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <ArrowDownIcon className="h-6 w-6 text-green-600" />
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
          class="p-2.5 ml-2 text-sm font-medium text-white bg-green-600 rounded-lg border hover:bg-green-700"
        >
          <EyeIcon className="h-5 w-5 text-green-300" />
        </button>
      </form>
      <div className="shadow-md shadow-green-300 rounded-md w-4/5">
        <table className="w-full text-md text-center text-gray-700">
          <thead className=" capitalize bg-gray-100">
            <tr>
              {["Name", "Price", "24h%", "Market Cap"].map((header) => (
                <th className="py-4 px-12">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className=" border-t">
              <td className="p-2">{}</td>
              <td className="py-2 border-l">text1.2</td>
              <td className="p-2 border-l">text1.3</td>
              <td className="p-2 border-l">text1.4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cryptocurrency;
