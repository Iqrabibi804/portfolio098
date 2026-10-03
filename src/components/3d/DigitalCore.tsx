"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ElegantCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current || !meshRef2.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.15;
    meshRef.current.rotation.x = t * 0.1;
    
    meshRef2.current.rotation.y = -t * 0.1;
    meshRef2.current.rotation.z = t * 0.05;
    
    // gentle floating
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
    meshRef2.current.position.y = Math.sin(t * 0.5) * 0.3;
  });

  return (
    <group position={[4, 0, -2]}>
      {/* Outer subtle wireframe */}
      <mesh ref={meshRef} scale={2.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#c8ff38" wireframe transparent opacity={0.06} />
      </mesh>
      
      {/* Inner solid geometry with premium material */}
      <mesh ref={meshRef2} scale={1.4}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.12}
          flatShading
        />
      </mesh>
    </group>
  );
};

export const DigitalCore = () => (
  <div className="w-full h-full absolute inset-0 pointer-events-none z-0">
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#c8ff38" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
      <ElegantCore />
    </Canvas>
  </div>
);
