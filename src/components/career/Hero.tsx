import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Icon,
  IconProps,
  Link,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Path } from "../../pages/Paths";
import Title from "../PageTitle";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container
      maxW={"100%"}
      px={"10%"}
      py={"5%"}
      bg={["rgba(255, 208, 151, 0.1)", "rgba(255, 208, 151, 0)"]}
      mt={0}
    >
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 14 }}
        direction={{ base: "column", md: "row" }}
        mb={16}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            fontSize={["40px", "60px"]}
            fontWeight={500}
            fontFamily={"Red Hat Display"}
          >
            <Title title={t("carrer-in-nexio")} />
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
              {t("shape-career")}
              <br /> {t("with")}{" "}
            </Text>
            <Text
              as={"span"}
              bgGradient="linear(to-l,#F19E38, #000000)"
              bgClip="text"
            >
              Nexio. <br />
            </Text>
          </Heading>
          <Text color={"#000"} fontSize={"18px"} w={["100%", "45%"]}>
            {t("career-description")}
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={["column", "column", "row"]}
            textAlign={"center"}
          >
            <Link onClick={() => navigate(Path.CONTACT)}>
              <Button
                maxW={"235px"}
                rounded={"full"}
                fontSize={"16px"}
                fontWeight={"normal"}
                px={6}
                py={4}
                border="2px"
                borderColor={"#F19E38"}
                bg={"rgba(255, 255, 255, 0)"}
                _hover={{
                  borderColor: "#F19E38",
                  bg: "rgba(255, 208, 151, 0.2)",
                  color: "#000",
                }}
                _active={{
                  borderColor: "#F19E38",
                  bg: "rgba(255, 208, 151, 0.2)",
                }}
              >
                {t("expert-button")}
              </Button>
            </Link>
            <div
              style={{
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            ></div>
          </Stack>
        </Stack>
      </Stack>
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
