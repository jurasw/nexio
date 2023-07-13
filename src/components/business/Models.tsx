import { Grid, Box, Text, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Title from "../SectionTitle";
import { useTranslation } from "react-i18next";

const Models: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    {
      image: "/models/managedservices.svg",
      title: "Managed Services",
      content: t("managed-services"),
    },
    {
      image: "/models/fixedprice.svg",
      title: "Fixed Price",
      content: t("fixed-price"),
    },
    {
      image: "/models/nearshoring.svg",
      title: "Nearshoring",
      content: t("nearshoring"),
    },
    {
      image: "/models/advancedteamleasing.svg",
      title: "Advanced Team Leasing",
      content: t("advanced-team-leasing"),
    },
    {
      image: "/models/teamleasing.svg",
      title: "Team Leasing",
      content: t("team-leasing"),
    },
    {
      image: "/models/bodyleasing.svg",
      title: "Body Leasing",
      content: t("body-leasing"),
    },
  ];
  return (
    <section
      style={{
        padding: "10%",
      }}
    >
      <Title title={t("offer")} />

      <Heading
        fontSize={"38px"}
        lineHeight={1.1}
        fontWeight={400}
        fontFamily="Red Hat Display"
        mb={"50px"}
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
          {t("operate-models")}{" "}
        </Text>
        <Text
          as={"span"}
          bgGradient="linear(to-l,#F19E38, #000000)"
          bgClip="text"
        >
          {t("operate")}
        </Text>
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            bg="transparent"
            p={9}
            borderWidth={"1px"}
            borderColor={"#F2EEEC"}
            borderRadius={"16px"}
            fontSize="14px"
            color="black"
          >
            <Image
              border={"1px"}
              borderColor={"#D9D9D9"}
              borderRadius={"8px"}
              src={item.image}
              p={5}
              mb={5}
            />
            <Text
              fontFamily="Red Hat Display"
              fontWeight={300}
              fontSize={"13px"}
              mb={2}
            >
              {"0" + (index + 1)}
            </Text>
            <Text
              mb={5}
              fontFamily="Red Hat Display"
              fontWeight={400}
              fontSize={"24px"}
            >
              {item.title}
            </Text>
            <Text
              fontFamily="Red Hat Display"
              fontWeight={400}
              fontSize={"14px"}
            >
              {item.content}
            </Text>
          </Box>
        ))}
      </Grid>
    </section>
  );
};

export default Models;
