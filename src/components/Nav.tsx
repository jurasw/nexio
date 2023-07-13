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
  Spacer,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { Path } from "../pages/Paths";
import { useNavigate } from "react-router-dom";
import { SocialButton } from "./SocialButton";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import PrivatePolicy from "./PrivatePolicy";

export default function Simple() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={["rgba(255, 208, 151, 0.1)", "rgba(255,255,255,0)"]} w="100%">
        {!isOpen && (
          <Flex h={16} alignItems={"center"} w="100%" px={"10%"} py={2}>
            <HStack
              spacing={8}
              alignItems={"center"}
              w="100%"
              overflow="auto"
              m={"auto"}
            >
              <Image
                src={"/logo.svg"}
                alignSelf="flex-start"
                pt={"25px"}
                cursor={"pointer"}
                onClick={() => navigate(Path.HOME)}
              />
              <Spacer />
              <HStack
                alignSelf="flex-end"
                as={"nav"}
                display={{ base: "none", md: "flex" }}
              >
                <Menu>
                  <Button
                    variant={"menuButton"}
                    onClick={() => navigate(Path.BUSINESS)}
                  >
                    {t("for-business")}
                  </Button>
                  <Button
                    variant={"menuButton"}
                    onClick={() => navigate(Path.CAREER)}
                  >
                    {t("career")}
                  </Button>
                  <Button
                    variant={"menuButton"}
                    onClick={() => navigate(Path.BLOG)}
                  >
                    Blog
                  </Button>
                  <Button
                   variant="contactButtonDekstop"
                    onClick={() => navigate(Path.CONTACT)}
                  >
                    {t("contact")}
                    <Image
                      marginLeft="10px"
                      float="right"
                      src="/icons/footer/mail.svg"
                    />
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
                    <Image src="/icons/language.svg" />
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
                      onClick={() => i18n.changeLanguage("pl")}
                    >
                      <strong style={{ marginRight: "5px" }}>{"PL"}</strong>
                      {t("polish")}
                    </MenuItem>
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
                      onClick={() => i18n.changeLanguage("en")}
                    >
                      <strong style={{ marginRight: "5px" }}>{"EN"}</strong>
                      {t("english")}
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
        )}

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack
              as={"nav"}
              spacing={4}
              bg="#fff"
              width={"100%"}
              position={"fixed"}
              h={"100vh"}
              zIndex={5}
            >
              <HStack bg={"#fff"} p={4}>
                <Image
                  src={"/logo.svg"}
                  alignSelf="flex-start"
                  pt={"25px"}
                  cursor={"pointer"}
                  onClick={() => navigate(Path.HOME)}
                />
                <Spacer />
                <IconButton
                  borderColor={"#F19E38"}
                  size={"md"}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={"Open Menu"}
                  display={{ md: "none" }}
                  onClick={isOpen ? onClose : onOpen}
                />
              </HStack>
              <Menu>
                <Button
                  fontWeight={500}
                  variant={"menuButton"}
                  onClick={() => navigate(Path.BUSINESS)}
                >
                  {t("for-business")}
                </Button>
                <Button
                  fontWeight={500}
                  variant={"menuButton"}
                  onClick={() => navigate(Path.CAREER)}
                >
                  {t("career")}
                </Button>
                <Button
                  fontWeight={500}
                  variant={"menuButton"}
                  onClick={() => navigate(Path.BLOG)}
                >
                  Blog
                </Button>
                <Button
                  fontWeight={500}
                  variant="contactButton"
                  onClick={() => navigate(Path.CONTACT)}
                >
                  {t("contact")}
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
                  <Image src="/icons/language.svg" />
                </MenuButton>
              </Menu>
              <Spacer />
              <Box bg={"#000"} p={6} textAlign={"center"}>
                <HStack gap={5} justifyContent={"center"}>
                  <SocialButton
                    label={"Linked in"}
                    href={
                      "https://www.linkedin.com/company/nexio-management-ltd-/mycompany/"
                    }
                  >
                    <FaLinkedinIn />
                  </SocialButton>
                  <SocialButton
                    label={"Facebook"}
                    href={"https://www.facebook.com/NexioManagement"}
                  >
                    <FaFacebookF />
                  </SocialButton>
                  <SocialButton
                    label={"Instagram"}
                    href={"https://www.instagram.com/nexiomanagement/"}
                  >
                    <FaInstagram />
                  </SocialButton>
                </HStack>
                <Box my={6} color="#fff">
                  <PrivatePolicy />
                </Box>
                <Text
                  p={6}
                  borderTop={"1px"}
                  borderColor={"#282828"}
                  color={"#ADADAD"}
                >
                  Copyright© 2023 Nexio Management. All rights reserved.
                </Text>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
