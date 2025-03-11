import { Container } from "@mui/material";
import TestFigma from "../components/templateExport/TestFigma";
import TestTemplate from "../components/templateExport/TestTemplate";
import { v6 } from "../constants/page2/v6";
import TestFramer from "../components/templateExport/TestFramer";
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
