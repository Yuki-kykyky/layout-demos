import { BlogsSection } from "@/app/components/screen-to-code/components/v2/home/blogs-section";
import { VisionSection } from "./components/v2/home/vision-section";
import { PropertiesSection } from "./components/v2/home/properties-section";
import { SharedLayout } from "../shared-layout";
import React from "react";

export const STCv2 = () => {
  return (
    <SharedLayout>
      {/* <HeaderBanner /> */}
      <VisionSection />
      <PropertiesSection />
      {/* <FeaturesSection /> */}
      {/* <HorizontalCardSection /> */}
      {/* <HowItWorkSection /> */}
      {/* <WhyChooseSection /> */}
      {/* <TestimonialsSection /> */}
      <BlogsSection />
    </SharedLayout>
  );
};
