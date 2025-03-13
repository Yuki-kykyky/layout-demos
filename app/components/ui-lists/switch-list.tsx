import { ColorPalette } from "@/app/common/styles/color-palette";
import { Brightness5Rounded, NightsStayRounded } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { WoopSwitch } from "@/app/common/woop-ui/woop-switch";
import React from "react";

export function SwitchList() {
  const [checked, setChecked] = useState(false);
  const [checkedIcon, setCheckedIcon] = useState(false);
  const [checkedDisabled, setCheckedDisabled] = useState(true);
  const [checkedIconDisabled, setCheckedIconDisabled] = useState(false);
  return (
    <Stack
      direction="row"
      spacing={2}
      flexWrap="wrap"
      justifyContent={"space-evenly"}
    >
      <Stack direction="column" spacing={0.5} alignItems="center">
        <Typography variant="body2">Switch</Typography>
        <WoopSwitch checked={checked} setChecked={setChecked} />
      </Stack>
      <Stack direction="column" spacing={0.5} alignItems="center">
        <Typography variant="body2">Icon Switch</Typography>
        <WoopSwitch checked={checkedIcon} setChecked={setCheckedIcon} hasIcon />
      </Stack>
      <Stack direction="column" spacing={0.5} alignItems="center">
        <Typography variant="body2">Disabled</Typography>
        <WoopSwitch
          checked={checkedDisabled}
          setChecked={setCheckedDisabled}
          disabled
        />
      </Stack>
      <Stack direction="column" spacing={0.5} alignItems="center">
        <Typography variant="body2">User defined Icon</Typography>
        <WoopSwitch
          checked={checkedIconDisabled}
          setChecked={setCheckedIconDisabled}
          checkedColor={ColorPalette.AccentOrange.accent2Primary}
          uncheckedColor={ColorPalette.AccentOrange.accent2Tertiary}
          checkedHandleIcon={<Brightness5Rounded />}
          uncheckedHandleIcon={<NightsStayRounded />}
          hasIcon
        />
      </Stack>
    </Stack>
  );
}
