import { styled, Typography } from "@mui/material";
import { NewsDto } from "../../types/NewsDto";
import { NewsCard } from "../NewsCard";

export interface NewsSectionProps {
  news: NewsDto[];
}

export const NewsSection = ({ news }: NewsSectionProps) => {
  return (
    <NewsSection.Wrapper>
      <Typography variant="h4" fontWeight={600}>
        News
      </Typography>
      <NewsSection.Grid>
        {news.map((news) => (
          <NewsCard key={news.id} data={news} />
        ))}
      </NewsSection.Grid>
    </NewsSection.Wrapper>
  );
};

NewsSection.Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

NewsSection.Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
