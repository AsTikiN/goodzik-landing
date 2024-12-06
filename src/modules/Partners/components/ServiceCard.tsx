import { styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>

      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled(Stack)`
  width: 263px;
  height: 234px;
  border-radius: 20px;
  background: #fff;
  padding: 28px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05);
`;

const Icon = styled(Stack)`
  width: 54px;
  height: 54px;
`;

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
`;

const Description = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
  line-height: 33px;
  margin-top: 3px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  &::after {
    content: "...";
  }
`;
