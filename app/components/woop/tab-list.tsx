import { WoopBadge } from "@/app/common/ui/page2/woop/woop-badge";
import {
  WoopTab,
  WoopTabPanelWrapper,
} from "@/app/common/ui/page2/woop/woop-tab";
import { DoNotTouch, NotificationsActive } from "@mui/icons-material";
import { Box, Tabs } from "@mui/material";
import React, { useState } from "react";

export const TabList = () => {
  const [outlineTab, setOutlineTab] = useState(0);
  const [containedTab, setContainedTab] = useState(0);

  // Tab 切换处理函数
  const createHandleChange =
    (setter: (value: number) => void) =>
    (_: React.SyntheticEvent, newValue: number) =>
      setter(newValue);

  return (
    <Box>
      {/* Outline 类型的 Tabs */}
      <Box
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.grey[200]}` }}
      >
        <Tabs value={outlineTab} onChange={createHandleChange(setOutlineTab)}>
          <WoopTab label="only label" value={0} />
          <WoopTab
            label="with prefix"
            value={1}
            prefix={<NotificationsActive />}
          />
          <WoopTab
            label="with suffix"
            value={2}
            suffix={<WoopBadge content="99" />}
          />
          <WoopTab
            label="disabled"
            value={3}
            disabled
            prefix={<DoNotTouch />}
            suffix={<DoNotTouch />}
          />
        </Tabs>
      </Box>

      {/* Outline Tab Panels */}
      <WoopTabPanelWrapper value={outlineTab} index={0}>
        Only label
      </WoopTabPanelWrapper>
      <WoopTabPanelWrapper value={outlineTab} index={1}>
        With prefix
      </WoopTabPanelWrapper>
      <WoopTabPanelWrapper value={outlineTab} index={2}>
        With suffix
      </WoopTabPanelWrapper>
      <WoopTabPanelWrapper value={outlineTab} index={3}>
        Disabled
      </WoopTabPanelWrapper>

      {/* Contained 类型的 Tabs */}
      <Box
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.grey[200]}` }}
      >
        <Tabs
          value={containedTab}
          onChange={createHandleChange(setContainedTab)}
          sx={{ "& .MuiTabs-indicator": { bgcolor: "transparent" } }}
        >
          <WoopTab type="contained" label="only label" value={0} />
          <WoopTab
            type="contained"
            label="with prefix"
            value={1}
            prefix={<NotificationsActive />}
          />
          <WoopTab
            type="contained"
            label="with suffix"
            value={2}
            suffix={<WoopBadge content="99" />}
          />
          <WoopTab
            type="contained"
            label="disabled"
            value={3}
            disabled
            prefix={<DoNotTouch />}
            suffix={<DoNotTouch />}
          />
        </Tabs>
      </Box>

      {/* Contained Tab Panels */}
      <WoopTabPanelWrapper value={containedTab} index={0}>
        Only label
      </WoopTabPanelWrapper>
      <WoopTabPanelWrapper value={containedTab} index={1}>
        With prefix
      </WoopTabPanelWrapper>
      <WoopTabPanelWrapper value={containedTab} index={2}>
        With suffix
      </WoopTabPanelWrapper>
      <WoopTabPanelWrapper value={containedTab} index={3}>
        Disabled
      </WoopTabPanelWrapper>
    </Box>
  );
};
