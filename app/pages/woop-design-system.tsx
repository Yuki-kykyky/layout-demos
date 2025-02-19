import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { ColorPalette, ColorPaletteDark } from "../common/styles/color-palette";
import { ColorPaletteList } from "../components/page2/color-palette-list";
import { ShadowList } from "../components/page2/shadow-list";
import React from "react";
import { WoopBtn } from "../common/ui/page2/woop/woop-btn";

export function WoopDesignSystem() {
  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        gap={2}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box sx={{ width: "49%" }}>
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
        <Box sx={{ width: "49%" }}>
          <Accordion
            id="color-palette-dark-list"
            sx={{
              bgcolor: ColorPaletteDark.Background.bgDarken,
              border: (theme) => `1px solid ${theme.palette.grey[200]}`,
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
                borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              }}
            >
              <ColorPaletteList colorPalette={ColorPaletteDark} />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ width: "49%" }}>
          <Accordion
            sx={{
              border: (theme) => `1px solid ${theme.palette.grey[200]}`,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="800">
                Shadow
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 2,
                bgcolor: (theme) => theme.palette.background.default,
                borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              }}
            >
              <ShadowList />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ width: "49%" }}>
          <Accordion
            sx={{
              border: (theme) => `1px solid ${theme.palette.grey[200]}`,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="800">
                Buttons
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                bgcolor: (theme) => theme.palette.background.default,
                borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              }}
            >
              <Stack gap={2} flexDirection="row" justifyContent="space-evenly">
                <WoopBtn
                  buttonText="L size + Primary"
                  size="L"
                  type="Primary"
                />
                <WoopBtn
                  buttonText="L size + Secondary"
                  size="L"
                  type="Secondary"
                />
                <WoopBtn
                  buttonText="L size + Tertiary"
                  size="L"
                  type="Tertiary"
                />
              </Stack>
              <Stack gap={2} flexDirection="row" justifyContent="space-evenly">
                <WoopBtn
                  buttonText="M size + Primary"
                  size="M"
                  type="Primary"
                />
                <WoopBtn
                  buttonText="M size + Secondary"
                  size="M"
                  type="Secondary"
                />
                <WoopBtn
                  buttonText="M size + Tertiary"
                  size="M"
                  type="Tertiary"
                />
              </Stack>
              <Stack gap={2} flexDirection="row" justifyContent="space-evenly">
                <WoopBtn
                  buttonText="S size + Primary"
                  size="S"
                  type="Primary"
                />
                <WoopBtn
                  buttonText="S size + Secondary"
                  size="S"
                  type="Secondary"
                />
                <WoopBtn
                  buttonText="S size + Tertiary"
                  size="S"
                  type="Tertiary"
                />
              </Stack>
              <Stack gap={2} flexDirection="row" justifyContent="space-evenly">
                <WoopBtn
                  buttonText="XS size + Primary"
                  size="XS"
                  type="Primary"
                />
                <WoopBtn
                  buttonText="XS size + Secondary"
                  size="XS"
                  type="Secondary"
                />
                <WoopBtn
                  buttonText="XS size + Tertiary"
                  size="XS"
                  type="Tertiary"
                />
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    </Container>
  );
}
