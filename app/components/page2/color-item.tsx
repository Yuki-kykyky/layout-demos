import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { ColorPalette } from "../../common/styles/color-palette";

interface ColorItemProps {
  colorName: string;
  colorValue: string;
  colorPalette: typeof ColorPalette;
}

const ColorItem: React.FC<ColorItemProps> = ({
  colorName,
  colorValue,
  colorPalette,
}) => {
  return (
    <Paper
      sx={{
        width: 280,
        display: "flex",
        alignItems: "center",
        padding: 2,
        gap: 2,
        bgcolor: colorPalette.Background.bgLight,
        border: `1px solid ${colorPalette.Greyscale.dividers}`,
      }}
      data-layer="color itm"
    >
      {/* 颜色显示块 */}
      <Box
        data-layer="itm"
        sx={{
          width: 40,
          height: 40,
          bgcolor: colorValue,
          borderRadius: 2,
          border: `1px solid ${colorPalette.Greyscale.stroke}`,
        }}
      />
      {/* 颜色信息 */}
      <Box
        data-layer="txt"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          component="div"
          data-layer={colorName.replace(/\s+/g, "")}
          sx={{
            color: colorPalette.Greyscale.textPrimary,
            fontWeight: "700",
            fontFamily: "Mulish, sans-serif",
          }}
        >
          {colorName}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          data-layer={colorValue.replace("#", "")}
          sx={{
            color: colorPalette.Greyscale.textSecondary,
            fontWeight: "500",
            fontFamily: "Mulish, sans-serif",
          }}
        >
          {colorValue}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ColorItem;
