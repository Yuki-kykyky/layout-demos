import { SharedLayout } from "@/app/components/shared-layout";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

interface Params {
  post_id: string;
}

interface PageProps {
  params: Promise<Params>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <SharedLayout>
      <Container maxWidth="lg">
        <Box py={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            博客文章 {resolvedParams.post_id}
          </Typography>
          {/* 这里可以根据 post_id 获取具体的博客内容 */}
        </Box>
      </Container>
    </SharedLayout>
  );
}
