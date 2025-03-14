import {
  floatIcon,
  getFooter,
  tags,
} from "@/app/common/section/common-section";
import { BtnSize, BtnType } from "@/app/common/woop-ui";
import { Variant } from "@mui/material/styles/createTypography";

export const headerBannerProps = {
  title: {
    variant: "h2" as Variant,
    content: "Place to set headline",
  },
  subtitle: {
    variant: "body1" as Variant,
    content:
      "Place to set subtitle, Praesent commodo cursus magna, vel scelerisque nisl consectetur et." +
      " Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui." +
      " Donecullamcorper nulla non metus auctor fringilla.",
  },
  buttonGroup: {
    first: {
      buttonText: "button left",
      size: BtnSize.S,
      type: BtnType.Outlined,
    },
    second: {
      buttonText: "button right",
      size: BtnSize.S,
      type: BtnType.Filled,
    },
  },
  image: {
    src: "/goooose9.jpg",
    alt: "Hero Image",
    width: 600,
    height: 400,
  },
};

export const sectionAProps = {
  title: {
    variant: "h3" as Variant,
    content: "Place to set Section A headline",
  },
  subtitle: {
    variant: "body1" as Variant,
    content:
      "Place to set Section A subtitle, Install the Figma plugin and you're ready to convert your designs to a responsive site.",
  },
  horizontalCard: {
    image: "/goooose9.jpg",
    pictureSize: 450,
    title: "Card title",
    headerSlot: tags,
    description:
      "A quick word about @framer. Framer is forever changing the experience of designing for the web. Forget about a design tool. Once you get the basics, you're not on a design tool anymore. You're creating your product/story in the medium itself. As friendly & powerful as it is.",
    footerSlot: getFooter("horizontal"),
  },
  verticalCards: [
    {
      image: "/goooose9.jpg",
      description: "just a card content",
    },
    {
      image: "/goooose9.jpg",
      headerSlot: tags,
      description: "card content with header tags, with float icon",
      floatIcon,
    },
    {
      image: "/goooose9.jpg",
      description: "card content with footer",
      footerSlot: getFooter("vertical"),
    },
    {
      image: "/goooose9.jpg",
      floatIcon,
      headerSlot: tags,
      description: "card content with header tags and footer, with float icon",
      footerSlot: getFooter("vertical"),
    },
    {
      image: "/goooose9.jpg",
      description: "just a card content",
    },
    {
      image: "/goooose9.jpg",
      headerSlot: tags,
      description: "card content with header tags, with float icon",
      floatIcon,
    },
    {
      image: "/goooose9.jpg",
      description: "card content with footer",
      footerSlot: getFooter("vertical"),
    },
    {
      image: "/goooose9.jpg",
      floatIcon,
      headerSlot: tags,
      description: "card content with header tags and footer, with float icon",
      footerSlot: getFooter("vertical"),
    },
  ],
  buttonGroup: {
    first: {
      buttonText: "button left",
      size: BtnSize.S,
      type: BtnType.Outlined,
    },
    second: {
      buttonText: "button right",
      size: BtnSize.S,
      type: BtnType.Filled,
    },
  },
};
