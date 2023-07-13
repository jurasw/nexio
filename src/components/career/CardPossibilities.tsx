import React from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

interface Props {
  imageUrl: string;
  imageText: string;
  text: string;
  number: string;
}

const Card: React.FC<Props> = ({ imageUrl, imageText, text, number }) => {
  return (
    <Center py={6} fontFamily="Red Hat Display" className="slide-in-bottom">
      <Box
        borderRadius={"38px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          fontFamily={"Red Hat Display"}
        >
          <Image src={imageUrl} w="100%" />
          <Text
            color="white"
            fontWeight={300}
            fontSize={"13px"}
            fontFamily={"Red Hat Display"}
            bottom={32}
            left={4}
            position="absolute"
          >
            {number}
          </Text>
          <Text
            w={"75%"}
            position="absolute"
            bottom={4}
            left={4}
            color="white"
            fontWeight={400}
            fontSize={["24px", "34px"]}
          >
            {imageText}
          </Text>
          <Box
            position="absolute"
            bottom="-0.5"
            left="10"
            width="35%"
            height="4px"
            bg="primary"
          />
        </Box>
        <Stack padding={5}>
          <Text color={"gray.500"}>{text}</Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default Card;
