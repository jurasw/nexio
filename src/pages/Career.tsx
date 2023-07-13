import React from "react";
import Hero from "../components/career/Hero";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Stack } from "@chakra-ui/react";
import Technologies from "../components/Technologies";
import Possibilities from "../components/career/Possibilities";
import WhySection from "../components/career/WhySection";
import NoOffer from "../components/career/NoOffer";
import Stages from "../components/career/Stages";
import Opinions from "../components/career/Opinions";
import JobBoard from "../components/career/JobBoard";

const Career: React.FC = () => {
  return (
    <Stack
      maxW={"100%"}
      backgroundColor={"rgba(255, 208, 151, 0)"}
      backgroundImage="url('/careerhero.png')"
      backgroundSize={["0", "0", "0", "contain"]}
      fontFamily="Red Hat Display"
      backgroundRepeat="no-repeat"
    >
      <Nav />
      <div style={{ margin: 0 }}>
        <Hero />
        <Possibilities />
        <Technologies />
        <WhySection />
        <Opinions />
        <Stages />
        <JobBoard />
        <NoOffer />
      </div>
      <Footer />
    </Stack>
  );
};

export default Career;
