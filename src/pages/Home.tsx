import React from "react";
import Hero from "../components/home/Hero";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import About from "../components/home/About";
import MyComponent from "../components/home/UnderHero";
import Technologies from "../components/home/Technologies";
import CaseStudy from "../components/home/CaseStudy";
import TempTestimonials from "../components/home/TempTestimonials";
import { Container } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Container
      backgroundImage="url('/hero.png')"
      backgroundSize={["cover", "contain"]}
      fontFamily="Red Hat Display"
      backgroundRepeat="no-repeat"
      width="100%"
      maxWidth="100%"
    >
      <Nav />
      <div style={{}}>
        <Hero />
        <MyComponent />
        <Technologies />
        <CaseStudy />
        <About />
        <TempTestimonials />
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
