import { Flex, Heading, Text } from "@chakra-ui/react";
import Title from "../SectionTitle";
import Card from "./CardPossibilities";
import { useTranslation } from "react-i18next";

const Possibilities = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div
        style={{
          width: "95%",
          background: "#fff",
          margin: "auto",
          padding: "5%",
        }}
      >
        <Title title={t("possibilities")} />

        <Heading lineHeight={1.1} fontWeight={400} fontSize={"38px"}>
          <Text>{t("cooperation")}</Text>
        </Heading>
        <Flex mt={10} direction={["column", "row"]} gap={10}>
          <Flex direction="column" w={["100%", "50%"]} alignItems="center">
            <Card
              imageUrl={"leftcareer.png"}
              text={t("possibilities-card1-text")}
              imageText={t("possibilities-card1-title")}
              number={"01"}
            />
          </Flex>
          <Flex direction="column" w={["100%", "50%"]} alignItems="center">
            <Card
              number={"02"}
              imageUrl={"rightcareer.png"}
              text={t("possibilities-card2-text")}
              imageText={t("possibilities-card2-title")}
            />
          </Flex>
        </Flex>
      </div>
    </section>
  );
};

export default Possibilities;
