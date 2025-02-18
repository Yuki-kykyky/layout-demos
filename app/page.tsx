"use client";
import Footer from "@/app/footer";
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import "typeface-source-code-pro";
import Header from "./header";

import { FigmaWithCodeAndTextGeneration } from "./pages/figma-with-code-and-text-generation";
import { FigmaCodeGeneration } from "./pages/figma-with-code-generation";
import { HundredCards } from "./pages/hundred-cards";
import { ImageGeneration } from "./pages/image-generation";
import { ImageCodeGeneration } from "./pages/image-with-code-generation";

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
    v5: {
      label: "100 cards",
      content: <HundredCards />,
    },
  };

  const [version, setVersion] = useState("v5");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (version: string) => {
    setVersion(version);
    setAnchorEl(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        slot={
          <>
            <Button variant="contained" onClick={handleClick}>
              version selector
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => handleClose(version)}
            >
              {Object.keys(versionMap).map((key) => (
                <MenuItem key={key} onClick={() => handleClose(key)}>
                  {versionMap[key as keyof typeof versionMap].label}
                </MenuItem>
              ))}
            </Menu>
          </>
        }
      />
      <main className="flex-1 flex flex-col gap-8 p-8 sm:p-20">
        {versionMap[version as keyof typeof versionMap].content}
      </main>
      <Footer />
    </div>
  );
}
