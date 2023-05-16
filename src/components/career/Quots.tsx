import React from "react";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import Card from "./Card";

const Quots: React.FC = () => {
  return (
    <>
         <Stack spacing={0} align={"center"}>
        <Heading
          style={{
            fontWeight: "400",
            fontSize: "32px",
            lineHeight: "80px",
          }}
        >
          #NexioTeam o pracy z nami
        </Heading>
      </Stack>
      <div style={{ position: "relative", zIndex: 2 }} className="halfbackground">
        <Flex direction={["column", "row"]} marginTop={"50px"}>
          <Flex direction="column" w={["100%", "50%"]} alignItems="center">
            <Card />
          </Flex>
          <Flex direction="column" w={["100%", "50%"]} alignItems="center">
            <Card />
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default Quots;
