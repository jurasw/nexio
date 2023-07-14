import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();
  return (
    <>
      <Text fontSize={"24px"} fontWeight={500} fontFamily={"Red Hat Display"}>
        {t("write-to-us")}
      </Text>
      <HStack>
        <FormControl id="firstName">
          <FormLabel
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"Red Hat Display"}
          >
            {t("name")}
          </FormLabel>
          <Input focusBorderColor="brand.400" type="text" />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel
            fontSize={"14px"}
            fontWeight={400}
            fontFamily={"Red Hat Display"}
          >
            {t("email")}
          </FormLabel>
          <Input focusBorderColor="brand.400" type="text" />
        </FormControl>
      </HStack>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="platform"
          fontSize={"14px"}
          fontWeight={400}
          fontFamily={"Red Hat Display"}
        >
          {t("select")}
        </FormLabel>
        <Select focusBorderColor="brand.400">
          <option>{t("office")}</option>
          <option>{t("recruitment")}</option>
          <option>{t("sales")}</option>
        </Select>
      </FormControl>
      <FormControl id="description" mt={1}>
        <FormLabel
          fontSize={"14px"}
          fontWeight={400}
          fontFamily={"Red Hat Display"}
        >
          {t("message")}
        </FormLabel>
        <Textarea
          placeholder=""
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{
            sm: "sm",
          }}
        />
      </FormControl>
      {/* do poprawy rozmiar fontu */}
      <Checkbox mb={4}>
        <Text fontSize={"10px"} fontWeight={400} color="#4A4A4A">
          {t("agree")}
        </Text>
      </Checkbox>
      <Checkbox>
        <Text fontSize={"10px"} fontWeight={400} color="#4A4A4A">
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celach
          marketingowych przez Nexio Management Sp. z o.o. z siedzibą w
          Warszawie w celu przekazywania za pośrednictwem środków komunikacji
          elektronicznej (e-maila) Newslettera, tj. informacji handlowych i
          marketingowych dotyczących produktów i usług Nexio Management Sp. z
          o.o., organizowanych przez niego promocji i akcji marketingowych, w
          tym w szczególności informacji o produktach i usługach. Moje dane
          podaję dobrowolnie. Wiem, że w każdej chwili mogę zrezygnować z
          subskrypcji bez podawania przyczyny.
        </Text>
      </Checkbox>
      <Stack spacing={10} pt={5}>
        <Button
          borderRadius={"8px"}
          loadingText="Submitting"
          size="lg"
          bg={"black"}
          color={"white"}
          w={"50%"}
        >
          {t("send-message")}
        </Button>
      </Stack>
    </>
  );
};

export default Form;
