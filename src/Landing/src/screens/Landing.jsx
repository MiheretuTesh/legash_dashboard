import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Campaigns from "../components/Sections/Campaigns";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import AboutUs from "./AboutUs";
import NavBar from "../components/NavBar/NavBar";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      {/* <NavBar /> */}
      <Header />
      <Services />
      <Campaigns />
      <AboutUs />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
