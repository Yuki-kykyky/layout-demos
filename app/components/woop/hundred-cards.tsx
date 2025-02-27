import { SubTitle } from "@/app/common/ui/page1/titles";
import { Box, Container, Stack } from "@mui/material";
import { VerticalCardList } from "./vertical-card-list";
import React from "react";
import { HorizontalCardList } from "./horizontal-card-list";

export function HundredCards() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box sx={{ backgroundColor: "black", borderRadius: 4, p: 2 }}>
        <SubTitle sx={{ fontSize: "48px" }}>Vertical Cards</SubTitle>
        <Stack overflow="auto" direction="row" padding={2}>
          <VerticalCardList />
        </Stack>
      </Box>
      <Box sx={{ backgroundColor: "black", borderRadius: 4, p: 2 }}>
        <SubTitle sx={{ fontSize: "48px" }}>Horizontal Cards</SubTitle>
        <Stack overflow="auto" direction="row" padding={2}>
          <HorizontalCardList />
        </Stack>
      </Box>
    </Container>
  );
}
