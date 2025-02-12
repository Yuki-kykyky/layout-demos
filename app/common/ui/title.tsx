import { Typography } from "@mui/material";
import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="h3" fontWeight="bold">
      {children}
    </Typography>
  );
};

const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      variant="h5"
      color="white"
      fontWeight="bold"
      sx={{
        textAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
};

const ItemTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography fontWeight="bold" sx={{ fontSize: 16, lineHeight: 1.5, mb: 1 }}>
      {children}
    </Typography>
  );
};

export { Title, SubTitle, ItemTitle };
