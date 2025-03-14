import {
  getRandomImage,
  getRandomText,
  getRandomTitle,
} from "@/app/common/section/random-const";
import {
  getBtnFooter,
  getTags,
  getVerticalCardGroups,
} from "@/app/common/section/random-groups";
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
    content: getRandomTitle(),
  },
  subtitle: {
    variant: "body1" as Variant,
    content: getRandomText(),
  },
  horizontalCard: {
    image: getRandomImage(),
    pictureSize: 450,
    title: getRandomTitle(),
    headerSlot: getTags(),
    description: getRandomText(),
    footerSlot: getBtnFooter(),
  },
  verticalCards: getVerticalCardGroups(),
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

export const sectionBProps = {
  title: {
    variant: "h3" as Variant,
    content: getRandomTitle(),
  },
  subtitle: {
    variant: "body1" as Variant,
    content: getRandomText(),
  },
};
