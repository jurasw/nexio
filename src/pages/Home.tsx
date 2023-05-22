import React from "react";
import Hero from "../components/home/Hero";
import Footer from "../components/Footer";
import About from "../components/home/About";
import MyComponent from "../components/home/UnderHero";
import Technologies from "../components/home/Technologies";
import CaseStudy from "../components/home/CaseStudy";
import TempNav from "../components/TempNav";
// import TempTestimonials from "../components/home/TempTestimonials";

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
      <TempNav />
      <div style={{ }}>
        <Hero />
        <MyComponent />
        <Technologies />
        <CaseStudy />
        <About />
        {/* <TempTestimonials /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
