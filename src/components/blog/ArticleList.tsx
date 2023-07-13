import {
  Grid,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Title from "../PageTitle";
import ArticleTile from "./ArticleTile";
import { SearchIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { BlogTile } from "../../models/Article";
import moment from "moment";

const Blog = () => {
  const { t } = useTranslation();
  const [articleList, setArticleList] = useState<BlogTile[]>();
  const [query, setQuery] = useState("");
  const fetchData = async () => {
    const response = await axios.get(`/api/blogs?populate=*`);
    setArticleList(response.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleQuery = async (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
    const response = await axios.get(
      `/api/blogs?populate=*&filters[title][$containsi]=${event.target.value}`
    );
    setArticleList(response.data.data);
  };

  return (
    <section style={{ padding: "10%" }}>
      <Title title="blog" />
      <HStack mb={5}>
        <Heading
          fontSize={"40px"}
          fontWeight={500}
          fontFamily={"Red Hat Display"}
        >
          <Text
            as={"span"}
            bgGradient="linear(to-l,#F19E38, #000000)"
            bgClip="text"
          >
            {t("news")}
          </Text>
        </Heading>
        <Spacer />
        <InputGroup maxW={"40%"}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder={t("search") || "search"}
            onChange={handleQuery}
            value={query}
          />
        </InputGroup>
      </HStack>
      <HStack gap={4} mb={16}>
        <ArticleTile
          id={5}
          imageUrl={"/batest2.png"}
          date={"24 Kwietnia 2023"}
          title={"Facylitacja, czyli jak poradzić sobie ze spotkaniami"}
          text={
            "Żyjemy w świecie spotkań, warsztatów, szkoleń. Część z nich prowadzimy my, na większość jesteśmy zapraszani, czasami z jakimś konkretnym zadaniem,..."
          }
        />
        <ArticleTile
          id={4}
          imageUrl={"/batest1.png"}
          date={"24 Kwietnia 2023"}
          title={"Facylitacja, czyli jak poradzić sobie ze spotkaniami"}
          text={
            "Żyjemy w świecie spotkań, warsztatów, szkoleń. Część z nich prowadzimy my, na większość jesteśmy zapraszani, czasami z jakimś konkretnym zadaniem,..."
          }
        />
      </HStack>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {articleList?.map((article) => (
          <ArticleTile
            id={article.id}
            imageUrl={article.attributes.imageMain.data.attributes.url}
            date={moment(article.attributes.publishedAt).format("DD MMMM YYYY")}
            title={article.attributes.title}
            text={article.attributes.description}
          />
        ))}
      </Grid>
    </section>
  );
};
export default Blog;
