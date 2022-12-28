import React, { useEffect, useState } from "react";
import { ArrowDownIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Coins } from "../config/api";

const Cryptocurrency = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(Coins())
        .then((res) => {
          setCoinsData(res.data);
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coinsData.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="flex items-center flex-col w-4/5 fixed top-28 right-12 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-gray-50 rounded-xl">
      <h1 className=" m-3 font-bold text-2xl">Cryptocurrency</h1>
      <form className="flex items-center w-2/4 mb-6">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <ArrowDownIcon className="h-6 w-6 text-green-600" />
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
          class="p-2.5 ml-2 text-sm font-medium text-white bg-green-600 rounded-lg border hover:bg-green-700"
        >
          <EyeIcon className="h-5 w-5 text-green-300" />
        </button>
      </form>
      <div className="shadow-md mb-5 shadow-green-300 rounded-md block">
        <table className="text-md text-center text-gray-700 dark:text-gray-200 h-[430px] block overflow-auto scrollbar-hide">
          <thead className="capitalize bg-gray-200 dark:bg-gray-800">
            <tr>
              {["Name", "Price", "24h%", "7d%", "Market Cap"].map((header) => (
                <th className="py-4 px-12">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin) => {
              return (
                <tr className=" border-t " key={coin.id}>
                  <td className="flex items-center gap-8 p-4 ">
                    <img width={30} src={coin.image} alt={coin.symbol} />
                    {coin.name}
                  </td>
                  <td className="py-2 border-l">
                    ${coin.current_price.toLocaleString()}
                  </td>
                  {coin.price_change_percentage_24h < 0 ? (
                    <td className="p-2 border-l bg-red-500 ">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                  ) : (
                    <td className="p-2 border-l bg-green-500">
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </td>
                  )}
                  {coin.price_change_percentage_7d_in_currency < 0 ? (
                    <td className="p-2 border-l bg-red-500">
                      {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                    </td>
                  ) : (
                    <td className="p-2 border-l bg-green-500">
                      {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                    </td>
                  )}
                  <td className="p-2 border-l">
                    ${coin.market_cap.toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cryptocurrency;
