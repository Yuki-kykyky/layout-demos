import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { WoopBtn } from "@/app/common/woop-ui";
import { TrendingUp, Check } from "@mui/icons-material";
import React from "react";

const StatCard = ({
  icon: Icon,
  color,
  value,
  label,
}: {
  icon: React.ElementType;
  color: string;
  value: string;
  label: string;
}) => (
  <Box
    sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 1, p: 4 }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          bgcolor: `${color}.50`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: 2,
            borderColor: `${color}.400`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: `${color}.400`,
          }}
        >
          <Icon />
        </Box>
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          {value}
        </Typography>
        <Typography color="text.secondary">{label}</Typography>
      </Box>
    </Box>
  </Box>
);

export const OverviewSection = () => {
  const stats = [
    { icon: TrendingUp, color: "red", value: "348", label: "Users" },
    { icon: Check, color: "cyan", value: "128", label: "Events" },
    { icon: TrendingUp, color: "yellow", value: "10", label: "Holidays" },
    { icon: Check, color: "green", value: "3458", label: "Payrolls" },
    { icon: TrendingUp, color: "purple", value: "3488", label: "Reports" },
  ];

  return (
    <Box sx={{ mb: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "text.primary" }}
        >
          Overview
        </Typography>
        <WoopBtn
          buttonText="Create Notice"
          startIcon={<Box component="span">+</Box>}
        />
      </Box>

      <Grid container spacing={4}>
        {stats.map((stat, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 2.4 }}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
