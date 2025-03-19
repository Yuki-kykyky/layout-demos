import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { SharedLayout } from "@/app/components/shared-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Layout demos",
  description: "Contact | Layout demos",
};

export default function ContactPage() {
  return (
    <SharedLayout>
      <Container maxWidth="lg">
        <Box py={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            联系我们
          </Typography>
          <Typography variant="body1" paragraph>
            如果您有任何问题或需求，请随时与我们联系。
          </Typography>
        </Box>
      </Container>
    </SharedLayout>
  );
}
