import React from "react";
import Hero from "../components/home/Hero";
import Footer from "../components/Footer";
import About from "../components/home/About";
import Technologies from "../components/Technologies";
import Nav from "../components/Nav";
import { Stack } from "@chakra-ui/react";
import Solution from "../components/home/Solution";
import Testimonials from "../components/home/Testimonials";
import CaseStudy from "../components/CaseStudy";
import Fund from "../components/home/Fund";

const Home: React.FC = () => {
  return (
    <Stack
      maxW={"100%"}
      backgroundColor={"rgba(255, 208, 151, 0)"}
      backgroundImage="url('/mainhero.png')"
      backgroundSize={["0", "0", "0", "contain"]}
      fontFamily="Red Hat Display"
      backgroundRepeat="no-repeat"
    >
      <Nav />
      <div style={{ margin: 0 }}>
        <Hero />
        <Solution />
        <Technologies />
        <CaseStudy />
        <About />
        <Testimonials />
        <Fund />
      </div>
      <Footer />
    </Stack>
  );
};

export default Home;
