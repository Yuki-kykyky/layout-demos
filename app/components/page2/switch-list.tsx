import { ColorPalette } from "@/app/common/styles/color-palette";
import { Brightness5Rounded, NightsStayRounded } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import Switch from "react-switch";

export const WoopSwitch = ({
  checked,
  setChecked,
  disabled = false,
}: {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  disabled?: boolean;
}) => {
  const theme = useTheme();
  return (
    <Box>
      <Switch
        width={60}
        height={32}
        uncheckedIcon={false}
        checkedIcon={false}
        checked={checked}
        handleDiameter={24}
        onChange={() => setChecked(!checked)}
        onColor={
          disabled
            ? ColorPalette.Greyscale.disabledBg
            : theme.palette.primary.main
        }
        offColor={
          disabled
            ? ColorPalette.Greyscale.disabledBg
            : theme.palette.primary.light
        }
        disabled={disabled}
      />
    </Box>
  );
};

export const WoopIconSwitch = ({
  checked,
  setChecked,
  disabled = false,
  checkedHandleIcon,
  uncheckedHandleIcon,
}: {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  disabled?: boolean;
  checkedHandleIcon?: React.ReactNode;
  uncheckedHandleIcon?: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <Switch
      disabled={disabled}
      width={60}
      height={32}
      handleDiameter={24}
      uncheckedIcon={false}
      checkedIcon={false}
      uncheckedHandleIcon={
        <Box
          sx={{
            width: 24,
            height: 24,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& .MuiSvgIcon-root": {
              fontSize: 20,
              color: disabled
                ? ColorPalette.Greyscale.disabledText
                : theme.palette.error.main,
            },
          }}
        >
          {uncheckedHandleIcon || <CloseIcon />}
        </Box>
      }
      checkedHandleIcon={
        <Box
          sx={{
            width: 24,
            height: 24,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& .MuiSvgIcon-root": {
              fontSize: 20,
              color: disabled
                ? ColorPalette.Greyscale.disabledText
                : theme.palette.success.main,
            },
          }}
        >
          {checkedHandleIcon || <CheckIcon />}
        </Box>
      }
      checked={checked}
      onColor={
        disabled
          ? ColorPalette.Greyscale.disabledBg
          : theme.palette.success.main
      }
      offColor={
        disabled ? ColorPalette.Greyscale.disabledBg : theme.palette.error.main
      }
      onChange={() => setChecked(!checked)}
    />
  );
};
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
        <WoopIconSwitch checked={checkedIcon} setChecked={setCheckedIcon} />
      </Stack>
      <Stack direction="column" spacing={0.5} alignItems="center">
        <Typography variant="body2">Disabled</Typography>
        <WoopSwitch
          checked={checkedDisabled}
          setChecked={setCheckedDisabled}
          disabled={true}
        />
      </Stack>
      <Stack direction="column" spacing={0.5} alignItems="center">
        <Typography variant="body2">Disabled Icon</Typography>
        <WoopIconSwitch
          checked={checkedIconDisabled}
          setChecked={setCheckedIconDisabled}
          disabled={true}
          checkedHandleIcon={<Brightness5Rounded />}
          uncheckedHandleIcon={<NightsStayRounded />}
        />
      </Stack>
    </Stack>
  );
}
