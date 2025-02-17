"use client";
import Footer from "@/app/components/v1/footer";
import React, { useState } from "react";
import Header from "./header";
import VersionSelector from "@/app/components/version-selector";

import { ImageGeneration } from "./pages/image-generation";
import { ImageCodeGeneration } from "./pages/image-with-code-generation";
import EmailConnectV4 from "./components/v4/email-connect-v4";
import { FigmaCodeGeneration } from "./pages/figma-with-code-generation";

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
      label: "figma layout + code",
      content: <FigmaCodeGeneration />,
    },
    v4: {
      label: "exploring...",
      content: <EmailConnectV4 />,
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
