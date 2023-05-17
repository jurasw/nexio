import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Link,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

interface Props {
  title: string;
  imageUrl: string;
  text: string;
  buttonImg: string;
  href: string;
  stack: string[];
}

const Card: React.FC<Props> = ({ imageUrl, title, text, buttonImg, href, stack }) => {
  return (
    <Center py={6} style={{ fontFamily: "Red Hat Display" }}>
      <Box
        borderRadius={"38px"}
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={imageUrl}
            // layout={'fill'}
          />
          <div
            style={{
              maxWidth: "100%",
              paddingLeft: "20px",
              top: "80%",
              position: "absolute",
              display: "flex",
            }}
          >
             {stack.map((item) => ( <Text background="rgba(255, 255, 255, 0.95)" color="#F19E38" borderRadius={"9px"} padding="4px" px="10px" marginRight="10px">
              {item}
            </Text>))}
          </div>
        </Box>
        <Stack paddingTop={"20%"}>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
          <Text color={"gray.500"}>{text}</Text>
        </Stack>
        <Stack mt={16} direction={"row"} spacing={4} align={"right"}>
          <Stack
            direction={"column"}
            spacing={0}
            fontSize={"sm"}
            marginLeft="auto"
          >
            <Link href={href} color="#D07A0F" fontWeight={600}>
              <Image src={buttonImg} />
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default Card;
