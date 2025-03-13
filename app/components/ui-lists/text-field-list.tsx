import { WoopInput } from "@/app/common/woop-ui/woop-input";
import { VisibilityOff, HeartBroken } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";

export const TextFieldList = () => {
  const inputConfigs = [
    // 基础配置
    { value: "hello world" },
    { startAdornment: <HeartBroken />, value: "hello world" },
    { endAdornment: <VisibilityOff />, value: "hello world" },
    {
      startAdornment: <HeartBroken />,
      endAdornment: <VisibilityOff />,
      value: "hello world",
    },

    // 禁用
    { disabled: true, value: "hello world" },
    { disabled: true, startAdornment: <HeartBroken />, value: "hello world" },
    { disabled: true, endAdornment: <VisibilityOff />, value: "hello world" },
    {
      disabled: true,
      startAdornment: <HeartBroken />,
      endAdornment: <VisibilityOff />,
      value: "hello world",
    },

    // 带 helperText
    { helperText: "Description", value: "hello world with helper text" },
    {
      startAdornment: <HeartBroken />,
      helperText: "Description",
      value: "hello world with helper text",
    },
    {
      endAdornment: <VisibilityOff />,
      helperText: "Description",
      value: "hello world with helper text",
    },
    {
      startAdornment: <HeartBroken />,
      endAdornment: <VisibilityOff />,
      helperText: "Description",
      value: "hello world with helper text",
    },

    // 带 label
    { label: "Label", value: "hello world with label" },
    {
      startAdornment: <HeartBroken />,
      label: "Label",
      value: "hello world with label",
    },
    {
      endAdornment: <VisibilityOff />,
      label: "Label",
      value: "hello world with label",
    },
    {
      startAdornment: <HeartBroken />,
      endAdornment: <VisibilityOff />,
      label: "Label",
      value: "hello world with label",
    },

    // 带 label 和 helperText
    {
      label: "Label",
      helperText: "Description",
      value: "hello world with label and helper text",
    },
    {
      startAdornment: <HeartBroken />,
      label: "Label",
      helperText: "Description",
      value: "hello world with label and helper text",
    },
    {
      endAdornment: <VisibilityOff />,
      label: "Label",
      helperText: "Description",
      value: "hello world with label and helper text",
    },
    {
      startAdornment: <HeartBroken />,
      endAdornment: <VisibilityOff />,
      label: "Label",
      helperText: "Description",
      value: "hello world with label and helper text",
    },

    // 带 label 和 helptext 被禁用
    {
      label: "Label",
      helperText: "Description",
      value: "hello world with label and helper text",
      disabled: true,
    },
    {
      startAdornment: <HeartBroken />,
      label: "Label",
      helperText: "Description",
      value: "hello world with label and helper text",
      disabled: true,
    },
    {
      endAdornment: <VisibilityOff />,
      label: "Label",
      helperText: "Description",
      value: "hello world with label and helper text",
      disabled: true,
    },
    {
      startAdornment: <HeartBroken />,
      endAdornment: <VisibilityOff />,
      label: "Label",
      helperText: "Description",
      value: "hello world with label and helper text",
      disabled: true,
    },

    // error
    { error: true, value: "hello world with error" },
    {
      error: true,
      startAdornment: <HeartBroken />,
      value: "hello world with error",
    },
    {
      error: true,
      endAdornment: <VisibilityOff />,
      value: "hello world with error",
    },
    {
      error: true,
      startAdornment: <HeartBroken />,
      endAdornment: <VisibilityOff />,
      value: "hello world with error",
    },

    // 带 label 和 helperText 和 error
    {
      label: "Label",
      helperText: "Description",
      error: true,
      value: "hello world with label and helper text and error",
    },
    {
      startAdornment: <HeartBroken />,
      label: "Label",
      helperText: "Description",
      error: true,
      value: "hello world with label and helper text and error",
    },
    {
      endAdornment: <VisibilityOff />,
      label: "Label",
      helperText: "Description",
      error: true,
      value: "hello world with label and helper text and error",
    },
    {
      label: "Label",
      helperText: "Description",
      error: true,
      startAdornment: <HeartBroken />,
      endAdornment: <VisibilityOff />,
      value: "hello world with label and helper text and error",
    },

    // success
    { success: true, value: "hello world with success" },
    {
      success: true,
      startAdornment: <HeartBroken />,
      value: "hello world with success",
    },
    {
      success: true,
      endAdornment: <VisibilityOff />,
      value: "hello world with success",
    },
    {
      success: true,
      startAdornment: <HeartBroken />,
      endAdornment: <VisibilityOff />,
      value: "hello world with success",
    },

    // 带 label 和 helperText 和 success
    {
      label: "Label",
      helperText: "Description",
      success: true,
      value: "hello world with label and helper text and success",
    },
    {
      startAdornment: <HeartBroken />,
      label: "Label",
      helperText: "Description",
      success: true,
      value: "hello world with label and helper text and success",
    },
    {
      endAdornment: <VisibilityOff />,
      label: "Label",
      helperText: "Description",
      success: true,
      value: "hello world with label and helper text and success",
    },
    {
      label: "Label",
      helperText: "Description",
      success: true,
      startAdornment: <HeartBroken />,
      endAdornment: <VisibilityOff />,
      value: "hello world with label and helper text and success",
    },
  ];

  return (
    <Stack
      direction="row"
      rowGap={2}
      columnGap={6}
      sx={{ px: 6 }}
      justifyContent="center"
      flexWrap="wrap"
    >
      {inputConfigs.map((config, index) => (
        <WoopInput key={index} {...config} />
      ))}
    </Stack>
  );
};
