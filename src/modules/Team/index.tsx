import { ScrollMotion } from "@/components/ScrollMotion";
import { SnapSection } from "@/components/SnapSection";
import { timings } from "@/config/animation";
import { BlueRectangle } from "@/images/BlueRectangle";
import { OrangeRectangle } from "@/images/OrangeRectangle";
import { Container, styled, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const members = [
  {
    name: "Maryna Palchenko",
    role: "Founder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Kseniia Samoilych",
    role: "Project Lead",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Tetiana Petrenko",
    role: "Slobozhanske Coordinator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Iryna Bohdanova",
    role: "Lead Seamstress, Kyiv",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Sasha Holenko",
    role: "Poltava Coordinator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Elvira Hontar",
    role: "Poltava Coordinator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Vadym Minenko",
    role: "Director",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Iryna Synyshyn",
    role: "Ternopil Coordinator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Svitlana Boiko",
    role: "Lead Seamstress, Odesa",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Tetiana Markevych",
    role: "Rivne Coordinator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Yuliia Hnatiuk",
    role: "Vinnytsia Coordinator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Olha Ruchyi",
    role: "Petropavlivka Coordinator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Ruslana Prach",
    role: "Pixel Fairies Lead",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Vira Puzii",
    role: "Kyiv Coordinator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Anastasiia Chebotarova",
    role: "Kyiv Coordinator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Nataliia Bezvushko",
    role: "Kyiv Coordinator",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Team = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <SnapSection justifyContent="center">
      <Container>
        <Title>Our Team</Title>
        <Description>
          Meet the dedicated professionals behind our mission to create adaptive
          clothing solutions. Our team combines expertise in fashion design,
          accessibility, and technology to serve those in need.
        </Description>
        <Stack
          height="400px"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
          mt="90px"
        >
          <AutoPlaySwipeableViews
            axis="x"
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{ position: "relative" }}
          >
            {Array.from({ length: Math.ceil(members.length / 3) }).map(
              (_, viewIndex) => (
                <Stack
                  key={viewIndex}
                  direction="row"
                  gap="100px"
                  p="20px"
                  sx={{ padding: "20px" }}
                  borderRadius="20px"
                  overflow="hidden"
                >
                  {members
                    .slice(viewIndex * 3, (viewIndex + 1) * 3)
                    .map((member, index) => (
                      <ScrollMotion key={index} delay={index * timings.stagger}>
                        <Stack
                          position="relative"
                          bgcolor="white"
                          borderRadius="20px"
                          boxShadow="0px 10px 30px 0px rgba(0, 0, 0, 0.05)"
                          padding="20px"
                          gap="20px"
                        >
                          <Image src={member.image} alt={member.name} />
                          <Stack gap="4px">
                            <MemberTitle>{member.name}</MemberTitle>
                            <MemberRole>{member.role}</MemberRole>
                          </Stack>
                          <ShapeWrapper>
                            {index % 2 === 0 ? (
                              <BlueRectangle />
                            ) : (
                              <OrangeRectangle />
                            )}
                          </ShapeWrapper>
                        </Stack>
                      </ScrollMotion>
                    ))}
                </Stack>
              )
            )}
          </AutoPlaySwipeableViews>
        </Stack>
      </Container>
    </SnapSection>
  );
};

const MemberTitle = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
});

const MemberRole = styled(Typography)({
  fontSize: "16px",
  color: "#666",
});

const ShapeWrapper = styled(Box)`
  position: absolute;
  left: 0;
  top: -50px;
  width: 400px;
  height: 400px;

  svg {
    width: 100%;
    height: 100%;
  }
  z-index: -1;
`;

const Image = styled("img")({
  width: "248px",
  height: "248px",
  objectFit: "cover",
  objectPosition: "bottom",
});

const Title = styled(Typography)({
  fontSize: "55px",
  lineHeight: "81px",
  fontWeight: 600,
});

const Description = styled(Typography)({
  fontSize: "18px",
  lineHeight: "33px",
  fontWeight: 500,
  color: "#7d82a1",
  maxWidth: "550px",
});
