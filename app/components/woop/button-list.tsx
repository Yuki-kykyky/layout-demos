import { ColorPalette } from "@/app/common/styles/color-palette";
import { WoopBtn } from "@/app/common/ui/page2/woop/woop-btn";
import { BtnSize, BtnType } from "@/app/common/ui/page2/woop/woop-btn-base";
import { WoopIconBtn } from "@/app/common/ui/page2/woop/woop-icon-btn";
import { switchColor, useThemeMode } from "@/app/hooks/useThemeMode";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  StarsOutlined,
  StarsRounded,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const ButtonList = () => {
  const themeMode = useThemeMode();

  return (
    <Box>
      {Object.values(BtnType).map((type) => (
        <Box key={type} sx={{ pb: 2 }}>
          <Typography
            variant="h6"
            fontWeight="800"
            color={switchColor(themeMode, ColorPalette.AccentViolet.clickState)}
            align="center"
            sx={{
              borderBottom: `1px solid ${switchColor(
                themeMode,
                ColorPalette.AccentViolet.clickState
              )}`,
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
              <Box
                key={`${type}-${size}`}
                display="flex"
                flexDirection="column"
                gap={2}
              >
                <WoopBtn
                  startIcon={<ArrowLeftOutlined />}
                  endIcon={<ArrowRightOutlined />}
                  key={`${type}-${size}`}
                  buttonText={`${size} size`}
                  size={size as BtnSize}
                  type={type as BtnType}
                />
                <WoopIconBtn
                  icon={<StarsOutlined />}
                  activeIcon={<StarsRounded />}
                  size={size as BtnSize}
                  type={type as BtnType}
                />
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
}
