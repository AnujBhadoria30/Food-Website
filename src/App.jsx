/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import { Body } from "./Component/Body";
import About from "./Component/About.jsx";
import Card from "./Component/Card";
import Contact from "./Component/Contact";
import Team from "./Component/Team.jsx";
import History from "./Component/History.jsx";
import Error from "./Component/Error.jsx";
import RestaurantDetails from "./Component/RestaurantDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="about" element={<About />}>
            {/* Nested routes for About */}
            <Route path="team" element={<Team />} />
            <Route path="history" element={<History />} />
          </Route>{" "}
          <Route path="card" element={<Card />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
