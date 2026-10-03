"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Core } from "./Core";
import { Suspense } from "react";

export const Scene = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <div className="fixed inset-0 w-full h-full z-0 bg-[#030405]">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ antialias: true, alpha: false }}>
        <color attach="background" args={['#030405']} />
        
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2.0} color="#c8ff38" />
        <directionalLight position={[-10, -10, -5]} intensity={2.0} color="#7766ff" />
        
        <Suspense fallback={null}>
          <Environment preset="night" />
        </Suspense>
        
        <Core />
      </Canvas>
    </div>
    {/* Page content scrolls normally over the fixed background */}
    <div className="w-full relative z-10 pointer-events-auto">
      {children}
    </div>
    </>
  );
};
