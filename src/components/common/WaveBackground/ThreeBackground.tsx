import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";

const WaveShaderMaterial = {
  uniforms: {
    u_time: { value: 0.0 },
    u_texture: { value: null },
  },
  vertexShader: `
    varying vec2 v_uv;
    void main() {
      v_uv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float u_time;
    uniform sampler2D u_texture;
    varying vec2 v_uv;
    void main() {
      vec2 uv = v_uv;
      uv.y += sin(uv.x * 20.0 + u_time) * 0.03;
      vec4 texture = texture2D(u_texture, uv);
      gl_FragColor = texture;
    }
  `,
};

interface TreeBackgroundProps {
  imageUrl: string;
  waveSpeed?: number;
}

type MeshRef = THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>;

export const ThreeBackground: React.FC<TreeBackgroundProps> = ({
  imageUrl,
  waveSpeed = 1,
}) => {
  const ref = useRef<MeshRef>();
  const { viewport } = useThree();

  const updatePlaneSize = () => {
    if (!ref.current || !texture.image) return;

    const aspectRatio = window.innerWidth / window.innerHeight;
    const textureAspectRatio = texture.image.width / texture.image.height;

    if (aspectRatio > textureAspectRatio) {
      ref.current.scale.x = viewport.width;
      ref.current.scale.y = viewport.width / textureAspectRatio;
    } else {
      ref.current.scale.x = viewport.height * textureAspectRatio;
      ref.current.scale.y = viewport.height;
    }
  };

  // Load the texture and call updatePlaneSize after it's loaded
  const texture = new TextureLoader().load(imageUrl, updatePlaneSize);

  useEffect(() => {
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
  }, [texture]);

  useEffect(() => {
    window.addEventListener("resize", updatePlaneSize);
    return () => {
      window.removeEventListener("resize", updatePlaneSize);
    };
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      // Multiply elapsed time by waveSpeed to control the speed of the wave
      ref.current.material.uniforms.u_time.value =
        clock.getElapsedTime() * waveSpeed;
    }
  });

  return (
    <mesh ref={ref as React.RefObject<MeshRef>}>
      <planeGeometry args={[1, 1, 128, 128]} />
      <shaderMaterial
        attach="material"
        {...WaveShaderMaterial}
        uniforms-u_texture-value={texture}
      />
      <ambientLight intensity={1} />
    </mesh>
  );
};
