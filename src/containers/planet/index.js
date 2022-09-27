// /* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./Add";
import Detail from "./Detail";
import Edit from "./Edit";
import Home from "./Home";

export const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};

export default Index;
