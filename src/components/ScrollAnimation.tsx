import { Container, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ScrollAnimation = () => {
  return (
    <div
      style={{
        background: "#fff",
        width: "60px",
        height: "60px",
        border: "1px solid #FFD097",
        borderRadius: "100%",

        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Container
        bg="#fff"
        w="46px"
        h="46px"
        borderRadius={"100%"}
        borderWidth={1}
        borderColor="#E9E9E9"
        margin="auto"
      >
        <motion.div
          animate={{ y: [-10, 10] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
          }}
        >
          <Image
            position="relative"
            top={"-20px"}
            src={"icons/scroll-arrow.svg"}
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default ScrollAnimation;
