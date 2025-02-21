import { Box, Typography } from "@mui/material";
import React from "react";
import { ColorPalette } from "@/app/common/styles/color-palette";

// 通用的数字标记组件
const NumberBadge = ({
  number,
  color = ColorPalette.AccentOrange.accent2Primary,
}: {
  number: number;
  color?: string;
}) => (
  <Box
    bgcolor={color}
    width={24}
    height={24}
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderRadius={2}
  >
    <Typography color="white" fontWeight={600} sx={{ fontSize: 12 }}>
      {number}
    </Typography>
  </Box>
);

export { NumberBadge };
