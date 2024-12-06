import { Box, Container, styled, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import { decorativeShapes } from "./data/decorativeShapes";
import { floatAnimation } from "../../../lib/floatAnimation";
import { SnapSection } from "@/components/SnapSection";
import { ScrollMotion } from "@/components/ScrollMotion";
import { timings } from "@/config/animation";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const AppPreview = () => {
  const [activeStep, setActiveStep] = useState(0);
  const screens = [
    { src: "/news-screen.png", alt: "news-preview" },
    { src: "/guides-screen.png", alt: "guides-preview" },
    { src: "/profile-screen.png", alt: "profile-preview" },
    { src: "/donate-screen.png", alt: "donate-preview" },
  ];

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <SnapSection>
      <Container>
        <Stack mt="88px" mb="200px" alignItems="center">
          <Stack mt="88px" position="relative">
            <AutoPlaySwipeableViews
              axis="x"
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              style={{ position: "relative" }}
            >
              {Array.from({ length: Math.ceil(screens.length / 2) }).map(
                (_, viewIndex) => (
                  <Stack
                    key={viewIndex}
                    direction="row"
                    gap="50px"
                    justifyContent="center"
                    position="relative"
                  >
                    {screens
                      .slice(viewIndex * 2, (viewIndex + 1) * 2)
                      .map((screen, index) => (
                        <ScrollMotion
                          key={index}
                          delay={index * timings.stagger}
                        >
                          <img src={screen.src} alt={screen.alt} />
                        </ScrollMotion>
                      ))}
                  </Stack>
                )
              )}
            </AutoPlaySwipeableViews>
            {decorativeShapes.map(({ Component, ...props }, index) => (
              <DecorativeShape key={index} {...props}>
                <Component />
              </DecorativeShape>
            ))}
          </Stack>
        </Stack>
        <Divider />
      </Container>
    </SnapSection>
  );
};

const DecorativeShape = styled(Box)<{
  left?: string;
  top?: string;
  direction: "horizontal" | "vertical";
  duration?: number;
  distance?: number;
}>`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  animation: ${(props) => floatAnimation(props.direction, props.distance)}
    ${(props) => props.duration || 3}s ease-in-out infinite;
  ${({ left }) => left && `left: ${left}`};
  ${({ top }) => top && `top: ${top}`};
`;
