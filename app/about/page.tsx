import React from "react";
import { Container } from "@mui/material";
import { Metadata } from "next";
import { SharedLayout } from "../components/shared-layout";
import { AboutBanner } from "@/app/components/screen-to-code/components/v2/about-banner";
import { AgentList } from "@/app/components/screen-to-code/components/v2/agent-list";
import { AmenitiesSection } from "@/app/components/screen-to-code/components/v2/amenities-section";

export const metadata: Metadata = {
  title: "About | Layout demos",
  description: "About | Layout demos",
};

export default function AboutPage() {
  return (
    <SharedLayout>
      <Container maxWidth="lg">
        <div className="min-h-screen">
          {/* Hero Section */}
          <AboutBanner />

          {/* Amenities Section */}
          <AmenitiesSection />

          {/* Agents Section */}
          <AgentList />


        </div>
      </Container>
    </SharedLayout>
  );
}
