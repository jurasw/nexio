import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import Title from "./Title";

const About: React.FC = () => {
  const columnSize = useBreakpointValue({ base: "100%", md: "50%" });
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      style={{ fontFamily: "Red Hat Display", padding: "10%" }}
    >
      <Box flex={columnSize} maxWidth="100%" p={{ base: "1rem", md: "2rem" }}>
        <Title title={"POZNAJ NAS"} />
        <Heading fontSize={"48px"} fontWeight={400}>
          <Text
            as={"span"}
            position={"relative"}
            bgGradient="linear(to-l,#F19E38, #000000)"
            bgClip="text"
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              zIndex: -1,
            }}
          >
            Nexio
          </Text>
          <Text as={"span"} color="#000">
            {" Management"}
          </Text>
        </Heading>
        <Text
          fontSize={{ base: "1rem", md: "1.5rem" }}
          style={{
            color: "#161616",
            fontWeight: "400",
            fontSize: "18px",
            marginTop: "54px",
          }}
        >
          Jesteśmy zaufanym partnerem w tworzeniu szytych na miarę rozwiązań,
          <span style={{ fontWeight: 700 }}> wprowadzaniu biznesu</span> na
          drogę pełnej lub częściowej cyfryzacji oraz
          <span style={{ fontWeight: 700 }}>
            {" "}
            optymalizacji procesów biznesowych
          </span>{" "}
          przy użyciu innowacyjnych technologii. <br />
          <br /> Posiadamy ponad{" "}
          <span style={{ fontWeight: 700 }}>
            17-letnie doświadczenie na rynku IT
          </span>{" "}
          w Polsce i poza jej granicami. Prowadzimy działania w oparciu o
          transparentne i szczere relacje. <br />
          <br /> W ramach naszych usług tworzymy{" "}
          <span style={{ fontWeight: 700 }}>dedykowane rozwiązania</span>,
          utrzymujemy i rozwijamy nawet najbardziej wymagające systemy IT oraz
          dopasowujemy specjalistów do projektów klienta.
        </Text>
        <Link href={"#footer"}>
          <Button
            rounded={"full"}
            size={"lg"}
            fontWeight={"normal"}
            px={6}
            border="2px"
            borderColor={"#F19E38"}
            bg={"rgba(255, 255, 255, 0)"}
            marginTop={"44px"}
            _hover={{
              borderColor: "#F19E38",
              bg: "rgba(255, 208, 151, 0.2)",
              color: "#000",
            }}
            _active={{
              borderColor: "#F19E38",
              bg: "rgba(255, 208, 151, 0.2)",
            }}
          >
            Skontaktuj się z nami
          </Button>
        </Link>
      </Box>
      <Box
        flex={columnSize}
        maxWidth="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={"about.png"}
          alt={"title"}
          maxW="100%"
          maxH="100%"
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};

export default About;
