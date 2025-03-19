import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { SharedLayout } from "@/app/components/shared-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Layout demos",
  description: "Blogs | Layout demos",
};

export default function BlogsPage() {
  return (
    <SharedLayout>
      <Container maxWidth="lg">
        <Box py={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            博客文章
          </Typography>
        </Box>
      </Container>
    </SharedLayout>
  );
}
