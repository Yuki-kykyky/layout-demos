import { floatIcon, getFooter, tags } from "@/app/common/section/common-section";

export const v6 = {
  image: "/goooose14.jpg",
  verticalCards: [
    {
      image: "/goooose30.jpg",
      description: "just a card content",
    },
    {
      image: "/goooose30.jpg",
      headerSlot: tags,
      description: "card content with header tags, with float icon",
      floatIcon,
    },
    {
      image: "/goooose30.jpg",
      description: "card content with footer",
      footerSlot: getFooter("vertical"),
    },
    {
      image: "/goooose30.jpg",
      floatIcon,
      headerSlot: tags,
      description: "card content with header tags and footer, with float icon",
      footerSlot: getFooter("vertical"),
    },
  ],
  horizontalCards: [
    {
      image: "/goooose20.jpg",
      description:
        "this is the first card, with content with footer, it should be displayed at the top of the page",
      footerSlot: getFooter("horizontal"),
      pictureSize: 350,
    },
    {
      image: "/goooose20.jpg",
      description:
        "this is the second card, with content with header tags, it should be displayed just below the first card",
      headerSlot: tags,
      pictureSize: 350,
    },
    {
      image: "/goooose20.jpg",
      description:
        "this is the third card, with content with header tags and footer, it should be 100% width of the page, and as the layout has been changed, it should be displayed below the second card but much wider than the first two cards",
      headerSlot: tags,
      footerSlot: getFooter("horizontal"),
      pictureSize: 468,
    },
  ],
};
