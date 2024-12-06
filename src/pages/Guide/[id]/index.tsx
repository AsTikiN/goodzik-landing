import { GuideDtoDetails } from "@/modules/Guides/types/GuideDetailsDto";
import { Header } from "@/modules/Header";
import { Stack, Typography } from "@mui/material";
import { Container, styled } from "@mui/system";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import NextImage from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Guide({
  guide,
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
    enabled: !!guide?.id,
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  console.log(guide);
  console.log(stepContent, "stepContent");

  return (
    <Container>
      <Header />
      <Title mt="160px">{guide.title}</Title>
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
          src={guide.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Stack>
      {/* 
      <Subtitle mt="20px">Examples</Subtitle>
      <Stack>
        <ImageGrid>
          {guide.schemas.map((schema) => (
            <Image
              key={schema}
              src={schema}
              alt="schema"
              width={100}
              height={100}
            />
          ))}
        </ImageGrid>
      </Stack> */}

      <Stack mt="20px">
        <Subtitle>Details</Subtitle>
        <Description>{guide.description}</Description>
      </Stack>

      <Stack mt="20px">
        <Subtitle>Author</Subtitle>
        <Description>
          <b>{guide.author.userName}</b> {guide.author.email}
        </Description>
      </Stack>

      <Stack mt="20px" gap="12px">
        <Subtitle>Comments</Subtitle>
        {guide.comments.map((comment) => (
          <Stack key={comment.id} gap="12px" alignItems="flex-start">
            <Stack
              bgcolor="#18181C"
              borderRadius="20px"
              p="12px"
              justifyContent="space-between"
              color="#fff"
            >
              <Typography>{comment.text}</Typography>
              <Typography color="#707388">{comment.author}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}

const ImageGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`;

const Image = styled(NextImage)`
  border-radius: 10px;
  object-fit: cover;
`;

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

export const getServerSideProps = (async (context) => {
  const { id } = context.params as { id: string };

  try {
    const NEXT_PUBLIC_API_URL = "http://localhost:3000";

    const guideResponse = await fetch(`${NEXT_PUBLIC_API_URL}/guides/${id}`);
    const guide = (await guideResponse.json()) as GuideDtoDetails;

    console.log(guide, "guide");

    return { props: { guide } };
  } catch (error) {
    console.error("Error fetching guide:", error);
    return {
      notFound: true,
    };
  }
}) satisfies GetServerSideProps<{ guide: GuideDtoDetails }>;
