import React from "react";
import { SxProps, Typography } from "@mui/material";

const BaseDescription = ({
  description,
  sx,
  isTruncated = false,
  lineClamp = 1,
}: {
  description: string;
  sx?: SxProps;
  isTruncated?: boolean;
  lineClamp?: number;
}) => {
  return (
    <Typography
      sx={{
        fontSize: 14,
        color: "grey.700",
        ...(isTruncated && {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: lineClamp,
          WebkitBoxOrient: "vertical",
        }),
        ...sx,
      }}
    >
      {description}
    </Typography>
  );
};

const ItemDescription = ({
  description,
  sx,
  isTruncated = false,
  lineClamp = 1,
}: {
  description: string;
  sx?: SxProps;
  isTruncated?: boolean;
  lineClamp?: number;
}) => {
  return (
    <Typography
      sx={{
        fontSize: 12,
        color: "grey.500",
        ...(isTruncated && {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: lineClamp,
          WebkitBoxOrient: "vertical",
        }),
        ...sx,
      }}
    >
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

export { BaseDescription, ItemDescription, EmphasizedDescription };
