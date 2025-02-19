import {
  AccordionDetails,
  Accordion,
  Container,
  Typography,
  AccordionSummary,
  Stack,
  Box,
} from "@mui/material";
import { ColorPaletteList } from "../components/page2/color-palette-list";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ColorPalette, ColorPaletteDark } from "../common/styles/color-palette";

export function WoopDesignSystem() {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" gap={2}>
        <Box>
          <Accordion
            sx={{
              bgcolor: ColorPalette.Background.bgLight,
            }}
            id="color-palette-light-list"
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: ColorPalette.Greyscale.textPrimary }}
                />
              }
              aria-controls="color-palette-light-list"
              id="color-palette-light-list"
            >
              <Typography
                component="span"
                variant="h6"
                fontWeight="800"
                color={ColorPalette.Greyscale.textPrimary}
              >
                Color Palette - Light
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: ColorPalette.Background.bgLight,
                borderTop: `1px solid ${ColorPalette.Greyscale.dividers}`,
              }}
            >
              <ColorPaletteList colorPalette={ColorPalette} />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box>
          <Accordion
            id="color-palette-dark-list"
            sx={{
              bgcolor: ColorPaletteDark.Background.bgDarken,
              border: `1px solid ${ColorPaletteDark.Greyscale.dividers}`,
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: ColorPaletteDark.Greyscale.textPrimary }}
                />
              }
              aria-controls="color-palette-dark-list"
              id="color-palette-dark-list"
            >
              <Typography
                component="span"
                variant="h6"
                fontWeight="800"
                color={ColorPaletteDark.Greyscale.textPrimary}
              >
                Color Palette - Dark
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: ColorPaletteDark.Background.bgDarken,
                borderTop: `1px solid ${ColorPaletteDark.Greyscale.dividers}`,
              }}
            >
              <ColorPaletteList colorPalette={ColorPaletteDark} />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    </Container>
  );
}
