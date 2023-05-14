import { MdInfo, MdHomeFilled } from "react-icons/md";
import { HiStar } from "react-icons/hi";
import { RiSettings5Fill } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";
import { IconType } from "react-icons";

type Page = {
  label: string;
  href: string;
  icon: IconType;
};

export const PAGES: Page[] = [
  {
    label: "Home",
    href: "#",
    icon: MdHomeFilled,
  },
  {
    label: "Experience",
    href: "#experience",
    icon: MdInfo,
  },
  {
    label: "Reviews",
    href: "#reviews",
    icon: HiStar,
  },
  {
    label: "Projects",
    href: "#projects",
    icon: RiSettings5Fill,
  },
  {
    label: "Faq",
    href: "#faq",
    icon: FaQuestion,
  },
];
