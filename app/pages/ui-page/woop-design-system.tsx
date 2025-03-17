import {
  ColorPalette,
  ColorPaletteDark,
} from "@/app/common/styles/color-palette";
import {
  AlertList,
  AvatarList,
  BadgeList,
  ButtonList,
  CardList,
  ChipList,
  ColorPaletteList,
  ModalList,
  ProgressList,
  ShadowList,
  SliderList,
  StepList,
  SwitchList,
  TabList,
  TextFieldList,
} from "@/app/components/ui-lists/index";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import InterestsIcon from "@mui/icons-material/Interests";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Theme,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeStore } from "@/app/store/theme-store";
import { BtnType, WoopBtn } from "@/app/common/woop-ui";

enum Level {
  ATOM = "atom",
  MOLECULE = "molecule",
  ORGANISM = "organism",
}

export function WoopDesignSystem() {
  const [selectedLevel, setSelectedLevel] = useState<Level>(Level.ATOM);
  const { isDarkMode, toggleTheme } = useThemeStore();
  const levels = Object.values(Level);
  const accordionItems = [
    {
      id: "modal",
      title: "Modal",
      level: "molecule",
      content: <ModalList />,
    },
    {
      id: "color-palette-light",
      title: "Color Palette - Light",
      level: "atom",
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
      level: "atom",
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
      level: "atom",
      content: <ShadowList />,
    },
    {
      id: "buttons",
      title: "Buttons",
      level: "molecule",
      content: <ButtonList />,
    },
    {
      id: "chips",
      title: "Chips",
      level: "molecule",
      content: <ChipList />,
    },
    {
      id: "switch",
      title: "Switch",
      level: "molecule",
      content: <SwitchList />,
    },
    {
      id: "tabs",
      title: "Tabs",
      level: "molecule",
      content: <TabList />,
    },
    {
      id: "avatars-badges",
      title: "Avatars & Badges",
      level: "molecule",
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
      level: "molecule",
      content: <AlertList />,
    },
    {
      id: "progress-slider-range",
      title: "Progress Bar, slider, range",
      level: "molecule",
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
      level: "molecule",
      width: "100%",
      content: <TextFieldList />,
    },
    {
      id: "cards",
      title: "Cards",
      level: "organism",
      width: "100%",
      content: <CardList />,
    },
  ];

  const groupedItems = levels.map((level) => ({
    level,
    items: accordionItems.filter((item) => item.level === level),
  }));

  const icons = {
    [Level.ATOM]: <FiberSmartRecordIcon />,
    [Level.MOLECULE]: <ScatterPlotIcon />,
    [Level.ORGANISM]: <InterestsIcon />,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          position: "relative",
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <WoopBtn
          buttonText={isDarkMode ? "Switch Light" : "Switch Dark"}
          onClick={toggleTheme}
          type={BtnType.Text}
          startIcon={isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          sx={{
            mx: 2,
            mb: 2,
            position: "absolute",
            bottom: 0,
          }}
        />
        <Box sx={{ overflow: "auto", pt: 4 }}>
          <List>
            {levels.map((level) => (
              <ListItem key={level} disablePadding>
                <ListItemButton
                  selected={selectedLevel === level}
                  onClick={() => setSelectedLevel(level as Level)}
                >
                  <ListItemIcon>{icons[level as Level]}</ListItemIcon>
                  <ListItemText
                    primary={level.charAt(0).toUpperCase() + level.slice(1)}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Stack
        sx={{
          p: 4,
        }}
        direction="row"
        gap={2}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {groupedItems
          .find((group) => group.level === selectedLevel)
          ?.items.map((item) => (
            <Box key={item.id} sx={{ width: item?.width || "49%" }}>
              <Accordion
                id={`${item.id}-list`}
                sx={{
                  border: (theme: Theme) =>
                    `1px solid ${theme.palette.grey[200]}`,
                  ...item?.customStyles,
                }}
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
    </Box>
  );
}
