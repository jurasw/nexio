import React from "react";
import Hero from "../components/business/Hero";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Services from "../components/business/Services";
import Specializations from "../components/business/Specializations";

const Business: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Specializations />
      <Footer />
    </>
  );
};

export default Business;
