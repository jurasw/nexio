import { Grid, Heading, Text } from "@chakra-ui/react";
import RecommendedTile from "./RecommendedTile";

const Recommended = () => {
  return (
    <section
      style={{
        padding: "10%",
        fontFamily: "Red Hat Display",
        background: "#FDFCFC",
        borderTop: "1px solid #DFDFDF",
      }}
    >
      <Heading
        fontSize={"38px"}
        fontWeight={400}
        fontFamily={"Red Hat Display"}
        mb={9}
      >
        <Text as={"span"} color="#000">
          Może Ci się również{" "}
        </Text>
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
          spodobać
        </Text>
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {[1, 2, 3].map(() => (
          <RecommendedTile
            imageUrl={"/blogtest.png"}
            date={"24 Kwietnia 2023"}
            title={"Facylitacja, czyli jak poradzić sobie ze spotkaniami"}
          />
        ))}
      </Grid>
    </section>
  );
};
export default Recommended;
