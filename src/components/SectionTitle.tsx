import React from "react";
import { Text, Image } from "@chakra-ui/react";

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <Text
      color="#F19E38"
      fontWeight={700}
      fontSize="12px"
      fontFamily={"Syne"}
      textTransform={"uppercase"}
    >
      <Image float="left" marginRight="10px" src={"minilogo.svg"} />
      {title}
    </Text>
  );
};

export default Title;
