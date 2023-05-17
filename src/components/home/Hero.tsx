import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Icon,
  IconProps,
  Link,
  Flex,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Container maxW={"7xl"} px={"10%"} py={"5%"}>
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
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
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
          <Text color={"#000"}>IT & consulting company</Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              border="2px"
              borderColor={"#F19E38"}
              bg={"rgba(255, 255, 255, 0)"}
            >
              Porozmawiaj z ekspertem
            </Button>
            <div
              style={{
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link
                display="flex"
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
              >
                Nasza oferta
                <Image
                  float="right"
                  marginLeft="10px"
                  src={"arrow-right-circle.svg"}
                />
              </Link>
            </div>
          </Stack>
        </Stack>
      </Stack>
      <Flex direction={["column", "column", "row"]} marginTop="100px">
        <Flex direction="column" w={["100%", "100%", "50%"]}>
          <Text color="#A1A1A1" fontWeight={600} fontSize=" 10px">
            PARTNERS & CLIENTS
          </Text>
          <div style={{ display: "flex" }}>
            <Image src={"icons/companies/lot.svg"} />
            <Image marginLeft="40px" src={"icons/companies/orange.svg"} />
            <Image marginLeft="40px" src={"icons/companies/tmobile.svg"} />
            <Image marginLeft="40px" src={"icons/companies/netia.svg"} />
            <Image marginLeft="40px" src={"icons/companies/tvn.svg"} />
            <Image marginLeft="40px" src={"icons/companies/fedex.svg"} />
          </div>
        </Flex>

        <Flex direction="column" w={["100%", "100%", "50%"]} display="flex">
          <div style={{ marginLeft: "auto", display: "flex"}}>
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
            <div
              style={{
                background: "#fff",
                width: "60px",
                height: "60px",
                border: "1px solid #FFD097",
                borderRadius: "100%",

                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Button
                bg="#fff"
                w="46px"
                h="46px"
                borderRadius={"100%"}
                borderWidth={1}
                borderColor="#E9E9E9"
                margin="auto"
              >
                <motion.div
                  animate={{ y: [-10, 10] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    repeatType: "reverse",
                  }}
                >
                  <Image
                    position="relative"
                    top={"-20px"}
                    src={"icons/scroll-arrow.svg"}
                  />
                </motion.div>
              </Button>
            </div>
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
