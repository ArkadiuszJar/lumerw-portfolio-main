import styles from "./AnimatedHeaderLink.module.scss";

type AnimatedHeaderLinkProps = {
  children: React.ReactNode;
  to: string;
  className?: string;
};

export const AnimatedHeaderLink = ({
  children,
  to,
  className,
}: AnimatedHeaderLinkProps) => {
  return (
    <a
      href={to}
      data-text={children}
      className={styles.animatedHeaderLink + " " + className}
    >
      <span>{children}</span>
    </a>
  );
};
