import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Hero from "../components/career/Hero";
import Description from "../components/career/Description";
import Recruitment from "../components/career/Recruitment";
import Why from "../components/career/Why";
import Quots from "../components/career/Quots";
import Join from "../components/career/Join";

const Career: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Description />
      <Why />
      <Quots />
      <Recruitment />
      <Join />
      <Footer />
    </>
  );
};

export default Career;
