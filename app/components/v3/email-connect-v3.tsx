import { Container, Box, Stack } from "@mui/material";
import React from "react";
import { BaseTextInput } from "@/app/common/ui/text-input";
import {
  EmphasizedDescription,
  BaseDescription,
} from "@/app/common/ui/descriptions";
import { InputButton } from "@/app/common/ui/buttons";

export default function EmailConnectV3() {
  return (
    <Container maxWidth="lg">
      <Box
        data-layer="v3-email-connect-section"
        sx={{
          bgcolor: "grey.200",
          py: 8,
          px: 4,
        }}
      >
        <Stack spacing={4} alignItems="center">
          <EmphasizedDescription>
            Get Your Travel Inspiration
            <br />
            Straight to Your Inbox
          </EmphasizedDescription>

          <Stack direction="row" spacing={2}>
            <BaseTextInput placeholder="Enter your email" />
            <InputButton buttonText="SUBSCRIBE" />
          </Stack>

          <BaseDescription description="By subscribing you agree to our Privacy Policy. Check your inbox for the latest updates." />
        </Stack>
      </Box>
    </Container>
  );
}
