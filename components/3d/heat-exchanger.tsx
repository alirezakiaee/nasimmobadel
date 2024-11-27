"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

function HeatExchangerModel() {
  return (
    <mesh>
      <cylinderGeometry args={[1, 1, 3, 32]} />
      <meshStandardMaterial color="#4287f5" metalness={0.8} roughness={0.2} />
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.2, 16, 32]} />
        <meshStandardMaterial color="#2d5ba3" metalness={0.8} roughness={0.2} />
      </mesh>
    </mesh>
  );
}

export default function HeatExchangerCanvas() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[3, 2, 5]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <HeatExchangerModel />
      </Suspense>
    </Canvas>
  );
}