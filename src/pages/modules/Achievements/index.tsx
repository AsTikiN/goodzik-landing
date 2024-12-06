import { Box, Container, Stack } from "@mui/system";
import { Achievement } from "./components/Achivement";
import { SnapSection } from "@/components/SnapSection";
import { decorativeShapes } from "./data/decorativeShapes";
import { styled } from "@mui/material";
import { floatAnimation } from "@/lib/floatAnimation";
import { ScrollMotion } from "@/components/ScrollMotion";
import { timings } from "@/config/animation";

export const Achievements = () => {
  const achievements = [
    {
      icon: "🎯",
      value: "100k+",
      title: "Achievements",
      description:
        "Clothing sewn and delivered to hospitals and military units",
    },
    {
      icon: "🌟",
      value: "700+",
      title: "Volunteers",
      description: "People around the glove contributing their time and skills",
    },
    {
      icon: "✂️",
      value: "10K",
      title: "Master classes",
      description: "Teaching volunteers to create adaptive clothing",
    },
    {
      icon: "✨",
      value: "1st",
      title: "Innovation",
      description: "First to create adaptive clothing for wounded veterans",
    },
  ];

  return (
    <SnapSection justifyContent="center" alignItems="center">
      <Container>
        <Stack
          flexDirection="row"
          gap="24px"
          mt="86px"
          maxWidth="800px"
          flexWrap="wrap"
          justifyContent="center"
          margin="0 auto"
          position="relative"
        >
          {achievements.map((achievement, index) => (
            <ScrollMotion key={index} delay={index * timings.stagger}>
              <Achievement
                icon={achievement.icon}
                value={achievement.value}
                title={achievement.title}
                description={achievement.description}
              />
            </ScrollMotion>
          ))}
          {decorativeShapes.map((shape) => (
            <DecorativeShape key={shape.Component.name} {...shape} zIndex={-1}>
              <shape.Component />
            </DecorativeShape>
          ))}
        </Stack>
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
