import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { SharedLayout } from "../components/shared-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent | Layout demos",
  description: "Agent | Layout demos",
};

export default function AgentPage() {
  return (
    <SharedLayout>
      <Container maxWidth="lg">
        <Box py={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            agent
          </Typography>
        </Box>
      </Container>
    </SharedLayout>
  );
}
