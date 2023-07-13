import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Title from "../SectionTitle";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Path } from "../../pages/Paths";

const About: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const columnSize = useBreakpointValue({ base: "100%", md: "50%" });
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      px="10%"
      py="5%"
      style={{ fontFamily: "Red Hat Display" }}
    >
      <Box flex={columnSize} maxWidth="100%" p={{ base: "1rem", md: "2rem" }}>
        <Title title={t("know-us")} />
        <Heading fontSize={["38px", "48px"]} fontWeight={400}>
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
          mb={5}
          color="#161616"
          fontWeight={400}
          fontSize={"18px"}
          mt={"54px"}
        >
          {t("about-1a")}
          <span style={{ fontWeight: 700 }}> {t("about-1b")}</span>{" "}
          {t("about-1c")}
          <span style={{ fontWeight: 700 }}> {t("about-1d")}</span>{" "}
          {t("about-1e")} <br />
          <br /> {t("about-2a")}{" "}
          <span style={{ fontWeight: 700 }}>{t("about-2b")} </span>{" "}
          {t("about-2c")} <br />
          <br /> {t("about-3a")}{" "}
          <span style={{ fontWeight: 700 }}>{t("about-3b")} </span>
          {t("about-3c")}
        </Text>

        <Button variant={"expertButton"} onClick={() => navigate(Path.CONTACT)}>
          {t("contact-us")}
        </Button>
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
