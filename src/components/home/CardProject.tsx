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
import { motion } from "framer-motion";

interface Props {
  title: string;
  imageUrl: string;
  text: string;
  buttonImg: string;
  href: string;
  stack: string[];
}

const Card: React.FC<Props> = ({ title, text, buttonImg, href, stack }) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      transition={{ duration: 0.5 }}
      whileInView={{ y: 0 }}
    >
      <Center py={6} fontFamily="Red Hat Display">
        <Box
          borderRadius={"38px"}
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          p={6}
          overflow={"hidden"}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            {stack.map((item) => (
              <Text
                background="rgba(255, 208, 151, 0.3)"
                color="#F19E38"
                borderRadius={"9px"}
                padding="6px"
                px="10px"
                margin="10px"
                fontSize="10px"
                fontWeight={700}
              >
                {item}
              </Text>
            ))}
          </div>
          <Stack paddingTop={"40px"}>
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
    </motion.div>
  );
};

export default Card;
