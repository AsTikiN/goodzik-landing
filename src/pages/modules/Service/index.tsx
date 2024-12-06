import { Box, Container, Stack } from "@mui/system";
import { styled, Typography } from "@mui/material";
import { ServiceCard } from "./components/ServiceCard";
import {
  AiAssistantIcon,
  GuideIcon,
  NewsIcon,
  OpenApiIcon,
} from "../../images/icons";
import { BlueRectangle } from "@/pages/images/BlueRectangle";
import { SnapSection } from "@/components/SnapSection";
import { ScrollMotion } from "@/components/ScrollMotion";
import { timings } from "@/config/animation";

const services = [
  {
    title: "News",
    description: "Sharing all actual info related to our topic",
    icon: <NewsIcon />,
  },
  {
    title: "Guides",
    description: "Step-by-step instructions for sewing clothing",
    icon: <GuideIcon />,
  },
  {
    title: "Ai assistant",
    description: "Streamlines tasks with intelligent support",
    icon: <AiAssistantIcon />,
  },
  {
    title: "Open Api",
    description: "Enables seamless integration and flexibility",
    icon: <OpenApiIcon />,
  },
];

export const Service = () => {
  return (
    <SnapSection>
      <Container>
        <Stack
          flex="1"
          flexDirection="row"
          alignItems="center"
          gap="67px"
          padding="75px 0"
          mt="300px"
        >
          <Stack maxWidth="500px" gap="20px">
            <Title>We provide that service.</Title>
            <Description>
              We provide comprehensive adaptive clothing sewing guides, offering
              step-by-step instructions, helpful tips, and expert support to
              create functional, comfortable garments for those in need,
              ensuring quality and precision in every stitch
            </Description>
          </Stack>

          <Stack
            maxWidth="700px"
            direction="row"
            flexWrap="wrap"
            gap="24px"
            position="relative"
          >
            {services.map((service, index) => (
              <ScrollMotion key={index} delay={index * timings.stagger}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </ScrollMotion>
            ))}
            <ShapeWrapper>
              <BlueRectangle />
            </ShapeWrapper>
          </Stack>
        </Stack>
      </Container>
    </SnapSection>
  );
};

const Title = styled(Typography)`
  font-size: 48px;
  font-weight: 600;
`;

const Description = styled(Typography)`
  font-size: 18px;
  line-height: 33px;
  font-weight: 500;
  color: #7d82a1;
`;

const ShapeWrapper = styled(Box)`
  position: absolute;
  left: 75px;
  top: -75px;
  z-index: -1;
`;
