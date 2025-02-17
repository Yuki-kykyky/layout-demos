import { Box, IconButton, InputBase, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const BaseTextInput = ({ placeholder }: { placeholder: string }) => {
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
};

const SearchInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#e8e8e8",
        borderRadius: "20px",
        width: "200px",
        height: "40px",
        px: 1.5,
      }}
    >
      <InputBase
        placeholder={placeholder}
        sx={{
          flex: 1,
          fontFamily: "Inter",
          fontSize: "12px",
          color: "#4a4a4a",
        }}
      />
      <IconButton size="small">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export { SearchInput, BaseTextInput };
