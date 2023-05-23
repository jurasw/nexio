import { Text, Stack, Heading, Grid, Box } from "@chakra-ui/react";

const BusinessModalBodyContent = () => {
  const items = [
    "Analiza Biznesowa",
    "Analiza Systemowa",
    "Projektowanie Architektury",
    "Prototypowanie MVP",
    "UX/UI Desing",
    "Zarządzenie projektami",
    "Programowanie",
    "Konfigurowanie środowisk",
    "Wdrożenia",
    "Testowanie",
    "Testowanie",
  ];

  return (
    <>
      <Text color={"#000000"}>
        Twoje projekty IT w naszych rękach. Zaopiekujemy się Twoim pomysłem,
        usprawniając technologiczny postęp Twojej firmy.
      </Text>
      <Stack
        bg="#FDFCFC"
        borderWidth="1px"
        borderColor="#DFDFDF"
        borderRadius="8px"
        padding="25px"
        marginTop="45px"
      >
        <Heading color={"#000"} fontSize={"24px"} fontWeight={400}>
          Body Leasing
        </Heading>
        <Text color={"gray.500"}>
          Nie musisz się martwić o jakość swojego projektu. Nasi specjaliści
          idealnie wypełnią luki w Twoim zespole, dostarczając jakość, której
          oczekujesz.
        </Text>
      </Stack>
      <Stack
        bg="#FDFCFC"
        borderWidth="1px"
        borderColor="#DFDFDF"
        borderRadius="8px"
        padding="25px"
        marginTop="25px"
      >
        <Heading color={"#000"} fontSize={"24px"} fontWeight={400}>
          Nearshoring
        </Heading>
        <Text color={"gray.500"}>
          Zamiast tworzyć zespół od zera, skorzystaj z naszej specjalistycznej
          wiedzy oraz bazy ekspertów.
        </Text>
      </Stack>
      <Stack
        bg="#FDFCFC"
        borderWidth="1px"
        borderColor="#DFDFDF"
        borderRadius="8px"
        padding="25px"
        marginTop="25px"
      >
        <Heading color={"#000"} fontSize={"24px"} fontWeight={400}>
          Managed Services
        </Heading>
        <Text color={"gray.500"}>
          Realizacja, utrzymanie, rozwój projektu IT w pełni w naszych rękach.
          Stajemy się Twoim zewnętrznym zespołem.
        </Text>
      </Stack>
      <Stack
        bg="#FDFCFC"
        borderWidth="1px"
        borderColor="#DFDFDF"
        borderRadius="8px"
        padding="25px"
        marginTop="25px"
      >
        <Heading color={"#000"} fontSize={"24px"} fontWeight={400}>
          Fix Price
        </Heading>
        <Text color={"gray.500"}>
          Twój projekt, nasze wykonanie - wspólnie ustalone warunki. Poznajemy
          potrzeby Twojego biznesu, ustalamy plan działania, cenę i czas
          realizacji.
        </Text>
      </Stack>
      <Heading
        color={"#000"}
        fontSize={"24px"}
        fontWeight={400}
        marginTop={"65px"}
        marginBottom={"65px"}
      >
        Obszary specjalizacji
      </Heading>
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
        Jeśli masz pytania, skontaktuj się z nami:
      </Text>
      <a
        href="mailto: sprzedaz@nexio.pl"
        style={{
          fontSize: "24px",
          color: "#F19E38",
          textDecoration: "underline",
        }}
      >
        sprzedaz@nexio.pl
      </a>
    </>
  );
};

export default BusinessModalBodyContent;
