import { ColorPalette } from "@/app/common/styles/color-palette";
import {
  WoopBadge,
  WoopNumberBadge,
} from "@/app/common/ui/page2/woop/woop-badge";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/material";
import React from "react";

export const BadgeList = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" gap={2}>
      <WoopBadge content="New" size="M" color={theme.palette.primary.main} />
      <WoopBadge content="Beta" size="M" color={theme.palette.secondary.main} />
      <WoopBadge content="Alpha" size="M" color={theme.palette.disabled} />
      <WoopBadge
        outlined
        content="Admin"
        size="M"
        color={ColorPalette.Greyscale.stroke}
        textColor={ColorPalette.Greyscale.textSecondary}
      />
      <WoopNumberBadge
        size="M"
        number={100}
        color={theme.palette.primary.main}
      />
      <WoopNumberBadge size="M" number={100} maxNumber={999} />
      <WoopNumberBadge
        size="M"
        number={1000}
        maxNumber={9999}
        color={theme.palette.disabled}
      />
      <WoopNumberBadge
        outlined
        size="M"
        number={100000}
        maxNumber={99999}
        color={ColorPalette.Greyscale.stroke}
        textColor={ColorPalette.Greyscale.textSecondary}
      />
    </Stack>
  );
};
