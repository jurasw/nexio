import { SetStateAction, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Title from "../SectionTitle";
import { useTranslation } from "react-i18next";
import { CloseIcon } from "@chakra-ui/icons";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      image: "testimonials/marek_kaminski.svg",
      author: "Monika Samul",
      position: "Product Manager",
      text: t("testimonial-monika"),
    },
    {
      image: "testimonials/arimr.svg",
      author: "Wiesław Szala",
      position: "Dyrektor Departamentu Zarządzania Informatyką",
      text: t("testimonial-wieslaw"),
    },
    {
      image: "testimonials/maczfit.svg",
      author: "Michał Stabach",
      position: "Dyrektor IT",
      text: t("testimonial-michal"),
    },
    {
      image: "testimonials/arimr.svg",
      author: "Wiesław Szala",
      position: "Dyrektor Departamentu Zarządzania Informatyką",
      text: t("testimonial-wieslaw"),
    },
    {
      image: "testimonials/marek_kaminski.svg",
      author: "Monika Samul",
      position: "Product Manager",
      text: t("testimonial-monika"),
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleItems = testimonials.slice(activeIndex, activeIndex + 3);
  const visibleDots =
    testimonials.length > 3 ? visibleItems.length : testimonials.length;
  const isMobile = useMediaQuery("(max-width: 768px)")[0];
  const visibleItemsCount = isMobile ? 1 : 3;
  const handleClickDot = (index: number) => {
    setActiveIndex(index);
  };
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState({
    image: "",
    text: "",
    author: "",
    position: "",
  });

  const openModal = (
    modal: SetStateAction<{
      image: string;
      text: string;
      author: string;
      position: string;
    }>
  ) => {
    setModal(modal);
    setOpen(true);
  };
  return (
    <>
      <Container
        maxW={"100%"}
        px={"10%"}
        w={"100vw"}
        overflow={"hidden"}
        overflowX={"hidden"}
        maxWidth="100vw"
        position={"relative"}
      >
        <Title title={"REFERENCJE"} />
        <Flex direction={{ base: "column", md: "row" }} alignItems="center">
          <Heading
            fontSize={{ base: "36px", md: "48px" }}
            fontWeight={400}
            mb={{ base: "10px", md: 0 }}
          >
            <Text as="span" color="#000">
              {t("what-say")}
            </Text>
            <Text
              as="span"
              position="relative"
              bgGradient="linear(to-l, #F19E38, #000000)"
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
              {t("clients")}
            </Text>
          </Heading>
          <Spacer />
          {/* <Box textAlign={{ base: "center", md: "right" }}>
          <Text>
            5.0
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                display="inline-block"
                marginLeft="10px"
                src={"icons/star.svg"}
                alt="star"
              />
            ))}
          </Text>
          <Text>
            Oceny wszystkich{" "}
            <Text as="span" color="#F19E38">
              klientów
            </Text>
          </Text>
        </Box> */}
        </Flex>

        <Box
          my={8}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          maxWidth="100vw"
          overflow="hidden"
        >
          <Box display="flex" justifyContent="center" mb={4} overflow="hidden">
            {visibleItems.slice(0, visibleItemsCount).map((item, index) => {
              const isLast = index === visibleItems.length - 1;
              const scale = isLast ? 0.8 : 1;
              const opacity = isLast ? 0.4 : 1;
              const isFirstFromLeft =
                index === 0 && testimonials.indexOf(item) === activeIndex;

              return (
                <motion.div
                  key={index}
                  style={{
                    scale,
                    opacity,
                    marginRight: "1rem",
                    width: `calc(100%)`,
                    ...(isLast && {
                      position: "absolute",
                      right: "-22%",
                      width: `calc(100% / ${visibleItemsCount})`,
                    }),
                  }}
                >
                  <Box
                    bg="transparent"
                    borderRadius="8px"
                    border={"1px"}
                    borderColor={"#C6C6C6"}
                    fontSize="xl"
                    p={9}
                    position="relative"
                    fontFamily={"Red Hat Display"}
                  >
                    <Image src={item.image} mb={5} h={"75px"} />
                    <Text
                      fontSize="16px"
                      mb={2}
                      overflow="hidden"
                      fontWeight={400}
                    >
                      {item.text.substring(0, 300)}
                      {"... "}
                      <span
                        style={{
                          color: "#F19E38",
                          textDecoration: "underline",
                          cursor: "pointer",
                          fontWeight: "700",
                        }}
                        onClick={() =>
                          openModal({
                            image: item.image,
                            text: item.text,
                            author: item.author,
                            position: item.position,
                          })
                        }
                      >
                        {t("see-reference")}
                      </span>
                    </Text>
                    <Text fontWeight="bold" fontSize="16px">
                      {item.author}
                    </Text>
                    <Text fontSize="16px">{item.position}</Text>
                    {isFirstFromLeft && (
                      <Box
                        position="absolute"
                        bottom="-0.5"
                        left="5"
                        width="75%"
                        height="4px"
                        bg="primary"
                      />
                    )}
                  </Box>
                </motion.div>
              );
            })}
          </Box>

          <HStack spacing={2} mt={5}>
            {Array.from({ length: visibleDots }).map((_, index) => (
              <Box
                key={index}
                h="8px"
                w={activeIndex === index ? "41px" : "22px"}
                bg={activeIndex === index ? "primary" : "primary.light"}
                borderRadius="20px"
                onClick={() => handleClickDot(index)}
                cursor="pointer"
              />
            ))}
          </HStack>
        </Box>
      </Container>
      <Modal isOpen={open} onClose={() => setOpen(false)} isCentered>
        <ModalOverlay />
        <ModalContent minW={"75%"} p={"2%"} borderRadius={"32px"}>
          <ModalCloseButton
            color="#4A4A4A"
            fontFamily={"Red Hat Display"}
            fontWeight={400}
            p={14}
            px={20}
            _hover={{ bg: "rgba(255,255,255,0)" }}
          >
            {t("close")}
            <Button ml={4} border="1px" borderColor="#D9D9D9" bg="#fff">
              <CloseIcon />
            </Button>
          </ModalCloseButton>
          <ModalBody>
            <Image src={modal.image} mb={5} maxW={"75%"} />
            <Text fontSize="16px" mb={2} maxH={"175px"} overflow="hidden">
              {modal.text}
            </Text>
            <Text fontWeight="bold" fontSize="16px">
              {modal.author}
            </Text>
            <Text fontSize="16px">{modal.position}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Testimonials;
