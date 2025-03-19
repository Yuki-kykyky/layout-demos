import { Variant } from "@mui/material/styles/createTypography";
import {
  getRandomText,
  getRandomTitle,
} from "@/app/common/section/random-const";
import { BtnType } from "@/app/common/woop-ui";
import { getVerticalCardGroups } from "@/app/common/section/random-groups";

export const propertiesSectionMatchProps = {
  eyebrowBadge: {
    content: "Properties",
  },
  title: {
    variant: "h3" as Variant,
    content: getRandomTitle(),
  },
  button: {
    buttonText: "All properties",
    type: BtnType.Filled,
  },
  verticalCards: getVerticalCardGroups(),
};

export const blogsSectionMatchProps = {
  eyebrowBadge: {
    content: "Blogs",
  },
  title: {
    variant: "h3" as Variant,
    content: getRandomTitle(),
  },
  verticalCards: getVerticalCardGroups(),
};

export const visionSectionMatchProps = {
  eyebrowBadge: {
    content: "Our Vision",
  },
  title: {
    variant: "h3" as Variant,
    content: getRandomTitle(),
  },
  button: {
    buttonText: "Learn more",
    type: BtnType.Filled,
  },
  visions: [
    {
      title: {
        variant: "body1" as Variant,
        content: getRandomTitle(),
      },
      content: getRandomText(),
    },
    {
      title: {
        variant: "body1" as Variant,
        content: getRandomTitle(),
      },
      content: getRandomText(),
    },
    {
      title: {
        variant: "body1" as Variant,
        content: getRandomTitle(),
      },
      content: getRandomText(),
    },
  ],
};

export const propertiesBannerMatchProps = {
  eyebrowBadge: {
    content: "Properties",
  },
  title: {
    variant: "h3" as Variant,
    content: getRandomTitle(),
  },
  button: {
    buttonText: "Book Now",
    type: BtnType.Outlined,
  },
};
