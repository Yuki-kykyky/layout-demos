import { VisibilityOff } from "@mui/icons-material";
import { Box, InputAdornment, InputBase, Stack } from "@mui/material";

import React from "react";
export const WoopInput = ({
  value,
  startAdornment,
  endAdornment,
}: {
  value: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        borderRadius: "8px",
        width: "250px",
        overflow: "hidden",
      }}
    >
      {startAdornment && (
        <Box
          sx={{
            width: "50px",
            bgcolor: (theme) => theme.palette.divider,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& .MuiSvgIcon-root": {
              color: (theme) => theme.palette.text.secondary,
              fontSize: "16px",
            },
          }}
        >
          {startAdornment}
        </Box>
      )}
      <InputBase
        placeholder="Placeholder"
        value={value}
        endAdornment={
          <InputAdornment
            position="end"
            sx={{
              "& .MuiSvgIcon-root": {
                color: (theme) => theme.palette.text.secondary,
                fontSize: "16px",
              },
            }}
          >
            {endAdornment}
          </InputAdornment>
        }
        sx={{
          p: "16px",
          flexGrow: 1,
          bgcolor: (theme) => theme.palette.background.paper,
          color: (theme) => theme.palette.text.secondary,
        }}
        slotProps={{
          input: {
            sx: {
              p: "0",
              height: "fit-content",
              fontSize: "14px",
              lineHeight: "18px",
            },
          },
        }}
      />
    </Stack>
  );
};
