"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Torus, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const CoreGroup = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#0a0a0a"
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.9}
            roughness={0.1}
            distort={0.2}
            speed={2}
          />
        </Sphere>
      </Float>

      {/* Rings */}
      <Torus args={[2.5, 0.01, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#777D84" transparent opacity={0.3} />
      </Torus>
      <Torus args={[3.5, 0.01, 16, 100]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <meshBasicMaterial color="#C8FF38" transparent opacity={0.5} />
      </Torus>
      <Torus args={[4.5, 0.01, 16, 100]} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <meshBasicMaterial color="#7766FF" transparent opacity={0.3} />
      </Torus>

      {/* Orbiting Particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
        >
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color={Math.random() > 0.8 ? "#C8FF38" : "#F3F4EF"} />
        </mesh>
      ))}
    </group>
  );
};

export const DigitalCore = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#C8FF38" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#7766FF" />
        <CoreGroup />
      </Canvas>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] z-0" />
    </div>
  );
};
