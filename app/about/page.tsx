import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { SharedLayout } from "../components/shared-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Layout demos",
  description: "About | Layout demos",
};

export default function AboutPage() {
  return (
    <SharedLayout>
      <Container maxWidth="lg">
        <Box py={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            关于我们
          </Typography>
          <Typography variant="body1" paragraph>
            我们是一家专业的房地产服务公司，致力于为客户提供最优质的房产服务。
          </Typography>
        </Box>
      </Container>
    </SharedLayout>
  );
}
