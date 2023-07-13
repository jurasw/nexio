import { Center, Heading, Text, Image, Box } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

const Partners: React.FC = () => {
  const { t } = useTranslation();
  const images = [
    "icons/companies/lot.svg",
    "icons/companies/orange.svg",
    "icons/companies/tmobile.svg",
    "icons/companies/netia.svg",
    "icons/companies/tvn.svg",
    "icons/companies/fedex.svg",
  ];
  return (
    <section
      style={{
        padding: "5%",
        background: "#FDFCFC",
      }}
    >
      <Center mb={9}>
        <Heading
          fontFamily="Red Hat Display"
          lineHeight={1.1}
          fontWeight={400}
          fontSize={["38px", "38px"]}
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
            {t("partenrs")}{" "}
          </Text>
          <Text
            as={"span"}
            bgGradient="linear(to-l,#F19E38, #000000)"
            bgClip="text"
          >
            {t("clients2")}
          </Text>
        </Heading>
      </Center>
      <Center>
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          gap={10}
        >
          {images.map((src, index) => (
            <Image key={index} src={src} mb="10px" />
          ))}
        </Box>
      </Center>
    </section>
  );
};

export default Partners;
