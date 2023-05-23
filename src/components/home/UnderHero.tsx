import React, { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  Link,
} from "@chakra-ui/react";
import Card from "./CardSolution";
import Title from "./Title";
import BusinessModalBodyContent from "../business/ModalBodyContent";
import CareerModalBodyContent from "../career/ModalBodyContent";

const MyComponent: React.FC = () => {
  const [business, setBusiness] = useState(false);
  const [career, setCareer] = useState(false);
  return (
    <>
      <section>
        <div
          style={{
            width: "95%",
            background: "#fff",
            margin: "auto",
            padding: "5%",
          }}
        >
          <Title title={"OFERTA"} />

          <Heading
            lineHeight={1.1}
            fontWeight={600}
            // fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              fontSize={["30px", "48px"]}
              as={"span"}
              position={"relative"}
              color="#000"
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
              Rozwiązania IT, tworzone z myślą
            </Text>
            <br />
            <Text
              fontSize={["30px", "48px"]}
              as={"span"}
              bgGradient="linear(to-l,#F19E38, #000000)"
              bgClip="text"
            >
              o potrzebach Twojego biznesu.
            </Text>
          </Heading>
          <Text color={"gray.500"} paddingTop="20px">
            Wspieramy rozwój firm przy użyciu nowoczesnych technologii. <br />
            Budujemy efektywne zespoły na miarę potrzeb naszych Klientów.
          </Text>
          <Flex
            direction={["column", "row"]}
            style={{ position: "relative", marginTop: "-5%" }}
            gap={10}
          >
            <Flex direction="column" w={["100%", "50%"]} alignItems="center">
              <Flex w="100%" h={["0em", "8em"]} mt="20px" />
              <Card
                imageUrl={
                  "mlody-przystojny-mezczyzna-praca-w-biurze-przy-uzyciu-komputera.jpg"
                }
                title={"Dla biznesu"}
                text={
                  "Rozwijaj swoją firmę we współpracy z partnerem, który rozumie Twoje cyfrowe potrzeby."
                }
              >
                <Stack
                  onClick={() => setBusiness(true)}
                  direction={"column"}
                  spacing={0}
                  fontSize={"sm"}
                >
                  <Link
                    color="#D07A0F"
                    fontWeight={600}
                    _hover={{
                      color: "#D07A0F",
                      textDecoration: "underline",
                    }}
                  >
                    Poznaj naszą ofertę
                  </Link>
                </Stack>
              </Card>
            </Flex>
            <Flex
              direction="column"
              w={["100%", "50%"]}
              alignItems="center"
              mt="20px"
            >
              <Card
                imageUrl={
                  "powazni-koledzy-w-biurze-rozmawiaja-ze-soba.jpg"
                }
                title={"Kariera"}
                text={
                  "Miej realny wpływ na kształt swojej kariery. Zobacz, jak możesz rozwijać swoje umiejętności w Nexio."
                }
              >
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Link
                    onClick={() => setCareer(true)}
                    color="#D07A0F"
                    fontWeight={600}
                    _hover={{
                      color: "#D07A0F",
                      textDecoration: "underline",
                    }}
                  >
                    Sprawdź, co możemy wspólnie stworzyć
                  </Link>
                </Stack>
              </Card>
            </Flex>
          </Flex>
        </div>
      </section>
      <Modal
        id="biznes"
        isOpen={business}
        onClose={() => {
          setBusiness(!business);
        }}
      >
        <ModalOverlay />
        <ModalContent maxW="1200px" borderRadius="32px" paddingBottom={"120px"}>
          <ModalHeader fontSize="38px" paddingTop="50px">
            Zadbaj o rozwój swojego biznesu z zaufanym partnerem
            technologicznym.
          </ModalHeader>
          <ModalCloseButton margin="50px" />
          <ModalBody>
            <BusinessModalBodyContent />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal
        id="kariera"
        isOpen={career}
        onClose={() => {
          setCareer(!career);
        }}
      >
        <ModalOverlay />
        <ModalContent maxW="1200px" borderRadius="32px" paddingBottom={"120px"}>
          <ModalHeader fontSize="38px" paddingTop="50px">
            Kształtuj swoją karierę z Nexio.
          </ModalHeader>
          <ModalCloseButton margin="50px" />
          <ModalBody>
            <CareerModalBodyContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyComponent;
