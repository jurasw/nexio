import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const Description: React.FC = () => {
  return (
    <>
      <Flex
        direction={["column", "row"]}
        style={{ position: "relative", marginTop: "-5%" }}
      >
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <Flex w="100%" h="8em" mt="20px" />
          <div
            style={{
              height: 500,
              width: "85%",
              borderRadius: "48px",
              background: "#DFDFDF",
              padding: 40,
            }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              mb="1rem"
            >
              Działamy
              <span style={{ color: "#D07A0F" }}>
               {" w różnych modelach współpracy."}
              </span>
            </Heading>
            <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
              Jesteśmy elastyczni względem Twoich potrzeb. Możesz pracować
              zdalnie, hybrydowo lub z biura. <br /><br />
              B2B, Umowa o Pracę i inne - w zależności od Twoich preferencji.
            </Text>
          </div>
        </Flex>
        <Flex
          direction="column"
          w={["100%", "50%"]}
          alignItems="center"
          mt="20px"
        >
          <div
            style={{
              height: 500,
              width: "85%",
              borderRadius: "48px",
              background: "#DFDFDF",
              padding: 40,
            }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              mb="1rem"
            >
              Pracuje u nas
              <span style={{ color: "#D07A0F" }}>{" wielu specjalistów, "}</span> nie
              tylko z IT.
            </Heading>
            <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
              Analityczki i Analitycy, DevOpsi, Architektki i Architekci,
              Programistki i Programiści Front i Backend, Testerki i Testerzy,
              Project Managerki i Managerowie, Rekrueterzy i Rekruterki i wielu
              innych.
            </Text>
          </div>
        </Flex>
      </Flex>
    </>
  );
};

export default Description;
