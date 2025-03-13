import { MobileStepper, SxProps } from "@mui/material";
import React from "react";
import { BtnSize, BtnType } from "./woop-btn-base";
import { WoopIconBtn } from "./woop-icon-btn";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export function WoopStepper({
  activeStep,
  handleNext,
  handleBack,
  maxSteps,
  sx,
}: {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  maxSteps: number;
  sx?: SxProps;
}) {
  return (
    <MobileStepper
      variant="dots"
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      sx={{
        maxWidth: 400,
        flexGrow: 1,
        "& .MuiMobileStepper-dots": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1.5,
        },
        "& .MuiMobileStepper-dot": {
          height: "16px",
          width: "16px",
          backgroundColor: (theme) => theme.palette.primary.contrastText,
          "&.MuiMobileStepper-dotActive": {
            backgroundColor: (theme) => theme.palette.primary.main,
          },
        },
        ...sx,
      }}
      nextButton={
        <WoopIconBtn
          sx={{
            px: 1,
            mx: 2,
          }}
          type={BtnType.Text}
          size={BtnSize.XS}
          icon={<KeyboardArrowRight />}
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        />
      }
      backButton={
        <WoopIconBtn
          sx={{
            px: 1,
            mx: 2,
          }}
          type={BtnType.Text}
          size={BtnSize.XS}
          onClick={handleBack}
          disabled={activeStep === 0}
          icon={<KeyboardArrowLeft />}
        />
      }
    />
  );
}
