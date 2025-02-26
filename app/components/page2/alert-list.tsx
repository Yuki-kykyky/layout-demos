import { WoopAlert } from "@/app/common/ui/page2/woop/woop-alert";
import { Stack } from "@mui/material";
import React from "react";

export const AlertList = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <WoopAlert
        displayIcon={false}
        severity="success"
        alertText="This is a success Alert with no icon, but with action buttons and close button."
        onClose={() => {}}
        actionButtons={[
          {
            buttonText: "Success",
            onClick: () => {},
          },
        ]}
      />
      <WoopAlert
        severity="info"
        alertText="This is an info Alert with icon and action button, but no close button."
        actionButtons={[
          {
            buttonText: "Info",
            onClick: () => {},
          },
        ]}
      />
      <WoopAlert
        severity="warning"
        alertText="This is a warning Alert with icon and close button, but no action button."
        onClose={() => {}}
      />
      <WoopAlert
        severity="error"
        alertText="This is an error Alert with icon and action buttons, but no close button."
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
      />
    </Stack>
  );
};
