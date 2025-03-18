import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { BlogsSection } from "@/app/components/screen-to-code/components/v2/blogs-section";
import { SharedLayout } from "@/app/components/shared-layout";

export default function BlogsPage() {
  return (
    <SharedLayout>
      <Container maxWidth="lg">
        <Box py={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            博客文章
          </Typography>
          <BlogsSection />
        </Box>
      </Container>
    </SharedLayout>
  );
}
