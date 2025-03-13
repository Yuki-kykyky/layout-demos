import { WoopStepper } from "@/app/common/woop-ui/woop-stepper";
import { Stack } from "@mui/material";
import React, { useState } from "react";

export function StepList() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Stack direction="row" spacing={2}>
      <WoopStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
        maxSteps={4}
      />
    </Stack>
  );
}
