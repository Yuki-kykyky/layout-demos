"use client";
import Footer from "@/app/footer";
import { Box, Button, Menu, MenuItem, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import "typeface-source-code-pro";
import Header from "./header";
import { FigmaWithCodeAndTextGeneration } from "./pages/figma-with-code-and-text-generation";
import { FigmaCodeGeneration } from "./pages/figma-with-code-generation";
import { ImageGeneration } from "./pages/image-generation";
import { ImageCodeGeneration } from "./pages/image-with-code-generation";
import { WoopDesignSystem } from "./pages/woop-design-system";
import { darkTheme, lightTheme } from "./theme";
import { Test } from "./pages/test";

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
      label: "woop design system generation",
      content: <WoopDesignSystem />,
    },
    v6: {
      label: "test",
      content: <Test />,
    },
  };

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [version, setVersion] = useState("v5");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (version: string) => {
    setVersion(version);
    setAnchorEl(null);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: (theme) => theme.palette.background.default,
        }}
      >
        <Header
          slot={
            <>
              <Button variant="contained" onClick={handleClick}>
                version selector
              </Button>
              {version === "v5" && (
                <Button variant="contained" onClick={toggleTheme}>
                  {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Button>
              )}
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
        <main className="flex-1 flex flex-col m-16 p-6">
          {versionMap[version as keyof typeof versionMap].content}
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
