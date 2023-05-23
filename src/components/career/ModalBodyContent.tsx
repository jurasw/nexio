import {
  Text,
  Stack,
  Heading,
  Button,
  Box,
  Grid,
  Image,
} from "@chakra-ui/react";

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
          hybrydowo lub z biura.
          <br /> B2B, Umowa o Pracę i inne - w zależności od Twoich preferencji.
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
          Znajdziesz u nas możliwość pracy w różnych obszarach IT{" "}
        </Heading>
        <Text color={"gray.500"}>
          Będziesz pracować z doświadczonymi: Project Managerami, Architektami,
          Analitykami, Scrum Masterami, <br /> Programistami, Testerami,
          DevOpsami i Administratorami.
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
      <Heading
        color={"#000"}
        fontSize={"24px"}
        fontWeight={400}
        marginTop="60px"
      >
        Nasze środowisko technologiczne
      </Heading>
      <Text color={"#000000"} marginTop={"20px"}>
        Znajomość szeregu technologii pozwala naszym ekspertom tworzyć
        niestandardowe rozwiązania, które spełniają oczekiwania naszych klientów
        w zakresie funkcjonalności, wydajności i użyteczności.
      </Text>
      <Grid
        marginTop={"50px"}
        templateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(6, 1fr)",
        }}
        gap={4}
      >
        {[
          { title: "Python", imageUrl: "/icons/technologies/python.svg" },
          { title: "JavaScript", imageUrl: "/icons/technologies/js.svg" },
          { title: "React", imageUrl: "/icons/technologies/react.svg" },
          { title: "Flutter", imageUrl: "/icons/technologies/flutter.svg" },
          { title: "Angular", imageUrl: "/icons/technologies/angular.svg" },
          { title: "C#", imageUrl: "/icons/technologies/cs.svg" },
          { title: "Azure", imageUrl: "/icons/technologies/azure.svg" },
          { title: "Java", imageUrl: "/icons/technologies/java.svg" },
          { title: "Xamarin", imageUrl: "/icons/technologies/xamarin.svg" },
          { title: "MUAI", imageUrl: "/icons/technologies/muai.svg" },
          { title: "iOS", imageUrl: "/icons/technologies/ios.svg" },
          { title: "Android", imageUrl: "/icons/technologies/android.svg" },
        ].map((item, index) => (
          <Box
            key={index}
            bg="rgba(255,255,255,0)"
            borderWidth="1px"
            borderColor="#CACACA"
            borderRadius={"15px"}
            p={4}
            py={[4, "50px"]}
            textAlign="center"
          >
            <img src={item.imageUrl} style={{ margin: "auto" }} />
            <p
              style={{
                fontFamily: "Red Hat Display",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "22px",
              }}
            >
              {item.title}
            </p>
          </Box>
        ))}
      </Grid>
      <Heading
        color={"#000"}
        fontSize={"24px"}
        fontWeight={400}
        marginTop="60px"
      >
        Etapy rekrutacji
      </Heading>

      <Image src={"etapy.png"} m={"auto"} mt={5} />
      <Button
        mt={5}
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
        Znajdź ofertę dla siebie
      </Button>
      <Text color={"#000000"} fontSize="24px" marginTop={"40px"}>
        Jeśli masz pytania dotyczące procesu, skontaktuj się z naszym działem
        rekrutacji:
      </Text>
      <a
        href="mailto: rekrutacja@nexio.pl"
        style={{
          fontSize: "24px",
          color: "#F19E38",
          textDecoration: "underline",
        }}
      >
        rekrutacja@nexio.pl
      </a>
    </>
  );
};

export default CareerModalBodyContent;
