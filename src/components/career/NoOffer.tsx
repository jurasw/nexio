import {
  Container,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import Title from "../SectionTitle";
import { useTranslation } from "react-i18next";

const NoOffer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxW={"100%"} px={"10%"} fontFamily={"Red Hat Display"}>
      <Flex direction={["column", "row"]}>
        <Flex direction="column" w={["100%", "60%"]} justifyContent={"center"}>
          <Title title={t("application-form")} />

          <Heading lineHeight={1.1} fontWeight={400} fontSize={"38px"} my={5}>
            <Text>{t("no-offer-title")}</Text>
          </Heading>
          <Text color={"#000"} mb={8} fontSize={"18px"}>
            {t("contact-anyway")}
          </Text>
          <Box>
            <Button
              as={"a"}
              variant={"arrowButton"}
              href="https://system.erecruiter.pl/FormTemplates/RecruitmentForm.aspx?WebID=3a556d158ae04bd3ab8b546357409979"
            >
              {t("send-application")}
              <Image marginLeft="10px" src={"arrow-up-right.svg"} />
            </Button>
          </Box>
        </Flex>
        <Flex direction="column" w={["100%", "50%"]}>
          <Image src="/nooffer.png" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default NoOffer;
