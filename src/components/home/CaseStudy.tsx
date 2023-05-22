import React from "react";
import { Button, Flex, Heading, Stack, Text, Image } from "@chakra-ui/react";
import Card from "./CardProject";
import Title from "./Title";

const CaseStudy: React.FC = () => {
  return (
    <section
      style={{
        paddingTop: "20px",
        background: "#FDFCFC",
        padding: "10%",
        backgroundImage: "url('/bgCase.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Stack spacing={0} align={"center"} marginBottom={"80px"}>
        <Title title={"CASE STUDY"} />
        <Heading>
          <Text
            as={"span"}
            position={"relative"}
            color="#000"
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
            Zobacz nasze
          </Text>
          <Text
            as={"span"}
            bgGradient="linear(to-l,#F19E38, #000000)"
            bgClip="text"
          >
            realizacje
          </Text>
        </Heading>
        <Text>
          Tworząc rozwiązania, skupiamy się na realnych potrzebach Klienta.
          <br />
          Polegamy na szerokim doświadczeniu i wiedzy naszych specjalistów.
        </Text>
      </Stack>
      <Flex
        direction={["column", "row"]}
        style={{ position: "relative" }}
        gap={5}
      >
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <Card
            imageUrl={"/appcase1.svg"}
            title={"LifePlan App"}
            text={
              "LifePlan App pomaga odkryć własny potencjał oraz wzmocnić odporność psychiczną. Aplikacja umożliwia usprawnienie własnej pracy oraz zarządzanie czasem i zadaniami."
            }
            buttonImg={"icons/arrow-right.svg"}
            href={""}
            stack={["Flutter", "React JS", "iOS", "Android"]}
          />
        </Flex>
        <Flex
          direction="column"
          w={["100%", "50%"]}
          alignItems="center"
          mt="20px"
        >
          <Flex w="100%" h={["0em","8em"]} mt="20px" />
          <Card
            imageUrl={"/appcase2.svg"}
            title={"LifePlan App"}
            text={
              "LifePlan App pomaga odkryć własny potencjał oraz wzmocnić odporność psychiczną. Aplikacja umożliwia usprawnienie własnej pracy oraz zarządzanie czasem i zadaniami."
            }
            buttonImg={"icons/arrow-right.svg"}
            href={""}
            stack={["Flutter", "React JS", "iOS", "Android"]}
          />
        </Flex>
      </Flex>
      <Stack align={"center"} marginTop={"80px"}>
        <Button
          color="#fff"
          rounded={"full"}
          size={"lg"}
          fontWeight={"normal"}
          px={6}
          bg={"#000"}
          _hover={{ bg: "#343434" }}
        >
          Porozmawiaj z ekspertem
          <Image marginLeft="10px" src={"arrow-up-right.svg"} />
        </Button>
      </Stack>
    </section>
  );
};

export default CaseStudy;
