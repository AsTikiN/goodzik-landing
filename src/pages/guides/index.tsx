import { Container, Stack, styled } from "@mui/material";
import { Header } from "../../modules/Header";
import { GuideDto } from "../../modules/Guides/types/GuideDto";
import { GuidesSection } from "../../modules/Guides/components/GuidesSection";
import { NewsSection } from "../../modules/Guides/components/NewsSection";
import { NewsDto } from "../../modules/Guides/types/NewsDto";

export interface GuidesProps {
  guides: GuideDto[];
  news: NewsDto[];
}

export const Guides = ({ guides, news }: GuidesProps) => {
  return (
    <Container>
      <Header />
      <Stack pt="10rem" spacing={4}>
        <GuidesSection guides={guides} />
        <NewsSection news={news} />
      </Stack>
    </Container>
  );
};

export const getStaticProps = async () => {
  const NEXT_PUBLIC_API_URL = "https://goodzik-api.eventbook.pp.ua";
  const guidesResponse = await fetch(`${NEXT_PUBLIC_API_URL}/guides`);

  if (!guidesResponse.ok) throw new Error("Failed to fetch guides");

  const newsResponse = await fetch(`${NEXT_PUBLIC_API_URL}/news`);

  if (!newsResponse.ok) throw new Error("Failed to fetch news");

  const guides = await guidesResponse.json();
  const news = await newsResponse.json();

  return { props: { guides, news: news.news } };
};

export default Guides;
