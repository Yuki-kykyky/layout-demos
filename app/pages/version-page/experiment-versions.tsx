import Header from "@/app/header";
import Footer from "@/app/footer";
import { Button, Box, Menu, MenuItem } from "@mui/material";
import { Version1 } from "./version1";
import { Version2 } from "./version2";
import { Version3 } from "./version3";
import { Version4 } from "./version4";
import React, { useState } from "react";

export const ExperimentVersions = () => {
  const versionMap = {
    v1: {
      label: "image",
      content: <Version1 />,
    },
    v2: {
      label: "image + code",
      content: <Version2 />,
    },
    v3: {
      label: "figma layout + components",
      content: <Version3 />,
    },
    v4: {
      label: "figma layout + components + json",
      content: <Version4 />,
    },
  };

  const [version, setVersion] = useState("v1");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (version: string) => {
    setVersion(version);
    setAnchorEl(null);
  };

  return (
    <Box>
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
      <main className="flex-1 flex flex-col my-16 py-6">
        {versionMap[version as keyof typeof versionMap].content}
      </main>
      <Footer />
    </Box>
  );
};
