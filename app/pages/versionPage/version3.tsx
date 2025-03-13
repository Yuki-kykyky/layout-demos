import React from "react";
import BannerSectionV3 from "@/app/components/page1/v3/banner-section-v3";
import EmailConnectV3 from "@/app/components/page1/v3/email-connect-v3";
import HighlightsV3 from "@/app/components/page1/v3/highlights-v3";
import LatestStoriesV3 from "@/app/components/page1/v3/latest-stories-v3";
import TopDestinationsV3 from "@/app/components/page1/v3/top-destinations-v3";

export function Version3() {
  return (
    <>
      <BannerSectionV3 />
      <TopDestinationsV3 />
      <LatestStoriesV3 />
      <HighlightsV3 />
      <EmailConnectV3 />
    </>
  );
}
