import { WoopProgressBar } from "@/app/common/ui/page2/woop/woop-progress";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ELevelType } from "@/app/common/styles/types";

export const ProgressList = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Stack gap={4} sx={{ width: "200px" }}>
      <WoopProgressBar progress={progress} type={ELevelType.Primary} />
      <WoopProgressBar progress={progress} type={ELevelType.Secondary} />
      <WoopProgressBar progress={progress} type={ELevelType.Tertiary} />
    </Stack>
  );
};
