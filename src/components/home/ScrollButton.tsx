import { Button, Icon } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const AnimatedButton = () => {
  const [isArrowUp, setIsArrowUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsArrowUp((prevIsArrowUp) => !prevIsArrowUp);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Button
      w="10"
      h="10"
      borderRadius="50%"
      backgroundColor="teal.500"
      color="white"
      _hover={{ bg: "teal.600" }}
      _active={{ bg: "teal.700" }}
    >
      <Icon as={FaArrowUp} boxSize={4} animate={isArrowUp ? "up" : "down"} />
    </Button>
  );
};


export default AnimatedButton;
