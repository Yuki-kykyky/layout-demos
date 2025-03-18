import React from "react";
import { HeaderBanner } from "./components/v1/header-banner";
import { SectionA } from "./components/v1/section-a";
import { SectionB } from "./components/v1/section-b";
import { SectionE } from "./components/v1/section-e";

export const STCv1 = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <HeaderBanner />
      {/* Section A */}
      <SectionA />

      {/* Section B */}
      <SectionB />

      {/* Section E */}
      <SectionE />
    </div>
  );
};
