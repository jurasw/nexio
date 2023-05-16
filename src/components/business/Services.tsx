import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const Services: React.FC = () => {
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
              color={"#D07A0F"}
              as="h1"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              mb="1rem"
            >
              Body Leasing
            </Heading>
            <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
              Nie musisz się martwić o jakość swojego projektu. Nasi specjaliści
              idealnie wypełnią luki w Twoim zespole, dowożąc jakość, której
              oczekujesz.
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
              color={"#D07A0F"}
              as="h1"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              mb="1rem"
            >
              Nearshoring
            </Heading>
            <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
              Zamiast tworzyć zespół od zera, skorzystaj z naszej
              specjalistycznej wiedzy oraz bazy ekspertów.
            </Text>
          </div>
        </Flex>
      </Flex>
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
              color={"#D07A0F"}
              as="h1"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              mb="1rem"
            >
              Managed Services
            </Heading>
            <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
              Realizacja, utrzymanie, rozwój projektu IT w pełni w naszych
              rękach. Stajemy się Twoim zewnętrznym zespołem.
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
              color={"#D07A0F"}
              as="h1"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              mb="1rem"
            >
              Fix Price
            </Heading>
            <Text fontSize={{ base: "1rem", md: "1.5rem" }}>
              Twój projekt, nasze wykonanie - wspólnie ustalone warunki.
              Poznajemy potrzeby Twojego biznesu, ustalamy plan działania, cenę
              i czas realizacji.
            </Text>
          </div>
        </Flex>
      </Flex>
    </>
  );
};

export default Services;
