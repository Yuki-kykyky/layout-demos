import { ColorPalette } from "@/app/common/styles/color-palette";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { BtnSize, BtnType, WoopBtn } from "@/app/common/ui/page2/woop/woop-btn";
import { useThemeMode } from "@/app/hooks/useThemeMode";

export default function ButtonList() {
  const themeMode = useThemeMode();

  return (
    <Box>
      {Object.values(BtnType).map((type) => (
        <Box key={type} sx={{ pb: 2 }}>
          <Typography
            variant="h6"
            fontWeight="800"
            color={
              themeMode === "dark"
                ? ColorPalette.Greyscale.white
                : ColorPalette.AccentViolet.clickState
            }
            align="center"
            sx={{
              borderBottom: `1px solid ${
                themeMode === "dark"
                  ? ColorPalette.Greyscale.white
                  : ColorPalette.AccentViolet.clickState
              }`,
              mx: 4,
              py: 2,
              mb: 2,
            }}
          >
            {type}
          </Typography>
          <Stack
            gap={2}
            flexDirection="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {Object.values(BtnSize).map((size) => (
              <WoopBtn
                key={`${type}-${size}`}
                buttonText={`${size} size`}
                size={size as BtnSize}
                type={type as BtnType}
              />
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
}
