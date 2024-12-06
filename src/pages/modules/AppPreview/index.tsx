import { Button } from "@/components/Button";

import { Box, Container, styled, Typography, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import { decorativeShapes } from "./data/decorativeShapes";
import { floatAnimation } from "../../../lib/floatAnimation";
import { SnapSection } from "@/components/SnapSection";
import { ScrollMotion } from "@/components/ScrollMotion";
import { timings } from "@/config/animation";

export const AppPreview = () => {
  return (
    <SnapSection>
      <Container>
        <Stack mt="88px" mb="200px" alignItems="center">
          <Stack mt="88px" flexDirection="row" gap="50px" position="relative">
            <ScrollMotion>
              <img src="/news.png" alt="news-preview" />
            </ScrollMotion>
            <ScrollMotion delay={timings.stagger}>
              <img src="/guides.png" alt="guides-preview" />
            </ScrollMotion>
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
