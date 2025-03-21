import { Box, Typography, IconButton, InputBase, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar
          sx={{ bgcolor: "grey.100", color: "grey.500", width: 48, height: 48 }}
        >
          S
        </Avatar>
        <Typography variant="h4" fontWeight="bold">
          Dashboard
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton>
            <ContentCopyIcon sx={{ color: "grey.400" }} />
          </IconButton>
          <IconButton>
            <HelpOutlineIcon sx={{ color: "grey.400" }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box sx={{ position: "relative" }}>
          <InputBase
            placeholder="Search for anything"
            sx={{
              pl: 5,
              pr: 2,
              py: 1,
              borderRadius: "9999px",
              border: "1px solid",
              borderColor: "grey.200",
              width: 256,
            }}
          />
          <SearchIcon
            sx={{ position: "absolute", left: 12, top: 8, color: "grey.400" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            border: "1px solid",
            borderColor: "grey.200",
            borderRadius: "9999px",
            px: 1.5,
            py: 0.5,
          }}
        >
          <Avatar
            src="https://placehold.co/20x20/png?text=US"
            sx={{ width: 20, height: 20 }}
          />
          <Typography variant="body2" color="grey.600">
            <KeyboardArrowDownIcon sx={{ fontSize: 16, ml: 0.5 }} />
          </Typography>
        </Box>

        <IconButton>
          <HelpOutlineIcon sx={{ color: "grey.600" }} />
        </IconButton>

        <IconButton>
          <NotificationsNoneIcon sx={{ color: "grey.600" }} />
        </IconButton>

        <IconButton>
          <ChatBubbleOutlineIcon sx={{ color: "grey.600" }} />
        </IconButton>

        <Avatar sx={{ bgcolor: "black", width: 40, height: 40 }}>N</Avatar>
      </Box>
    </Box>
  );
};
