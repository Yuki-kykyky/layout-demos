import { Container, Box, Stack } from "@mui/material";
import React from "react";
import Title from "@/app/common/ui/title";
import Description from "@/app/common/ui/description";
import TextInput from "@/app/common/ui/text-input";
import InputButton from "@/app/common/ui/input-button";

export default function EmailConnectV3() {
  return (
    <Container maxWidth="lg">
      <Box
        data-layer="v3-email-connect-section"
        sx={{
          border: "1px solid black",
          bgcolor: "white",
          py: 8,
          px: 4,
        }}
      >
        <Stack spacing={4} alignItems="center">
          <Title>
            Get Your Travel Inspiration
            <br />
            Straight to Your Inbox
          </Title>

          <Stack spacing={2} alignItems="center">
            <Stack direction="row" spacing={2}>
              <TextInput placeholder="Enter your email" />
              <InputButton buttonText="SUBSCRIBE" />
            </Stack>

            <Description description="By subscribing you agree to our Privacy Policy. Check your inbox for the latest updates." />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
