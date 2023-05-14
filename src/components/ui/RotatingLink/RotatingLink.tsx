import styles from "./RotatingLink.module.scss";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { useState } from "react";

type RotatingLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const RotatingLink = ({ children, ...props }: RotatingLinkProps) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <a
      className={styles.link}
      {...props}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
    >
      {isClicked ? (
        <RiEyeCloseFill
          className={styles.icon}
          style={{
            transform: "translate(-50%, -30%)",
          }}
        />
      ) : (
        <RiEyeFill className={styles.icon} />
      )}

      <svg viewBox="0 0 500 500" className={styles.curvedText}>
        <path
          id="curve"
          fill="transparent"
          d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
        />
        <text>
          {/* <textPath href="#curve">Click to see the live version!</textPath> */}
          <textPath href="#curve">Video soon available!</textPath>
        </text>
      </svg>
    </a>
  );
};
