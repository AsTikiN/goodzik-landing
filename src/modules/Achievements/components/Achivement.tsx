import { styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";

interface AchievementProps {
  icon: React.ReactNode;
  value: string | number;
  title: string;
  description: string;
}

export const Achievement = ({
  icon,
  value,
  title,
  description,
}: AchievementProps) => {
  return (
    <Stack alignItems="center" maxWidth="300px">
      <Icon>{icon}</Icon>
      <Value mt="10px">{value}</Value>
      <Title mt="20px">{title}</Title>
      <Description>{description}</Description>
    </Stack>
  );
};

const Icon = styled(Stack)`
  width: 54px;
  height: 54px;
  border-radius: 12px;
  border: 1px solid rgba(128, 135, 137, 0.35);
  justify-content: center;
  align-items: center;
`;

const Value = styled(Typography)`
  font-size: 65px;
  font-weight: 600;
  line-height: 81px;
  text-align: center;
`;

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
  line-height: 42px;
  text-align: center;
`;

const Description = styled(Typography)`
  color: #7d82a1;
  font-size: 18px;
  font-weight: 500;
  line-height: 33px;
  text-align: center;
`;
