import { ScrollMotion } from "@/components/ScrollMotion";
import { SnapSection } from "@/components/SnapSection";
import { timings } from "@/config/animation";
import { CheckIcon } from "@/pages/images/icons";
import { OrangeRectangle } from "@/pages/images/OrangeRectangle";
import { Typography } from "@mui/material";
import { Box, Stack, styled } from "@mui/system";

const advantagesData = [
  {
    title: "Quality",
    description:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
  {
    title: "Communication",
    description:
      "Follow a hashtag growth total posts, videos and images.more revitions",
  },
  {
    title: "Reliability",
    description:
      "Follow a hashtag growth total posts, videos and images.more revitions",
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
          <Title>Why we best?</Title>
          <Description>
            Don’t waste time on search manual tasks. Let Automation do it for
            you. Simplify workflows, reduce errors, and save time.
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
