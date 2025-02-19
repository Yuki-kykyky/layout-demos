import {
  AccordionDetails,
  Accordion,
  Container,
  Typography,
  AccordionSummary,
} from "@mui/material";
import { ColorPaletteList } from "../components/page2/color-palette-list";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ColorPalette } from "../common/styles/color-palette";

export function WoopDesignSystem() {
  return (
    <Container maxWidth="xl">
      <Accordion sx={{ width: "25%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="color-palette-list"
          id="color-palette-list-header"
        >
          <Typography
            variant="h6"
            fontWeight="800"
            color={ColorPalette.Greyscale.textPrimary}
          >
            Color Palette
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ColorPaletteList />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
