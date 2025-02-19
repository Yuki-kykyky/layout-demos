import {
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ColorItem from "./color-item";
import { ColorPalette } from "../../common/styles/color-palette";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function ColorPaletteList({
  colorPalette,
}: {
  colorPalette: typeof ColorPalette;
}) {
  // 将 ColorPalette 转换为可遍历的数组
  const colorCategories = Object.entries(colorPalette);

  return (
    <Box
      data-layer="color-palette"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        p: 2,
      }}
    >
      <Box
        data-layer="palette"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {colorCategories.map(([categoryName, colors]) => (
          <Accordion
            key={categoryName}
            data-layer="ttl+list"
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: colorPalette.Background.bgDarken,
              border: `1px solid ${colorPalette.Greyscale.dividers}`,
            }}
          >
            {/* 分类标题 */}
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: colorPalette.Greyscale.textPrimary }}
                />
              }
              aria-controls="color-palette-list"
              id="color-palette-list-header"
            >
              <Typography
                fontWeight="800"
                color={colorPalette.Greyscale.textPrimary}
                data-layer={categoryName.replace(/\s+/g, "")}
              >
                {categoryName}
              </Typography>
            </AccordionSummary>
            {/* 颜色列表 */}
            <AccordionDetails
              sx={{
                bgcolor: colorPalette.Background.bgDarken,
                borderTop: `1px solid ${colorPalette.Greyscale.dividers}`,
              }}
            >
              <Stack direction="row" flexWrap="wrap" gap={1.5} pt={1}>
                {Object.entries(colors).map(([colorName, colorValue]) => (
                  <ColorItem
                    colorPalette={colorPalette}
                    key={colorName}
                    colorName={colorName}
                    colorValue={colorValue}
                  />
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
