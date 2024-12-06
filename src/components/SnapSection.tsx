import { styled } from "@mui/material";
import { Stack } from "@mui/system";

export const SnapSection = styled(Stack)`
  min-height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
