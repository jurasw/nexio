import {
  Container,
  SimpleGrid,
  Flex,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import Title from "../PageTitle";
import Form from "./Form";
import { useTranslation } from "react-i18next";

const FormMap = () => {
  const { t } = useTranslation();

  return (
    <Container maxW={"100%"} px={"10%"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Stack spacing={6}>
          <Title title={t("contact")} />
          <Heading
            fontSize={"40px"}
            fontWeight={500}
            fontFamily={"Red Hat Display"}
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
              {t("contact-title1")}{" "}
            </Text>
            <Text
              as={"span"}
              bgGradient="linear(to-l,#F19E38, #000000)"
              bgClip="text"
            >
              {t("contact-title2")} <br />
            </Text>
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
              {t("contact-title3")}
            </Text>
          </Heading>
          <Text
            fontSize={"24px"}
            fontWeight={500}
            fontFamily={"Red Hat Display"}
          >
            {t("company-details")}
          </Text>
          <Text
            fontFamily={"Red Hat Display"}
            fontSize={"16px"}
            fontWeight={400}
            lineHeight={"24px"}
            borderLeft={"2px"}
            borderColor={"primary"}
            pl={5}
          >
            <strong>Nexio Management Sp. z o.o.</strong> <br />
            ul. Puławska 182 <br />
            02-670 Warszawa <br /> <br />
            Tel.: <strong>+48 22 244 13 </strong>
            <br />
            NIP: <strong>525-23-65-494 </strong>
          </Text>
          <Form />
        </Stack>
        <Flex borderRadius="8px">
          <iframe
            width="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1223.1974109446555!2d21.020416598214457!3d52.18169567648461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471932d020d109f7%3A0x8f7710916cbf7f63!2sPu%C5%82awska%20182%2C%2002-670%20Warszawa!5e0!3m2!1spl!2spl!4v1687775194611!5m2!1spl!2spl"
            loading="lazy"
          ></iframe>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default FormMap;
