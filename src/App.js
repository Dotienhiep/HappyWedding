import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import HappyWedding from "./HappyWedding";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/happywedding" element={<HappyWedding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
