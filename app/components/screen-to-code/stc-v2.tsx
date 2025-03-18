import { BlogsSection } from "@/app/components/screen-to-code/components/v2/blogs-section";
import { FeaturesSection } from "@/app/components/screen-to-code/components/v2/features-section";
import { HeaderBanner } from "@/app/components/screen-to-code/components/v2/header-banner";
import { HorizontalCardSection } from "@/app/components/screen-to-code/components/v2/horizontal-card-section";
import { HowItWorkSection } from "@/app/components/screen-to-code/components/v2/how-it-work-section";
import { PropertiesSection } from "@/app/components/screen-to-code/components/v2/properties-section";
import { TestimonialsSection } from "@/app/components/screen-to-code/components/v2/testimonials-section";
import { VisionSection } from "@/app/components/screen-to-code/components/v2/vision-section";
import { WhyChooseSection } from "@/app/components/screen-to-code/components/v2/why-choose-section";
import { SharedLayout } from "../shared-layout";
import React from "react";

export const STCv2 = () => {
  return (
    <SharedLayout>
      <HeaderBanner />
      <VisionSection />
      <PropertiesSection />
      <FeaturesSection />
      <HorizontalCardSection />
      <HowItWorkSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <BlogsSection />
    </SharedLayout>
  );
};
