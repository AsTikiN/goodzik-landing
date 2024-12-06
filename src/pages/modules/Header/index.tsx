import { Navigation } from "./components/Navigation";
import { Box, Container, Stack } from "@mui/system";
import { Logo } from "./components/Logo";
import { Button } from "@/components/Button";

export const Header = () => {
  return (
    <Box
      position="fixed"
      width="100%"
      zIndex={1000}
      bgcolor="white"
      borderBottom="1px solid #E0E0E0"
      padding="24px 0"
      left={0}
      right={0}
      top={0}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />
          <Navigation />
          <Button>Download</Button>
        </Stack>
      </Container>
    </Box>
  );
};
