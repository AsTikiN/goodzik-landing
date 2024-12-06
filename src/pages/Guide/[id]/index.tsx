import { Header } from "@/modules/Header";
import { Stack, Typography } from "@mui/material";
import { Container, styled } from "@mui/system";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Guide({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { id } = useParams();
  const [step, setStep] = useState(1);

  const { data: stepContent } = useQuery({
    queryKey: ["step-content"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/guide-steps/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    enabled: !!repo?.id,
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  console.log(stepContent, "stepContent");

  return (
    <Container>
      <Header />
      <Title mt="160px">{repo.title}</Title>
      <Stack
        width="100%"
        height="100%"
        mt="20px"
        borderRadius="20px"
        overflow="hidden"
      >
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/nM9kBAo9Ad8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Stack>

      <Subtitle mt="20px">Examples</Subtitle>
      <Stack></Stack>

      <Stack mt="20px">
        <Subtitle>Details</Subtitle>
        <Description>
          Кіберхуді - одяг який дуже допомагає одужувати нашим хлопцям. Бо, якщо
          у пораненого нема одягу, в якому можна вийти на свіже повітря, то і
          одужання буде йти довше та важче.  Весна - сезон худі. В "Швейній
          роті" - кіберхуді.  Весна - сезон худі. В "Швейній роті" - кіберхуді.
          Кіберхуді - одяг який дуже допомагає одужувати нашим хлопцям. Бо, якщо
          у пораненого нема одягу, в Кіберхуді - одяг який дуже допомагає
          одужувати нашим хлопцям. Бо, якщо у пораненого нема одягу, в якому
          можна вийти на свіже по
        </Description>
      </Stack>

      <Stack mt="20px">
        <Subtitle>Author</Subtitle>
        <Description>Ґудзик</Description>
      </Stack>

      <Stack mt="20px" gap="12px">
        <Subtitle>Comments</Subtitle>
        <Stack gap="12px" alignItems="flex-start">
          <Stack
            bgcolor="#18181C"
            borderRadius="20px"
            p="12px"
            justifyContent="space-between"
            color="#fff"
          >
            <Typography>Where were you thinking of going?</Typography>
            <Typography color="#707388">12.06.2024</Typography>
          </Stack>
        </Stack>

        <Stack gap="12px" alignItems="flex-start">
          <Stack
            bgcolor="#18181C"
            borderRadius="20px"
            p="12px"
            justifyContent="space-between"
            color="#fff"
          >
            <Typography>
              test comment with some random additional test text
            </Typography>
            <Typography color="#707388">12.06.2024</Typography>
          </Stack>
        </Stack>

        <Stack gap="12px" alignItems="flex-start" pb="20px">
          <Stack
            bgcolor="#18181C"
            borderRadius="20px"
            p="12px"
            justifyContent="space-between"
            color="#fff"
          >
            <Typography>Where were you thinking of going?</Typography>
            <Typography color="#707388">12.06.2024</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

const Title = styled(Typography)`
  font-size: 32px;
  font-weight: 600;
`;

const Subtitle = styled(Typography)`
  font-size: 24px;
  font-weight: 500;
`;

const Description = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  color: #7d82a1;
`;

type Repo = {
  title: string;
  stargazers_count: number;
  id: string;
};

export const getServerSideProps = (async (context) => {
  const { id } = context.params as { id: string };

  try {
    const NEXT_PUBLIC_API_URL = "https://goodzik-api.eventbook.pp.ua";
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/guides/${id}`);
    const text = await res.text();
    const repo: Repo = JSON.parse(text);
    return { props: { repo } };
  } catch (error) {
    console.error("Error fetching guide:", error);
    return {
      notFound: true,
    };
  }
}) satisfies GetServerSideProps<{ repo: Repo }>;
