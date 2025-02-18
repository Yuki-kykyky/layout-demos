import { SubTitle } from "@/app/common/ui/page1/titles";
import { Container, Stack } from "@mui/material";
import { VerticalCardList } from "./vertical-card-list";
import React from "react";

export function HundredCards() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: "black",
        p: 2,
        display: "flex",
        borderRadius: 4,
        flexDirection: "column",
        gap: 2,
      }}
    >
      <SubTitle sx={{ fontSize: "48px" }}>Vertical Cards</SubTitle>
      <Stack overflow="auto" direction="row" padding={2}>
        <VerticalCardList />
      </Stack>
    </Container>
  );
}
