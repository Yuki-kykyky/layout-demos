import React from "react";
import Header from "./header";
import BannerSection from "./components/banner-section";
import TopDestinations from "./components/top-destinations";
import LatestStories from "./components/latest-stories";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <BannerSection />
        <TopDestinations />
        <LatestStories />
      </main>
    </div>
  );
}
