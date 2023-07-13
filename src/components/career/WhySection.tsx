import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";
import Title from "../SectionTitle";
import { useTranslation } from "react-i18next";

const WhySection = () => {
  const { t } = useTranslation();

  const items = [
    {
      image: "/why/technology.svg",
      title: t("technologies"),
    },
    {
      image: "/why/job.svg",
      title: t("projects"),
    },
    {
      image: "/why/jump.svg",
      title: t("people"),
    },
    {
      image: "/why/business-plan.svg",
      title: t("benefits"),
    },
  ];
  return (
    <section
      style={{
        backgroundImage: "url('why/whybg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          margin: "auto",
          padding: "5%",
          marginTop: "5%",
          paddingBottom: "10%",
        }}
      >
        <Title title={t("advantages")} />

        <Heading lineHeight={1.1} fontWeight={400} fontSize={"38px"} my={5}>
          <Text>{t("why")}</Text>
        </Heading>
        <Text color={"#000"} mb={12}>
          {t("atmosphere")}
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              bg="rgba(255,255,255,0.9)"
              p={9}
              borderWidth={"1px"}
              borderColor={"#F2EEEC"}
              borderRadius={"16px"}
              color="black"
              textAlign={"center"}
              _hover={{ borderColor: "primary" }}
            >
              <Image src={item.image} m={"auto"} mb={5} />
              <Text
                fontFamily="Red Hat Display"
                fontWeight={500}
                fontSize={"16px"}
              >
                {item.title}
              </Text>
            </Box>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default WhySection;
