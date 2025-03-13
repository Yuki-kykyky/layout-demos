import { Container, Stack, Box, Rating } from "@mui/material";
import React from "react";
import { v4 } from "@/app/reference-const/v4";
import { HeaderTitle } from "@/app/common/components/titles";
import AvatarInfo from "@/app/common/components/avatar-info";
import { ItemTitle, SubTitle } from "@/app/common/components/titles";
import {
  ItemDescription,
  BaseDescription,
} from "@/app/common/components/descriptions";
import { OperationButton } from "@/app/common/components/buttons";

export default function HighlightsV4() {
  return (
    <Container maxWidth="lg">
      <Box p={6}>
        <HeaderTitle>{v4.highlights.title}</HeaderTitle>

        <Stack direction="row" spacing={4} mt={4}>
          {/* Section A */}
          <Stack spacing={2} flex={1} justifyContent="center">
            <AvatarInfo
              avatar={v4.highlights.sectionA.avatarInfo.imageSrc}
              avatarTitle={v4.highlights.sectionA.avatarInfo.title}
              avatarDescription={v4.highlights.sectionA.avatarInfo.description}
            />
            <Rating value={5} readOnly />
            <ItemTitle isTruncated>{v4.highlights.sectionA.title}</ItemTitle>
            <ItemDescription
              description={v4.highlights.sectionA.date}
              isTruncated
            />
            <BaseDescription
              description={v4.highlights.sectionA.description}
              isTruncated
              lineClamp={4}
            />
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
            <ItemTitle isTruncated>{v4.highlights.sectionC.title}</ItemTitle>
            <ItemDescription
              description={v4.highlights.sectionC.description}
              isTruncated
              lineClamp={3}
            />
            <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
              <OperationButton buttonText={v4.highlights.sectionC.buttonText} />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
