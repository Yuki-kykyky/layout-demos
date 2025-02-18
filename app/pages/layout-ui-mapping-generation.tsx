import { Container, Box } from "@mui/material";
import React from "react";
import { CardV1, CardV8 } from "../common/ui/page2/vertical-cards";
import { v5 } from "../constants/page2/v5";

export function LayoutUiMappingGeneration() {
  return (
    <Container maxWidth="lg">
      <Box
        data-layer="Frame 1"
        sx={{
          width: "1088px",
          height: "400px",
          paddingX: "70px",
          paddingY: "10px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "24px",
        }}
      >
        <Box
          data-layer="title"
          sx={{
            color: "black",
            fontSize: "12px",
            fontWeight: "normal",
            fontFamily: "Inter",
          }}
        >
          {v5.title}
        </Box>
        <Box
          data-layer="Group 2"
          sx={{
            height: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <CardV1
            headline={v5.cardV1.headline}
            content={v5.cardV1.content}
            image={v5.cardV1.image}
          />
          <CardV8
            tagLabel={v5.cardV8.tagLabel}
            headline={v5.cardV8.headline}
            content={v5.cardV8.content}
            image={v5.cardV8.image}
          />
        </Box>
      </Box>
    </Container>
  );
}
