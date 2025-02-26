import { Box, Stack, Typography } from "@mui/material";
import { BtnSize, BtnType, ChipType, WoopBtn, WoopChip, WoopIconBtn } from "@/app/common/ui/page2/woop";
import React from "react";
import {
	AccessTime,
	CalendarMonthOutlined,
	Close,
	CopyAll,
	DeleteOutline,
	EditOutlined,
	FavoriteOutlined,
	Star
} from "@mui/icons-material";
import { ColorPalette } from "@/app/common/styles/color-palette";

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
	<FavoriteOutlined sx={{color: (theme) => theme.palette.white}}/>
);
export const tags = (
	<Stack direction="row" gap={1} mb={0.5} flexWrap="wrap">
		<WoopChip label="Tag 1" type={ChipType.Secondary}/>
		<WoopChip label="Tag 2" type={ChipType.Secondary}/>
		<WoopChip label="Tag 3" type={ChipType.Secondary}/>
	</Stack>
);
export const getFooter = (type: "vertical" | "horizontal") => (
	<Stack
		direction="row"
		mt={0.5}
		justifyContent="space-between"
		flexDirection={type === "vertical" ? "row" : "row-reverse"}
	>
		<WoopBtn buttonText="2500" size={BtnSize.S} type={BtnType.Primary}/>
		<Stack direction="row" spacing={2}>
			<Stack direction="row" spacing={1} alignItems="center">
				<AccessTime sx={{color: "#2D5BFF"}}/>
				<Typography variant="body1" color="text.secondary">
					4 years
				</Typography>
			</Stack>
			<Stack direction="row" spacing={1} alignItems="center">
				<Star sx={{color: "#F7D523"}}/>
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
			icon={<EditOutlined/>}
			size={BtnSize.S}
		/>
		<WoopIconBtn
			sx={{
				px: "10px",
			}}
			type={BtnType.Secondary}
			icon={<CalendarMonthOutlined/>}
			size={BtnSize.S}
		/>
		<WoopIconBtn
			sx={{
				p: 1,
				bgcolor: ColorPalette.SystemColors.errorTertiary,
				color: ColorPalette.SystemColors.error,
			}}
			type={BtnType.Secondary}
			icon={<DeleteOutline/>}
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
			startIcon={<CopyAll/>}
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
			startIcon={<Close sx={{color: ColorPalette.SystemColors.error}}/>}
		/>
	</Stack>
);