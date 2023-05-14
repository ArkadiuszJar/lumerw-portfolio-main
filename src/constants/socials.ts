/**
 * Lista social media, która wyświetla się w sekcji "Socials"
 *
 * Więcej ikon znajdziesz na stronie: https://react-icons.github.io/react-icons/
 */
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export const SOCIALS = [
  {
    label: "Facebook",
    Icon: FaFacebookF,
    href: "https://www.facebook.com/wojtek.lumer",
  },
  {
    label: "Instagram",
    Icon: FaInstagram,
    href: "https://instagram.com/lo0omer",
  },
  {
    label: "Behance",
    Icon: FaBehance,
    href: "https://www.behance.net/wojteklumer",
  },
  {
    label: "Linkedin",
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/wojtek-lumer",
  },
  {
    label: "Linktree",
    Icon: SiLinktree,
    href: "https://linktr.ee/wojciechlumer",
  },
];
