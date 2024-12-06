import { Button } from "@/components/Button";
import { SnapSection } from "@/components/SnapSection";
import { BlueShape } from "@/pages/images/BlueShape";
import { GreenShape } from "@/pages/images/GreenShape";
import { LargeElipse } from "@/pages/images/LargeElipse";
import { OrangeRectangle } from "@/pages/images/OrangeRectangle";
import { OrangeShape } from "@/pages/images/OrangeShape";
import { SmallElipse } from "@/pages/images/SmallCircle";
import { SmallGreenElipse } from "@/pages/images/SmallGreenCircle";

import { Container, styled, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { decorativeShapes } from "./data/decorativeShapes";
import { floatAnimation } from "@/lib/floatAnimation";
import { ScrollMotion } from "@/components/ScrollMotion";
import { timings } from "@/config/animation";
import { useRouter } from "next/router";

export const Slogan = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/guides");
  };

  return (
    <SnapSection justifyContent="center" id="home">
      <Container>
        <Stack mt="88px" mb="200px" alignItems="center" position="relative">
          <ScrollMotion>
            <Title>Restoring dignity, stitch by stitch</Title>
          </ScrollMotion>
          <ScrollMotion>
            <Subtitle>
              "Sewing Platoon" creates adaptive clothing for wounded heroes,
              uniting thousands of hands to support Ukraine.
            </Subtitle>
          </ScrollMotion>

          <Stack flexDirection="row" gap="12px" mt="38px">
            <ScrollMotion delay={timings.stagger}>
              <Button size="large" onClick={handleNavigate}>
                Get Started
              </Button>
            </ScrollMotion>
            <ScrollMotion delay={timings.stagger * 2}>
              <Button
                variant="outlined"
                size="large"
                href="https://goodzik-api.eventbook.pp.ua/docs#/"
              >
                API
              </Button>
            </ScrollMotion>
          </Stack>

          {decorativeShapes.map((shape) => (
            <DecorativeShape
              key={shape.Component.name}
              position="absolute"
              {...shape}
              zIndex={-1}
            >
              <shape.Component />
            </DecorativeShape>
          ))}
        </Stack>
      </Container>
    </SnapSection>
  );
};

const Title = styled(Typography)`
  font-size: 72px;
  font-weight: 600;
  line-height: 133%;
  text-align: center;
  max-width: 800px;
`;

const Subtitle = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
  line-height: 33px;
  text-align: center;
  max-width: 800px;
`;

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
