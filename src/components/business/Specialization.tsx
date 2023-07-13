import {
  Box,
  Grid,
  Text,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Title from "../SectionTitle";
import { useTranslation } from "react-i18next";
import { CloseIcon } from "@chakra-ui/icons";

const Specialization: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t("business-analysis"),
      text: t("business-analysis-text"),
    },
    { title: t("architecture-design"), text: t("architecture-design-text") },
    {
      title: t("project-management"),
      text: t("project-management-text"),
    },
    {
      title: t("ux-ui"),
      text: t("ux-ui-text"),
    },
    {
      title: t("programming"),
      text: t("programming-text"),
    },
    {
      title: t("env-config"),
      text: t("env-config-text"),
    },
    {
      title: t("testing"),
      text: t("testing-text"),
    },
    { title: t("service"), text: t("service-text") },
  ];
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const openModal = (title: string, text: string) => {
    setTitle(title);
    setText(text);
    setOpen(true);
  };
  return (
    <>
      <section
        style={{
          background: "#FDFCFC",
          padding: "10%",
          backgroundImage: "url('/specializations.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Title title={t("how-help")} />
        <Text fontWeight={400} fontSize={"48px"} color="white" mb={"75px"}>
          {t("areas")}
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              bg="rgba(0,0,0,0.59)"
              p={4}
              py={"35px"}
              borderRadius={"8px"}
              fontSize="14px"
              color="white"
              textTransform={"uppercase"}
              cursor={"pointer"}
              onClick={() => openModal(item.title, item.text)}
            >
              <Image src={"icons/arrow-right.svg"} float="right" />
              <Text mt={9} float="left" w={"50%"} whiteSpace="nowrap">
                {item.title}
              </Text>
            </Box>
          ))}
        </Grid>
      </section>
      <Modal isOpen={open} onClose={() => setOpen(false)} isCentered>
        <ModalOverlay />
        <ModalContent minW={"75%"} p={"2%"} borderRadius={"32px"}>
          <ModalHeader>{title}</ModalHeader>
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
          <ModalBody>{text}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Specialization;
