import {
  Container,
  Heading,
  Button,
  Text,
  Image,
  Box,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Fund = () => {
  const { t } = useTranslation();
  const columnSize = useBreakpointValue({ base: "100%", md: "75%" });

  return (
    <Container maxW={"100%"} p={"10%"} fontFamily={"Red Hat Display"}>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        <Box flex={columnSize}>
          <Heading lineHeight={1.1} fontWeight={400} fontSize={"38px"} my={5}>
            <Text> {t("fund-title")}</Text>
          </Heading>
          <Text color={"#5F5F5F"} fontSize={"18px"}>
            {t("fund-text")}
          </Text>
          <Button
            my={5}
            pt={5}
            as={"a"}
            variant={"expertButton"}
            href="https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=3a556d158ae04bd3ab8b546357409979"
          >
            {t("fund-btn")}
          </Button>
        </Box>
        <Image src="/alphaplatinum.svg" />
      </Flex>
    </Container>
  );
};

export default Fund;
