import {
  Box,
  InputAdornment,
  InputBase,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import { Shadows } from "@/app/common/styles/style-setting";

export const WoopInput = ({
  value,
  startAdornment,
  endAdornment,
  label,
  helperText,
  disabled = false,
}: {
  value: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  label?: string;
  helperText?: string;
  disabled?: boolean;
}) => {
  return (
    <Box>
      <Stack
        direction="row"
        sx={{
          borderRadius: "8px",
          width: "250px",
          overflow: "hidden",
          "&:hover": {
            boxShadow: Shadows.Hover.style,
          },
          "&:focus-within": {
            boxShadow: Shadows.FocusBtn.style,
          },
          ...(disabled && {
            boxShadow: Shadows.Disabled.style,
            "&:hover": {
              boxShadow: Shadows.Disabled.style,
            },
            "&:focus-within": {
              boxShadow: Shadows.Disabled.style,
            },
          }),
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

        {label ? (
          <TextField
            disabled={disabled}
            label={label}
            variant="filled"
            value={value}
            sx={{
              flexGrow: 1,
              "& .MuiInputLabel-root": {
                color: (theme) => theme.palette.text.secondary,
                fontSize: "12px",
                top: "4px",
                lineHeight: "16px",
                fontWeight: 800,
                "&:hover": {
                  color: (theme) => theme.palette.text.secondary,
                },
                "&:focus": {
                  color: (theme) => theme.palette.text.secondary,
                },
              },
            }}
            slotProps={{
              input: {
                disableUnderline: true,
                sx: {
                  p: 0,
                  bgcolor: (theme) => theme.palette.background.paper,
                  color: (theme) => theme.palette.text.secondary,
                  height: "fit-content",
                  fontSize: "14px",
                  borderRadius: 0,
                  lineHeight: "18px",
                  "&:hover": {
                    bgcolor: (theme) =>
                      `${theme.palette.background.paper} !important`,
                  },
                  "&:focus-within": {
                    bgcolor: (theme) =>
                      `${theme.palette.background.paper} !important`,
                  },
                  ...(disabled && {
                    boxShadow: Shadows.Disabled.style,
                    color: (theme) => theme.palette.text.disabled,
                    bgcolor: (theme) =>
                      `${theme.palette.background.paper} !important`,
                  }),
                },
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        color: (theme) => theme.palette.text.secondary,
                        fontSize: "16px",
                      },
                      pr: "16px",
                    }}
                  >
                    {endAdornment}
                  </InputAdornment>
                ),
              },
            }}
          />
        ) : (
          <InputBase
            disabled={disabled}
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
        )}
      </Stack>
      {helperText && (
        <Typography
          fontSize="12px"
          lineHeight="16px"
          color="text.secondary"
          sx={{
            mt: "2px",
          }}
        >
          {helperText}
        </Typography>
      )}
    </Box>
  );
};
