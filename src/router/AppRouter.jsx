import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import Cryptocurrency from "../pages/Cryptocurrency";
import ForeignExchange from "../pages/ForeignExchange";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Aside />
      <Routes>
        <Route path="" element={<ForeignExchange />} />
        <Route path="/foreignexchange" element={<ForeignExchange />} />
        <Route path="/cryptocurrency" element={<Cryptocurrency />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
