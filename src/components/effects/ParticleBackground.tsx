"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

interface ParticleProps {
  position: [number, number, number];
  size: number;
  color: string;
  speed: number;
}

function Particle({ position, size, color, speed }: ParticleProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15 * speed;
      meshRef.current.position.y =
        initialY +
        Math.sin(state.clock.getElapsedTime() * speed + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// Tech icon as HTML floating in 3D space
interface TechIconProps {
  position: [number, number, number];
  text: string;
  color: string;
}

function TechIcon({ position, text, color }: TechIconProps) {
  return (
    <Float
      speed={2.5}
      rotationIntensity={0.2}
      floatIntensity={1.5}
      position={position}
    >
      <Html
        center
        distanceFactor={15}
        style={{
          color: color,
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: "monospace",
          opacity: 0.25,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          textShadow: `0 0 10px ${color}40`,
        }}
      >
        {text}
      </Html>
    </Float>
  );
}

function Particles() {
  const particles = useMemo(() => {
    const count = 60;
    const colors = ["#00D4FF", "#9D00FF", "#00FF9D", "#FF00FF"];
    const items: ParticleProps[] = [];

    for (let i = 0; i < count; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
        ] as [number, number, number],
        size: Math.random() * 0.3 + 0.1,
        color: colors[i % colors.length],
        speed: Math.random() * 0.5 + 0.3,
      });
    }

    return items;
  }, []);

  return (
    <>
      {particles.map((particle, i) => (
        <Particle key={i} {...particle} />
      ))}
    </>
  );
}

function FloatingTechIcons() {
  const icons = useMemo(() => {
    const techStack = [
      { text: "React", color: "#61DAFB" },
      { text: "Angular", color: "#DD0031" },
      { text: "TypeScript", color: "#3178C6" },
      { text: "Node.js", color: "#339933" },
      { text: "Next.js", color: "#FFFFFF" },
      { text: "JavaScript", color: "#F7DF1E" },
      { text: "MongoDB", color: "#47A248" },
      { text: "GraphQL", color: "#E10098" },
      { text: "Docker", color: "#2496ED" },
      { text: "AWS", color: "#FF9900" },
    ];

    return techStack.map((tech) => ({
      ...tech,
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 3,
      ] as [number, number, number],
    }));
  }, []);

  return (
    <>
      {icons.map((icon, i) => (
        <TechIcon key={i} {...icon} />
      ))}
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Particles />
      <FloatingTechIcons />
    </>
  );
}

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Radial glow effects */}
      <div className="absolute inset-0 particle-bg pointer-events-none" />
    </div>
  );
}
