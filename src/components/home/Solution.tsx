import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Card from "./CardSolution";
import Title from "../SectionTitle";
import { useTranslation } from "react-i18next";
import { Path } from "../../pages/Paths";

const Solution: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div
        style={{
          width: "95%",
          background: "#fff",
          margin: "auto",
          marginBottom: "10%",
          padding: "5%",
        }}
      >
        <Title title={t("offer")} />

        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={["30px", "38px"]}
          fontFamily={"Red Hat Display"}
        >
          <Text
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
            {t("it-solution")}
          </Text>
          <br />
          <Text
            as={"span"}
            bgGradient="linear(to-l,#F19E38, #000000)"
            bgClip="text"
          >
            {t("business-needs")}
          </Text>
        </Heading>
        <Text
          color={"gray.500"}
          paddingTop="20px"
          w={["100%", "40%"]}
          fontFamily={"Red Hat Display"}
          fontSize={"18px"}
          fontWeight={400}
        >
          {t("client-support")}
        </Text>
        <Flex
          direction={["column", "row"]}
          style={{ position: "relative", marginTop: "-5%" }}
          gap={10}
        >
          <Flex direction="column" w={["100%", "50%"]} alignItems="center">
            <Flex w="100%" h={["0em", "8em"]} mt="20px" />
            <Card
              imageUrl={"biznes.png"}
              title={t("for-business")}
              text={t("develop-your-company")}
              href={Path.BUSINESS}
              buttonText={t("see-our-offer")}
            />
          </Flex>
          <Flex
            direction="column"
            w={["100%", "50%"]}
            alignItems="center"
            mt="20px"
          >
            <Card
              imageUrl={"powazni-koledzy-w-biurze-rozmawiaja-ze-soba.jpg"}
              title={t("career")}
              text={t("positive-impact")}
              href={Path.CAREER}
              buttonText={t("create-together")}
            />
          </Flex>
        </Flex>
      </div>
    </section>
  );
};

export default Solution;
