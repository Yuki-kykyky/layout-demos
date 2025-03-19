import { Variant } from "@mui/material/styles/createTypography";
import {
  getRandomImage,
  getRandomText,
  getRandomTitle,
} from "@/app/common/section/random-const";
import { BtnType } from "@/app/common/woop-ui";
import {
  getRandomIcon,
  getVerticalCardGroups,
} from "@/app/common/section/random-groups";
import { ColorPalette } from "@/app/common/styles/color-palette";

export const propertiesSectionMatchProps = {
  eyebrowBadge: {
    content: "Properties",
    size: "M" as const,
    color: ColorPalette.AccentViolet.accent1Secondary,
    textColor: ColorPalette.Greyscale.white,
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

export const aboutBannerMatchProps = {
  eyebrowBadge: {
    content: "About us",
    size: "M" as const,
    color: ColorPalette.AccentViolet.accent1Secondary,
    textColor: ColorPalette.Greyscale.white,
  },
  title: {
    variant: "h2" as Variant,
    content:
      "Connect with our experts and bring your Real Estate ideas to life",
    emphasize: "Real Estate",
  },
  imageGroup: [getRandomImage(), getRandomImage(), getRandomImage()],
  expert: {
    title: {
      variant: "subtitle2" as Variant,
      content: "Your trusted real estate experts:",
    },
    content: {
      description:
        "With years of local expertise, we're committed to helping you buy, sell, or invest in properties with confidence. Our personalized approach ensures every client's unique needs are met with professionalism and care.",
      button: {
        buttonText: "View Properties",
        type: BtnType.Filled,
      },
    },
  },
  stat: [
    { label: "Satisfaction rate", rate: "86%" },
    { label: "Properties sold", rate: "196+" },
    { label: "Project done", rate: "496+" },
    { label: "Happy Clients", rate: "86%" },
  ],
};

export const amenitiesSectionMatchProps = {
  eyebrowBadge: {
    content: "Amenities",
    size: "M" as const,
    color: ColorPalette.AccentViolet.accent1Secondary,
    textColor: ColorPalette.Greyscale.white,
  },
  title: {
    variant: "h3" as Variant,
    content: "Discover exceptional amenities for a luxurious lifestyle",
  },
  image: getRandomImage(),
  including: [
    {
      icon: getRandomIcon(),
      content: "Cleanliness strictly",
    },
    {
      icon: getRandomIcon(),
      content: "High speed Network",
    },
    {
      icon: getRandomIcon(),
      content: "Full time security & work",
    },
    {
      icon: getRandomIcon(),
      content: "luxurious lifestyle",
    },
    {
      icon: getRandomIcon(),
      content: "Gym and Store",
    },
  ],
};
