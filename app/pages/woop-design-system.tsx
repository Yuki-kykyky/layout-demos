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
import { AvatarList } from "../components/page2/avatar-list";
import { BadgeList } from "../components/page2/badge-list";
import ButtonList from "../components/page2/button-list";
import { CardList } from "../components/page2/card-list";
import { ChipList } from "../components/page2/chip-list";
import { ColorPaletteList } from "../components/page2/color-palette-list";
import { ProgressList } from "../components/page2/progress-list";
import { ShadowList } from "../components/page2/shadow-list";
import { SwitchList } from "../components/page2/switch-list";
import TabList from "../components/page2/tab-list";
import { TextFieldList } from "../components/page2/text-field-list";
import React from "react";

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
            expanded
            sx={{
              border: (theme) => `1px solid ${theme.palette.grey[200]}`,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="800">
                Progress Bar, scroll bar, range
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 2,
                bgcolor: (theme) => theme.palette.background.default,
                borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              }}
            >
              <ProgressList />
            </AccordionDetails>
          </Accordion>
        </Box>
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
                bgcolor: (theme) => theme.palette.background.default,
                borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              }}
            >
              <ButtonList />
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
                Chips
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ChipList />
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
                Switch
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SwitchList />
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
                Tabs
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 2,
                display: "flex",
                flexDirection: "column",
                bgcolor: (theme) => theme.palette.background.default,
                borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              }}
            >
              <TabList />
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
                Avatars & Badges
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack gap={2} alignItems="center">
                <AvatarList />
                <BadgeList />
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Accordion
            sx={{
              border: (theme) => `1px solid ${theme.palette.grey[200]}`,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="800">
                Text field
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 2,
                display: "flex",
                flexDirection: "column",
                bgcolor: (theme) => theme.palette.background.default,
                borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              }}
            >
              <TextFieldList />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Accordion
            sx={{
              border: (theme) => `1px solid ${theme.palette.grey[200]}`,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight="800">
                Cards
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                pt: 2,
                display: "flex",
                flexDirection: "column",
                bgcolor: (theme) => theme.palette.background.default,
                borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              }}
            >
              <CardList />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    </Container>
  );
}
