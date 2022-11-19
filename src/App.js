import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard";
import People from "./components/people";
import Planets from "./components/planets";

function App() {
  return (
    <div>
      <Dashboard />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planet/:id" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
