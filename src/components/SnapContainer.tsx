import { styled } from "@mui/material";
import { Stack } from "@mui/system";

export const SnapContainer = styled(Stack)`
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: 100vh;
`;
