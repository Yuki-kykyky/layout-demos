"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Fab, Menu, MenuItem, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import "typeface-source-code-pro";

import { WoopDesignSystem } from "./pages/ui-page/woop-design-system";
import { ExperimentVersions } from "./pages/version-page/experiment-versions";
import { lightTheme, darkTheme } from "./theme";
import { STCv1 } from "./components/screen-to-code/stc-v1";
import { useThemeStore } from "./store/theme-store";
import { STCv2 } from "./components/screen-to-code/stc-v2";
import { STCv3 } from "./components/screen-to-code/stc-v3";

export default function Home() {
  const versionMap = {
    v5: {
      label: "woop design system generation",
      content: <WoopDesignSystem />,
    },
    v1: {
      label: "Experimental Field",
      content: <ExperimentVersions />,
    },
    v6: {
      label: "screenshot-to-code-v1",
      content: <STCv1 />,
    },
    v7: {
      label: "screenshot-to-code-v2",
      content: <STCv2 />,
    },
    v8: {
      label: "screenshot-to-code-v3",
      content: <STCv3 />,
    },
  };

  const [version, setVersion] = useState("v7");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (version: string) => {
    setVersion(version);
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: (theme) => theme.palette.background.default,
          position: "relative",
          overflowY: "auto",
        }}
      >
        <Box
          component="main"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          {versionMap[version as keyof typeof versionMap].content}
        </Box>
        <Fab
          color="primary"
          sx={{
            position: "fixed",
            bottom: 96,
            right: 32,
          }}
          onClick={handleClick}
        >
          <MenuIcon />
        </Fab>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          onClose={() => handleClose(version)}
        >
          {Object.keys(versionMap).map((key) => (
            <MenuItem key={key} onClick={() => handleClose(key)}>
              {versionMap[key as keyof typeof versionMap].label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </ThemeProvider>
  );
}
