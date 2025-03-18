import { Variant } from "@mui/material/styles/createTypography";
import { getRandomTitle } from "@/app/common/section/random-const";
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
}
