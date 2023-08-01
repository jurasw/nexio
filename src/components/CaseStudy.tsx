import React from "react";
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import Card from "./home/CardProject";
import Title from "./SectionTitle";
import { Path } from "../pages/Paths";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const CaseStudy: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section
      style={{
        width: "100%",
        paddingTop: "20px",
        background: "#FDFCFC",
        padding: "10%",
        backgroundImage: "url('/bgCase.png')",
        backgroundSize: "cover",
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
            {t("see-our")}{" "}
          </Text>
          <Text
            as={"span"}
            bgGradient="linear(to-l,#F19E38, #000000)"
            bgClip="text"
          >
            {t("see-projects")}
          </Text>
        </Heading>
        <Text>
          {t("building-solutions")}
          <br />
          {t("depth-of-experience")}
        </Text>
      </Stack>
      <Flex direction={["column", "row"]} position="relative" gap={5}>
        <Flex direction="column" w={["100%", "50%"]} alignItems="center">
          <Card
            imageUrl={"/appcase1.svg"}
            title={"LifePlan App"}
            text={
              "LifePlan App pomaga odkryć własny potencjał oraz wzmocnić odporność psychiczną. Aplikacja umożliwia usprawnienie własnej pracy oraz zarządzanie czasem i zadaniami."
            }
            buttonImg={"icons/arrow-right.svg"}
            href={"https://kaminskifoundation.life/lifeplan-app/"}
            stack={["Flutter", "React", "iOS", "Android"]}
          />
        </Flex>
        <Flex
          direction="column"
          w={["100%", "50%"]}
          alignItems="center"
          mt="20px"
        >
          <Flex w="100%" h={["0em", "8em"]} mt="20px" />
          <motion.div
            initial={{ y: "100%" }}
            transition={{ duration: 0.5 }}
            whileInView={{ y: 0 }}
          >
            <Box
              borderRadius={"38px"}
              maxW={"445px"}
              w={"full"}
              boxShadow={"2xl"}
              overflow={"hidden"}
              h="82%"
            >
              <Image src="/lifeplanapp.png"  />
            </Box>
          </motion.div>
        </Flex>
      </Flex>
      <Stack align={"center"} marginTop={"80px"}>
        <Button variant={"arrowButton"} onClick={() => navigate(Path.CONTACT)}>
          {t("talk-to-our-expert")}
          <Image marginLeft="10px" src={"arrow-up-right.svg"} />
        </Button>
      </Stack>
    </section>
  );
};

export default CaseStudy;
