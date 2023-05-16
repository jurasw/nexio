import React from "react";
import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import IconTitle from "./Icons";

const Recruitment: React.FC = () => {
  return (
    <>
      <Stack spacing={0} align={"center"}>
        <Heading
          style={{
            fontWeight: "700",
            fontSize: "48px",
            lineHeight: "80px",
          }}
        >
          Etapy rekrutacji
        </Heading>
      </Stack>
      <Flex direction={["column", "row"]} marginTop={"50px"}>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <IconTitle
            imageUrl={"/icons/wyszukaj.svg"}
            text={"Nowe technologie"}
          />
        </Flex>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <IconTitle
            imageUrl={"/icons/rozmowa.svg"}
            text={"Nowe technologie"}
          />
        </Flex>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <IconTitle imageUrl={"/icons/oferta.svg"} text={"Nowe technologie"} />
        </Flex>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <IconTitle imageUrl={"/icons/witamy.svg"} text={"Nowe technologie"} />
        </Flex>
      </Flex>
      <Stack spacing={0} align={"center"}>
        <Button style={{ background: "#FFD097", borderRadius: "48px" }}>
          Znajdź ofertę dla siebie
        </Button>
      </Stack>
    </>
  );
};

export default Recruitment;
