export interface Article {
  publishedAt: string;
  title: string;
  description: string;
  header1: string;
  text1: string;
  header2: string;
  text2: string;
  header3: string;
  text3: string;
  header4: string;
  text4: string;
  imageMain: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    };
  };
}

export interface BlogTile {
  id: number;
  attributes: Article;
}
;
