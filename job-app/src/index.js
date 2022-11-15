import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Add from "./pages/addCV/AddCV";
import Get from "./pages/getCV/GetCV";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/add-cv" element={<Add />} />
        <Route path="/get-cv" element={<Get />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
