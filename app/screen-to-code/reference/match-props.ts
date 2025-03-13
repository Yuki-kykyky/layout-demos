import { BtnSize, BtnType } from "@/app/common/woop-ui";
import { Variant } from "@mui/material/styles/createTypography";

export const headerBannerProps = {
  title: {
    variant: "h3" as Variant,
    content: "Place to set headline",
  },
  subtitle: {
    variant: "body1" as Variant,
    content:
      "Place to set subtitle, Praesent commodo cursus magna, vel scelerisque nisl consectetur et."+
      " Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui."+
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
