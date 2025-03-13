import { ColorPalette } from "@/app/common/styles/color-palette";
import { ELevelType } from "@/app/common/styles/types";
import { WoopSlider } from "@/app/common/woop-ui/woop-slider";
import { Stack } from "@mui/material";
import React, { useState } from "react";

export const SliderList = () => {
  const [singleValue, setSingleValue] = useState<number>(30);
  const [singleValueCopy, setSingleValueCopy] = useState<number>(30);
  const [valuePair, setValuePair] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValuePair(newValue as number[]);
  };

  const handleSingleChange = (event: Event, newValue: number | number[]) => {
    setSingleValue(newValue as number);
  };

  const handleSingleChangeCopy = (
    event: Event,
    newValue: number | number[]
  ) => {
    setSingleValueCopy(newValue as number);
  };

  return (
    <Stack sx={{ width: "200px" }}>
      <WoopSlider
        value={singleValue}
        onChange={handleSingleChange}
        color={ColorPalette.AccentOrange.accent2Secondary}
        valueLabelDisplay="on"
      />
      <WoopSlider
        value={valuePair}
        onChange={handleChange}
        type={ELevelType.Secondary}
      />
      <WoopSlider
        value={singleValueCopy}
        onChange={handleSingleChangeCopy}
        type={ELevelType.Tertiary}
        valueLabelDisplay="off"
      />
    </Stack>
  );
};
