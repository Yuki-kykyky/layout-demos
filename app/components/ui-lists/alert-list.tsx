import { ColorPalette } from "@/app/common/styles/color-palette";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import {
  iconsAttachment,
  imageSection,
  tags,
} from "@/app/common/section/common-section";
import { WoopAlert } from "@/app/common/woop-ui/woop-alert";
import { WoopAvatar } from "@/app/common/woop-ui/woop-avatar";

const alertConfigs = [
  {
    severity: "success" as const,
    displayIcon: false,
    onClose: () => {},
    actionButtons: [{ buttonText: "Success", onClick: () => {} }],
    content: (
      <Typography variant="body2">
        This is a success Alert with no icon, but with action button and close
        button.
      </Typography>
    ),
  },
  {
    severity: "info" as const,
    actionButtons: [{ buttonText: "Info", onClick: () => {} }],
    content: (
      <Typography variant="body2">
        This is an info Alert with icon and action button, but no close button.
      </Typography>
    ),
  },
  {
    severity: "warning" as const,
    onClose: () => {},
    content: (
      <Typography variant="body2">
        This is a warning Alert with icon and close button, but no action
        button.
      </Typography>
    ),
  },
  {
    severity: "error" as const,
    actionButtons: [
      { buttonText: "Error", onClick: () => {} },
      { buttonText: "Cancel", onClick: () => {} },
    ],
    content: (
      <Typography variant="body2">
        This is an error Alert with icon and action buttons, but no close
        button.
      </Typography>
    ),
  },
  {
    severity: "default" as const,
    displayIcon: false,
    onClose: () => {},
    content: (
      <Stack direction="row" alignItems="center" spacing={2}>
        <WoopAvatar size="XL" imgSrc="/goooose30.jpg" badged rippling="true" />
        <Stack>
          <Typography variant="subtitle1" fontWeight={600}>
            this is alert title
          </Typography>
          <Typography variant="body2">
            This is a default Alert, with children props so that there can
            display lots of things.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </Typography>
        </Stack>
      </Stack>
    ),
  },
  {
    severity: "default" as const,
    displayIcon: false,
    onClose: () => {},
    content: (
      <Stack direction="row" alignItems="center" spacing={2}>
        {imageSection}
        <Stack gap={1}>
          <Typography variant="body2">26.02.2025, 16:00</Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            feel free to add more information here
          </Typography>
        </Stack>
      </Stack>
    ),
  },
  {
    severity: "info" as const,
    displayIcon: false,
    onClose: () => {},
    content: (
      <Stack direction="row" alignItems="center" spacing={2}>
        {imageSection}
        <Box
          sx={{
            borderRight: `2px solid ${ColorPalette.Greyscale.dividers}`,
            pr: 2,
          }}
        >
          {tags}
          <Typography variant="body2" fontWeight={600} sx={{ mt: 2 }}>
            This is a default Alert, with children props so that there can
            display lots of things.
          </Typography>
        </Box>
        {iconsAttachment}
      </Stack>
    ),
  },
];

export const AlertList = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      {alertConfigs.map((config, index) => (
        <WoopAlert key={index} {...config}>
          {config.content}
        </WoopAlert>
      ))}
    </Stack>
  );
};
