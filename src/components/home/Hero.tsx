import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Icon,
  IconProps,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Path } from "../../pages/Paths";
import ScrollAnimation from "../ScrollAnimation";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container
      maxW={"100%"}
      px={"10%"}
      py={"5%"}
      minH="100vh"
      bg={["rgba(255, 208, 151, 0.1)", "rgba(255, 208, 151, 0)"]}
      mt={0}
    >
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 14 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={["40px", "70px"]}
          >
            <Text
              as={"span"}
              position={"relative"}
              bgGradient="linear(to-l,#F19E38, #000000)"
              bgClip="text"
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
              Digital future
            </Text>
            <br />
            <Text as={"span"} color={"#00"}>
              encoded with trust.
            </Text>
          </Heading>
          <Text color={"#000"} w={["100%", "100%", "100%", "50%"]}>
            {t("nexio-management")}
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={["column", "column", "row"]}
            textAlign={"center"}
          >
            <Button
              variant={"expertButton"}
              onClick={() => navigate(Path.CONTACT)}
            >
              {t("expert-button")}
            </Button>

            <Button
              rounded={"full"}
              display="flex"
              size={"lg"}
              bg="rgba(255, 208, 151, 0)"
              fontWeight={"normal"}
              _hover={{
                borderWidth: 0,
                borderColor: "#F19E38",
                bg: "rgba(255, 208, 151, 0.2)",
                color: "#000",
                textDecoration: "none",
              }}
              onClick={() => navigate(Path.BUSINESS)}
            >
              {t("offer-button")}
              <Image
                float="right"
                marginLeft="10px"
                src={"arrow-right-circle.svg"}
              />
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Flex
        direction={["column", "column", "row"]}
        marginTop={["10px", "100px"]}
        w="100%"
      >
        <Flex direction="column" w={["100%", "100%", "60%"]} maxW={"100%"}>
          <Text color="#A1A1A1" fontWeight={600} fontSize="10px">
            PARTNERS & CLIENTS
          </Text>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "100%",
              marginTop: "20px",
            }}
          >
            <Image ml={"5%"} src={"icons/companies/orange.svg"} mb={"10px"} />
            <Image ml={"5%"} src={"icons/companies/tmobile.svg"} mb={"10px"} />
            <Image ml={"5%"} src={"icons/companies/netia.svg"} mb={"10px"} />
            <Image ml={"5%"} src={"icons/companies/tvn.svg"} mb={"10px"} />
            <Image ml={"5%"} src={"icons/companies/fedex.svg"} mb={"10px"} />
            <Image ml={"5%"} src={"icons/companies/axa.svg"} />
          </div>
        </Flex>

        <Flex direction="column" w={["100%", "100%", "40%"]} display="flex">
          <div style={{ marginLeft: "auto", display: "flex" }}>
            <Text
              color="#000"
              fontWeight={700}
              fontSize="12px"
              alignItems="center"
              justifyContent="center"
              display="flex"
              marginRight={"20px"}
            >
              SCROLL DOWN
            </Text>
            <ScrollAnimation />
          </div>
        </Flex>
      </Flex>
    </Container>
  );
};

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default Hero;
