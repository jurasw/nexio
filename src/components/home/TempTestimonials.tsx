import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function TempTestimonials() {
  return (
    <Box
      style={{
        background: "#FDFCFC",
        backgroundImage: "url('/bgCase.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Box
            bg={"white"}
            border={"1px"}
            borderColor="#C6C6C6"
            borderRadius={"8px"}
            height={["auto", "auto"]}
            width={["100%", "50%", "50%", "50%"]}
            borderWidth="1px"
            p={8}
            mx={2}
            my={2}
          >
            <Image src={"testimonials/marek_kaminski.svg"} mb={5} />
            <Text fontSize="16px" mb={2}>
              Realizacja projektu - aplikacji LifePlan App, tworzonego we
              współpracy z Nexio Management sp. z o.o. przebiegała bardzo
              sprawnie, w profesjonalnej atmosferze. Doświadczyliśmy doskonałej
              komunikacji i terminowości. Zespół projektowy był bardzo
              zaangażowany i elastyczny, dostosowując się do naszych
              zmieniających się potrzeb i wyzwań. Byli skrupulatni w zrozumieniu
              naszych wymagań i zaproponowali innowacyjne rozwiązania, które
              przyczyniły się do osiągnięcia naszych celów, jakie postawiliśmy
              dla aplikacji. W każdym momencie mogliśmy liczyć na merytoryczne
              wsparcie naszego opiekuna - Project Managera. Z przyjemnością
              potwierdzamy, że Nexio jest godnym zaufania i profesjonalnym
              partnerem w dziedzinie IT i gorąco polecamy ich usługi. Ich
              doskonałe umiejętności techniczne, profesjonalizm i zaangażowanie
              przyczynią się do sukcesu każdego projektu, z którym się zwiążą.
            </Text>
            <Text fontWeight="bold" fontSize="16px">
              Monika Samul
            </Text>
            <Text fontSize="16px">Product Manager</Text>
          </Box>
          <Box
            bg={"white"}
            border={"1px"}
            borderColor="#C6C6C6"
            borderRadius={"8px"}
            height={["auto", "auto"]}
            width={["100%", "50%", "50%", "50%"]}
            borderWidth="1px"
            p={8}
            mx={2}
            my={2}
          >
            <Image src={"testimonials/marek_kaminski.svg"} mb={5} />
            <Text fontSize="16px" mb={2}>
              Realizacja projektu - aplikacji LifePlan App, tworzonego we
              współpracy z Nexio Management sp. z o.o. przebiegała bardzo
              sprawnie, w profesjonalnej atmosferze. Doświadczyliśmy doskonałej
              komunikacji i terminowości. Zespół projektowy był bardzo
              zaangażowany i elastyczny, dostosowując się do naszych
              zmieniających się potrzeb i wyzwań. Byli skrupulatni w zrozumieniu
              naszych wymagań i zaproponowali innowacyjne rozwiązania, które
              przyczyniły się do osiągnięcia naszych celów, jakie postawiliśmy
              dla aplikacji. W każdym momencie mogliśmy liczyć na merytoryczne
              wsparcie naszego opiekuna - Project Managera. Z przyjemnością
              potwierdzamy, że Nexio jest godnym zaufania i profesjonalnym
              partnerem w dziedzinie IT i gorąco polecamy ich usługi. Ich
              doskonałe umiejętności techniczne, profesjonalizm i zaangażowanie
              przyczynią się do sukcesu każdego projektu, z którym się zwiążą.
            </Text>
            <Text fontWeight="bold" fontSize="16px">
              Monika Samul
            </Text>
            <Text fontSize="16px">Product Manager</Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
