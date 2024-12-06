import { ScrollMotion } from "@/components/ScrollMotion";
import { SnapSection } from "@/components/SnapSection";
import { timings } from "@/config/animation";
import { CheckIcon } from "@/pages/images/icons";
import { OrangeRectangle } from "@/pages/images/OrangeRectangle";
import { Typography } from "@mui/material";
import { Box, Stack, styled } from "@mui/system";

const advantagesData = [
  {
    title: "Comprehensive Learning",
    description:
      "Access detailed sewing guides, tutorials, and news about adaptive clothing creation, all in one centralized platform.",
  },
  {
    title: "Interactive Support",
    description:
      "Get help from our AI assistant and community of experienced sewists who specialize in adaptive clothing modifications.",
  },
  {
    title: "Up-to-date Resources",
    description:
      "Stay informed with the latest adaptive sewing techniques, material recommendations, and industry news through our regularly updated content.",
  },
];

export const Advantages = () => {
  return (
    <SnapSection>
      <Stack
        flexDirection="row"
        position="relative"
        mt="40px"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Stack position="relative">
          <img src="/laptop-mockup.png" alt="laptop-mockup" />

          <Box position="absolute" top={0} left="380px" zIndex={-1}>
            <OrangeRectangle />
          </Box>
        </Stack>
        <Stack maxWidth="637px" width="100%">
          <Title>Why Choose Our Platform?</Title>
          <Description>
            Our learning platform brings together everything you need to master
            adaptive clothing creation. From step-by-step sewing guides to
            expert advice and community support, we make learning accessible and
            effective.
          </Description>

          <Stack mt="60px" gap="30px">
            {advantagesData.map((item, index) => (
              <ScrollMotion key={index} delay={index * timings.stagger}>
                <Stack flexDirection="row" gap="20px">
                  <CheckIcon />
                  <Stack gap="8px">
                    <AdvantageTitle>{item.title}</AdvantageTitle>
                    <AdvantageDescription>
                      {item.description}
                    </AdvantageDescription>
                  </Stack>
                </Stack>
              </ScrollMotion>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </SnapSection>
  );
};

const Title = styled(Typography)({
  fontSize: "55px",
  lineHeight: "81px",
  fontWeight: 600,
});

const Description = styled(Typography)({
  fontSize: "24px",
  fontWeight: 400,
});

const AdvantageTitle = styled(Typography)({
  fontSize: "24px",
  fontWeight: 600,
});

const AdvantageDescription = styled(Typography)({
  fontSize: "20px",
  fontWeight: 400,
});
