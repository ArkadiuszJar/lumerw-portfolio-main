import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaQuestion,
} from "react-icons/fa";
import { MdOutlineEmail, MdInfo, MdHomeFilled } from "react-icons/md";
import { CgSmartphone } from "react-icons/cg";
import { HiStar } from "react-icons/hi";
import { RiSettings5Fill } from "react-icons/ri";
import type { IconType } from "react-icons";

import { fiverrIcon, upworkIcon, usemeIcon } from "../assets/icons";

type Link = {
  label: string;
  href: string;
  Icon?: IconType;
  SVGIcon?: string;
};

type FooterItems = {
  contact: Link[];
  work: Link[];
  navigation: Link[];
};

export const FOOTER_ITEMS: FooterItems = {
  contact: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/wojtek.lumer",
      Icon: FaFacebookF,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/lo0omer",
      Icon: FaInstagram,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/wojtek-lumer",
      Icon: FaLinkedin,
    },
    {
      label: "Behance",
      href: "https://www.behance.net/wojteklumer",
      Icon: FaBehance,
    },
    {
      label: "wojciechlumer@gmail.com",
      href: "mailto:wojciechlumer@gmail.com",
      Icon: MdOutlineEmail,
    },
    {
      label: "+48 502 877 182",
      href: "tel:+48502877182",
      Icon: CgSmartphone,
    },
  ],
  work: [
    {
      label: "Fiverr",
      href: "https://www.fiverr.com/wojciechlumer",
      SVGIcon: fiverrIcon,
    },
    {
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~01e1f1b1f1b1f1b1f1",
      SVGIcon: upworkIcon,
    },
    {
      label: "Useme",
      href: "https://useme.com/wojciechlumer",
      SVGIcon: usemeIcon,
    },
  ],
  navigation: [
    {
      label: "Home",
      href: "#",
      Icon: MdHomeFilled,
    },
    {
      label: "Experience",
      href: "#experience",
      Icon: MdInfo,
    },
    {
      label: "Reviews",
      href: "#reviews",
      Icon: HiStar,
    },
    {
      label: "Projects",
      href: "#projects",
      Icon: RiSettings5Fill,
    },
    {
      label: "Faq",
      href: "#faq",
      Icon: FaQuestion,
    },
    {
      label: "Contact",
      href: "#contact",
      Icon: MdOutlineEmail,
    },
  ],
};
