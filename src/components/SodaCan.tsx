"use client";

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/Soda-can.gltf");

const flavorTextures = {
  lemonLime: "/labels/RedBerry.jpg",
  grape: "/labels/PinkLemonade.jpg",
  blackCherry: "/labels/original.jpg",
  strawberryLemonade: "/labels/GlowApple.jpg",
  watermelon: "/labels/SugerFree.jpg",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function SodaCan({
  flavor = "blackCherry",
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF("/Soda-can.gltf");

  const labels = useTexture(flavorTextures);

  // Fixes upside down labels
  labels.strawberryLemonade.flipY = false;
  labels.blackCherry.flipY = false;
  labels.watermelon.flipY = false;
  labels.grape.flipY = false;
  labels.lemonLime.flipY = false;

  const label = labels[flavor];

return (
  <group
    {...props}
    dispose={null}
    scale={[scale, scale * 1.3, scale]}
    rotation={[0, -Math.PI, 0]}
  >
    <mesh
      castShadow
      receiveShadow
      geometry={(nodes.cylinder as THREE.Mesh).geometry}
      material={metalMaterial}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
    >
      <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
    </mesh>
    <mesh
      castShadow
      receiveShadow
      geometry={(nodes.Tab as THREE.Mesh).geometry}
      material={metalMaterial}
    />
  </group>
);
}
