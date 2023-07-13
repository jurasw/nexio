import { Box, Text, Stack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Path } from "../../pages/Paths";

export interface Props {
  imageUrl: string;
  date: string;
  title: string;
}
const RecommendedTile = ({ imageUrl, date, title }: Props) => {
  const navigate = useNavigate();

  return (
    <Box borderRadius={"16px"} border={"1px"} borderColor={"#F2EEEC"}>
      <Box pos={"relative"}>
        <Image
          src={imageUrl}
          cursor={"pointer"}
          onClick={() => navigate(`${Path.BLOG}/${title}`)}
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
          onClick={() => navigate(`${Path.BLOG}/${title}`)}
        >
          {title}
        </Text>
      </Stack>
    </Box>
  );
};
export default RecommendedTile;
