import React from "react";
import Hero from "../components/home/Hero";
import Footer from "../components/Footer";
import About from "../components/home/About";
import MyComponent from "../components/home/UnderHero";
import Technologies from "../components/home/Technologies";
import CaseStudy from "../components/home/CaseStudy";
import TempNav from "../components/TempNav";
import { Stack } from "@chakra-ui/react";
import TempTestimonials from "../components/home/TempTestimonials";

const Home: React.FC = () => {
  return (
    <Stack
      maxW={"100%"}
      backgroundColor={"rgba(255, 208, 151, 0)"}
      backgroundImage="url('/hero.png')"
      backgroundSize={["0", "0", "0", "contain"]}
      fontFamily="Red Hat Display"
      backgroundRepeat="no-repeat"
    >
      <TempNav />
      <div style={{ margin: 0 }}>
        <Hero />
        <MyComponent />
        <Technologies />
        <CaseStudy />
        <About />
        <TempTestimonials />
      </div>
      <Footer />
    </Stack>
  );
};

export default Home;
