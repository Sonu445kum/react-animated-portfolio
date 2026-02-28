import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  Sphere,
  Points,
  PointMaterial,
  Stars
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/* ========================= */
/* 🔮 Liquid Morph Blob */
/* ========================= */

const LiquidBlob = () => {
  const mesh = useRef();

  useFrame(({ clock }) => {
    mesh.current.rotation.y += 0.002;
    mesh.current.rotation.x += 0.001;
    mesh.current.scale.setScalar(
      1 + Math.sin(clock.elapsedTime * 2) * 0.05
    );
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={mesh} args={[1.8, 128, 128]} position={[2, 0, 0]}>
        <MeshTransmissionMaterial
          color="#8B5CF6"
          roughness={0}
          thickness={2}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.15}
        />
      </Sphere>
    </Float>
  );
};

/* ========================= */
/* ✨ Mouse Reactive Particles */
/* ========================= */

const Particles = () => {
  const points = useRef();
  const { mouse } = useThree();

  const count = 1500;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame(() => {
    points.current.rotation.y += 0.0005;
    points.current.position.x = mouse.x * 2;
    points.current.position.y = mouse.y * 2;
  });

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

/* ========================= */
/* 🎥 Scroll-Based Camera Motion */
/* ========================= */

const ScrollCamera = () => {
  const { camera } = useThree();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      camera.position.y = -scrollY * 0.002;
      camera.position.z = 6 + scrollY * 0.001;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [camera]);

  return null;
};

/* ========================= */
/* 🌌 Main Scene */
/* ========================= */

const Scene = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>

          <Environment preset="city" />
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />

          <ScrollCamera />

          <LiquidBlob />
          <Particles />
          <Stars radius={100} depth={50} count={2000} factor={4} fade />

          <EffectComposer>
            <Bloom intensity={1.2} luminanceThreshold={0.2} />
          </EffectComposer>

        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;