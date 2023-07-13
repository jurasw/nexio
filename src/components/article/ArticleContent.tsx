import { Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article } from "../../models/Article";
import moment from "moment";

const ArticleContent = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article>();
  const fetchData = async () => {
    const response = await axios.get(`/api/blogs/${id}?populate=*`);
    setArticle(response.data.data.attributes);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (article)
    return (
      <section style={{ padding: "12%", fontFamily: "Red Hat Display" }}>
        <Text
          color="#7A7A7A"
          fontWeight={500}
          fontSize={"10px"}
          mb={4}
          display={"flex"}
        >
          <Image src="/icons/calendar.svg" mr={2} />
          {moment(article.publishedAt).format("DD MMMM YYYY")}
        </Text>
        <Text fontWeight={500} fontSize={["30px", "45px"]} mb={8}>
          {article.title}
        </Text>
        <Text fontWeight={500} fontSize={"20px"} mb={8}>
          {article.description}
        </Text>
        <Image src={article.imageMain.data.attributes.url} mb={8} w={"100%"} />
        <Text
          fontSize={"26px"}
          color="#313131"
          fontWeight={500}
          lineHeight={"32px"}
          mb={8}
        >
          {article.header1}
        </Text>
        <Text fontSize={"18px"} color="#313131" fontWeight={500} mb={8}>
          {article.text1}
        </Text>
        <Text
          fontSize={"26px"}
          color="#313131"
          fontWeight={500}
          lineHeight={"32px"}
          mb={8}
        >
          {article.header2}
        </Text>
        <Text
          fontSize={"18px"}
          color="#313131"
          fontWeight={400}
          lineHeight={"32px"}
          mb={8}
        >
          {article.text2}
        </Text>
        <Text
          fontSize={"26px"}
          color="#313131"
          fontWeight={500}
          lineHeight={"32px"}
          mb={8}
        >
          {article.header3}
        </Text>
        <Text
          fontSize={"18px"}
          color="#313131"
          fontWeight={400}
          lineHeight={"32px"}
          mb={8}
        >
          {article.text3}
        </Text>
        <Text
          fontSize={"26px"}
          color="#313131"
          fontWeight={500}
          lineHeight={"32px"}
          mb={8}
        >
          {article.header4}
        </Text>
        <Text
          fontSize={"18px"}
          color="#313131"
          fontWeight={400}
          lineHeight={"32px"}
          mb={8}
        >
          {article.text4}
        </Text>
      </section>
    );
  return null;
};
export default ArticleContent;
