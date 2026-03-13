"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    // Gentle follow mouse
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      pointer.y * 0.3,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      pointer.x * 0.5,
      0.05
    );

    // Breathe scale
    const s = 1 + Math.sin(t * 0.8) * 0.05;
    meshRef.current.scale.set(s, s, s);
  });

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 12]} />
        <MeshDistortMaterial
          color="#4d7cff"
          emissive="#1a3a8f"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          distort={0.25}
          speed={1.5}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Inner glow shell */}
      <mesh scale={[2.1, 2.1, 2.1]}>
        <icosahedronGeometry args={[1, 6]} />
        <meshBasicMaterial
          color="#4d7cff"
          transparent
          opacity={0.04}
          wireframe
        />
      </mesh>

      {/* Lights */}
      <pointLight position={[3, 3, 3]} color="#4d7cff" intensity={4} distance={10} />
      <pointLight position={[-3, -2, 2]} color="#8b5cf6" intensity={2} distance={8} />
      <pointLight position={[0, 0, 5]} color="#ffffff" intensity={0.5} distance={10} />
      <ambientLight intensity={0.15} />
    </>
  );
}

export default function InteractiveOrb() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Orb />
      </Canvas>
    </div>
  );
}
