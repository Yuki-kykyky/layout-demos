import { SharedLayout } from "@/app/components/shared-layout";
import React from "react";
import { Box, Container, Grid2 } from "@mui/material";
import { PropertyCard } from "@/app/common/woop-ui";
import { generateRandomProperties } from "@/app/common/section/random-groups";
import { PropertiesBanner } from "@/app/components/screen-to-code/components/v2/properties-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties | Layout demos",
  description: "Properties | Layout demos",
};

export default function PropertiesPage() {
  const properties = generateRandomProperties(9);

  return (
    <SharedLayout>
      <Container maxWidth="xl">
        <Box className="pb-8">
          {/* Hero Section */}
          <PropertiesBanner />

          {/* Property Card Grid */}
          <Grid2 container spacing={3} className="mt-8">
            {properties.map((property) => (
              <Grid2 key={property.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <PropertyCard {...property} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Container>
    </SharedLayout>
  );
}
