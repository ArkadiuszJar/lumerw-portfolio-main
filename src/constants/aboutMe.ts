/**
 * Informacje "o mnie", które wyświetlają się w sekcji "Reviews"
 *
 * Więcej ikon znajdziesz na stronie: https://react-icons.github.io/react-icons/
 */
import { BsFillStarFill } from "react-icons/bs";
import { HiTranslate } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export const ABOUT_ME = [
  {
    Icon: BsFillStarFill,
    label: "3+ years of experience",
  },
  {
    Icon: HiTranslate,
    label: "English and Polish fluently",
  },
  {
    Icon: MdSchool,
    label: "Studying",
  },
  {
    Icon: FaMapMarkerAlt,
    label: "Poland, Łódź",
  },
];
