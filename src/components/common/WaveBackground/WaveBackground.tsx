import { Canvas } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";

import { ThreeBackground } from "./ThreeBackground";

const backgroundImage1 = () =>
  import("../../../images/landing/41.png?w=1920&webp&imagetools");
const backgroundImage2 = () =>
  import("../../../images/landing/40.png?w=1920&webp&imagetools");
const backgroundImage3 = () =>
  import("../../../images/landing/25.jpg?w=1920&webp&imagetools");
const backgroundImage4 = () =>
  import("../../../images/landing/43.png?w=1920&webp&imagetools");
const backgroundImage5 = () =>
  import("../../../images/landing/20.jpg?w=1920&webp&imagetools");
const backgroundImage6 = () =>
  import("../../../images/landing/33.jpg?w=1920&webp&imagetools");
const backgroundImage7 = () =>
  import("../../../images/landing/37.jpg?w=1920&webp&imagetools");
const backgroundImage8 = () =>
  import("../../../images/landing/31.jpg?w=1920&webp&imagetools");

import styles from "./WaveBackground.module.scss";

interface WaveBackgroundProps {
  waveSpeed?: number;
}

export const WaveBackground: React.FC<WaveBackgroundProps> = ({
  waveSpeed = 1,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  const backgrounds = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5,
    backgroundImage6,
    backgroundImage7,
    backgroundImage8,
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);

    backgrounds[randomIndex]().then((module) => {
      setBackgroundImage(module.default);
    });
  }, []);
  return (
    <Canvas
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        background: "black",
        zIndex: -1
      }}
    >
      <ThreeBackground imageUrl={backgroundImage} waveSpeed={waveSpeed} />
    </Canvas>
    // <div
    //   style={{
    //     width: "100%",
    //     height: "100%",
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     background: "black",
    //     zIndex: -1,
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // />
  );
};
