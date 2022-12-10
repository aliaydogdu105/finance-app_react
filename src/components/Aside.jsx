import React from "react";
import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <aside
      className="w-48 flex flex-col h-screen fixed top-24"
      aria-label="Sidebar"
    >
      {/* "flex-grow "look after made footer */}
      <div className="overflow-y-auto flex justify-center items-center py-4  bg-white">
        <ul className="space-y-2 flex flex-col items-center">
          <li>
            <NavLink eventKey="1" as={NavLink} to="/foreignexchange">
              <button className="w-40 h-60 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-blue-600 rounded-3xl group">
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-blue-700 rounded-3xl group-hover:w-40 group-hover:h-60"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-3xl opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative">Foreign Exchange</span>
              </button>
            </NavLink>
          </li>

          <li>
            <button className="w-40 h-60 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-green-600 rounded-3xl group">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-green-700 rounded-3xl group-hover:w-40 group-hover:h-60"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-3xl opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">Cryptocurrency</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
