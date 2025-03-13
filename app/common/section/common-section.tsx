import { Box, Stack, Typography } from "@mui/material";
import {
  BtnSize,
  BtnType,
  ChipType,
  WoopBtn,
  WoopChip,
  WoopIconBtn,
} from "@/app/common/woop-ui";
import React from "react";
import {
  AccessTime,
  CalendarMonthOutlined,
  Close,
  CopyAll,
  DeleteOutline,
  EditOutlined,
  FavoriteOutlined,
  Star,
} from "@mui/icons-material";
import { ColorPalette } from "@/app/common/styles/color-palette";

export const textSection = (
  <>
    <Typography variant="body1">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros.
    </Typography>
    <Typography variant="body1">
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
    </Typography>
    <Typography variant="body1">
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
      magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
      ullamcorper nulla non metus auctor fringilla.
    </Typography>
  </>
);

export const buttonGroup = (
  <Stack
    direction="column"
    sx={{
      width: "100%",
      gap: 2,
    }}
  >
    <WoopBtn
      buttonText={"Primary Button"}
      type={BtnType.Primary}
      size={BtnSize.L}
      sx={{
        fontWeight: 800,
      }}
    />
    <WoopBtn
      buttonText={"Secondary Button"}
      type={BtnType.Secondary}
      size={BtnSize.L}
      sx={{
        fontWeight: 800,
      }}
    />
  </Stack>
);

export const imageSection = (
  <Box
    sx={{
      display: "flex",
      flexShrink: 0,
      width: 80,
      height: 80,
      background: "#DEDEDE",
      borderRadius: "8px",
      backgroundImage: "url(/goooose20.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
);

export const floatIcon = (
  <FavoriteOutlined sx={{ color: (theme) => theme.palette.white }} />
);
export const tags = (
  <Stack direction="row" gap={1} mb={0.5} flexWrap="wrap">
    <WoopChip label="Tag 1" type={ChipType.Secondary} />
    <WoopChip label="Tag 2" type={ChipType.Secondary} />
    <WoopChip label="Tag 3" type={ChipType.Secondary} />
  </Stack>
);
export const getFooter = (type: "vertical" | "horizontal") => (
  <Stack
    direction="row"
    mt={0.5}
    justifyContent="space-between"
    flexDirection={type === "vertical" ? "row" : "row-reverse"}
  >
    <WoopBtn buttonText="2500" size={BtnSize.S} type={BtnType.Primary} />
    <Stack direction="row" spacing={2}>
      <Stack direction="row" spacing={1} alignItems="center">
        <AccessTime sx={{ color: "#2D5BFF" }} />
        <Typography variant="body1" color="text.secondary">
          4 years
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Star sx={{ color: "#F7D523" }} />
        <Typography variant="body1" color="text.secondary">
          4.9
        </Typography>
      </Stack>
    </Stack>
  </Stack>
);
export const iconsAttachment = (
  <Stack gap={1}>
    <WoopIconBtn
      sx={{
        px: "10px",
      }}
      type={BtnType.Secondary}
      icon={<EditOutlined />}
      size={BtnSize.S}
    />
    <WoopIconBtn
      sx={{
        px: "10px",
      }}
      type={BtnType.Secondary}
      icon={<CalendarMonthOutlined />}
      size={BtnSize.S}
    />
    <WoopIconBtn
      sx={{
        p: 1,
        bgcolor: ColorPalette.SystemColors.errorTertiary,
        color: ColorPalette.SystemColors.error,
      }}
      type={BtnType.Secondary}
      icon={<DeleteOutline />}
      size={BtnSize.S}
    />
  </Stack>
);
export const iconTextAttachment = (
  <Stack
    sx={{
      borderLeft: (theme) => `1px solid ${theme.palette.grey[200]}`,
      gap: 1,
    }}
  >
    <WoopBtn
      buttonText="Action"
      size={BtnSize.S}
      type={BtnType.Tertiary}
      startIcon={<CopyAll />}
    />
    <WoopBtn
      buttonText="Cancel"
      sx={{
        color: ColorPalette.SystemColors.error,
        "&:hover": {
          bgcolor: ColorPalette.Background.bgLight,
        },
        "&:active": {
          color: ColorPalette.SystemColors.error,
          bgcolor: ColorPalette.Background.bgLight,
        },
      }}
      size={BtnSize.S}
      type={BtnType.Tertiary}
      startIcon={<Close sx={{ color: ColorPalette.SystemColors.error }} />}
    />
  </Stack>
);
