import React from "react";
import BannerSection from "../components/v1/banner-section";
import EmailConnect from "../components/v1/email-connect";
import Highlights from "../components/v1/highlights";
import LatestStories from "../components/v1/latest-stories";
import TopDestinations from "../components/v1/top-destinations";

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
