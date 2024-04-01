import facebookIcon from "@/assets/icons/icon_facebook.png";
import twitterIcon from "@/assets/icons/icon_twitter.png";
import youtubeIcon from "@/assets/icons/icon_youtube.png";
import instagramIcon from "@/assets/icons/icon_instagram.png";
import Image, { StaticImageData } from "next/image";

type footerIconsType = {
  id: string;
  href: string;
  src: StaticImageData;
};
export const FOOTER_ICONS: footerIconsType[] = [
  {
    id: "facebookIcon",
    href: "https://www.facebook.com/",
    src: facebookIcon,
  },
  {
    id: "twitterIcon",
    href: "https://www.twitter.com/",
    src: twitterIcon,
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/",
    src: youtubeIcon,
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/",
    src: instagramIcon,
  },
];
