import { SnapSection } from "@/components/SnapSection";
import { Box, Container, Stack } from "@mui/system";
import QRCode from "react-qr-code";
import { styled, Typography } from "@mui/material";
import { floatAnimation } from "@/lib/floatAnimation";
import { decorativeShapes } from "./data/decorativeShapes";

export const Donate = () => {
  const qrLink = "https://send.monobank.ua/jar/5VV7zhDJGY";
  const paypalLink =
    "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&bn=AngellEYE_PHPClass&business=marishka.polo@gmail.com";

  return (
    <SnapSection id="support">
      <Stack justifyContent="center" alignItems="center" height="100%">
        <Container>
          <Stack
            direction="row"
            spacing="60px"
            alignItems="center"
            position="relative"
          >
            <Stack alignItems="center" spacing={2}>
              <Typography variant="h5" fontSize="48px" fontWeight={600}>
                Monobank
              </Typography>
              <QRCode
                value={qrLink}
                size={512}
                level="H"
                onClick={() => window.open(qrLink, "_blank")}
                style={{ cursor: "pointer" }}
              />
              <Typography>Scan or click to support via Monobank</Typography>
            </Stack>
            <Stack alignItems="center" spacing={2}>
              <Typography variant="h5" fontSize="48px" fontWeight={600}>
                PayPal
              </Typography>
              <QRCode
                value={paypalLink}
                size={512}
                level="H"
                onClick={() => window.open(paypalLink, "_blank")}
                style={{ cursor: "pointer" }}
              />
              <Typography>Scan or click to support via PayPal</Typography>
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
      </Stack>
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
