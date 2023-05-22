import { Box, Heading, Text, Stack, Container, Image } from "@chakra-ui/react";

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
