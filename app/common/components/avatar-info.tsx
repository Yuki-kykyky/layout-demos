import React from "react";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";

const AvatarInfo = ({
  avatar,
  avatarTitle,
  avatarDescription,
}: {
  avatar: string;
  avatarTitle: string;
  avatarDescription: string;
}) => {
  return (
    <Stack direction="row" spacing={2} mb={2}>
      <Avatar src={avatar} sx={{ width: 48, height: 48 }} />
      <Box>
        <Typography fontFamily="Inter" fontWeight="bold" fontSize={16}>
          {avatarTitle}
        </Typography>
        <Typography color="text.secondary" fontFamily="Inter" fontSize={14}>
          {avatarDescription}
        </Typography>
      </Box>
    </Stack>
  );
};

export default AvatarInfo;
