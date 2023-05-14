import { Accordion } from "../../../../components/common";
import { Container } from "../../../../components/layout";

import { FAQ } from "../../../../constants";

import styles from "./Faq.module.scss";

export const Faq = () => {
  return (
    <Container id="faq" background="#ffeb5d">
      <h3 className={styles.title}>Have any question?</h3>

      {FAQ.map(({ title, content }, index) => (
        <Accordion key={index} title={title}>
          {content}
        </Accordion>
      ))}
    </Container>
  );
};
