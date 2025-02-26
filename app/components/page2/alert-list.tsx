import { ColorPalette } from "@/app/common/styles/color-palette";
import { WoopAvatar } from "@/app/common/ui/page2/woop";
import { WoopAlert } from "@/app/common/ui/page2/woop/woop-alert";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { iconsAttachment, tags } from "./card-list";

export const AlertList = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <WoopAlert
        displayIcon={false}
        severity="success"
        onClose={() => {}}
        actionButtons={[
          {
            buttonText: "Success",
            onClick: () => {},
          },
        ]}
      >
        <Typography>
          This is a success Alert with no icon, but with action button and close
          button.
        </Typography>
      </WoopAlert>
      <WoopAlert
        severity="info"
        actionButtons={[
          {
            buttonText: "Info",
            onClick: () => {},
          },
        ]}
      >
        <Typography>
          This is an info Alert with icon and action button, but no close
          button.
        </Typography>
      </WoopAlert>
      <WoopAlert severity="warning" onClose={() => {}}>
        <Typography>
          This is a warning Alert with icon and close button, but no action
          button.
        </Typography>
      </WoopAlert>
      <WoopAlert
        severity="error"
        actionButtons={[
          {
            buttonText: "Error",
            onClick: () => {},
          },
          {
            buttonText: "Cancel",
            onClick: () => {},
          },
        ]}
      >
        <Typography>
          This is an error Alert with icon and action buttons, but no close
          button.
        </Typography>
      </WoopAlert>
      <WoopAlert severity="default" displayIcon={false} onClose={() => {}}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <WoopAvatar
            size="XL"
            imgSrc="/goooose30.jpg"
            badged
            rippling={"true"}
          />
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
      </WoopAlert>
      <WoopAlert severity="default" displayIcon={false} onClose={() => {}}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              display: "flex",
              flexShrink: 0,
              width: 80,
              height: 80,
              background: "#DEDEDE",
              borderRadius: "8px",
              backgroundImage: "url(/goooose20.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Stack gap={1}>
            <Typography variant="body2">26.02.2025, 16:00</Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              feel free to add more information here
            </Typography>
          </Stack>
        </Stack>
      </WoopAlert>
      <WoopAlert severity="info" displayIcon={false} onClose={() => {}}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              display: "flex",
              flexShrink: 0,
              width: 80,
              height: 80,
              background: "#DEDEDE",
              borderRadius: "8px",
              backgroundImage: "url(/goooose20.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box
            sx={{
              borderRight: `2px solid ${ColorPalette.Greyscale.dividers}`,
              pr: 2,
            }}
          >
            {tags}
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{
                mt: 2,
              }}
            >
              This is a default Alert, with children props so that there can
              display lots of things.
            </Typography>
          </Box>
          {iconsAttachment}
        </Stack>
      </WoopAlert>
    </Stack>
  );
};
