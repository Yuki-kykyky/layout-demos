import React from "react";
import { SxProps, Typography } from "@mui/material";

const Description = ({
  description,
  sx,
}: {
  description: string;
  sx?: SxProps;
}) => {
  return (
    <Typography sx={{ fontSize: 14, color: "grey.700", ...sx }}>
      {description}
    </Typography>
  );
};

const ItemDescription = ({
  description,
  sx,
}: {
  description: string;
  sx?: SxProps;
}) => {
  return (
    <Typography sx={{ fontSize: 12, color: "grey.500", ...sx }}>
      {description}
    </Typography>
  );
};

const EmphasizedDescription = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) => {
  return (
    <Typography
      sx={{
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export { Description, ItemDescription, EmphasizedDescription };
