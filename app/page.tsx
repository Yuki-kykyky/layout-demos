"use client";
import Footer from "@/app/components/v1/footer";
import React, { useState } from "react";
import Header from "./header";
import VersionSelector from "@/app/components/version-selector";

import { ImageGeneration } from "./pages/image-generation";
import { ImageCodeGeneration } from "./pages/image-with-code-generation";
import { FigmaCodeGeneration } from "./pages/figma-with-code-generation";
import { FigmaWithCodeAndTextGeneration } from "./pages/figma-with-code-and-text-generation";

export default function Home() {
  const versionMap = {
    v1: {
      label: "image",
      content: <ImageGeneration />,
    },
    v2: {
      label: "image + code",
      content: <ImageCodeGeneration />,
    },
    v3: {
      label: "figma layout + components",
      content: <FigmaCodeGeneration />,
    },
    v4: {
      label: "figma layout + components + json",
      content: <FigmaWithCodeAndTextGeneration />,
    },
  };

  const [version, setVersion] = useState("v1");

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        slot={
          <VersionSelector
            versionMap={versionMap}
            onVersionChange={setVersion}
          />
        }
      />
      <main className="flex-1 flex flex-col gap-8 p-8 sm:p-20">
        {versionMap[version as keyof typeof versionMap].content}
      </main>
      <Footer />
    </div>
  );
}
