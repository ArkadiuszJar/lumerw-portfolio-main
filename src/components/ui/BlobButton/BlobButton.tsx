import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./BlobButton.module.scss";

type BlobButtonProps = {
  children: React.ReactNode;
  colorTheme?: "black" | "white";
  size?: "small" | "large";
  outsideLink?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export const BlobButton = forwardRef(function BlobButton(
  props: BlobButtonProps,
  ref: any
) {
  const {
    children,
    colorTheme,
    size,
    outsideLink,
    href,
    onClick,
    type,
    className,
  } = props;
  const Tag = href ? "a" : "button";

  const classes = classNames(styles.blobButton, {
    [styles[colorTheme || "black"]]: colorTheme,
    [styles[size || "large"]]: size,
    [className || ""]: className,
  });

  return (
    <Tag
      className={classes}
      href={href}
      onClick={onClick}
      type={type}
      target={outsideLink ? "_blank" : undefined}
      ref={ref}
    >
      <span>{children}</span>
    </Tag>
  );
});
