import { Container, Stack, Box, Rating } from "@mui/material";
import React from "react";
import { v4 } from "@/app/constants/v4";
import { Title } from "@/app/common/ui/title";
import AvatarInfo from "@/app/common/ui/avatar-info";
import { ItemTitle, SubTitle } from "@/app/common/ui/title";
import { ItemDescription, Description } from "@/app/common/ui/description";
import { OperationButton } from "@/app/common/ui/buttons";

export default function HighlightsV4() {
  return (
    <Container maxWidth="lg">
      <Box p={6}>
        <Title>{v4.highlights.title}</Title>

        <Stack direction="row" spacing={4} mt={4}>
          {/* Section A */}
          <Stack spacing={2} flex={1} justifyContent="center">
            <AvatarInfo
              avatar={v4.highlights.sectionA.avatarInfo.imageSrc}
              avatarTitle={v4.highlights.sectionA.avatarInfo.title}
              avatarDescription={v4.highlights.sectionA.avatarInfo.description}
            />
            <Rating value={5} readOnly />
            <ItemTitle>{v4.highlights.sectionA.title}</ItemTitle>
            <ItemDescription description={v4.highlights.sectionA.date} />
            <Description description={v4.highlights.sectionA.description} />
          </Stack>

          {/* Section B */}
          <Box position="relative" sx={{ width: 300 }}>
            <Box
              component="img"
              src={v4.highlights.sectionB.imageSrc}
              sx={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: 4,
                background:
                  "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))",
                p: 2,
              }}
            >
              <SubTitle>{v4.highlights.sectionB.subtitle}</SubTitle>
            </Box>
          </Box>

          {/* Section C */}
          <Stack spacing={2} sx={{ width: 320, position: "relative" }}>
            <Box
              component="img"
              src={v4.highlights.sectionC.imageSrc}
              sx={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 4,
              }}
            />
            <ItemTitle>{v4.highlights.sectionC.title}</ItemTitle>
            <ItemDescription description={v4.highlights.sectionC.description} />
            <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
              <OperationButton buttonText={v4.highlights.sectionC.buttonText} />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
