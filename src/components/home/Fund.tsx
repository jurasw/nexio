import {
  Container,
  Heading,
  Button,
  Text,
  Image,
  Box,
  HStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Fund = () => {
  const { t } = useTranslation();

  return (
    <Container maxW={"100%"} p={"10%"} fontFamily={"Red Hat Display"}>
      <Heading lineHeight={1.1} fontWeight={400} fontSize={"38px"} my={5}>
        <Text> {t("fund-title")}</Text>
      </Heading>
      <HStack justifyContent={"center"} mb={8}>
        <Text color={"#5F5F5F"} fontSize={"18px"}>
          {t("fund-text")}
        </Text>
        <Image src="/alphaplatinum.svg" />
      </HStack>
      <Box>
        <Button
          pt={5}
          as={"a"}
          variant={"expertButton"}
          href="https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=3a556d158ae04bd3ab8b546357409979"
        >
          {t("fund-btn")}
        </Button>
      </Box>
    </Container>
  );
};

export default Fund;
