import React from "react";
import { Box, Stack } from "@mui/material";
import { HorizontalCard } from "@/app/common/ui/page2/woop/cards/horizontal-card";
import { VerticalCard } from "@/app/common/ui/page2/woop/cards/vertical-card";

interface TestTemplateProps {
  image: string;
  horizontalCards: Array<{
    image: string;
    description: string;
    headerSlot?: React.ReactNode;
    footerSlot?: React.ReactNode;
    pictureSize?: number;
  }>;
  verticalCards: Array<{
    image: string;
    description: string;
    headerSlot?: React.ReactNode;
    footerSlot?: React.ReactNode;
    floatIcon?: React.ReactNode;
  }>;
}

const TestTemplate: React.FC<TestTemplateProps> = ({
  image,
  horizontalCards,
  verticalCards,
}) => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* 第一行 - 图片和两个水平卡片 */}
      <Box sx={{ p: 0 }}>
        <Box sx={{ maxWidth: "100%", mx: "auto" }}>
          <Stack direction="row" spacing={0}>
            <Box sx={{ flex: "0 0 50%", maxWidth: "50%" }}>
              <Box sx={{ width: "100%", p: 0 }}>
                <Box sx={{ p: 1.25 }}>
                  <img
                    src={image}
                    alt="main"
                    style={{
                      width: "100%",
                      height: "796px",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box sx={{ flex: "0 0 50%", maxWidth: "50%" }}>
              <Box sx={{ width: "100%", p: 0 }}>
                {horizontalCards.slice(0, 2).map((card, index) => (
                  <Box key={index} sx={{ p: 1.25 }}>
                    <HorizontalCard
                      image={card.image}
                      description={card.description}
                      headerSlot={card.headerSlot}
                      footerSlot={card.footerSlot}
                      pictureSize={card.pictureSize}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* 第二行 - 一个水平卡片 */}
      <Box sx={{ p: 0 }}>
        <Box sx={{ maxWidth: "100%", mx: "auto" }}>
          <Stack direction="row" spacing={0}>
            <Box sx={{ flex: "0 0 100%", maxWidth: "100%" }}>
              <Box sx={{ width: "100%", p: 0 }}>
                <Box sx={{ p: 1.25 }}>
                  <HorizontalCard
                    image={horizontalCards[2].image}
                    description={horizontalCards[2].description}
                    headerSlot={horizontalCards[2].headerSlot}
                    footerSlot={horizontalCards[2].footerSlot}
                    pictureSize={horizontalCards[2].pictureSize}
                  />
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* 第三行 - 四个垂直卡片 */}
      <Box sx={{ p: 0 }}>
        <Box sx={{ maxWidth: "100%", mx: "auto" }}>
          <Stack direction="row" spacing={0}>
            {verticalCards.map((card, index) => (
              <Box key={index} sx={{ flex: "0 0 25%", maxWidth: "25%" }}>
                <Box sx={{ width: "100%", p: 0 }}>
                  <Box sx={{ p: 1.25 }}>
                    <VerticalCard
                      image={card.image}
                      description={card.description}
                      headerSlot={card.headerSlot}
                      footerSlot={card.footerSlot}
                      floatIcon={card.floatIcon}
                      pictureSize={320}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default TestTemplate;
