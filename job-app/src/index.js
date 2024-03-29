import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AddCV from "./pages/addCV/AddCV";
import Get from "./pages/getCV/GetCV";
import Login from "./pages/login/Login";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import SignUp from "./pages/signUp/SignUp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-cv" element={<AddCV />} />
        <Route path="/get-cv" element={<Get />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
