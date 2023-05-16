import React from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import Card from "./CardSolution";

const MyComponent: React.FC = () => {
  return (
    <section>
    <div style={{ width: "95%", background: "#fff", margin: "auto", padding: "5%" }}>
      <Text color="#F19E38" fontWeight={600} fontSize=" 12px">
        <Image float="left" marginRight="10px" src={"minilogo.svg"} />
        OFERTA
      </Text>

      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
      >
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
          Proper solutions
        </Text>
        <br />
        <Text
          as={"span"}
          bgGradient="linear(to-l,#F19E38, #000000)"
          bgClip="text"
        >
          for you
        </Text>
      </Heading>
      <Text color={"gray.500"} paddingTop="20px">
        Sed id consectetur est. Quisque id dui at dolor sagittis feugiat. Donec
        <br />
        faucibus mi a est placerat, at malesuada dolor imperdiet. Quisque sed
        <br />
        bibendum augue.
      </Text>
      <Flex
        direction={["column", "row"]}
        style={{ position: "relative", marginTop: "-5%" }}
        gap={10}
      >
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <Flex w="100%" h="8em" mt="20px" />
          <Card
            imageUrl={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            title={"Dla biznesu"}
            text={
              "Rozwijaj swoją firmę we współpracy z partnerem, który rozumie Twoje cyfrowe potrzeby."
            }
            buttonText={"Poznaj naszą ofertę"}
            href={""}
          />
        </Flex>
        <Flex
          direction="column"
          w={["100%", "50%"]}
          alignItems="center"
          mt="20px"
        >
          <Card
            imageUrl={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            title={"Kariera"}
            text={"Miej realny wpływ na kształt swojej kariery."}
            buttonText={"Sprawdź, co możemy wspólnie stworzyć"}
            href={""}
          />
        </Flex>
      </Flex>
    </div>
    </section>
  );
};

export default MyComponent;
