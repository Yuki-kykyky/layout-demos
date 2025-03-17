"use client";
import React, { useState } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";

export default function EmailConnect() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing email:", email);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Box
        sx={{
          bgcolor: "grey.100",
          borderRadius: 4,
          py: 6,
          px: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Get Your Travel Inspiration
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: "1.75rem", md: "2.25rem" },
          }}
        >
          Straight to Your Inbox
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "white",
                borderRadius: "50px",
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSubscribe}
            sx={{
              borderRadius: "50px",
              px: 4,
              py: 1.5,
              bgcolor: "grey.800",
              "&:hover": {
                bgcolor: "grey.900",
              },
              whiteSpace: "nowrap",
            }}
          >
            SUBSCRIBE
          </Button>
        </Box>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: "block",
            mt: 2,
            fontSize: "0.75rem",
          }}
        >
          By subscribing you agree to our Privacy Policy. Check your inbox for
          the latest updates.
        </Typography>
      </Box>
    </Container>
  );
}
