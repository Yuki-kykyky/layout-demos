import { Container, TextField, Button, Typography, Box } from "@mui/material";
import React from "react";

export default function EmailConnectV2() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
          bgcolor: "grey.100",
          p: 4,
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: "bold",
            fontSize: "2.5rem",
          }}
        >
          Get Your Travel Inspiration
          <br />
          Straight to Your Inbox
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            slotProps={{
              input: {
                sx: {
                  borderRadius: "50px",
                  bgcolor: "white",
                },
              },
            }}
            sx={{ width: "400px", mr: 2 }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              height: "56px",
              borderRadius: "50px",
            }}
          >
            SUBSCRIBE
          </Button>
        </Box>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "#6b6b6b", fontSize: "0.875rem" }}
        >
          By subscribing you agree to our Privacy Policy. Check your inbox for
          the latest updates.
        </Typography>
      </Box>
    </Container>
  );
}
