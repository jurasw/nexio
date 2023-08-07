import { useState } from "react";
import {
  Avatar,
  Box,
  HStack,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Title from "../SectionTitle";
import { useTranslation } from "react-i18next";

const Opinions = () => {
  const { t } = useTranslation();

  const carouselItems = [
    {
      image: "/opinions/victoria.png",
      name: "Victoriia",
      position: "Testerka Manualna",
      period: "2 lata w Nexio",
      opinion: t("opinion-victoriia"),
    },
    {
      image: "/opinions/mateusz.png",
      name: "Mateusz",
      position: "Java Developer",
      period: "3 lata w Nexio",
      opinion: t("opinion-mateusz"),
    },
    {
      image: "/opinions/bohdan.jpeg",
      name: "Bohdan",
      position: "Lider Działu Aplikacji Mobilnych | Microsoft MVP",
      period: "3 lata w Nexio",
      opinion: t("opinion-bohdan"),
    },
    {
      image: "/opinions/jacek.jpg",
      name: "Jacek",
      position: ".NET Developer",
      period: "7 lat w Nexio",
      opinion: t("opinion-jacek"),
    },
    {
      image: "/opinions/mateusz.png",
      name: "Mateusz",
      position: "Java Developer",
      period: "3 lata w Nexio",
      opinion: t("opinion-mateusz"),
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleItems = carouselItems.slice(activeIndex, activeIndex + 3);
  const visibleDots =
    carouselItems.length > 3 ? visibleItems.length : carouselItems.length;
  const isMobile = useMediaQuery("(max-width: 768px)")[0];
  const visibleItemsCount = isMobile ? 1 : 3;
  const handleClickDot = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ overflow: "hidden", width: "100vw", maxWidth: "100vw" }}>
      <Box px={"10%"} pt={6}>
        <Title title={t("opinions-title")} />

        <Heading lineHeight={1.1} fontWeight={400} fontSize={"38px"} my={5}>
          <Text>{t("opinions-header")} </Text>
        </Heading>
        <Text color={"#000"} mb={4}>
          {t("opinions-text")}
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        pt={6}
        px={"10%"}
        w={"100vw"}
        overflow={"hidden"}
        overflowX={"hidden"}
        maxWidth="100vw"
        position={"relative"}
      >
        <Box display="flex" justifyContent="center" mb={4}>
          {visibleItems.slice(0, visibleItemsCount).map((item, index) => {
            const isLast = index === visibleItems.length - 1;
            const scale = isLast ? 0.8 : 1;
            const opacity = isLast ? 0.4 : 1;
            const isFirstFromLeft =
              index === 0 && carouselItems.indexOf(item) === activeIndex;

            return (
              <motion.div
                key={index}
                style={{
                  scale,
                  opacity,
                  width: `calc(100%)`,
                  marginRight: "1rem",
                  ...(isLast && {
                    position: "absolute",
                    right: "-22%",
                    width: `calc(100% / ${visibleItemsCount})`,
                  }),
                }}
              >
                <Box
                  bg="transparent"
                  borderRadius="8px"
                  border={"1px"}
                  borderColor={"#C6C6C6"}
                  fontSize="xl"
                  p={9}
                  position="relative"
                >
                  <Stack mt={6} direction={"row"} spacing={4}>
                    <Avatar src={item.image} />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text fontWeight={700} fontSize={"16px"}>
                        {item.name}
                      </Text>
                      <Text
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#4A4A4A"}
                      >
                        {item.position}
                      </Text>
                      <Text
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#4A4A4A"}
                      >
                        {item.period}
                      </Text>
                    </Stack>
                  </Stack>
                  <Text
                    fontFamily={"Red Hat Display"}
                    fontWeight={400}
                    fontSize="16px"
                  >
                    {item.opinion}
                  </Text>
                  {isFirstFromLeft && (
                    <Box
                      position="absolute"
                      bottom="-0.5"
                      left="5"
                      width="75%"
                      height="4px"
                      bg="primary"
                    />
                  )}
                </Box>
              </motion.div>
            );
          })}
        </Box>

        <HStack spacing={2} mt={5}>
          {Array.from({ length: visibleDots }).map((_, index) => (
            <Box
              key={index}
              h="8px"
              w={activeIndex === index ? "41px" : "22px"}
              bg={activeIndex === index ? "primary" : "primary.light"}
              borderRadius="20px"
              onClick={() => handleClickDot(index)}
              cursor="pointer"
            />
          ))}
        </HStack>
      </Box>
    </div>
  );
};

export default Opinions;
