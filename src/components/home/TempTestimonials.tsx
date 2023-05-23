import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Title from "./Title";
import { useState } from "react";

export default function TempTestimonials() {
  const [testimonial, setTestimonial] = useState(false);

  return (
    <>
      <div
        style={{
          padding: "10%",
          background: "#FDFCFC",
          // borderTop: "1px solid #000000",
        }}
      >
        <Title title={"REFERENCJE"} />
        <Heading fontSize={"48px"} fontWeight={400}>
          <Text as={"span"} color="#000">
            Co mówią nasi
          </Text>
          <Text
            as={"span"}
            position={"relative"}
            bgGradient="linear(to-l,#F19E38, #000000)"
            bgClip="text"
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              zIndex: -1,
            }}
          >
            {" "}
            {" klienci"}
          </Text>
        </Heading>
        <Text float="right">
          5.0
          {Array.from({ length: 5 }).map((_) => (
            <Image float="right" marginLeft="10px" src={"icons/star.svg"} />
          ))}
          <br />
          Oceny wszysktich{" "}
          <span style={{ color: "#F19E38" }}>{" klientów"}</span>
        </Text>
        <Flex marginTop="100px" direction={["column", "row"]} gap={10}>
          {/* <Flex>
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
                Realizacja projektu - aplikacji LifePlan App, tworzonego we
                współpracy z Nexio Management sp. z o.o. przebiegała bardzo
                sprawnie, w profesjonalnej atmosferze. Doświadczyliśmy
                doskonałej komunikacji i terminowości. Zespół projektowy był
                bardzo zaangażowany i elastyczny, dostosowując się do naszych
                zmieniających się potrzeb i wyzwań.
                <span
                  onClick={() => {
                    setTestimonial(true);
                  }}
                  style={{
                    color: "#F19E38",
                    marginLeft: "5px",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  {"Zobacz referencję"}
                </span>
              </Text>
              <Text fontWeight="bold" fontSize="16px">
                Monika Samul
              </Text>
              <Text fontSize="16px">Product Manager</Text>
            </Box>
          </Flex> */}
          <Flex>
            <Box
            maxW={"50%"}
              bg={"white"}
              border={"1px"}
              borderColor="#C6C6C6"
              borderRadius={"8px"}
              height={["auto", "auto"]}
              borderWidth="1px"
              p={8}
              mx={2}
              m={"auto"}
              >
              <Image maxW="150px" src={"testimonials/marek_kaminski.svg"} mb={5} />
              <Text fontSize="16px" mb={2}>
                Realizacja projektu - aplikacji LifePlan App, tworzonego we
                współpracy z Nexio Management sp. z o.o. przebiegała bardzo
                sprawnie, w profesjonalnej atmosferze. Doświadczyliśmy
                doskonałej komunikacji i terminowości. Zespół projektowy był
                bardzo zaangażowany i elastyczny, dostosowując się do naszych
                zmieniających się potrzeb i wyzwań.
                <span
                  onClick={() => {
                    setTestimonial(true);
                  }}
                  style={{
                    color: "#F19E38",
                    marginLeft: "5px",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  {"Zobacz referencję"}
                </span>
              </Text>
              <Text fontWeight="bold" fontSize="16px">
                Monika Samul
              </Text>
              <Text fontSize="16px">Product Manager</Text>
            </Box>
          </Flex>
        </Flex>
      </div>
      <Modal
        id="biznes"
        isOpen={testimonial}
        onClose={() => {
          setTestimonial(!testimonial);
        }}
      >
        <ModalOverlay />
        <ModalContent maxW="1200px" borderRadius="32px" paddingBottom={"75px"}>
          <ModalCloseButton />
          <ModalBody mt={"75px"}>
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
              wsparcie naszego opiekuna - Project Managera. <br /> <br />Z
              przyjemnością potwierdzamy, że Nexio jest godnym zaufania i
              profesjonalnym partnerem w dziedzinie IT i gorąco polecamy ich
              usługi. Ich doskonałe umiejętności techniczne, profesjonalizm i
              zaangażowanie przyczynią się do sukcesu każdego projektu, z którym
              się zwiążą.
            </Text>
            <Text fontWeight="bold" fontSize="16px">
              Monika Samul
            </Text>
            <Text fontSize="16px">Product Manager</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
