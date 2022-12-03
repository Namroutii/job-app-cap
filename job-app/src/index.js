import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddCV from "./pages/AddCV/AddCV";
import Get from "./pages/GetCV/GetCV";
import Login from "./pages/Login/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/Home" index element={<Home />} />
        <Route path="/Add-cv" element={<AddCV />} />
        <Route path="/Get-cv" element={<Get />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
