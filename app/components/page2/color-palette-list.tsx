import {
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ColorItem from "../ColorItem";
import { ColorPalette } from "../../common/styles/color-palette";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export function ColorPaletteList() {
  // 将 ColorPalette 转换为可遍历的数组
  const colorCategories = Object.entries(ColorPalette);

  return (
    <Box
      data-layer="Light/color palette"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: ColorPalette.Background.bgDarken,
        p: 2,
      }}
    >
      <Box
        data-layer="palette"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {colorCategories.map(([categoryName, colors]) => (
          <Accordion
            key={categoryName}
            data-layer="ttl+list"
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* 分类标题 */}
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="color-palette-list"
              id="color-palette-list-header"
            >
              <Typography
                fontWeight="800"
                color={ColorPalette.Greyscale.textPrimary}
                data-layer={categoryName.replace(/\s+/g, "")}
              >
                {categoryName}
              </Typography>
            </AccordionSummary>
            {/* 颜色列表 */}
            <AccordionDetails>
              <Stack direction="row" flexWrap="wrap" gap={1.5}>
                {Object.entries(colors).map(([colorName, colorValue]) => (
                  <ColorItem
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
