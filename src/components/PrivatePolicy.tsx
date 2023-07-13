import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { PrivacyPolicy } from "./home/PrivacyPolicy";
import { useTranslation } from "react-i18next";

const PrivatePolicy = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  return (
    <>
      <Link
        _hover={{
          color: "#fff",
          textDecoration: "underline",
        }}
        onClick={onOpen}
      >
        {t("privacy-policy")}
      </Link>
      <Modal id="polityka" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="1200px" borderRadius="32px">
          <ModalHeader m={4}>{t("privacy-policy")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PrivacyPolicy />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PrivatePolicy;
