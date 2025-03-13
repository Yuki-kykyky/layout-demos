import {
  Box,
  InputAdornment,
  InputBase,
  Stack,
  TextField,
  Theme,
  Typography,
} from "@mui/material";

import React from "react";
import { Shadows } from "@/app/common/styles/style-setting";
import { ColorPalette } from "@/app/common/styles/color-palette";
import { Error } from "@mui/icons-material";

const getContainerStyles = (error: boolean, disabled: boolean) => ({
  borderRadius: "8px",
  width: "250px",
  overflow: "hidden",
  boxShadow: error
    ? Shadows.Error.style
    : disabled
    ? Shadows.Disabled.style
    : "none",
  "&:hover": {
    boxShadow: disabled ? Shadows.Disabled.style : Shadows.Hover.style,
  },
  "&:focus-within": {
    boxShadow: disabled ? Shadows.Disabled.style : Shadows.FocusBtn.style,
  },
});

const getAdornmentStyles = (error: boolean, success: boolean) => ({
  width: "50px",
  bgcolor: (theme: Theme) =>
    error
      ? theme.palette.error.light
      : success
      ? theme.palette.success.light
      : theme.palette.divider,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .MuiSvgIcon-root": {
    color: (theme: Theme) =>
      success ? theme.palette.success.main : theme.palette.text.secondary,
    fontSize: "16px",
  },
});

const getInputBaseStyles = (
  error: boolean,
  success: boolean,
  disabled: boolean
) => ({
  p: "16px",
  flexGrow: 1,
  fontSize: "14px",
  lineHeight: "18px",
  bgcolor: (theme: Theme) =>
    success
      ? `${theme.palette.success.contrastText} !important`
      : theme.palette.background.paper,
  color: (theme: Theme) => {
    if (disabled) return theme.palette.text.disabled;
    if (error || success) return theme.palette.text.primary;
    return theme.palette.text.secondary;
  },
  "&:hover, &:focus-within": {
    bgcolor: (theme: Theme) => `${theme.palette.background.paper} !important`,
  },
});
export type WoopInputProps = {
  value: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  label?: string;
  helperText?: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
};
export const WoopInput = ({
  value,
  startAdornment,
  endAdornment,
  label,
  helperText,
  disabled = false,
  error = false,
  success = false,
}: WoopInputProps) => {
  return (
    <Box>
      <Stack direction="row" sx={getContainerStyles(error, disabled)}>
        {startAdornment && (
          <Box sx={getAdornmentStyles(error, success)}>{startAdornment}</Box>
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
                color: (theme: Theme) =>
                  success
                    ? theme.palette.success.main
                    : theme.palette.text.secondary,
                fontSize: "12px",
                top: "4px",
                lineHeight: "16px",
                fontWeight: 800,
                "&:hover, &.Mui-focused": {
                  color: (theme: Theme) => theme.palette.text.secondary,
                },
              },
            }}
            slotProps={{
              input: {
                disableUnderline: true,
                sx: {
                  ...getInputBaseStyles(error, success, disabled),
                  p: 0,
                },
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        color: (theme: Theme) =>
                          success
                            ? theme.palette.success.main
                            : theme.palette.text.secondary,
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
                    color: (theme: Theme) =>
                      success
                        ? theme.palette.success.main
                        : theme.palette.text.secondary,
                    fontSize: "16px",
                  },
                }}
              >
                {endAdornment}
              </InputAdornment>
            }
            sx={getInputBaseStyles(error, success, disabled)}
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
      {error ? (
        <>
          <Typography
            fontSize="12px"
            lineHeight="16px"
            fontWeight={500}
            color={ColorPalette.SystemColors.error}
            sx={{
              mt: "2px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Error sx={{ fontSize: "12px", lineHeight: "16px" }} /> Error
          </Typography>
        </>
      ) : (
        <>
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
        </>
      )}
    </Box>
  );
};
