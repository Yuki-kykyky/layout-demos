import { BtnSize } from "./woop-btn-base";

import { BtnType } from "./woop-btn-base";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Typography,
} from "@mui/material";
import { ColorPalette } from "@/app/common/styles/color-palette";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { WoopIconBtn } from "./woop-icon-btn";

export interface WoopDialogProps {
  title: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export function WoopDialog({
  title,
  content,
  actions,
  open,
  onClose,
}: WoopDialogProps) {
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "16px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        },
        "& .MuiDialogTitle-root": {
          padding: "0",
        },
        "& .MuiDialogContent-root": {
          padding: "0",
          border: "none",
        },
        "& .MuiDialogActions-root": {
          padding: "0",
        },
      }}
    >
      <DialogTitle id="customized-dialog-title">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h6">{title}</Typography>
          <WoopIconBtn
            aria-label="close"
            type={BtnType.Text}
            sx={{
              p: 0,
              borderRadius: "50%",
              bgcolor: "transparent",
            }}
            onClick={onClose}
            size={BtnSize.M}
            icon={
              <CloseIcon
                sx={{
                  color: ColorPalette.Greyscale.icons,
                }}
              />
            }
          />
        </Stack>
      </DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          textAlign: "justify",
        }}
      >
        {content}
      </DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
}
