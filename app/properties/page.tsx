import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { PropertiesSection } from "@/app/components/screen-to-code/components/v2/properties-section";
import { SharedLayout } from "@/app/components/shared-layout";

export default function PropertiesPage() {
  return (
    <SharedLayout>
      <Container maxWidth="lg">
        <Box py={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            房产列表
          </Typography>
          <PropertiesSection />
        </Box>
      </Container>
    </SharedLayout>
  );
}
