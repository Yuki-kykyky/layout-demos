import React from "react";
import HighlightsV4 from "@/app/components/v4/highlights-v4";
import EmailConnectV4 from "@/app/components/v4/email-connect-v4";
import LatestStoriesV4 from "../components/v4/latest-stories-v4";
import TopDestinationsV4 from "../components/v4/top-destinations-v4";
import BannerSectionV4 from "../components/v4/banner-section-v4";

export function FigmaWithCodeAndTextGeneration() {
  return (
    <>
      <BannerSectionV4 />
      <TopDestinationsV4 />
      <LatestStoriesV4 />
      <HighlightsV4 />
      <EmailConnectV4 />
    </>
  );
}
