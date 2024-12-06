import { Stack, styled } from "@mui/material";
import { Box } from "@mui/system";

export const Logo = () => {
  return (
    <Stack direction="row" alignItems="center" gap="20px">
      <img src="/logo.png" alt="logo" />
      <StyledTypography>Goodzik</StyledTypography>
    </Stack>
  );
};

const StyledTypography = styled(Box)`
  font-size: 44px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
`;
