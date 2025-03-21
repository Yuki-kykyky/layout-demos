import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export const DataCards = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 2,
        mb: 3,
      }}
    >
      {/* Orders Created */}
      <Box sx={{ bgcolor: "white", borderRadius: 2, p: 2, boxShadow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0.5,
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            Orders Created
          </Typography>
          <IconButton size="small">
            <MoreHorizIcon sx={{ color: "grey.400" }} />
          </IconButton>
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mb: 1, display: "block" }}
        >
          Oct 16 / 21 - Nov 14 / 21
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 0.5 }}>
          $134,970
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            $128,451
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "success.light",
              color: "success.main",
              px: 1,
              py: 0.5,
              borderRadius: "9999px",
            }}
          >
            <Typography variant="caption">+12.98%</Typography>
            <TrendingUpIcon sx={{ fontSize: 16, ml: 0.5 }} />
          </Box>
        </Box>
      </Box>

      {/* Total Sales */}
      <Box
        sx={{
          bgcolor: "black",
          borderRadius: 2,
          p: 2,
          boxShadow: 1,
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0.5,
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            Total Sales
          </Typography>
          <IconButton size="small" sx={{ color: "grey.400" }}>
            <MoreHorizIcon />
          </IconButton>
        </Box>
        <Typography
          variant="caption"
          sx={{ mb: 1, display: "block", color: "grey.400" }}
        >
          Oct 16 / 21 - Nov 14 / 21
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 0.5 }}>
          $2,145,132.80
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" sx={{ color: "grey.400" }}>
            $2,141,554.20
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "error.light",
              color: "error.main",
              px: 1,
              py: 0.5,
              borderRadius: "9999px",
            }}
          >
            <Typography variant="caption">+4.98%</Typography>
            <TrendingDownIcon sx={{ fontSize: 16, ml: 0.5 }} />
          </Box>
        </Box>
      </Box>

      {/* PPC Sales */}
      <Box sx={{ bgcolor: "white", borderRadius: 2, p: 2, boxShadow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0.5,
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            PPC Sales
          </Typography>
          <IconButton size="small">
            <MoreHorizIcon sx={{ color: "grey.400" }} />
          </IconButton>
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mb: 1, display: "block" }}
        >
          Oct 16 / 21 - Nov 14 / 21
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 0.5 }}>
          $890.00
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            $872.00
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "success.light",
              color: "success.main",
              px: 1,
              py: 0.5,
              borderRadius: "9999px",
            }}
          >
            <Typography variant="caption">+0.17%</Typography>
            <TrendingUpIcon sx={{ fontSize: 16, ml: 0.5 }} />
          </Box>
        </Box>
      </Box>

      {/* Units Sales */}
      <Box sx={{ bgcolor: "white", borderRadius: 2, p: 2, boxShadow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0.5,
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            Units Sales
          </Typography>
          <IconButton size="small">
            <MoreHorizIcon sx={{ color: "grey.400" }} />
          </IconButton>
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mb: 1, display: "block" }}
        >
          Oct 16 / 21 - Nov 14 / 21
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 0.5 }}>
          $151,740
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            $145,869
          </Typography>
        </Box>
      </Box>

      {/* Organic Sales */}
      <Box sx={{ bgcolor: "white", borderRadius: 2, p: 2, boxShadow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0.5,
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            Organic Sales Ra...
          </Typography>
          <IconButton size="small">
            <MoreHorizIcon sx={{ color: "grey.400" }} />
          </IconButton>
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mb: 1, display: "block" }}
        >
          Oct 16 / 21 - Nov 14 / 21
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 0.5 }}>
          100.00%
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            100.00%
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "success.light",
              color: "success.main",
              px: 1,
              py: 0.5,
              borderRadius: "9999px",
            }}
          >
            <Typography variant="caption">+0.12%</Typography>
            <TrendingUpIcon sx={{ fontSize: 16, ml: 0.5 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
