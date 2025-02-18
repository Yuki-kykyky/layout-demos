import React from "react";
import BannerSection from "../components/page1/v1/banner-section";
import EmailConnect from "../components/page1/v1/email-connect";
import Highlights from "../components/page1/v1/highlights";
import LatestStories from "../components/page1/v1/latest-stories";
import TopDestinations from "../components/page1/v1/top-destinations";

export function ImageGeneration() {
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
