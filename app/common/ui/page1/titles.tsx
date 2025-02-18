import { Typography, SxProps } from "@mui/material";
import React from "react";

const HeaderTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography variant="h3" fontWeight="bold">
      {children}
    </Typography>
  );
};

const SubTitle = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) => {
  return (
    <Typography
      variant="h5"
      color="white"
      fontWeight="bold"
      sx={{
        textAlign: "center",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

const ItemTitle = ({
  children,
  isTruncated = false,
  lineClamp = 2,
}: {
  children: React.ReactNode;
  isTruncated?: boolean;
  lineClamp?: number;
}) => {
  return (
    <Typography
      fontWeight="bold"
      sx={{
        fontSize: 16,
        lineHeight: 1.5,
        mb: 1,
        ...(isTruncated && {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: lineClamp,
          WebkitBoxOrient: "vertical",
        }),
      }}
    >
      {children}
    </Typography>
  );
};

const DetailTitle = ({
  children,
  sx,
  isTruncated = false,
  lineClamp = 2,
}: {
  children: React.ReactNode;
  sx?: SxProps;
  isTruncated?: boolean;
  lineClamp?: number;
}) => {
  return (
    <Typography
      fontWeight="bold"
      sx={{
        fontSize: 24,
        lineHeight: 1.5,
        mb: 1,
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
      {children}
    </Typography>
  );
};

export { HeaderTitle, SubTitle, ItemTitle, DetailTitle };
