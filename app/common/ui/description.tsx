import { Typography } from "@mui/material";
import React from "react";

export default function Description({
  description,
}: {
  description: string;
}) {
  return (
    <Typography sx={{ fontSize: 14, color: "grey.500" }}>{description}</Typography>
  );
}
