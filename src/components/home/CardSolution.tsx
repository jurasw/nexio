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
  buttonText: string;
  href: string;
}

const Card: React.FC<Props> = ({ imageUrl, title, text, buttonText, href }) => {
  return (
    <Center py={6} style={{fontFamily: "Red Hat Display"}}>
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
        <Stack mt={16} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Link href={href} color="#D07A0F" fontWeight={600}>
              {buttonText}
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default Card;
