import { Box, Tab, Typography } from "@mui/material";

import React from "react";
import { WoopTabStyles } from "./styles";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };
  
  // 通用的标签面板组件
  const WoopTabPanelWrapper = ({ children, value, index }: TabPanelProps) => (
    <CustomTabPanel value={value} index={index}>
      <Typography>{children}</Typography>
    </CustomTabPanel>
  );
  

interface WoopTabProps {
  label: string;
  value: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  type?: "outline" | "contained";
  props?: React.ComponentProps<typeof Tab>;
}

const WoopTab = ({
  label,
  value,
  prefix,
  suffix,
  disabled = false,
  type = "outline",
  ...props
}: WoopTabProps) => {
  // 根据类型获取样式
  const getTabStyles = () => {
    const styles =
      type === "contained" ? WoopTabStyles.contained : WoopTabStyles.outline;

    return {
      ...styles.base,
      "&.Mui-selected": type === "contained" ? styles.selected : {},
      "&:focus": {
        ...styles.focus,
        ...(type === "contained" && {
          "&.Mui-selected": styles.selected,
        }),
      },
    };
  };

  return (
    <Tab
      value={value}
      disabled={disabled}
      sx={getTabStyles()}
      label={
        <Box display="flex" alignItems="center" gap={1}>
          {prefix}
          <Typography fontSize={14} lineHeight="18px" fontWeight={800}>
            {label}
          </Typography>
          {suffix}
        </Box>
      }
      {...props}
    />
  );
};

export { WoopTab, WoopTabPanelWrapper };
