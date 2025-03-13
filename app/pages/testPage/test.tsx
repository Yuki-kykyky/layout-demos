import TestFigma from "@/app/components/templateExport/TestFigma";
import TestFramer from "@/app/components/templateExport/TestFramer";
import TestTemplate from "@/app/components/templateExport/TestTemplate";
import { v6 } from "@/app/constants/page2/v6";
import { Container } from "@mui/material";

import React from "react";
export function Test() {
  return (
    <Container maxWidth="xl">
      <TestFigma />
      <TestTemplate
        image={v6.image}
        horizontalCards={v6.horizontalCards}
        verticalCards={v6.verticalCards}
      />
      <TestFramer />
    </Container>
  );
}
