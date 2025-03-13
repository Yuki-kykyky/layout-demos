import { buttonGroup, textSection } from "@/app/common/section/common-section";
import { WoopDialog } from "@/app/common/woop-ui/woop-dialog";
import { Button, Stack } from "@mui/material";
import React, { useState } from "react";

export const ModalList = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Modal
      </Button>
      <WoopDialog
        open={open}
        onClose={handleClose}
        title="Modal title"
        content={textSection}
        actions={buttonGroup}
      />
    </Stack>
  );
};
