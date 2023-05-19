import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import TechTile from "./TechTile";
import Title from "./Title";

const Technologies: React.FC = () => {
  return (
    <div style={{ padding: "10%" }}>
      <Flex direction={["column", "row"]}>
        <Flex direction="column" w={["100%", "50%"]}>
          <Title title={"TECHNOLOGIA"} />
          <Heading lineHeight={1.1} fontWeight={600} fontSize={"48px"}>
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
              Nasze środowisko
            </Text>
            <br />
            <Text
              as={"span"}
              bgGradient="linear(to-l,#F19E38, #000000)"
              bgClip="text"
            >
              technologiczne
            </Text>
          </Heading>
        </Flex>
        <Flex direction="column" w={["100%", "50%"]}>
          <Text color={"gray.500"} paddingTop="20px">
            Sieć programistów, walidatorów, budowniczych, instytucji oraz
            partnerów z całego świata napędza rozwój Nexio management. Odkryj
            społeczność, która w najszybszym tempie przemienia świat finansów.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={["column", "row"]} marginTop={"50px"} gap={2}>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <TechTile
            imageUrl={"/icons/technologies/flutter.svg"}
            title={"Flutter"}
          />
        </Flex>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <TechTile
            imageUrl={"/icons/technologies/react.svg"}
            title={"React"}
          />
        </Flex>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <TechTile imageUrl={"/icons/technologies/ios.svg"} title={"iOS"} />
        </Flex>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <TechTile
            imageUrl={"/icons/technologies/android.svg"}
            title={"Android"}
          />
        </Flex>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <TechTile
            imageUrl={"/icons/technologies/js.svg"}
            title={"JavaScript"}
          />
        </Flex>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <TechTile
            imageUrl={"/icons/technologies/python.svg"}
            title={"Python"}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default Technologies;
