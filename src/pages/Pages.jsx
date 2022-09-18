import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipie from "./Recipie";

function Pages() {
  return (
    <Routes>
      <Route path="/:home" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:item" element={<Searched />} />
      <Route path="/home/:recipe" element={<Recipie />} />
    </Routes>
  );
}

export default Pages;
