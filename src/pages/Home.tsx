import React from "react";
import Hero from "../components/home/Hero";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import About from "../components/home/About";
import MyComponent from "../components/home/UnderHero";
import Technologies from "../components/home/Technologies";
import CaseStudy from "../components/home/CaseStudy";
import TestimonialsCarousel from "../components/home/Testimonials";

const Home: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "contain",
        fontFamily: "Red Hat Display",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Nav />
      <div>
        <Hero />
        <MyComponent />
        <Technologies />
        <CaseStudy />
        <About />
        <TestimonialsCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
