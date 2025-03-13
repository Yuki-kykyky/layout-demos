import React from "react";
import { HeaderBanner } from "./components/header-banner";
import { SectionA } from "./components/section-a";
import { SectionB } from "./components/section-b";
import { SectionC } from "./components/section-c";
import { SectionD } from "./components/section-d";
import { SectionE } from "./components/section-e";

export const STCv1 = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <HeaderBanner />
      {/* Section A */}
      <SectionA />

      {/* Section B */}
      <SectionB />

      {/* Section C */}
      <SectionC />

      {/* Section D */}
      <SectionD />

      {/* Section E */}
      <SectionE />
    </div>
  );
};
