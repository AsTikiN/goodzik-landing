import { Box, Container, Stack } from "@mui/system";
import { styled, Typography } from "@mui/material";
import { ServiceCard } from "./components/ServiceCard";
import {
  AiAssistantIcon,
  GuideIcon,
  NewsIcon,
  OpenApiIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "../../images/icons";
import { BlueRectangle } from "@/pages/images/BlueRectangle";
import { SnapSection } from "@/components/SnapSection";
import { ScrollMotion } from "@/components/ScrollMotion";
import { timings } from "@/config/animation";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";

const services = [
  {
    title: "SoftServe",
    description: "Top Ukrainian IT services company",
    icon: <ShoppingBagIcon />,
  },
  {
    title: "Rozetka",
    description: "Ukraine's biggest online retail marketplace",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "Nova Poshta",
    description: "Major Ukrainian postal delivery service",
    icon: <ShoppingBagIcon />,
  },
  {
    title: "Monobank",
    description: "Popular mobile banking in Ukraine",
    icon: <OpenApiIcon />,
  },
  {
    title: "Grammarly",
    description: "AI writing assistant from Ukraine",
    icon: <AiAssistantIcon />,
  },
  {
    title: "Genesis",
    description: "Ukrainian tech product development leader",
    icon: <GuideIcon />,
  },
  {
    title: "EPAM Ukraine",
    description: "Global software engineering solutions provider",
    icon: <OpenApiIcon />,
  },
  {
    title: "Intellias",
    description: "Tech consulting and software experts",
    icon: <AiAssistantIcon />,
  },
  {
    title: "GlobalLogic",
    description: "Digital engineering solutions and consulting",
    icon: <GuideIcon />,
  },
  {
    title: "Sigma Software",
    description: "IT services and tech solutions",
    icon: <OpenApiIcon />,
  },
  {
    title: "N-iX",
    description: "Eastern European software development company",
    icon: <NewsIcon />,
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Partners = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

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
          position="relative"
        >
          <AutoPlaySwipeableViews
            axis="x"
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{ position: "relative" }}
          >
            {Array.from({ length: Math.ceil(services.length / 4) }).map(
              (_, viewIndex) => (
                <>
                  <Stack
                    key={viewIndex}
                    direction="row"
                    flexWrap="wrap"
                    gap="24px"
                    p="20px"
                  >
                    {services
                      .slice(viewIndex * 4, (viewIndex + 1) * 4)
                      .map((service, index) => (
                        <ScrollMotion
                          key={index}
                          delay={index * timings.stagger}
                        >
                          <ServiceCard
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                          />
                        </ScrollMotion>
                      ))}
                  </Stack>
                </>
              )
            )}
          </AutoPlaySwipeableViews>
          <ShapeWrapper>
            <BlueRectangle />
          </ShapeWrapper>

          <Stack maxWidth="500px" gap="20px">
            <Title>Our partners</Title>
            <Description>
              We are proud to collaborate with leading organizations including
              Military Medical Clinical Center of Western Region, Lviv Military
              Hospital, Come Back Alive Foundation, and numerous rehabilitation
              centers across Ukraine. Together, we ensure that our adaptive
              clothing reaches those who need it most.
            </Description>
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
  top: 0px;
  z-index: -1;
`;
