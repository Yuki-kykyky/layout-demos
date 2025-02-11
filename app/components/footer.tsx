import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const socialLinks = [
  { icon: <FacebookIcon />, url: "#" },
  { icon: <TwitterIcon />, url: "#" },
  { icon: <InstagramIcon />, url: "#" },
  { icon: <YouTubeIcon />, url: "#" },
  { icon: <LinkedInIcon />, url: "#" },
];

const footerLinks = {
  popular: {
    title: "Popular",
    links: [
      "Download Mobile App",
      "Travel Insurance",
      "Trip Planner",
      "Group Travel",
      "Last Minute Deals",
    ],
  },
  travel: {
    title: "Travel Interests",
    links: [
      "Adventure",
      "Art and Culture",
      "Wildlife and Nature",
      "Family Travel",
      "Food & Drink",
    ],
  },
  support: {
    title: "Trip Assistance",
    links: [
      "Help",
      "Contact",
      "My Trip Planner",
      "Travel Updates",
      "Booking.com",
    ],
  },
  more: {
    title: "More About Trekk",
    links: [
      "About Us",
      "Work With Us",
      "Privacy Policy",
      "Terms & Conditions",
      "FAQ Travel Guides",
    ],
  },
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "white",
        pt: 8,
        pb: 0,
        mt: "auto",
        borderTop: 1,
        borderColor: "grey.200",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Logo and Social Links */}
          <Box sx={{ flex: "0 0 auto", minWidth: { md: "200px" } }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Logo
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Follow us on
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  sx={{
                    bgcolor: "grey.200",
                    "&:hover": { bgcolor: "grey.300" },
                  }}
                  size="small"
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Footer Links */}
          <Box
            sx={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
              gap: 4,
            }}
          >
            {Object.entries(footerLinks).map(([key, section]) => (
              <Box key={key}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  {section.title}
                </Typography>
                <Stack spacing={1.5}>
                  {section.links.map((link, index) => (
                    <Link
                      key={index}
                      href="#"
                      underline="hover"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.875rem",
                        "&:hover": { color: "text.primary" },
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      {/* Copyright */}
      <Box
        sx={{
          bgcolor: "black",
          mt: 6,
          py: 3,
          borderTop: 1,
          borderColor: "grey.200",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="white">
          © 2024 Trek Travel Experience. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
