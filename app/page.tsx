"use client";
import React, { useState } from "react";
import Header from "./header";
import BannerSection from "./components/ v1/banner-section";
import TopDestinations from "./components/ v1/top-destinations";
import LatestStories from "./components/ v1/latest-stories";
import Highlights from "./components/ v1/highlights";
import EmailConnect from "./components/ v1/email-connect";
import Footer from "./components/ v1/footer";
import { Button } from "@mui/material";
import EmailConnectV2 from "./components/v2/email-connect-v2";
import HighlightsV2 from "./components/v2/highlights-v2";
import LatestStoriesV2 from "./components/v2/latest-stories-v2";
import TopDestinationsV2 from "./components/v2/top-destinations-v2";
import BannerSectionV2 from "./components/v2/banner-section-v2";

export default function Home() {
  const [version, setVersion] = useState("v1");
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        slot={
          <div className="flex gap-4 justify-center">
            <Button onClick={() => setVersion("v1")}>Image-based</Button>
            <Button variant="contained" onClick={() => setVersion("v2")}>
              Image combined with code
            </Button>
          </div>
        }
      />
      <main className="flex-1 flex flex-col gap-8 p-8 sm:p-20">
        {version === "v1" && (
          <>
            <BannerSection />
            <TopDestinations />
            <LatestStories />
            <Highlights />
            <EmailConnect />
          </>
        )}
        {version === "v2" && (
          <>
            <BannerSectionV2 />
            <TopDestinationsV2 />
            <LatestStoriesV2 />
            <HighlightsV2 />
            <EmailConnectV2 />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
