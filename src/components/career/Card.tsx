import {
  Avatar,
  Box,
  Center,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SocialProfileSimple() {
  return (
    <>
      <Center py={6}>
        <Box
          maxW={"90%"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={
              "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            mb={4}
            pos={"relative"}
          />
          <Text color={useColorModeValue("gray.700", "gray.400")} px={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque diam leo, maximus ut risus vitae, suscipit dignissim
            metus. Maecenas ac elit et massa vestibulum auctor. Nullam malesuada
            a nibh at condimentum.{" "}
          </Text>
        </Box>
      </Center>
    </>
  );
}
