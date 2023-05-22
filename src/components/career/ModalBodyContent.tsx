import { Text, Stack, Heading, Button, Box, Grid } from "@chakra-ui/react";

const CareerModalBodyContent = () => {
  return (
    <>
      <Stack
        bg="#FDFCFC"
        borderWidth="1px"
        borderColor="#DFDFDF"
        borderRadius="8px"
        padding="25px"
      >
        <Heading color={"#000"} fontSize={"24px"} fontWeight={400}>
          Działamy w różnych modelach współpracy.
        </Heading>
        <Text color={"gray.500"}>
          Jesteśmy elastyczni względem Twoich potrzeb. Możesz pracować zdalnie,
          hybrydowo lub z biura. B2B, Umowa o Pracę i inne - w zależności od
          Twoich preferencji.
        </Text>
      </Stack>
      <Stack
        bg="#FDFCFC"
        borderWidth="1px"
        borderColor="#DFDFDF"
        borderRadius="8px"
        marginTop="12px"
        padding="25px"
      >
        <Heading color={"#000"} fontSize={"24px"} fontWeight={400}>
          Pracuje u nas wielu specjalistów, nie tylko z IT.
        </Heading>
        <Text color={"gray.500"}>
          Analityczki i Analitycy, DevOpsi, Architektki i Architekci,
          Programistki i Programiści Front i Backend, Testerki i Testerzy,
          Project Managerki i Managerowie, Rekrueterzy i Rekruterki i wielu
          innych.
        </Text>
      </Stack>
      <Button
        rounded={"full"}
        size={"lg"}
        marginTop="25px"
        fontWeight={"normal"}
        px={6}
        border="2px"
        borderColor={"#F19E38"}
        bg={"rgba(255, 255, 255, 0)"}
        _hover={{
          borderColor: "#F19E38",
          bg: "rgba(255, 208, 151, 0.2)",
        }}
      >
        Zobacz oferty pracy
      </Button>
      <Heading
        color={"#000"}
        fontSize={"24px"}
        fontWeight={400}
        marginTop="60px"
      >
        Dlaczego praca w Nexio jest tak lubiana?
      </Heading>
      <Text color={"#000000"} marginTop={"20px"}>
        Poza świetną atmosferą w pracy, znajdziesz u nas:
      </Text>
      <Grid
      mt={5}
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        {[
          "Nowe technologie",
          "Ciekawe projekty",
          "Benefity",
          "Interesujących ludzi",
        ].map((item, index) => (
          <Box
            key={index}
            bg="rgba(255,255,255,0)"
            p={4}
            py={"35px"}
            textAlign="center"
            borderColor="#CACACA"
            borderWidth={"1px"}
            borderRadius={"15px"}
            fontSize="12px"
          >
            {item}
          </Box>
        ))}
      </Grid>
      <Text color={"#000000"} fontSize="24px" marginTop={"20px"}>
        Jeśli masz pytania dotyczące procesu, skontaktuj się z naszym działem
        rekrutacji:
      </Text>
      <Text fontSize="24px" color="#F19E38" textDecoration={"underline"}>
        rekrutacja@nexio.pl
      </Text>
    </>
  );
};

export default CareerModalBodyContent;
