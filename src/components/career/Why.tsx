import React from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import IconTitle from "./Icons";

const Why: React.FC = () => {
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
          Dlaczego praca w Nexio jest tak lubiana?
        </Heading>
        <Text
          style={{
            fontWeight: "400",
            fontSize: "28px",
            lineHeight: "48px",
          }}
        >
          Poza świetną atmosferą w pracy, znajdziesz u nas:
        </Text>
      </Stack>
      <Flex direction={["column", "row"]} marginTop={"50px"}>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <IconTitle
            imageUrl={"/icons/nowe_technologie.svg"}
            text={"Nowe technologie"}
          />
        </Flex>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <IconTitle
            imageUrl={"/icons/ciekawe_projekty.svg"}
            text={"Nowe technologie"}
          />
        </Flex>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <IconTitle
            imageUrl={"/icons/benefity.svg"}
            text={"Nowe technologie"}
          />
        </Flex>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <IconTitle
            imageUrl={"/icons/interesujacy_ludzie.svg"}
            text={"Nowe technologie"}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Why;
