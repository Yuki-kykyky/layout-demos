import { Button } from "@mui/material";
import React from "react";

export default function InputButton({
  buttonText,
}: {
  buttonText: string;
}) {
  return (
    <Button
      variant="contained"
      sx={{
      bgcolor: "black",
      color: "white",
      height: "56px",
      borderRadius: "50px",
      }}
    >
      {buttonText}
    </Button>
  );
}
