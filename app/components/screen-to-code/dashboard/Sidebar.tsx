import { Box, Stack } from "@mui/material";
import {
  ArrowRight,
  Message,
  Apps,
  Group,
  AttachMoney,
  Description,
  PieChart,
  Folder,
  BarChart,
  Settings,
  MoreHoriz,
} from "@mui/icons-material";
import React from "react";
import { WoopNumberBadge } from "@/app/common/woop-ui";

const SidebarIcon = ({
  icon: Icon,
  badge,
}: {
  icon: React.ElementType;
  badge?: number;
}) => (
  <Box position="relative">
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: 2,
        bgcolor: "primary.50",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "primary.main",
      }}
    >
      <Icon />
    </Box>
    {badge && (
      <WoopNumberBadge
        number={badge}
        color="error"
        sx={{
          position: "absolute",
          top: -4,
          right: -4,
        }}
      />
    )}
  </Box>
);

export const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 64,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 4,
        boxShadow: 1,
      }}
    >
      <Box mb={6}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 2,
            background: "linear-gradient(to right, #ec4899, #a855f7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="span"
            sx={{ color: "white", fontWeight: "bold", fontSize: "0.75rem" }}
          >
            hrad.
          </Box>
        </Box>
      </Box>

      <Stack spacing={6} mt={2}>
        <SidebarIcon icon={ArrowRight} />
        <SidebarIcon icon={Message} badge={1} />
        <SidebarIcon icon={Apps} />
        <SidebarIcon icon={Group} />
        <SidebarIcon icon={AttachMoney} />
        <SidebarIcon icon={Description} />
        <SidebarIcon icon={PieChart} />
        <SidebarIcon icon={Folder} />
        <SidebarIcon icon={BarChart} />
        <SidebarIcon icon={Settings} />
        <SidebarIcon icon={MoreHoriz} />
      </Stack>
    </Box>
  );
};
