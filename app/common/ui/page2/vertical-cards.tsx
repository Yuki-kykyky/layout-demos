import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
} from "@mui/material";
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
                borderRadius: 3,
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
                  borderRadius: 3,
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

export const CardV5 = ({
  headline,
  content,
  svgContent,
}: {
  headline: string;
  content: string;
  svgContent: React.ReactNode;
}) => {
  return (
    <Card
      sx={{
        width: 304,
        padding: 3,
        background: "white",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 1.25,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 3,
        }}
        style={{ padding: 0 }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "150px",
          }}
        >
          {svgContent}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 0.5,
          }}
        >
          <Typography
            variant="h6"
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
            sx={{
              width: 256,
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

export const CardV6 = ({
  part,
  headline,
  content,
  buttons,
}: {
  part: string;
  headline: string;
  content: string;
  buttons: {
    label: string;
    variant: "outlined" | "contained";
  }[];
}) => {
  return (
    <Card
      sx={{
        width: 304,
        padding: 3,
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
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          gap: 2.625,
        }}
        style={{ padding: 0 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 0.5,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                width: 139,
                color: "#666666",
                fontSize: 14,
                fontFamily: "Source Code Pro, monospace",
                fontWeight: 400,
                wordWrap: "break-word",
              }}
            >
              {part}
            </Typography>
            <Typography
              variant="h6"
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
          </Box>
          <Typography
            variant="body2"
            sx={{
              width: 256,
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 2,
          }}
        >
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              sx={{
                borderRadius: "50px",
                paddingX: 1.5,
                paddingY: 1,
                fontSize: 12,
                fontFamily: "Source Code Pro, monospace",
                fontWeight: 400,
                textTransform: "none",
              }}
            >
              {button.label}
            </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export const CardV7 = ({
  headline,
  content,
  tags,
  avatar,
}: {
  headline: string;
  content: string;
  tags: string[];
  avatar?: string;
}) => {
  return (
    <Card
      sx={{
        padding: 3,
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
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 2,
        }}
        style={{ padding: 0 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            gap: 2,
          }}
        >
          <Box
            data-layer="picture"
            className="Picture"
            sx={{
              width: 32,
              height: 32,
              background: "#DEDEDE",
              borderRadius: "50%",
              backgroundImage: `url(${avatar})`,
              backgroundSize: "cover",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  width: 193,
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
                sx={{
                  width: 256,
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
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              gap: 2,
            }}
          >
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                variant="outlined"
                sx={{
                  borderColor: "#3C3C43",
                  color: "#3C3C43",
                  fontSize: 12,
                  fontFamily: "Source Code Pro, monospace",
                  fontWeight: 400,
                }}
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export const CardV8 = ({
  tagLabel,
  headline,
  content,
  image,
}: {
  tagLabel: string;
  headline: string;
  content: string;
  image: string;
}) => {
  return (
    <Card
      sx={{
        width: 304,
        background: "white",
        borderRadius: 2,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 198,
          position: "relative",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      >
        <Chip
          label={tagLabel}
          variant="filled"
          color="default"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "#3C3C43",
            borderRadius: "50px",
            border: "1px #3C3C43 solid",
            color: "white",
            fontSize: 12,
            fontFamily: "Source Code Pro, monospace",
            fontWeight: 400,
          }}
        />
      </Box>
      <CardContent
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 1.5,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            width: "100%",
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
          sx={{
            width: "100%",
            color: "#666666",
            fontSize: 14,
            fontFamily: "Source Code Pro, monospace",
            fontWeight: 400,
            wordWrap: "break-word",
            textAlign: "justify",
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const CardV9 = ({
  headline,
  subhead,
  svgContent,
  avatar,
  contents,
}: {
  headline: string;
  subhead: string;
  svgContent: React.ReactNode;
  avatar: string;
  contents: string[];
}) => {
  return (
    <Card
      sx={{
        width: 342,
        padding: 3,
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
          height: 75,
          width: "100%",
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
            position: "relative",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: 141,
              height: 43,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              data-layer="picture"
              className="Picture"
              sx={{
                width: 32,
                height: 32,
                background: "#DEDEDE",
                borderRadius: "50%",
                backgroundImage: `url(${avatar})`,
                backgroundSize: "cover",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 0.5,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  width: 101,
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
                sx={{
                  width: 101,
                  color: "#666666",
                  fontSize: 14,
                  fontFamily: "Source Code Pro, monospace",
                  fontWeight: 400,
                  wordWrap: "break-word",
                }}
              >
                {subhead}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: 16,
              height: 16,
              background: "#DEDEDE",
              borderRadius: "50%",
              position: "absolute",
              top: 13.5,
              right: 10,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 210,
        }}
      >
        {svgContent}
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 1.5,
          width: "100%",
        }}
        style={{ padding: 0 }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 2,
              width: "100%",
            }}
          >
            {contents.map((content, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    background: "#DEDEDE",
                    width: 32,
                    height: 32,
                    flexShrink: 0,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    fontFamily="Source Code Pro, monospace"
                    sx={{
                      color: "#666666",
                    }}
                  >
                    {index + 1}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666666",
                    fontSize: 14,
                    fontFamily: "Source Code Pro, monospace",
                    fontWeight: 400,
                    wordWrap: "break-word",
                    textAlign: "justify",
                  }}
                >
                  {content}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            <Chip
              label="Button 2"
              variant="outlined"
              sx={{
                paddingX: 1.5,
                paddingY: 1,
                borderRadius: "50px",
                borderColor: "#3C3C43",
                color: "#3C3C43",
                fontSize: 12,
                fontFamily: "Source Code Pro, monospace",
                fontWeight: 400,
              }}
            />
            <Chip
              label="Button 1"
              variant="filled"
              sx={{
                paddingX: 1.5,
                paddingY: 1,
                borderRadius: "50px",
                background: "#3C3C43",
                borderColor: "#3C3C43",
                color: "white",
                fontSize: 12,
                fontFamily: "Source Code Pro, monospace",
                fontWeight: 400,
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export const CardV10 = ({
  contents,
  headline,
  subhead,
}: {
  contents: string[];
  headline: string;
  subhead: string;
}) => {
  return (
    <Card
      sx={{
        width: 348,
        padding: 3,
        background: "white",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{
              width: 193,
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
              width: 108,
              color: "#181818",
              fontSize: 14,
              fontFamily: "Source Code Pro, monospace",
              fontWeight: 400,
              wordWrap: "break-word",
            }}
          >
            {subhead}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          {contents.map((content, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  background: "#DEDEDE",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#3C3C43",
                    fontFamily: "Source Code Pro, monospace",
                    fontWeight: 500,
                  }}
                >
                  {index + 1}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  width: 256,
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
          ))}
        </Box>
      </Box>
    </Card>
  );
};