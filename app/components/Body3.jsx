import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function Body3() {
  const steps = ["Create an account", "Deposit Crypto", "Start Earning"];

  function timleine() {
    return (
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }
  return (
    <div className="flex flex-col justify-center w-full items-center min-h-[60vh] gap-28  mb-36">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center">How to stake and earn?</h1>
        <p className="text-2xl text-smalltext">
          Our platform is easy to use, whether you are new to crypto or a pro.
        </p>
      </div>
      <div className="w-3/5">{timleine()}</div>
    </div>
  );
}
