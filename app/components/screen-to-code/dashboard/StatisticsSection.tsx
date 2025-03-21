import {
  GetApp,
  KeyboardArrowDown,
  ThumbUpOutlined,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const SalaryStatistics = () => (
  <Box
    sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 1, p: 4 }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "text.primary" }}
        >
          Salary Statistics
        </Typography>
        <KeyboardArrowDown sx={{ color: "primary.main" }} />
      </Stack>

      <Box
        sx={{
          bgcolor: "background.paper",
          border: 1,
          borderColor: "grey.200",
          borderRadius: 2,
          px: 3,
          py: 1,
        }}
      >
        <Stack>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            2014
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Marketing: 2437
            <br />
            Development: 7689
            <br />
            Design: 7689
            <br />
            Others: 7689
          </Typography>
        </Stack>
      </Box>
    </Box>

    <Box sx={{ height: 200 }}>
      <Box
        component="img"
        src="https://placehold.co/800x200/f0f0f0/cccccc?text=Salary+Statistics+Chart"
        alt="Salary statistics chart"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  </Box>
);

const EmployeeSatisfaction = () => (
  <Box
    sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 1, p: 4 }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary" }}>
        Employee Satisfaction
      </Typography>
      <GetApp sx={{ color: "text.secondary", cursor: "pointer" }} />
    </Box>

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 192,
      }}
    >
      <Box sx={{ position: "relative", width: 192, height: 192 }}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <ThumbUpOutlined
            sx={{ color: "text.secondary", mb: 1, fontSize: "1.5rem" }}
          />
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "text.primary" }}
          >
            74%
          </Typography>
        </Box>
        <Box
          component="img"
          src="https://placehold.co/200x200/f0f0f0/cccccc?text=74%+Gauge"
          alt="Employee satisfaction gauge"
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  </Box>
);

const PerformanceStatistics = () => {
  const teams = [
    { name: "Developer Team", value: 65, color: "orange" },
    { name: "Design Team", value: 84, color: "blue" },
    { name: "Marketing Team", value: 28, color: "teal" },
    { name: "Management Team", value: 16, color: "purple" },
  ];

  return (
    <Box
      sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 1, p: 4 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "text.primary" }}
        >
          Performance Statistics
        </Typography>
        <GetApp sx={{ color: "text.secondary", cursor: "pointer" }} />
      </Box>

      <Stack spacing={4}>
        {teams.map((team, index) => (
          <Box key={index}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography color="text.primary">{team.name}</Typography>
              <Typography sx={{ fontWeight: 600, color: "text.primary" }}>
                {team.value}%
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                bgcolor: "grey.200",
                borderRadius: 1,
                height: 8,
              }}
            >
              <Box
                sx={{
                  width: `${team.value}%`,
                  height: "100%",
                  borderRadius: 1,
                  background: `linear-gradient(to right, ${team.color}.500, ${team.color}.300)`,
                }}
              />
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

const NewEmployees = () => (
  <Box
    sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 1, p: 4 }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "text.primary" }}
        >
          New Employees
        </Typography>
        <KeyboardArrowDown sx={{ color: "primary.main" }} />
      </Stack>

      <Stack direction="row" spacing={4} alignItems="center">
        <Box
          sx={{
            bgcolor: "background.paper",
            border: 1,
            borderColor: "grey.200",
            borderRadius: 2,
            px: 3,
            py: 1,
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                2014
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Male: 248
                <br />
                Female: 194
              </Typography>
            </Stack>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "linear-gradient(to right, orange.500, orange.300)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "0.75rem",
                fontWeight: 600,
              }}
            >
              28%
            </Box>
          </Stack>
        </Box>

        <Stack direction="row" spacing={2} alignItems="center">
          <Typography color="text.secondary">Sort by</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "background.paper",
              border: 1,
              borderColor: "grey.200",
              borderRadius: 2,
              px: 3,
              py: 1,
            }}
          >
            <Typography sx={{ mr: 2 }}>Years</Typography>
            <KeyboardArrowDown sx={{ color: "primary.main" }} />
          </Box>
        </Stack>

        <GetApp sx={{ color: "text.secondary", cursor: "pointer" }} />
      </Stack>
    </Box>

    <Box sx={{ height: 200 }}>
      <Box
        component="img"
        src="https://placehold.co/800x200/f0f0f0/cccccc?text=New+Employees+Chart"
        alt="New employees chart"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  </Box>
);

export const StatisticsSection = () => {
  return (
    <Grid container spacing={6}>
      <Grid size={{ xs: 12, md: 6 }}>
        <SalaryStatistics />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <EmployeeSatisfaction />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <PerformanceStatistics />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <NewEmployees />
      </Grid>
    </Grid>
  );
};
