import { Button } from "@mui/material";
import React from "react";

interface VersionMap {
  [key: string]: {
    label: string;
    content: React.ReactNode;
  };
}

interface VersionSelectorProps {
  versionMap: VersionMap;
  onVersionChange: (version: string) => void;
}

export default function VersionSelector({
  versionMap,
  onVersionChange,
}: VersionSelectorProps) {
  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(versionMap).map(([version, { label }]) => (
        <Button
          key={version}
          variant="contained"
          onClick={() => onVersionChange(version)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
