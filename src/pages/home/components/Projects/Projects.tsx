import { ProjectCard } from "../../../../components/common";
import { Container } from "../../../../components/layout";

import { PROJECTS } from "../../../../constants";

import styles from "./Projects.module.scss";

export const Projects = () => {
  const numberOfProjects = PROJECTS.length;

  return (
    <Container id="projects" background="#f2f2f2">
      <h2 className={styles.title}>Projects</h2>

      {PROJECTS.map(
        ({ title, date, link, embeddedLink, technologies }, index) => (
          <ProjectCard
            key={index}
            order={`${index + 1}/${numberOfProjects}`}
            title={title}
            date={date}
            link={link}
            technologies={technologies}
          />
        )
      )}
    </Container>
  );
};
