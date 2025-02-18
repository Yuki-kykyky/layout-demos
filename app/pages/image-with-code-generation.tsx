import React from "react";
import BannerSectionV2 from "../components/page1/v2/banner-section-v2";
import EmailConnectV2 from "../components/page1/v2/email-connect-v2";
import HighlightsV2 from "../components/page1/v2/highlights-v2";
import LatestStoriesV2 from "../components/page1/v2/latest-stories-v2";
import TopDestinationsV2 from "../components/page1/v2/top-destinations-v2";

export function ImageCodeGeneration() {
  return (
    <>
      <BannerSectionV2 />
      <TopDestinationsV2 />
      <LatestStoriesV2 />
      <HighlightsV2 />
      <EmailConnectV2 />
    </>
  );
}
