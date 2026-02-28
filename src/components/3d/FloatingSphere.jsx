import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";

const FloatingSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.x += 0.001;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export default FloatingSphere;