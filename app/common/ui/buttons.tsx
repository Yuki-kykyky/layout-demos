import { Button } from "@mui/material";
import React from "react";
const InputButton = ({ buttonText }: { buttonText: string }) => {
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
};

const OperationButton = ({ buttonText }: { buttonText: string }) => {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={{
        color: "black",
        border: "1px solid black",
        borderRadius: 7,
        textTransform: "none",
        px: 2,
      }}
    >
      {buttonText}
    </Button>
  );
};

const HeaderButton = ({ buttonText }: { buttonText: string }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: "30px",
        height: "60px",
        px: 4,
        fontFamily: "Inter",
        textTransform: "none",
        fontWeight: 500,
      }}
    >
      {buttonText}
    </Button>
  );
};

export { InputButton, OperationButton, HeaderButton };
