import { Card, Box, Stack, Typography, Divider, Chip } from "@mui/material";
import React from "react";

const CardH1 = ({
  headline,
  content,
  iconUrl,
}: {
  headline: string;
  content: string;
  iconUrl?: string;
}) => {
  return (
    <Card
      sx={{
        width: 540,
        height: 128,
        padding: 3,
        background: "white",
        borderRadius: 6,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            background: "#DEDEDE",
            borderRadius: "50%",
            backgroundImage: iconUrl ? `url(${iconUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={0.5}
        >
          <Typography
            variant="h6"
            sx={{
              color: "black",
              fontSize: 18,
              fontFamily: "Source Code Pro",
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            {headline}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              width: 380,
              color: "#3C3C43",
              fontSize: 14,
              fontFamily: "Source Code Pro",
              fontWeight: 400,
              wordWrap: "break-word",
            }}
          >
            {content}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};

const CardH2 = ({
  time,
  date,
  headline,
  content,
  iconUrl,
}: {
  time: string;
  date: string;
  headline: string;
  content: string;
  iconUrl?: string;
}) => {
  return (
    <Card
      sx={{
        width: 614,
        height: 112,
        paddingX: 3,
        paddingY: 2.25,
        background: "white",
        borderRadius: 6,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 1.25,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "black",
              fontSize: 14,
              fontFamily: "Source Code Pro",
              fontWeight: 600,
              wordWrap: "break-word",
            }}
          >
            {time}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "#666666",
              fontSize: 14,
              fontFamily: "Source Code Pro",
              fontWeight: 400,
              wordWrap: "break-word",
            }}
          >
            {date}
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            width: 4,
            background: "#E6E6E6",
            height: "80%",
            border: 0,
            alignSelf: "center",
          }}
        />
        <Box
          sx={{
            width: "420px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                background: "#DEDEDE",
                borderRadius: "50%",
                backgroundImage: iconUrl ? `url(${iconUrl})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "black",
                fontSize: 18,
                fontFamily: "Source Code Pro",
                fontWeight: 500,
                wordWrap: "break-word",
              }}
            >
              {headline}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#3C3C43",
              fontSize: 14,
              fontFamily: "Source Code Pro",
              fontWeight: 400,
              wordWrap: "break-word",
              width: "100%",
              textAlign: "justify",
            }}
          >
            {content}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

const CardH3 = ({
  headline,
  content,
  iconUrl,
  colorCode = "#3C3C43",
}: {
  headline: string;
  content: string;
  iconUrl?: string;
  colorCode?: string;
}) => {
  return (
    <Card
      sx={{
        width: 582,
        height: 104,
        background: "white",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          width: 16,
          height: "100%",
          background: colorCode,
        }}
      />
      <Box
        sx={{
          paddingX: 3,
          paddingY: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 24,
              background: "#DEDEDE",
              borderRadius: "50%",
              backgroundImage: iconUrl ? `url(${iconUrl})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "black",
              fontSize: 18,
              fontFamily: "Source Code Pro",
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            {headline}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            width: 518,
            color: "#3C3C43",
            fontSize: 14,
            fontFamily: "Source Code Pro",
            fontWeight: 400,
            wordWrap: "break-word",
          }}
        >
          {content}
        </Typography>
      </Box>
    </Card>
  );
};

const CardH4 = ({
  headline,
  content,
  tags,
  iconUrl,
}: {
  headline: string;
  content: string;
  tags: string[];
  iconUrl?: string;
}) => {
  return (
    <Card
      sx={{
        width: 582,
        padding: 2,
        background: "white",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 1.25,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 0.75,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 24,
              background: "#DEDEDE",
              borderRadius: "50%",
              backgroundImage: iconUrl ? `url(${iconUrl})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "black",
              fontSize: 18,
              fontFamily: "Source Code Pro",
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            {headline}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            width: 534,
            color: "#666666",
            fontSize: 14,
            fontFamily: "Source Code Pro",
            fontWeight: 400,
            wordWrap: "break-word",
            textAlign: "justify",
          }}
        >
          {content}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          marginTop: 1,
        }}
      >
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            sx={{
              background: tag.startsWith("Tag 1") ? "#3C3C43" : "transparent",
              color: tag.startsWith("Tag 1") ? "white" : "#3C3C43",
              border: "1px #3C3C43 solid",
              borderRadius: 4,
              fontSize: 12,
              fontFamily: "Source Code Pro",
              fontWeight: 400,
            }}
          />
        ))}
      </Box>
    </Card>
  );
};

const CardH5 = ({
  headline,
  content,
  time,
  iconUrl,
}: {
  headline: string;
  content: string;
  time: string;
  iconUrl?: string;
}) => {
  return (
    <Card
      sx={{
        width: 549,
        padding: "16px 24px",
        borderRadius: "12px",
        background: "white",
        overflow: "hidden",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={5}
      >
        <Stack direction="column" spacing={1}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box
              sx={{
                width: 24,
                height: 24,
                background: "#DEDEDE",
                borderRadius: "50%",
                backgroundImage: iconUrl ? `url(${iconUrl})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "black",
                fontSize: 18,
                fontFamily: "Source Code Pro",
                fontWeight: 500,
                wordWrap: "break-word",
              }}
            >
              {headline}
            </Typography>
          </Stack>
          <Typography
            sx={{
              width: 398,
              color: "#666666",
              fontSize: 14,
              fontFamily: "Source Code Pro",
              fontWeight: 400,
              wordWrap: "break-word",
            }}
          >
            {content}
          </Typography>
        </Stack>
        <Typography
          sx={{
            textAlign: "right",
            color: "rgba(102, 102, 102, 0.80)",
            fontSize: 12,
            fontFamily: "Source Code Pro",
            fontWeight: 400,
            wordWrap: "break-word",
          }}
        >
          {time}
        </Typography>
      </Stack>
    </Card>
  );
};

const CardH6 = ({
  headline,
  content,
  iconUrl,
}: {
  headline: string;
  content: string;
  iconUrl?: string;
}) => {
  return (
    <Card
      sx={{
        width: 576,
        py: 2,
        px: 3,
        background: "white",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 24,
            background: "#DEDEDE",
            borderRadius: "50%",
            backgroundImage: iconUrl ? `url(${iconUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            color: "black",
            fontSize: 18,
            fontFamily: "Source Code Pro",
            fontWeight: 500,
            wordWrap: "break-word",
          }}
        >
          {headline}
        </Typography>
      </Box>
      <Divider sx={{ width: 528, height: 2, background: "#E6E6E6" }} />
      <Typography
        variant="body2"
        sx={{
          width: 528,
          color: "#666666",
          fontSize: 14,
          fontFamily: "Source Code Pro",
          fontWeight: 400,
          wordWrap: "break-word",
        }}
      >
        {content}
      </Typography>
    </Card>
  );
};

export { CardH1, CardH2, CardH3, CardH4, CardH5, CardH6 };
