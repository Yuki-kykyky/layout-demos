import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
export const CardV1 = ({
  headline,
  content,
  image,
}: {
  headline: string;
  content: string;
  image: string;
}) => {
  return (
    <Card
      data-layer="1"
      sx={{
        width: 268,
        borderRadius: 3, // 12px
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 3, // 24px
          gap: 2, // 16px
        }}
      >
        <Box
          data-layer="picture"
          className="Picture"
          sx={{
            width: 56,
            height: 56,
            background: "#DEDEDE",
            borderRadius: "50%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
          }}
        />
        <Typography
          data-layer="Headline"
          className="Headline"
          sx={{
            width: 128,
            textAlign: "center",
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
          data-layer="Please add your content here. Keep it short and simple. And smile :)"
          className="PleaseAddYourContentHereKeepItShortAndSimpleAndSmile"
          sx={{
            width: 220,
            textAlign: "center",
            color: "#666666",
            fontSize: 14,
            fontFamily: "Source Code Pro",
            fontWeight: 400,
            wordWrap: "break-word",
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const CardV2 = ({
  image,
  headline,
  subtitle,
  content,
}: {
  image: string;
  headline: string;
  subtitle: string;
  content: string;
}) => {
  return (
    <Card
      sx={{
        width: 268,
        borderRadius: 3, // 12px
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 3, // 24px
          gap: 3, // 24px
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2, // 16px
          }}
        >
          <CardMedia
            component="div"
            sx={{
              width: 56,
              height: 56,
              background: "#DEDEDE",
              borderRadius: "50%",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 1, // 8px
            }}
          >
            <Typography
              sx={{
                width: 128,
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
              sx={{
                width: 139,
                color: "#666666",
                fontSize: 14,
                fontFamily: "Source Code Pro",
                fontWeight: 400,
                wordWrap: "break-word",
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            width: 220,
            color: "#666666",
            fontSize: 14,
            fontFamily: "Source Code Pro",
            fontWeight: 400,
            wordWrap: "break-word",
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const CardV3 = ({
  headline,
  content,
  tag,
}: {
  headline: string;
  content: string;
  tag: string;
}) => {
  return (
    <Card
      data-layer="3"
      sx={{
        width: 268,
        borderRadius: 3, // 12px
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          padding: 3, // 24px
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 1.25, // 10px
        }}
      >
        <Box
          data-layer="Content"
          className="Content"
          sx={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            gap: 3, // 24px
            display: "flex",
          }}
        >
          <Box
            data-layer="Frame 3"
            className="Frame3"
            sx={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 1.5, // 12px
              display: "flex",
            }}
          >
            <Typography
              data-layer="Headline"
              className="Headline"
              sx={{
                width: 128,
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
              data-layer="Please add your content here. Keep it short and simple. And smile :)"
              className="PleaseAddYourContentHereKeepItShortAndSimpleAndSmile"
              sx={{
                width: 220,
                color: "#666666",
                fontSize: 14,
                fontFamily: "Source Code Pro",
                fontWeight: 400,
                wordWrap: "break-word",
              }}
            >
              {content}
            </Typography>
          </Box>
          <Box
            data-layer="Tag"
            className="Tag"
            sx={{
              paddingLeft: 2.25, // 18px
              paddingRight: 2.25, // 18px
              paddingTop: 1, // 8px
              paddingBottom: 1, // 8px
              background: "#3C3C43",
              borderRadius: 3, // 12px
              border: "1px #3C3C43 solid",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: 1.25, // 10px
              display: "inline-flex",
            }}
          >
            <Typography
              data-layer="Tag or button"
              className="TagOrButton"
              sx={{
                color: "white",
                fontSize: 12,
                fontFamily: "Source Code Pro",
                fontWeight: 400,
                wordWrap: "break-word",
              }}
            >
              {tag}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export const CardV4 = ({
  headline,
  content,
  icons,
}: {
  headline: string;
  content: string;
  icons: string[]; // 可以传入图标的URL或其他标识
}) => {
  return (
    <Card
      sx={{
        width: 298,
        padding: 3,
        background: "white",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 1,
        boxShadow: "none", // 如果需要去除阴影
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          padding: 0,
        }}
        style={{
          paddingBottom: 0, // sx 优先级不足，需要通过 style 来设置覆盖原有的 paddingBottom
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          {icons.map((icon, index) => (
            <Box
              key={index}
              sx={{
                width: 40,
                height: 40,
                background: "#DEDEDE",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={icon}
                alt={`icon-${index}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{
              width: 128,
              color: "black",
              fontSize: 18,
              fontFamily: "Source Code Pro, monospace",
              fontWeight: 500,
              wordWrap: "break-word",
            }}
          >
            {headline}
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              width: 250,
              color: "#666666",
              fontSize: 14,
              fontFamily: "Source Code Pro, monospace",
              fontWeight: 400,
              wordWrap: "break-word",
            }}
          >
            {content}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
