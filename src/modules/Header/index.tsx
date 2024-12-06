import { Box, Container, Stack } from "@mui/system";
import { Logo } from "./components/Logo";
import { Button } from "@/components/Button";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      position="fixed"
      width="100%"
      zIndex={1000}
      bgcolor="white"
      borderBottom="1px solid #E0E0E0"
      padding="24px 0"
      left="0"
      top="0"
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />
          {/* <Navigation /> */}
          <Button onClick={() => setOpen(true)}>Download App</Button>
        </Stack>
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Application not published yet!
        </Alert>
      </Snackbar>
    </Box>
  );
};
