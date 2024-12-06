import { useRouter } from "next/router";
import { Card, styled, Typography } from "@mui/material";
import { GuideDto } from "../../types/GuideDto";

export interface GuideCardProps {
  data: GuideDto;
}

export const GuideCard = ({ data }: GuideCardProps) => {
  const router = useRouter();

  return (
    <GuideCard.Wrapper
      variant="outlined"
      onClick={() => router.push(`/guide/${data.id}`)}
    >
      <GuideCard.Header>
        <GuideCard.Title variant="h6" fontWeight={600}>
          {data.title}
        </GuideCard.Title>
        <Typography variant="caption">
          {Intl.DateTimeFormat().format(new Date(data.date))}
        </Typography>
      </GuideCard.Header>
      <Typography variant="body1" color="textSecondary">
        {data.description}
      </Typography>
    </GuideCard.Wrapper>
  );
};

GuideCard.Title = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

GuideCard.Description = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

GuideCard.Header = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

GuideCard.Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => `${theme.shape.borderRadius * 2}px`};
  padding: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
