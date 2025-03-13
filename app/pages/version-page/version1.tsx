import React from "react";
import BannerSection from "@/app/components/layout-demos/layout1/v1/banner-section";
import EmailConnect from "@/app/components/layout-demos/layout1/v1/email-connect";
import Highlights from "@/app/components/layout-demos/layout1/v1/highlights";
import LatestStories from "@/app/components/layout-demos/layout1/v1/latest-stories";
import TopDestinations from "@/app/components/layout-demos/layout1/v1/top-destinations";

export function Version1() {
  return (
    <>
      <BannerSection />
      <TopDestinations />
      <LatestStories />
      <Highlights />
      <EmailConnect />
    </>
  );
}
