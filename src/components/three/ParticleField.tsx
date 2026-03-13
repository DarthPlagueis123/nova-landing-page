"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const count = 1500;

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      sz[i] = Math.random() * 0.03 + 0.005;
    }
    return [pos, sz];
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.04;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.1;
    }
    if (lightRef.current) {
      const t = clock.getElapsedTime() * 0.5;
      lightRef.current.position.x = Math.cos(t) * 5;
      lightRef.current.position.z = Math.sin(t) * 5;
      lightRef.current.position.y = Math.sin(t * 0.7) * 2;
    }
  });

  return (
    <>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={count}
          />
          <bufferAttribute
            attach="attributes-size"
            args={[sizes, 1]}
            count={count}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#4d7cff"
          size={0.035}
          sizeAttenuation
          transparent
          opacity={0.7}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Secondary particle layer */}
      <points rotation={[0.5, 0.3, 0]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(
              Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 18)
            ), 3]}
            count={count}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#8b5cf6"
          size={0.02}
          sizeAttenuation
          transparent
          opacity={0.4}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <pointLight ref={lightRef} color="#4d7cff" intensity={3} distance={15} />
      <pointLight position={[0, 3, -5]} color="#8b5cf6" intensity={1.5} distance={12} />
      <ambientLight intensity={0.05} />
    </>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
