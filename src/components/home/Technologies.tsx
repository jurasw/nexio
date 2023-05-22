import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Title from "./Title";

const Technologies: React.FC = () => {
  return (
    <div style={{ padding: "10%" }}>
      <Flex direction={["column", "row"]}>
        <Flex direction="column" w={["100%", "50%"]}>
          <Title title={"TECHNOLOGIA"} />
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={["38px", "48px"]}
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
      <Grid
        marginTop={"50px"}
        templateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(6, 1fr)",
        }}
        gap={4}
      >
        {[
          { title: "Python", imageUrl: "/icons/technologies/python.svg" },
          { title: "JavaScript", imageUrl: "/icons/technologies/js.svg" },
          { title: "React", imageUrl: "/icons/technologies/react.svg" },
          { title: "Flutter", imageUrl: "/icons/technologies/flutter.svg" },
          { title: "Angular", imageUrl: "/icons/technologies/angular.svg" },
          { title: "C#", imageUrl: "/icons/technologies/cs.svg" },
          { title: "Azure", imageUrl: "/icons/technologies/azure.svg" },
          { title: "Java", imageUrl: "/icons/technologies/java.svg" },
          { title: "Xamarin", imageUrl: "/icons/technologies/xamarin.svg" },
          { title: "MUAI", imageUrl: "/icons/technologies/muai.svg" },
          { title: "iOS", imageUrl: "/icons/technologies/ios.svg" },
          { title: "Android", imageUrl: "/icons/technologies/android.svg" },
        ].map((item, index) => (
          <Box
            key={index}
            bg="rgba(255,255,255,0)"
            borderWidth="1px"
            borderColor="#CACACA"
            borderRadius={"15px"}
            p={4}
            py={[4,"50px"]}
            textAlign="center"
          >
            <img src={item.imageUrl} style={{ margin: "auto" }} />
            <p
              style={{
                fontFamily: "Red Hat Display",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "22px",
              }}
            >
              {item.title}
            </p>
          </Box>
        ))}
      </Grid>
      {/* <Flex direction={["column", "row"]} marginTop={"50px"} gap={2}>
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
      </Flex> */}
    </div>
  );
};

export default Technologies;
