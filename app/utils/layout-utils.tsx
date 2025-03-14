import React, { ReactNode } from "react";
import { Grid2, Box, SxProps } from "@mui/material";

interface ColumnLayoutProps<T> {
  items: T[];
  columnLength: number;
  renderItem: (item: T, index: number) => ReactNode;
  itemSx?: SxProps;
}

export const createColumnLayout = <T,>({
  items,
  columnLength,
  renderItem,
  itemSx = {},
}: ColumnLayoutProps<T>) => {
  return (
    <Grid2 container spacing={4} gap={3} flexWrap="wrap">
      {Array.from({ length: columnLength }).map((_, columnIndex) => (
        <Grid2 key={columnIndex} size={{ xs: 12, sm: 6, md: 4 }}>
          {items
            .filter((_, index) => index % columnLength === columnIndex)
            .map((item, index) => (
              <Box key={index} sx={{ mb: 2, width: "100%", ...itemSx }}>
                {renderItem(item, index)}
              </Box>
            ))}
        </Grid2>
      ))}
    </Grid2>
  );
};
