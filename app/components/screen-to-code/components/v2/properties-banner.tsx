"use client";
import { Box, Typography, Stack } from "@mui/material";
import {
  BtnSize,
  BtnType,
  WoopBadge,
  WoopBtn,
  WoopIconBtn,
} from "@/app/common/woop-ui";
import { KeyboardArrowDown, Search } from "@mui/icons-material";
import React from "react";
import { useRouter } from "next/navigation";
import { propertiesBannerMatchProps } from "../../reference/v2/match-props";
import { ColorPalette } from "@/app/common/styles/color-palette";
import { STCV2Routes } from "../../reference/route-reference";

export const PropertiesBanner = () => {
  const router = useRouter();
  const { eyebrowBadge, title, button } = propertiesBannerMatchProps;
  const { cta_button } = STCV2Routes.routes.modules.properties.banner;

  const handleClick = () => {
    router.push(cta_button.path);
  };

  return (
    <Stack
      gap={2}
      className="bg-blue-600 rounded-3xl py-16 px-4 mt-4"
      sx={{ alignItems: "center" }}
    >
      <WoopBadge
        color={ColorPalette.AccentViolet.accent1Secondary}
        content={eyebrowBadge.content}
        size={"M"}
        sx={{ py: 1, px: 2, borderRadius: 9999 }}
      />
      <Typography
        variant={title.variant}
        sx={{ maxWidth: "60%" }}
        color={"white"}
        textAlign={"center"}
      >
        {title.content}
      </Typography>
      <WoopBtn
        sx={{ my: 2, borderRadius: 9999 }}
        buttonText={button.buttonText}
        size={BtnSize.M}
        onClick={handleClick}
        type={button.type}
      />

      {/* Search Bar */}
      <Box className="bg-white rounded-full flex items-center p-1 max-w-3xl mx-auto">
        <Box className="flex items-center px-4 py-2">
          <Typography variant="body2" className="text-gray-700 mr-1">
            Types
          </Typography>
          <KeyboardArrowDown className="h-4 w-4 text-gray-400" />
        </Box>
        <Box className="border-l border-gray-300 flex items-center px-4 py-2">
          <Typography variant="body2" className="text-gray-700 mr-1">
            Bedroom
          </Typography>
          <KeyboardArrowDown className="h-4 w-4 text-gray-400" />
        </Box>
        <Box className="border-l border-gray-300 flex items-center px-4 py-2">
          <Typography variant="body2" className="text-gray-700 mr-1">
            Category
          </Typography>
          <KeyboardArrowDown className="h-4 w-4 text-gray-400" />
        </Box>
        <input
          type="text"
          placeholder="Search for home"
          className="flex-grow px-4 py-2 rounded-full outline-none text-gray-700"
        />
        <WoopIconBtn
          icon={<Search />}
          type={BtnType.Outlined}
          size={BtnSize.S}
          sx={{ p: 1, mr: 1, borderRadius: 999 }}
        />
      </Box>
    </Stack>
  );
};
