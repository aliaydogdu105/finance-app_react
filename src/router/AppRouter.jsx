import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import ForeignExchange from "../pages/ForeignExchange";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Aside />
      <Routes>
        <Route path="/foreignexchange" element={<ForeignExchange />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
