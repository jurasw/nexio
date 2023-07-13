import { Grid, Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ContactTiles = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t("office-title"),
      text1: t("office-text1"),
      text2: t("office-text2"),
      email: "biuro@nexio.pl",
    },
    {
      title: t("sales-title"),
      text1: t("sales-text1"),
      text2: t("sales-text2"),
      email: "sprzedaz@nexio.pl",
    },
    {
      title: t("recruitment-title"),
      text1: t("recruitment-text1"),
      text2: t("recruitment-text2"),
      email: "rekrutacja@nexio.pl",
    },
  ];
  return (
    <Grid
      mb={"10%"}
      mx={"10%"}
      templateColumns={{
        base: "1fr",
        md: "repeat(1, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={4}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          bg="#FDFCFC"
          p={4}
          py={"35px"}
          textAlign="center"
          fontSize="14px"
          border={"1px"}
          borderColor={"#DFDFDF"}
          color="black"
        >
          <Text fontWeight={700} fontSize={"16px"} mb={2}>
            {item.title}
          </Text>
          <Text fontWeight={400} fontSize={"14px"}>
            {item.text1}
          </Text>
          <Text fontWeight={400} fontSize={"14px"}>
            {item.text2}
          </Text>
          <Text
            fontWeight={400}
            fontSize={"16px"}
            color={"primary"}
            textDecoration={"underline"}
          >
            {item.email}
          </Text>
        </Box>
      ))}
    </Grid>
  );
};

export default ContactTiles;
