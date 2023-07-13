import { Stack, Heading, Text } from "@chakra-ui/react";
import Title from "../SectionTitle";
import ScrollAnimation from "../ScrollAnimation";
import Jobs from "./Jobs";
import { useTranslation } from "react-i18next";

const JobBoard = () => {
  const { t } = useTranslation();
  return (
    <section
      style={{
        width: "100%",
        paddingTop: "20px",
        background: "#FDFCFC",
        padding: "10%",
      }}
    >
      <Stack spacing={0} align={"center"} marginBottom={"80px"}>
        <Title title={t("job-title")} />
        <Heading
          lineHeight={1.1}
          fontWeight={400}
          fontSize={"38px"}
          my={5}
          fontFamily={"Red Hat Display"}
        >
          <Text>{t("job-header")}</Text>
        </Heading>
      </Stack>
      <Jobs />
      <Stack spacing={0} align={"center"}>
        <Heading mb={12} textAlign={"center"}>
          <Text
            lineHeight={1.1}
            fontWeight={600}
            fontSize={"16px"}
            my={5}
            fontFamily={"Red Hat Display"}
            color={"primary"}
          >
            {t("job-text1")}
          </Text>
          <Text
            lineHeight={1.1}
            fontWeight={400}
            fontSize={"14px"}
            fontFamily={"Red Hat Display"}
          >
            {t("job-text2")}
          </Text>
        </Heading>
        <ScrollAnimation />
      </Stack>
    </section>
  );
};

export default JobBoard;
