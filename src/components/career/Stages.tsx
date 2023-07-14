import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import Title from "../SectionTitle";
import { useTranslation } from "react-i18next";

const Stages = () => {
  const { t } = useTranslation();
  const stages = [
    {
      image: "/stages/hr.svg",
      title: t("hr"),
    },
    {
      image: "/stages/techniczna.svg",
      title: t("technical"),
    },
    {
      image: "/stages/oferta.svg",
      title: t("job-offer"),
    },
    {
      image: "/stages/witamy.svg",
      title: t("welcome"),
    },
  ];
  return (
    <Container maxW={"100%"} px={"10%"} mt={"100px"}>
      <Title title={t("how-it-work")} />
      <Heading
        fontSize={"38px"}
        fontWeight={400}
        fontFamily={"Red Hat Display"}
        mb={9}
      >
        <Text as={"span"} color="#000">
          {t("stages1")}{" "}
        </Text>
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
          {t("stages2")}
        </Text>
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        wrap="wrap"
      >
        {stages.map((stage, index) => (
          <>
            <Box
              key={index}
              bg="rgba(255,255,255,0.9)"
              p={9}
              color="black"
              textAlign="center"
              flex={{ base: "0 0 100%", md: "0 0 auto" }}
              maxW={{ base: "100%", md: "300px" }}
              mb={5}
            >
              <Text
                fontFamily="Red Hat Display"
                fontWeight={500}
                fontSize={{ base: "14px", md: "16px" }}
                mb={5}
              >
                {stage.title}
              </Text>
              <Image src="/stages/arrow.svg" m="auto" mb={5} />
              <Text
                fontFamily="Red Hat Display"
                fontWeight={500}
                fontSize={{ base: "14px", md: "16px" }}
              >
                {index + 1}.
              </Text>
            </Box>
            <Image
              src={stage.image}
              flex={{ base: "0 0 100%", md: "0 0 auto" }}
              maxW={{ base: "100%", md: "300px" }}
            />
          </>
        ))}
      </Flex>
    </Container>
  );
};

export default Stages;
