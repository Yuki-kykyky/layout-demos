import { Slider, styled, Theme } from "@mui/material";
import { ELevelType, getColor } from "@/app/common/styles/types";
import React from "react";

const StyledSlider = styled(Slider)({
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export const WoopSlider = ({
  value,
  onChange,
  color,
  type = ELevelType.Primary,
  valueLabelDisplay = "auto",
}: {
  value: number | number[];
  onChange: (event: Event, value: number | number[]) => void;
  color?: string;
  type?: ELevelType;
  valueLabelDisplay?: "auto" | "on" | "off";
}) => {
  return (
    <StyledSlider
      valueLabelDisplay={valueLabelDisplay}
      value={value}
      onChange={onChange}
      sx={{
        color: color || getColor(type),
        "& .MuiSlider-rail": {
          opacity: 1,
          backgroundColor: (theme: Theme) => theme.palette.divider,
        },
        "& .MuiSlider-valueLabel": {
          backgroundColor: color || getColor(type),
        },
      }}
    />
  );
};
