import { Variant } from "@mui/material/styles/createTypography";
import { getRandomTitle } from "@/app/common/section/random-const";
import { BtnType } from "@/app/common/woop-ui";
import { getVerticalCardGroups } from "@/app/common/section/random-groups";

export const PropertiesSectionMatchProps = {
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
