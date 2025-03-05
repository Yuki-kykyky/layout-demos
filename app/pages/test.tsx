import { Container } from "@mui/material";
import TestTemplate from "../components/templateExport/TestTemplate";
import TestFigma from "../components/templateExport/TestFigma";
import { v6 } from "../constants/page2/v6";
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
    </Container>
  );
}
