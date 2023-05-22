import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function TempTestimonials() {
  return (
    <Flex
      style={{
        background: "#FDFCFC",
        backgroundImage: "url('/bgCase.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      direction={["column", "row"]}
    >
        <Flex>
      <Box
        bg={"white"}
        border={"1px"}
        borderColor="#C6C6C6"
        borderRadius={"8px"}
        height={["auto", "auto"]}
        borderWidth="1px"
        p={8}
        mx={2}
        my={2}
      >
        <Image src={"testimonials/marek_kaminski.svg"} mb={5} />
        <Text fontSize="16px" mb={2}>
          Realizacja projektu - aplikacji LifePlan App, tworzonego we współpracy
          z Nexio Management sp. z o.o. przebiegała bardzo sprawnie, w
          profesjonalnej atmosferze. Doświadczyliśmy doskonałej komunikacji i
          terminowości. Zespół projektowy był bardzo zaangażowany i elastyczny,
          dostosowując się do naszych zmieniających się potrzeb i wyzwań. Byli
          skrupulatni w zrozumieniu naszych wymagań i zaproponowali innowacyjne
          rozwiązania, które przyczyniły się do osiągnięcia naszych celów, jakie
          postawiliśmy dla aplikacji. W każdym momencie mogliśmy liczyć na
          merytoryczne wsparcie naszego opiekuna - Project Managera. Z
          przyjemnością potwierdzamy, że Nexio jest godnym zaufania i
          profesjonalnym partnerem w dziedzinie IT i gorąco polecamy ich usługi.
          Ich doskonałe umiejętności techniczne, profesjonalizm i zaangażowanie
          przyczynią się do sukcesu każdego projektu, z którym się zwiążą.
        </Text>
        <Text fontWeight="bold" fontSize="16px">
          Monika Samul
        </Text>
        <Text fontSize="16px">Product Manager</Text>
      </Box>
      </Flex>
      <Flex>
      <Box
        bg={"white"}
        border={"1px"}
        borderColor="#C6C6C6"
        borderRadius={"8px"}
        height={["auto", "auto"]}
        borderWidth="1px"
        p={8}
        mx={2}
        my={2}
      >
        <Image src={"testimonials/marek_kaminski.svg"} mb={5} />
        <Text fontSize="16px" mb={2}>
          Realizacja projektu - aplikacji LifePlan App, tworzonego we współpracy
          z Nexio Management sp. z o.o. przebiegała bardzo sprawnie, w
          profesjonalnej atmosferze. Doświadczyliśmy doskonałej komunikacji i
          terminowości. Zespół projektowy był bardzo zaangażowany i elastyczny,
          dostosowując się do naszych zmieniających się potrzeb i wyzwań. Byli
          skrupulatni w zrozumieniu naszych wymagań i zaproponowali innowacyjne
          rozwiązania, które przyczyniły się do osiągnięcia naszych celów, jakie
          postawiliśmy dla aplikacji. W każdym momencie mogliśmy liczyć na
          merytoryczne wsparcie naszego opiekuna - Project Managera. Z
          przyjemnością potwierdzamy, że Nexio jest godnym zaufania i
          profesjonalnym partnerem w dziedzinie IT i gorąco polecamy ich usługi.
          Ich doskonałe umiejętności techniczne, profesjonalizm i zaangażowanie
          przyczynią się do sukcesu każdego projektu, z którym się zwiążą.
        </Text>
        <Text fontWeight="bold" fontSize="16px">
          Monika Samul
        </Text>
        <Text fontSize="16px">Product Manager</Text>
      </Box>
      </Flex>
    </Flex>
  );
}
