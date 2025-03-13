import React from "react";
import { Alert, Stack } from "@mui/material";
import { CheckCircle, Info, Warning, Error } from "@mui/icons-material";
import { ColorPalette } from "@/app/common/styles/color-palette";
import { WoopBtn, WoopBtnProps } from "./woop-btn";
import { BtnSize, BtnType } from "./woop-btn-base";
import { Shadows } from "@/app/common/styles/style-setting";

type Severity = "success" | "info" | "warning" | "error" | "default";

interface ActionButton extends Omit<WoopBtnProps, "buttonText"> {
  buttonText: string;
  onClick: () => void;
  type?: BtnType;
  size?: BtnSize;
}

interface WoopAlertProps {
  severity: Severity;
  onClose?: () => void;
  icon?: React.ReactNode;
  actionButtons?: ActionButton[];
  displayIcon?: boolean;
  children?: React.ReactNode;
}

const severityColors = {
  background: {
    success: ColorPalette.SystemColors.successfulSecondary,
    info: ColorPalette.Background.bgDarken,
    warning: ColorPalette.SystemColors.attentionSecondary,
    error: ColorPalette.SystemColors.errorSecondary,
    default: ColorPalette.Background.bgLight,
  },
  icon: {
    success: ColorPalette.SystemColors.successful,
    info: ColorPalette.AccentViolet.accent1Primary,
    warning: ColorPalette.SystemColors.attention,
    error: ColorPalette.SystemColors.error,
    default: ColorPalette.Greyscale.icons,
  },
  button: {
    success: ColorPalette.SystemColors.successful,
    info: ColorPalette.AccentViolet.accent1Primary,
    warning: ColorPalette.AccentViolet.accent1Primary,
    error: ColorPalette.SystemColors.error,
    default: ColorPalette.Greyscale.icons,
  },
  buttonHover: {
    success: ColorPalette.SystemColors.successfulHover,
    info: ColorPalette.AccentViolet.hoverState,
    warning: ColorPalette.AccentViolet.hoverState,
    error: ColorPalette.SystemColors.errorHover,
    default: ColorPalette.Greyscale.icons,
  },
};

const severityIcons = {
  success: <CheckCircle />,
  info: <Info />,
  warning: <Warning />,
  error: <Error />,
  default: <Info />,
};

export const WoopAlert: React.FC<WoopAlertProps> = ({
  severity,
  onClose,
  icon,
  children,
  actionButtons,
  displayIcon = true,
}) => {
  const renderActionButton = (button: ActionButton, index: number) => (
    <WoopBtn
      key={index}
      size={button.size ?? BtnSize.XS}
      type={button.type ?? (index === 0 ? BtnType.Primary : BtnType.Secondary)}
      sx={{
        ml: 2,
        ...(index === 0 && {
          bgcolor: severityColors.button[severity],
          "&:hover": {
            bgcolor: severityColors.buttonHover[severity],
          },
          "&:active": {
            bgcolor: severityColors.button[severity],
          },
        }),
        ...button.sx,
      }}
      {...button}
    />
  );

  return (
    <Alert
      severity="error"
      onClose={onClose}
      variant="filled"
      icon={displayIcon ? icon || severityIcons[severity] : displayIcon}
      sx={{
        "&.MuiPaper-root": {
          alignItems: "center",
        },
        "& .action-buttons .MuiSvgIcon-root": {
          color: ColorPalette.Greyscale.icons,
        },
        "& .MuiAlert-icon .MuiSvgIcon-root": {
          color: severityColors.icon[severity],
        },
        bgcolor: severityColors.background[severity],
        color: ColorPalette.Greyscale.textPrimary,
        boxShadow: Shadows.Z100.style,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          my: 0.5,
        }}
      >
        {children}
        {actionButtons && actionButtons.length > 0 && (
          <Stack
            className="action-buttons"
            direction="row"
            spacing={2}
            sx={{
              px: 2,
            }}
          >
            {actionButtons.map((button, index) =>
              renderActionButton(button, index)
            )}
          </Stack>
        )}
      </Stack>
    </Alert>
  );
};
