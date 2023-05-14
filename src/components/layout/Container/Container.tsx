import styles from "./Container.module.scss";

type ContainerProps = {
  children: React.ReactNode;
  id?: string;
  background?: string;
};

export const Container = ({ children, background, id }: ContainerProps) => {
  return (
    <div
      id={id || ""}
      className={styles.container}
      style={{
        backgroundColor: background,
      }}
    >
      <section className={styles.inner}>{children}</section>
    </div>
  );
};
