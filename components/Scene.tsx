 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Points, PointMaterial, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Core() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 1.8 + Math.random() * 1.5;
      arr.push(Math.cos(a) * r, (Math.random() - .5) * 3, Math.sin(a) * r);
    }
    return new Float32Array(arr);
  }, []);

  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x += (pointer.y * 0.15 - group.current.rotation.x) * 0.02;
    group.current.rotation.z += (pointer.x * 0.08 - group.current.rotation.z) * 0.02;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.45}>
        <mesh>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshPhysicalMaterial color="#9b7aff" emissive="#4c1d95" emissiveIntensity={1.5} metalness={0.55} roughness={0.12} transmission={0.35} transparent opacity={0.8} />
        </mesh>
      </Float>
      <Points positions={points} stride={3}>
        <PointMaterial transparent color="#c4b5fd" size={0.035} sizeAttenuation depthWrite={false} />
      </Points>
      <Line points={[[0,0,0], [2.5, .7, 0]]} color="#67e8f9" transparent opacity={0.35} lineWidth={1} />
      <Line points={[[0,0,0], [-2, -.5, .4]]} color="#f472b6" transparent opacity={0.35} lineWidth={1} />
      <Line points={[[0,0,0], [.5, 2, -1]]} color="#a78bfa" transparent opacity={0.35} lineWidth={1} />
    </group>
  );
}

export default function Scene() {
  return (
    <div className="scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, powerPreference: "high-performance" }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 2, 4]} intensity={18} color="#a78bfa" />
        <pointLight position={[-3, -1, 2]} intensity={10} color="#22d3ee" />
        <Stars radius={80} depth={30} count={700} factor={1.7} saturation={0} fade speed={0.25} />
        <Core />
      </Canvas>
    </div>
  );
}
