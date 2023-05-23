import React, { ReactNode } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { motion } from 'framer-motion';

interface Props {
  title: string;
  imageUrl: string;
  text: string;
  children: ReactNode;
}

const Card: React.FC<Props> = ({ imageUrl, title, text, children }) => {
  return (
    <motion.div
    initial={{ y: '50%' }}
    transition={{ duration: 0.5 }}
    whileInView={{ y: 0 }}

  >
    <Center py={6} style={{fontFamily: "Red Hat Display"}} className="slide-in-bottom">
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
        {children}
        </Stack>
      </Box>
    </Center>
    </motion.div>

  );
};

export default Card;

