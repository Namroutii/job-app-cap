import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddCV from "./pages/AddCV/AddCV";
import GetCV from "./pages/GetCV/GetCV";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/add-cv" element={<AddCV />} />
        <Route path="/get-cv" element={<GetCV />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
