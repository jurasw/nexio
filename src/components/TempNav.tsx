import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import BusinessModalBodyContent from "./business/ModalBodyContent";
import CareerModalBodyContent from "./career/ModalBodyContent";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [business, setBusiness] = useState(false);
  const [career, setCareer] = useState(false);
  return (
    <>
      <Box
        bg={["rgba(255, 208, 151, 0.1)", "rgba(255,255,255,0)"]}
        px={"10%"}
        py={2}
        w="100%"
      >
        <Flex h={16} alignItems={"center"} w="100%">
          <HStack spacing={8} alignItems={"center"} w="100%" overflow="auto">
            <Image src={"logo.svg"} alignSelf="flex-start" pt={"25px"} />
            <Spacer />
            <HStack
              alignSelf="flex-end"
              as={"nav"}
              display={{ base: "none", md: "flex" }}
            >
              <Menu>
                <Button
                  rounded={"full"}
                  display="flex"
                  size={"lg"}
                  bg="rgba(255, 208, 151, 0)"
                  fontWeight={"normal"}
                  _hover={{
                    borderWidth: 0,
                    borderColor: "#F19E38",
                    bg: "rgba(255, 208, 151, 0.2)",
                  }}
                  onClick={() => {
                    setBusiness(!business);
                  }}
                >
                  Dla biznesu
                </Button>
                <Button
                  rounded={"full"}
                  display="flex"
                  size={"lg"}
                  bg="rgba(255, 208, 151, 0)"
                  fontWeight={"normal"}
                  _hover={{
                    borderWidth: 0,
                    borderColor: "#F19E38",
                    bg: "rgba(255, 208, 151, 0.2)",
                  }}
                  onClick={() => {
                    setCareer(!career);
                  }}
                >
                  Kariera
                </Button>

                <Link
                  px="30px"
                  py="10px"
                  color="#fff"
                  fontSize={"sm"}
                  href="#footer"
                  fontWeight={500}
                  bg="#F19E38"
                  mx="10px"
                  borderRadius={"40px"}
                  _hover={{
                    bg: "#D07A0F",
                    color: "#fff",
                  }}
                >
                  Kontakt
                  <Image
                    marginLeft="10px"
                    float="right"
                    src="icons/footer/mail.svg"
                  />
                </Link>

                <MenuButton
                  textAlign="center"
                  display={{ base: "none", md: "inline-flex" }}
                  borderWidth={"1px"}
                  borderColor="#F19E38"
                  padding="4px"
                  borderRadius={"48px"}
                  bg="rgba(255,255,255,0)"
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  p={"10px"}
                >
                  <Image src="icons/language.svg" />
                </MenuButton>
                <MenuList
                  bg="#FFFAF5"
                  borderWidth="1px"
                  borderColor="#F19E38"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
                  borderRadius="20px"
                >
                  <MenuItem
                    bg="rgba(255,255,255,0)"
                    borderWidth="0px"
                    _hover={{
                      bg: "rgba(255,255,255,0)",
                      borderWidth: "0px",
                      border: "none",
                      borderColor: "rgba(255,255,255,0)",
                      boxShadow: "none",
                    }}
                    _focus={{ boxShadow: "none" }}
                  >
                    <strong>{"PL   "}</strong> -polski
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <IconButton
            bg={"#fff"}
            borderColor={"#F19E38"}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} bg="#fff">
              <Menu>
                <Button
                  rounded={"full"}
                  display="flex"
                  size={"lg"}
                  bg="rgba(255, 208, 151, 0)"
                  fontWeight={"normal"}
                  _hover={{
                    borderWidth: 0,
                    borderColor: "#F19E38",
                    bg: "rgba(255, 208, 151, 0.2)",
                  }}
                  onClick={() => {
                    setBusiness(!business);
                  }}
                >
                  Dla biznesu
                </Button>
                <Button
                  rounded={"full"}
                  display="flex"
                  size={"lg"}
                  bg="rgba(255, 208, 151, 0)"
                  fontWeight={"normal"}
                  _hover={{
                    borderWidth: 0,
                    borderColor: "#F19E38",
                    bg: "rgba(255, 208, 151, 0.2)",
                  }}
                  onClick={() => {
                    setCareer(!career);
                  }}
                >
                  Kariera
                </Button>

                <Button
                  rounded={"full"}
                  display="flex"
                  size={"lg"}
                  bg="rgba(255, 208, 151, 0)"
                  fontWeight={"normal"}
                  _hover={{
                    borderWidth: 0,
                    borderColor: "#F19E38",
                    bg: "rgba(255, 208, 151, 0.2)",
                  }}
                >
                  Kontakt
                </Button>

                <MenuButton
                  textAlign="center"
                  display={{ base: "none", md: "inline-flex" }}
                  borderWidth={"1px"}
                  borderColor="#F19E38"
                  padding="4px"
                  borderRadius={"48px"}
                  bg="rgba(255,255,255,0)"
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  p={"10px"}
                >
                  <Image src="icons/language.svg" />
                </MenuButton>
                <MenuList
                  bg="#FFFAF5"
                  borderWidth="1px"
                  borderColor="#F19E38"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
                  borderRadius="20px"
                >
                  <MenuItem
                    bg="rgba(255,255,255,0)"
                    borderWidth="0px"
                    _hover={{
                      bg: "rgba(255,255,255,0)",
                      borderWidth: "0px",
                      border: "none",
                      borderColor: "rgba(255,255,255,0)",
                      boxShadow: "none",
                    }}
                    _focus={{ boxShadow: "none" }}
                  >
                    <strong>{"PL   "}</strong> -polski
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Modal
        id="biznes"
        isOpen={business}
        onClose={() => {
          setBusiness(!business);
        }}
      >
        <ModalOverlay />
        <ModalContent maxW="1200px" borderRadius="32px" paddingBottom={"120px"}>
          <ModalHeader fontSize="38px" padding="40px">
            Zadbaj o rozwój swojego biznesu z zaufanym partnerem
            technologicznym.
          </ModalHeader>
          <ModalCloseButton margin={["0", "50px"]} />
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
          <ModalHeader fontSize="38px" padding="40px">
            Kształtuj swoją karierę z Nexio.
          </ModalHeader>
          <ModalCloseButton margin={["0", "50px"]} />
          <ModalBody>
            <CareerModalBodyContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
