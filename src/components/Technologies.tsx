import { Container, Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Title from "./SectionTitle";
import { useTranslation } from "react-i18next";

const Technologies: React.FC = () => {
  const { t } = useTranslation();
  const technologies = [
    { title: "Java", imageUrl: "/icons/technologies/java.svg" },
    { title: "C#", imageUrl: "/icons/technologies/cs.svg" },
    { title: "Python", imageUrl: "/icons/technologies/python.svg" },
    { title: "JavaScript", imageUrl: "/icons/technologies/js.svg" },
    { title: "Angular", imageUrl: "/icons/technologies/angular.svg" },
    { title: "React", imageUrl: "/icons/technologies/react.svg" },
    { title: "Flutter", imageUrl: "/icons/technologies/flutter.svg" },
    { title: "Xamarin", imageUrl: "/icons/technologies/xamarin.svg" },
    { title: "MAUI", imageUrl: "/icons/technologies/muai.svg" },
    { title: "Azure", imageUrl: "/icons/technologies/azure.svg" },
    { title: "AWS", imageUrl: "/icons/technologies/aws.svg" },
    { title: "ORACLE", imageUrl: "/icons/technologies/oracle.svg" },
  ];
  return (
    <Container maxW={"100%"} px={"10%"}>
      <Flex direction={["column", "row"]}>
        <Flex direction="column" w={["100%", "100%", "50%"]}>
          <Title title={t("technology")} />
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
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              {t("our-technological")}
            </Text>
            <br />
            <Text
              as={"span"}
              bgGradient="linear(to-l,#F19E38, #000000)"
              bgClip="text"
            >
              {t("environment")}
            </Text>
          </Heading>
        </Flex>
        <Flex direction="column" w={["100%", "100%", "50%"]}>
          <Text color={"gray.500"} paddingTop="20px" pt={8}>
            {t("proficiency")}
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
        mb={4}
      >
        {technologies.map((item, index) => (
          <Box
            key={index}
            bg="rgba(255,255,255,0)"
            borderWidth="1px"
            borderColor="#CACACA"
            borderRadius={"15px"}
            p={4}
            py={[4, "50px"]}
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
    </Container>
  );
};

export default Technologies;
