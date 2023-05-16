import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import React from "react";

const Join: React.FC = () => {
  const columnSize = useBreakpointValue({ base: "100%", md: "50%" });

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        marginTop={"100px"}
        style={{ fontFamily: "Red Hat Display" }}
      >
        <Box
          flex={columnSize}
          maxWidth="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={"rectangle.png"}
            alt={"title"}
            maxW="100%"
            maxH="100%"
            objectFit="contain"
          />
        </Box>
        <Box flex={columnSize} maxWidth="100%" p={{ base: "1rem", md: "2rem" }}>
          <Text
            fontSize={{ base: "1rem", md: "1.5rem" }}
            style={{
              color: "#161616",
              fontWeight: "400",
              fontSize: "30px",
              lineHeight: "48px",
            }}
          >
            Nie znalazłeś odpowiedniej oferty?
          </Text>
          <div style={{ textAlign: "center" }}>
            <Heading
              as="h1"
              fontSize={{ base: "1.5rem", md: "2rem" }}
              mb="1rem"
              style={{
                color: "#161616",
                fontWeight: "700",
                fontSize: "48px",
                lineHeight: "80px",
              }}
            >
              Chcesz do nas dołączyć?
            </Heading>
            <Button style={{ background: "#FFD097", borderRadius: "48px" }}>
              Prześlij swoje CV przez formularz
            </Button>
          </div>
        </Box>
      </Flex>
    </>
  );
};

export default Join;
