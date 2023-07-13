import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Stack } from "@chakra-ui/react";
import FormMap from "../components/contact/FormMap";
import ContactTiles from "../components/contact/ContactTiles";

const Contact: React.FC = () => {
  return (
    <Stack
      maxW={"100%"}
      backgroundColor={"rgba(255, 208, 151, 0)"}
      backgroundImage="url('/contacthero.png')"
      backgroundSize={["0", "0", "0", "contain"]}
      fontFamily="Red Hat Display"
      backgroundRepeat="no-repeat"
    >
      <Nav />
      <div style={{ margin: 0 }}>
        <FormMap />
        <ContactTiles />
      </div>
      <Footer />
    </Stack>
  );
};

export default Contact;
