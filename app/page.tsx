import React from "react";
import Header from "./header";
import BannerSection from "./components/banner-section";
import TopDestinations from "./components/top-destinations";
import LatestStories from "./components/latest-stories";
import Highlights from "./components/highlights";
import EmailConnect from "./components/email-connect";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col gap-8 p-8 sm:p-20">
        <BannerSection />
        <TopDestinations />
        <LatestStories />
        <Highlights />
        <EmailConnect />
      </main>
      <Footer />
    </div>
  );
}
