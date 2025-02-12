import { TextField } from "@mui/material";
import React from "react";

export default function TextInput({
  placeholder,
}: {
  placeholder: string;
}) {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
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
  );
}
