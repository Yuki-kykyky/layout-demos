import React from "react";
import { Container, Stack, Typography, Box } from "@mui/material";
import { WoopBadge } from "@/app/common/woop-ui";
import { propertiesSectionMatchProps } from "../../reference/v2/match-props";

export const PropertyDetail = ({ id }: { id: string }) => {
  const { eyebrowBadge, title } = propertiesSectionMatchProps;

  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container>
        <Stack spacing={4}>
          <Stack>
            <WoopBadge content={eyebrowBadge.content} />
            <Typography variant={title.variant} sx={{ mt: 1 }}>
              {title.content} - {id}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
