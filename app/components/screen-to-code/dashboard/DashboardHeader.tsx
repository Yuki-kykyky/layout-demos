import {
  Box,
  Typography,
  Stack,
  Select,
  MenuItem,
  InputBase,
} from "@mui/material";
import { WoopIconBtn, WoopNumberBadge, WoopAvatar } from "@/app/common/woop-ui";
import {
  Search,
  KeyboardArrowDown,
  Mail,
  Notifications,
} from "@mui/icons-material";
import React from "react";
export const DashboardHeader = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, color: "text.primary" }}
          >
            Hello Admin!
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mt: 1 }}>
            Measure How Fast You&apos;re Growing Monthly Recurring
            <br />
            performance management.
          </Typography>
        </Box>

        <Stack direction="row" spacing={4} alignItems="center">
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 1,
              px: 4,
              py: 2,
            }}
          >
            <Select
              value="Year"
              variant="standard"
              disableUnderline
              sx={{ color: "text.secondary" }}
            >
              <MenuItem value="Year">Year</MenuItem>
            </Select>
          </Box>

          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 1,
              display: "flex",
              alignItems: "center",
              px: 4,
              py: 2,
              width: 256,
            }}
          >
            <Search sx={{ color: "text.secondary", mr: 2 }} />
            <InputBase
              placeholder="Search..."
              sx={{ width: "100%", color: "text.secondary" }}
            />
          </Box>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ color: "text.secondary" }}
          >
            <Box
              component="img"
              src="https://placehold.co/20x15"
              alt="US flag"
              height={16}
            />
            <Typography>English</Typography>
            <KeyboardArrowDown fontSize="small" />
          </Stack>

          <Box position="relative">
            <WoopIconBtn icon={<Mail />} />
            <WoopNumberBadge
              number={2}
              color="error"
              sx={{ position: "absolute", top: -4, right: -4 }}
            />
          </Box>

          <Box position="relative">
            <WoopIconBtn icon={<Notifications />} />
            <WoopNumberBadge
              number={1}
              color="error"
              sx={{ position: "absolute", top: -4, right: -4 }}
            />
          </Box>

          <WoopAvatar text="John Doe" size="M" />
        </Stack>
      </Box>
    </Box>
  );
};
