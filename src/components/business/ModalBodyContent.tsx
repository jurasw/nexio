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
        <br />
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
          jest strategią, która umożliwia firmom szybkie skorzystanie z usług naszych
          konsultantów, aby efektywnie zwiększyć swoją <br />
          zdolność do realizacji projektów i osiągnięcia celów biznesowych.
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
          Team leasing
        </Heading>
        <Text color={"gray.500"}>
          wynajmując zespół w ramach team leasingu, firma korzysta z wiedzy i
          umiejętności specjalistów, którzy są już zgrani jako <br /> zespół i
          posiadają doświadczenie w pracy nad podobnymi projektami.
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
          Advanced Team Leasing
        </Heading>
        <Text color={"gray.500"}>
          bardziej rozbudowana forma team leasingu, która oferuje klientowi
          pełny zespół specjalistów, zarówno w zakresie <br /> umiejętności
          technicznych, jak również elementów zarządzania projektem i przejęcia
          odpowiedzialności za efekt <br />
          końcowy.
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
          podejście biznesowe, w którym Nexio przejmuje pełną odpowiedzialność
          za dostarczanie i zarządzanie określonym <br />
          zakresem usług dla Klienta.
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
          Fixed Price
        </Heading>
        <Text color={"gray.500"}>
          model najczęściej stosowany w przypadku usług software developmentu.
          Cena jest ustalana z góry na podstawie <br /> określonego zakresu
          prac. Wymaga dokładnej specyfikacji wymagań Klienta
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
          kompleksowa usługa wsparcia dla Klientów zagranicznych poszukujących
          wysokiej jakości specjalistów. W zależności od <br /> potrzeb, Nexio
          może pomóc w zbudowaniu zespołu (tu także kompetencje spoza IT), jak
          również zorganizować całe <br /> biuro na terenie Polski.
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
