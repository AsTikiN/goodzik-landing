import { alpha, Card, Stack, styled, Typography } from "@mui/material";
import { NewsDto } from "../../types/NewsDto";
import { NewsIcon } from "@/pages/images/icons";

export interface NewsCardProps {
  data: NewsDto;
}

export const NewsCard = ({ data }: NewsCardProps) => {
  return (
    <NewsCard.Wrapper variant="outlined">
      <NewsCard.Header>
        <NewsCard.IconWrapper>
          <NewsIcon />
        </NewsCard.IconWrapper>
        <Stack>
          <NewsCard.Title variant="h6" fontWeight={600}>
            {data.title}
          </NewsCard.Title>
          <Typography variant="caption">
            {Intl.DateTimeFormat().format(new Date(data.date))}
          </Typography>
        </Stack>
      </NewsCard.Header>

      <NewsCard.Description variant="body1" color="textSecondary">
        {data.description}
      </NewsCard.Description>
    </NewsCard.Wrapper>
  );
};

NewsCard.IconWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 3.5rem;
  min-height: 3.5rem;
  color: ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => alpha(theme.palette.secondary.main, 0.15)};
  border-radius: ${({ theme }) => theme.shape.borderRadius * 2}px;
`;

NewsCard.Title = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

NewsCard.Description = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

NewsCard.Header = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

NewsCard.Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => `${theme.shape.borderRadius * 2}px`};
  padding: ${({ theme }) => theme.spacing(2)};
  gap: ${({ theme }) => theme.spacing(2)};
`;
