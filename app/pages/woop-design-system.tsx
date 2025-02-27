import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Theme,
  Typography,
} from "@mui/material";
import { ColorPalette, ColorPaletteDark } from "../common/styles/color-palette";
import { AlertList } from "../components/page2/alert-list";
import { AvatarList } from "../components/page2/avatar-list";
import { BadgeList } from "../components/page2/badge-list";
import ButtonList from "../components/page2/button-list";
import { CardList } from "../components/page2/card-list";
import { ChipList } from "../components/page2/chip-list";
import { ColorPaletteList } from "../components/page2/color-palette-list";
import { ProgressList } from "../components/page2/progress-list";
import { ShadowList } from "../components/page2/shadow-list";
import { SliderList } from "../components/page2/slider-list";
import { StepList } from "../components/page2/step-list";
import { SwitchList } from "../components/page2/switch-list";
import TabList from "../components/page2/tab-list";
import { TextFieldList } from "../components/page2/text-field-list";
import ModalList from "../components/page2/modal-list";
import React from "react";

export function WoopDesignSystem() {
  const accordionItems = [
    {
      id: "modal",
      title: "Modal",
      content: <ModalList />,
    },
    {
      id: "color-palette-light",
      title: "Color Palette - Light",
      customStyles: {
        bgcolor: ColorPalette.Background.bgLight,
      },
      customSummary: {
        expandIcon: (
          <ExpandMoreIcon sx={{ color: ColorPalette.Greyscale.textPrimary }} />
        ),
        typography: {
          color: ColorPalette.Greyscale.textPrimary,
        },
      },
      customDetails: {
        bgcolor: ColorPalette.Background.bgLight,
        borderTop: `1px solid ${ColorPalette.Greyscale.dividers}`,
      },
      content: <ColorPaletteList colorPalette={ColorPalette} />,
    },
    {
      id: "color-palette-dark",
      title: "Color Palette - Dark",
      width: "49%",
      customStyles: {
        bgcolor: ColorPaletteDark.Background.bgDarken,
        border: (theme: Theme) => `1px solid ${theme.palette.grey[200]}`,
      },
      customSummary: {
        expandIcon: (
          <ExpandMoreIcon
            sx={{ color: ColorPaletteDark.Greyscale.textPrimary }}
          />
        ),
        typography: {
          color: ColorPaletteDark.Greyscale.textPrimary,
        },
      },
      customDetails: {
        bgcolor: ColorPaletteDark.Background.bgDarken,
        borderTop: (theme: Theme) => `1px solid ${theme.palette.grey[200]}`,
      },
      content: <ColorPaletteList colorPalette={ColorPaletteDark} />,
    },
    {
      id: "shadow",
      title: "Shadow",
      content: <ShadowList />,
    },
    {
      id: "buttons",
      title: "Buttons",
      content: <ButtonList />,
    },
    {
      id: "chips",
      title: "Chips",
      content: <ChipList />,
    },
    {
      id: "switch",
      title: "Switch",
      content: <SwitchList />,
    },
    {
      id: "tabs",
      title: "Tabs",
      content: <TabList />,
    },
    {
      id: "avatars-badges",
      title: "Avatars & Badges",
      content: (
        <Stack gap={2} alignItems="center">
          <AvatarList />
          <BadgeList />
        </Stack>
      ),
    },
    {
      id: "notice-alert",
      title: "Notice Alert",
      content: <AlertList />,
    },
    {
      id: "progress-slider-range",
      title: "Progress Bar, slider, range",
      content: (
        <Stack direction="row" spacing={2}>
          <ProgressList />
          <SliderList />
          <StepList />
        </Stack>
      ),
    },
    {
      id: "text-field",
      title: "Text field",
      width: "100%",
      content: <TextFieldList />,
    },
    {
      id: "cards",
      title: "Cards",
      width: "100%",
      content: <CardList />,
    },
  ];

  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        gap={2}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {accordionItems.map((item) => (
          <Box key={item.id} sx={{ width: item?.width || "49%" }}>
            <Accordion
              id={`${item.id}-list`}
              sx={{
                border: (theme: Theme) =>
                  `1px solid ${theme.palette.grey[200]}`,
                ...item?.customStyles,
              }}
              expanded={item.id === "modal"}
            >
              <AccordionSummary
                expandIcon={
                  item.customSummary?.expandIcon || <ExpandMoreIcon />
                }
                aria-controls={`${item.id}-list`}
                id={`${item.id}-list`}
              >
                <Typography
                  component="span"
                  variant="h6"
                  fontWeight="800"
                  {...item.customSummary?.typography}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  pt: 2,
                  bgcolor: (theme: Theme) => theme.palette.background.default,
                  borderTop: (theme: Theme) =>
                    `1px solid ${theme.palette.grey[200]}`,
                  ...item.customDetails,
                }}
              >
                {item.content}
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
