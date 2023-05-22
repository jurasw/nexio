import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Title from "./Title";

// Testimonial data
const testimonials = [
  {
    id: 1,
    logoUrl: "testimonials_logo.svg",
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo dui vel lectus faucibus efficitur.",
    position: "CTO",
  },
  {
    id: 2,
    logoUrl: "testimonials_logo.svg",
    name: "Jane Smith",
    testimonial:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam nec nulla sit amet nisi aliquet euismod.",
    position: "CTO",
  },
  // {
  //   id: 3,
  //   logoUrl: "testimonials_logo.svg",
  //   name: "David Johnson",
  //   testimonial:
  //     "Phasellus iaculis consectetur nisl ut semper. Ut eu elit tincidunt, fermentum risus a, condimentum lectus.",
  //   position: "CTO",
  // },
  // {
  //   id: 4,
  //   logoUrl: "testimonials_logo.svg",
  //   name: "Emily Davis",
  //   testimonial:
  //     "Aliquam euismod nunc sed ligula semper interdum. Nullam pellentesque lacus vitae turpis auctor, at auctor nisl gravida.",
  //   position: "CTO",
  // },
  // {
  //   id: 5,
  //   logoUrl: "testimonials_logo.svg",
  //   name: "Michael Wilson",
  //   testimonial:
  //     "Cras eget ipsum et est dapibus dignissim. Nam gravida ligula at magna dignissim, eget vestibulum sem dapibus.",
  //   position: "CTO",
  // },
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  const startIndex = activeIndex % testimonials.length;
  const endIndex = (startIndex + 2) % testimonials.length;
  const displayedTestimonials =
    endIndex >= startIndex
      ? testimonials.slice(startIndex, endIndex + 1)
      : [
          ...testimonials.slice(startIndex),
          ...testimonials.slice(0, endIndex + 1),
        ];

  return (
    <div
      style={{
        padding: "10%",
        background: "#FDFCFC",
        // borderTop: "1px solid #000000",
      }}
    >
      <Title title={"REFERENCJE"} />
      <Heading fontSize={"48px"} fontWeight={400}>
        <Text
          as={"span"}
          position={"relative"}
          bgGradient="linear(to-l,#F19E38, #000000)"
          bgClip="text"
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
          Co mówią nasi
        </Text>
        <Text as={"span"} color="#000">
          {" klienci"}
        </Text>
      </Heading>
      <Text float="right">
        5.0
        {Array.from({ length: 5 }).map((_) => (
          <Image float="right" marginLeft="10px" src={"icons/star.svg"} />
        ))}
        <br />
        Oceny wszysktich <span style={{ color: "#F19E38" }}>{" klientów"}</span>
      </Text>
      <Flex direction="column" alignItems="center" marginTop="100px">
        <Flex
          width="100%"
          maxWidth="100%"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          mb={4}
        >
          {displayedTestimonials.map((testimonial) => (
            <Box
              bg={"white"}
              key={testimonial.id}
              border={"1px"}
              borderColor="#C6C6C6"
              borderRadius={"8px"}
              height={["auto", "316px"]}
              width={["100%", "50%", "33.33%", "25%"]}
              borderWidth="1px"
              p={4}
              mx={2}
              my={2}
            >
              <Image src={testimonial.logoUrl} />
              <Text fontSize="xl" mb={2}>
                "{testimonial.testimonial}"
              </Text>
              <Text fontWeight="bold">{testimonial.name}</Text>
              <Text>{testimonial.position}</Text>
            </Box>
          ))}
        </Flex>
        <Flex alignItems={"left"}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={testimonial.id}
              width={index === activeIndex ? "41px" : "22px"}
              height="8px"
              borderRadius="20px"
              bg={index === activeIndex ? "#F19E38" : "#FFD097"}
              mx={2}
              cursor="pointer"
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </Flex>
      </Flex>
    </div>
  );
};

export default TestimonialsCarousel;
