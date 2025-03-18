import { BlogsSection } from "@/app/components/screen-to-code/components/v2/blogs-section";
import { PropertiesSection } from "@/app/components/screen-to-code/components/v2/properties-section";
import { SharedLayout } from "../shared-layout";
import React from "react";

export const STCv2 = () => {
  return (
    <SharedLayout>
      {/* <HeaderBanner /> */}
      {/* <VisionSection /> */}
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
