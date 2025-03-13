import TestFigma from "@/app/components/layout-demos/layout2/TestFigma";
import TestFramer from "@/app/components/layout-demos/layout2/TestFramer";
import TestTemplate from "@/app/components/layout-demos/layout2/TestTemplate";
import { v6 } from "@/app/reference-const/v6";
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
