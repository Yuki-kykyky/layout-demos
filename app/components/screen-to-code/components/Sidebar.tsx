"use client";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import {
  Dashboard,
  CalendarToday,
  People,
  TrendingUp,
  MenuBook,
  Article,
  Chat,
  AttachMoney,
  Description,
  Settings,
  ExitToApp,
} from "@mui/icons-material";
import React from "react";

const menuItems = [
  { icon: <Dashboard />, text: "Dashboard" },
  { icon: <CalendarToday />, text: "Schedule" },
  { icon: <People />, text: "Patients" },
  { icon: <TrendingUp />, text: "Statistics & reports" },
  { icon: <MenuBook />, text: "Education" },
  { icon: <Article />, text: "My articles" },
];

const toolItems = [
  { icon: <Chat />, text: "Chats & calls" },
  { icon: <AttachMoney />, text: "Billing" },
  { icon: <Description />, text: "Documents base" },
  { icon: <Settings />, text: "Settings" },
];

export const Sidebar = () => {
  return (
    <Box width={256} sx={{ bgcolor: "background.paper", boxShadow: 1 }}>
      <Box p={4}>
        <Box
          component="img"
          src="https://placehold.co/100x40?text=intelly"
          alt="Intelly Logo"
          mb={6}
        />

        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: 1,
                  mb: 1,
                  "&:hover": { bgcolor: "grey.100" },
                }}
              >
                <ListItemIcon sx={{ color: "text.secondary", minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box mt={8}>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ px: 2, mb: 2, textTransform: "uppercase", fontWeight: 600 }}
          >
            Tools
          </Typography>
          <List>
            {toolItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 1,
                    mb: 1,
                    "&:hover": { bgcolor: "grey.100" },
                  }}
                >
                  <ListItemIcon sx={{ color: "text.secondary", minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box mt={8}>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: 1,
                  "&:hover": { bgcolor: "grey.100" },
                }}
              >
                <ListItemIcon sx={{ color: "text.secondary", minWidth: 40 }}>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText
                  primary="Log out"
                  primaryTypographyProps={{
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
