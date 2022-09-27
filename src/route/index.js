import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../containers/home";
import People from "../containers/people";
import Planet from "../containers/planet";
import Starship from "../containers/starship";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people/*" element={<People />} />
      <Route path="/planet/*" element={<Planet />} />
      <Route path="/starship/*" element={<Starship />} />
    </Routes>
  );
};

export default Index;
