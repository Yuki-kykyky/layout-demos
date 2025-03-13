import { ColorPalette } from "@/app/common/styles/color-palette";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Switch from "react-switch";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

// 定义开关组件的属性类型
interface WoopSwitchProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  disabled?: boolean;
  checkedHandleIcon?: React.ReactNode;
  uncheckedHandleIcon?: React.ReactNode;
  uncheckedColor?: string;
  checkedColor?: string;
  hasIcon?: boolean;
}

export const WoopSwitch = ({
  checked,
  setChecked,
  disabled = false,
  checkedHandleIcon,
  uncheckedHandleIcon,
  uncheckedColor,
  checkedColor,
  hasIcon = false,
}: WoopSwitchProps) => {
  const theme = useTheme();

  // 计算颜色值
  const getHandleIconColor = (isChecked: boolean) => {
    if (disabled) return ColorPalette.Greyscale.disabledText;
    return isChecked
      ? checkedColor || theme.palette.success.main
      : uncheckedColor || theme.palette.error.main;
  };

  const getSwitchColor = (isChecked: boolean) => {
    if (disabled) return ColorPalette.Greyscale.disabledBg;
    if (!hasIcon) {
      return isChecked
        ? checkedColor || theme.palette.primary.main
        : uncheckedColor || theme.palette.primary.contrastText;
    }
    return isChecked
      ? checkedColor || theme.palette.success.main
      : uncheckedColor || theme.palette.error.main;
  };
  
  // 抽离图标容器样式配置
  const getIconBoxStyles = (color: string) => ({
    width: 24,
    height: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiSvgIcon-root": {
      fontSize: 20,
      color,
    },
  });
  // 渲染图标
  const renderHandleIcon = (isChecked: boolean) => {
    if (!hasIcon) return false;

    const iconColor = getHandleIconColor(isChecked);
    const defaultIcon = isChecked ? <CheckIcon /> : <CloseIcon />;
    const customIcon = isChecked ? checkedHandleIcon : uncheckedHandleIcon;

    return (
      <Box sx={getIconBoxStyles(iconColor)}>{customIcon || defaultIcon}</Box>
    );
  };

  return (
    <Switch
      className={
        disabled ? "" : "outline-3 active:outline active:outline-orange-500"
      }
      disabled={disabled}
      width={60}
      height={32}
      handleDiameter={24}
      uncheckedIcon={false}
      checkedIcon={false}
      activeBoxShadow="none"
      checked={checked}
      onColor={getSwitchColor(true)}
      offColor={getSwitchColor(false)}
      checkedHandleIcon={renderHandleIcon(true)}
      uncheckedHandleIcon={renderHandleIcon(false)}
      onChange={() => setChecked(!checked)}
    />
  );
};
