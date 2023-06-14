import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // import BrowserRouter, Route and Routes from react-router-dom
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Landing from "./screens/Landing.jsx";
import Signin from "./screens/signin.jsx";
import Signup from "./screens/signup.jsx";
import Campaign from "./screens/DetailPage";

// import PageOne from "./screens/PageOne.jsx"; // import your additional screens
export default function App() {
  return (
    <BrowserRouter>
      {/* Wrap the component in BrowserRouter */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* Wrap your routes in Routes */}
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/campaign" element={<Campaign />} />
      </Routes>
    </BrowserRouter>
  );
}
