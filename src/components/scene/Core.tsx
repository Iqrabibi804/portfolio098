"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Core = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  useFrame((state, delta) => {
    if (!meshRef.current || !materialRef.current) return;
    
    // Base rotation
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.rotation.x += delta * 0.1;
    
    // Calculate native scroll offset (0 to 1)
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
    const s = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    
    // Breathing scale effect
    const baseScale = 2.5 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    let targetScaleX = baseScale;
    let targetScaleY = baseScale;
    let targetScaleZ = baseScale;
    
    // Transitions based on scroll position
    if (s < 0.2) {
      // 1. Hero: Crystalline orb
      materialRef.current.wireframe = false;
      materialRef.current.roughness = THREE.MathUtils.lerp(materialRef.current.roughness, 0.1, 0.1);
      materialRef.current.metalness = THREE.MathUtils.lerp(materialRef.current.metalness, 0.9, 0.1);
      materialRef.current.color.set("#c8ff38"); // Accent color
    } else if (s >= 0.2 && s < 0.5) {
      // 2. Skills: Expanded wireframe network
      targetScaleX = baseScale * 1.5;
      targetScaleY = baseScale * 1.5;
      targetScaleZ = baseScale * 1.5;
      materialRef.current.wireframe = true;
      materialRef.current.roughness = THREE.MathUtils.lerp(materialRef.current.roughness, 0.8, 0.1);
      materialRef.current.color.set("#7766ff"); // Indigo
    } else if (s >= 0.5 && s < 0.8) {
      // 3. Experience/Projects: Structured pillar
      targetScaleX = baseScale * 0.8;
      targetScaleY = baseScale * 2.5; // Stretched vertically
      targetScaleZ = baseScale * 0.8;
      materialRef.current.wireframe = false;
      materialRef.current.roughness = THREE.MathUtils.lerp(materialRef.current.roughness, 0.3, 0.1);
      materialRef.current.metalness = THREE.MathUtils.lerp(materialRef.current.metalness, 1.0, 0.1);
      materialRef.current.color.set("#ff7755"); // Coral/Red
    } else {
      // 4. Contact: Collapsed dense glowing core
      targetScaleX = baseScale * 0.5;
      targetScaleY = baseScale * 0.5;
      targetScaleZ = baseScale * 0.5;
      materialRef.current.wireframe = false;
      materialRef.current.roughness = THREE.MathUtils.lerp(materialRef.current.roughness, 0.0, 0.1);
      materialRef.current.color.set("#c8ff38");
    }
    
    // Smoothly apply scale
    meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScaleX, 0.05);
    meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScaleY, 0.05);
    meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScaleZ, 0.05);
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 3]} />
      <meshPhysicalMaterial 
        ref={materialRef}
        color="#c8ff38" 
        emissive="#020510"
        emissiveIntensity={0.5}
        metalness={0.9} 
        roughness={0.1}
        transmission={0.8} // Glassy liquid look
        thickness={2.0}
        envMapIntensity={2.0}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
};
