import { Box, Text, Stack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Path } from "../../pages/Paths";

export interface Props {
  id: number;
  imageUrl: string;
  date: string;
  title: string;
  text: string;
}

const ArticleTile = ({ imageUrl, date, title, text, id }: Props) => {
  const navigate = useNavigate();

  return (
    <Box borderRadius={"16px"} border={"1px"} borderColor={"#F2EEEC"} key={id}>
      <Box pos={"relative"}>
        <Image
          w={"100%"}
          src={imageUrl}
          cursor={"pointer"}
          onClick={() => navigate(`${Path.BLOG}/${id}`)}
        />
      </Box>
      <Stack fontFamily={"Red Hat Display"} p={6}>
        <Text fontSize={"14px"} fontWeight={500} color="#7A7A7A">
          {date}
        </Text>
        <Text
          fontSize={"20px"}
          fontWeight={500}
          cursor={"pointer"}
          onClick={() => navigate(`${Path.BLOG}/${id}`)}
        >
          {title}
        </Text>
        <Text fontSize={"14px"} fontWeight={400} color="#313131">
          {text}
        </Text>
      </Stack>
    </Box>
  );
};

export default ArticleTile;
