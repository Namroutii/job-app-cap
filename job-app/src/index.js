import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// <<<<<<< HEAD
// import Home from "./pages/Home/Home";
// import AddCV from "./pages/AddCV/AddCV";
// import Get from "./pages/GetCV/GetCV";
// import Login from "./pages/Login/Login";
// =======
import Home from "./pages/home/Home";
import AddCV from "./pages/addCV/AddCV";
import Get from "./pages/getCV/GetCV";
import Login from "./pages/login/Login";
import AdminPanel from "./pages/AdminPanel/AdminPanel"
// >>>>>>> main
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
{/* <<<<<<< HEAD

        <Route path="/Home" index element={<Home />} />
        <Route path="/Add-cv" element={<AddCV />} />
        <Route path="/Get-cv" element={<Get />} />
        <Route path="/Login" element={<Login />} /> */}

=======
        <Route path="/home" index element={<Home />} />
        <Route path="/"  element={<Home />} />
        <Route path="/add-cv" element={<AddCV />} />
        <Route path="/get-cv" element={<Get />} />
        <Route path="/login" element={<Login />} />
        <Route path="/AdminPanel" element={<AdminPanel/>}/>
{/* >>>>>>> main */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
