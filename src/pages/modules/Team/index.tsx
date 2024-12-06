import { ScrollMotion } from "@/components/ScrollMotion";
import { SnapSection } from "@/components/SnapSection";
import { timings } from "@/config/animation";
import { BlueRectangle } from "@/pages/images/BlueRectangle";
import { OrangeRectangle } from "@/pages/images/OrangeRectangle";
import { Container, styled, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const members = [
  {
    name: "Olena Kovalenko",
    role: "Founder & CEO",
    image:
      "https://media.canva.com/v2/image-resize/format:PNG/height:800/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2F3kINE%2FMAGU8q3kINE%2F1%2Fp.png/watermark:F/width:531?csig=AAAAAAAAAAAAAAAAAAAAAEDb1BceAUSuzV7jNLdYTmHGABVpRbkiYG__ibsM5kUE&exp=1733493261&osig=AAAAAAAAAAAAAAAAAAAAABgL1zQesSr_vnc2VXtpRwX758AnBncjmTdzo8LKbzcv&signer=media-rpc&x-canva-quality=screen",
  },
  {
    name: "Iryna Petrenko",
    role: "Lead Designer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
  {
    name: "Natalia Bondar",
    role: "Tech Lead",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8BiZ3kphdPkGK_NMTSQmKU1lV11Sl0-gmg&s",
  },
];

export const Team = () => {
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
          {members.map((member, index) => (
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
                  {index % 2 === 0 ? <BlueRectangle /> : <OrangeRectangle />}
                </ShapeWrapper>
              </Stack>
            </ScrollMotion>
          ))}
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
