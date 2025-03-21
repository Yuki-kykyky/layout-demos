import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MouseIcon from "@mui/icons-material/Mouse";

export const SummaryCards = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 3,
        mb: 3,
      }}
    >
      {/* Summary */}
      <Box sx={{ bgcolor: "white", borderRadius: 2, p: 2, boxShadow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Summary
          </Typography>
          <IconButton size="small">
            <MoreHorizIcon sx={{ color: "grey.400" }} />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
              bgcolor: "blue.50",
              borderRadius: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "blue.500",
                }}
              />
              <Typography variant="body2">Overview</Typography>
            </Box>
            <Typography variant="body2">1,552</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
              bgcolor: "purple.50",
              borderRadius: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "purple.500",
                }}
              />
              <Typography variant="body2">Campaigns</Typography>
            </Box>
            <Typography variant="body2">1,552</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
              bgcolor: "pink.50",
              borderRadius: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "pink.500",
                }}
              />
              <Typography variant="body2">Ad Group</Typography>
            </Box>
            <Typography variant="body2">1,552</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
              bgcolor: "yellow.50",
              borderRadius: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "yellow.500",
                }}
              />
              <Typography variant="body2">Keywords</Typography>
            </Box>
            <Typography variant="body2">1,552</Typography>
          </Box>
        </Box>
      </Box>

      {/* Top 5 Products */}
      <Box sx={{ bgcolor: "white", borderRadius: 2, p: 2, boxShadow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Top 5 products by spend
          </Typography>
          <IconButton size="small">
            <MoreHorizIcon sx={{ color: "grey.400" }} />
          </IconButton>
        </Box>

        <Box sx={{ textAlign: "center", mb: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Total score
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            2,985
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            height: 128,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 128,
              height: 128,
              borderRadius: "50%",
              border: "20px solid",
              borderColor: "purple.400",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                $1,815.67
              </Typography>
              <Typography variant="caption" color="text.secondary">
                B07MCGRV7M
              </Typography>
            </Box>
          </Box>
          <Box sx={{ position: "absolute", inset: 0 }}>
            <Box
              sx={{
                width: 128,
                height: 128,
                mx: "auto",
                borderRadius: "50%",
                border: "20px solid",
                borderColor: "primary.light",
                opacity: 0.5,
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "25%",
              right: "25%",
              color: "black",
            }}
          >
            <MouseIcon />
          </Box>
        </Box>
      </Box>

      {/* Highest ACoS Campaigns */}
      <Box sx={{ bgcolor: "white", borderRadius: 2, p: 2, boxShadow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Highest ACoS campaigns
          </Typography>
          <IconButton size="small">
            <MoreHorizIcon sx={{ color: "grey.400" }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            mb: 1,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Campaign
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Spend
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Sales
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ACoS
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {[
            {
              campaign: "B08NY9N3MT",
              spend: "$30.25",
              sales: "$149.85",
              acos: "$149.85",
              type: "A",
            },
            {
              campaign: "Campaign - 3...",
              spend: "$40.00",
              sales: "$134.00",
              acos: "$134.50",
              type: "A",
            },
            {
              campaign: "Research - Ac...",
              spend: "$43.55",
              sales: "$129.75",
              acos: "$125.00",
              type: "M",
            },
            {
              campaign: "B087C75QQJ",
              spend: "$45.85",
              sales: "$113.00",
              acos: "$119.45",
              type: "M",
            },
            {
              campaign: "House Numbe...",
              spend: "$54.00",
              sales: "$99.55",
              acos: "$85.00",
              type: "A",
            },
          ].map((item) => (
            <Box
              key={item.campaign}
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 1,
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    bgcolor: item.type === "A" ? "purple.100" : "green.100",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    color={item.type === "A" ? "purple.600" : "green.600"}
                  >
                    {item.type}
                  </Typography>
                </Box>
                <Typography variant="body2">{item.campaign}</Typography>
              </Box>
              <Typography variant="body2">{item.spend}</Typography>
              <Typography variant="body2">{item.sales}</Typography>
              <Typography
                variant="body2"
                color="purple.600"
                fontWeight="medium"
              >
                {item.acos}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
