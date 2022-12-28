import React, { useEffect, useState } from "react";
import { ArrowDownIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Money } from "../config/api";
import axios from "axios";

const ForeignExchange = () => {
  const [moneyData, setMoneyData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(Money())
        .then((res) => {
          setMoneyData(res.data.rates);
          console.log(res.data.rates);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  let moneyArr = Object.keys(moneyData);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredMoney = moneyArr.filter((m) =>
    m.toLowerCase().includes(search)
  );
  console.log(filteredMoney);
  console.log(moneyArr);

  return (
    <div className="flex items-center flex-col w-5/6 relative sm:fixed top-5 sm:top-28 sm:right-12 text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-50 rounded-xl">
      <h1 className=" m-3 font-bold text-2xl">Foreign Exchange</h1>
      <form className="flex items-center w-2/4 mb-6 ">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <ArrowDownIcon className="h-6 w-6 text-blue-600" />
          </div>
          <input
            type="text"
            id="simple-search"
            onChange={handleChange}
            className="bg-gray-50 dark:bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-10 p-2.5 "
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
      <div className="shadow-md mb-5 shadow-blue-300 rounded-md block ">
        <table className="text-md text-center text-gray-700 dark:text-gray-200 h-[500px] block overflow-auto scrollbar-hide">
          <thead className="capitalize bg-gray-200 dark:bg-gray-800">
            <tr>
              {["Name", "Price"].map((header) => (
                <th className="py-4 px-12">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredMoney.map((key) => {
              return (
                <tr className=" border-t " key={key.rates}>
                  <td className="flex items-center gap-8 p-4 "> USD / {key}</td>
                  <td className="py-2 border-l">{moneyData[key].toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ForeignExchange;
