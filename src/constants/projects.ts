import { SiLinktree } from "react-icons/si";

/**
 * Lista projektów, która wyświetla się w sekcji "Projects"
 *
 * Więcej zdjęć znajdziesz w folderze: src/assets/images/projects
 * tam też możesz dodać kolejne zdjęcia.
 */
export const PROJECTS = [
  {
    title: "BOMBDOPE",
    date: "Aug 2021",
    link: {
      url: "https://bombdope.com",
      title: "BOMBDOPE",
    },
    embeddedLink: "https://www.youtube.com/watch?v=GXN34w8kju4",
    technologies: ["Figma", "Redux", "Firebase"],
  },
  {
    title: "SEEDSPLASH",
    date: "Jan 2022",
    link: {
      url: "https://seedsplash.com/",
      title: "SEEDSPLASH",
    },
    embeddedLink: "https://www.youtube.com/watch?v=GXN34w8kju4",
    technologies: ["Figma", "Node.js", "MongoDB"],
  },
  {
    title: "WEEDWEEK",
    date: "Mar 2022",
    link: {
      url: "https://www.weedweek.pl/",
      title: "WEEDWEEK",
    },
    embeddedLink: "https://www.youtube.com/watch?v=GXN34w8kju4",
    technologies: ["React", "Firebase", "React Context API", "Axios"],
  },
  {
    title: "B.HONEY",
    date: "Jul 2022",
    link: {
      url: "https://bhoney.pl/",
      title: "B.HONEY",
    },
    embeddedLink: "https://www.youtube.com/watch?v=GXN34w8kju4",
    technologies: ["Vue", "Vuetify", "GitHub API", "Netlify", "Sass"],
  },
  {
    title: "SoMe",
    date: "Jul 2022",
    link: {
      url: "https://linktr.ee/wojciechlumer",
      icon: SiLinktree,
    },
    embeddedLink: "https://www.youtube.com/watch?v=GXN34w8kju4",
    technologies: ["Vue", "Vuetify", "GitHub API", "Netlify", "Sass"],
  },
  {
    title: "DTP",
    date: "Jul 2022",
    link: {
      url: "https://linktr.ee/wojciechlumer",
      icon: SiLinktree,
    },
    embeddedLink: "https://www.youtube.com/watch?v=GXN34w8kju4",
    technologies: ["Vue", "Vuetify", "GitHub API", "Netlify", "Sass"],
  },
];
