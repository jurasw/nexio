import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  // useColorMode,
  // Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Path } from "../pages/Paths";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SocialButton } from "./SocialButton";
import PrivatePolicy from "./PrivatePolicy";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        id="footer"
        bg="#000"
        color="#fff"
        fontFamily="Red Hat Display"
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
            spacing={8}
            py={50}
          >
            <Stack spacing={6}>
              <Box>
                <Image
                  src={"/footerlogo.svg"}
                  alignSelf="flex-start"
                  pt={"25px"}
                  cursor={"pointer"}
                  onClick={() => navigate(Path.HOME)}
                />
              </Box>
            </Stack>
            <Stack align={"flex-start"} minW={"300px"}>
              <ListHeader>Nexio Management Sp. z o.o.</ListHeader>
              <Text>
                <Image
                  src={"/icons/footer/map-pin.svg"}
                  marginRight="14px"
                  float="left"
                />
                ul. Puławska 182, 02-678 Warszawa
              </Text>
              <Text>
                <Image
                  src={"/icons/footer/phone.svg"}
                  marginRight="14px"
                  float="left"
                />
                +48 22 244 13 50
              </Text>
              <a href="mailto: biuro@nexio.pl" className="footer-mail">
                <Image
                  src={"/icons/footer/mail.svg"}
                  marginRight="14px"
                  float="left"
                />
                biuro@nexio.pl
              </a>
              <Text>NIP: 525-23-65-494</Text>
            </Stack>
            <Stack align={"flex-start"} minW="250px">
              <ListHeader>{t("additional-contact")}</ListHeader>
              <a href="mailto: biuro@nexio.pl" className="footer-mail">
                <Image
                  src={"/icons/footer/mail.svg"}
                  marginRight="14px"
                  float="left"
                />
                biuro@nexio.pl
              </a>
              <a href="mailto: sprzedaz@nexio.pl" className="footer-mail">
                <Image
                  src={"/icons/footer/mail.svg"}
                  marginRight="14px"
                  float="left"
                />
                sprzedaz@nexio.pl
              </a>
              <a href="mailto: rekrutacja@nexio.pl" className="footer-mail">
                <Image
                  src={"/icons/footer/mail.svg"}
                  marginRight="14px"
                  float="left"
                />
                rekrutacja@nexio.pl
              </a>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>LINKS</ListHeader>
              <Link
                _hover={{
                  color: "#fff",
                  textDecoration: "underline",
                }}
                onClick={() => {
                  navigate(Path.BUSINESS);
                }}
              >
                {t("for-business")}
              </Link>
              <Link
                _hover={{
                  color: "#fff",
                  textDecoration: "underline",
                }}
                onClick={() => {
                  navigate(Path.CAREER);
                }}
              >
                {t("career")}
              </Link>
              <Link
                _hover={{
                  color: "#fff",
                  textDecoration: "underline",
                }}
                onClick={() => {
                  navigate(Path.CONTACT);
                }}
              >
                {t("contact")}
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box>
          <Container
            as={Stack}
            maxW={"6xl"}
            p={45}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
            borderTopWidth={1}
            borderColor="#282828"
          >
            <Text>Copyright© 2023 Nexio Management. All rights reserved.</Text>
            <Stack direction={"row"} spacing={6}>
              <PrivatePolicy />
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
              {/* <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button> */}
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
