import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  imageUrl: string;
  text: string;
  href: string;
  buttonText: string;
}

const Card: React.FC<Props> = ({ imageUrl, title, text, href, buttonText }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: "50%" }}
      transition={{ duration: 0.5 }}
      whileInView={{ y: 0 }}
    >
      <Center
        py={6}
        className="slide-in-bottom"
        fontFamily={"Red Hat Display"}
      >
        <Box
          borderRadius={"38px"}
          maxW={"550px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            h={"50%"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image src={imageUrl} />
          </Box>
          <Box p={"5%"}>
            <Stack mb={16}>
              <Heading fontSize={"32px"} fontWeight={400}>
                {title}
              </Heading>
              <Text color={"gray.500"} fontSize={"16px"} fontWeight={400}>
                {text}
              </Text>
            </Stack>
            <HStack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text
                cursor={"pointer"}
                color="#D07A0F"
                fontWeight={600}
                _hover={{
                  color: "#D07A0F",
                  textDecoration: "underline",
                }}
                onClick={() => navigate(href)}
              >
                {buttonText}
              </Text>
              <Spacer />
              <Image
                src="/icons/arrow-right.svg"
                onClick={() => navigate(href)}
                cursor={"pointer"}
              />
            </HStack>
          </Box>
        </Box>
      </Center>
    </motion.div>
  );
};

export default Card;
