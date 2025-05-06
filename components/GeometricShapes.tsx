'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Icosahedron } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

function ShapeGroup() {
  const group = useRef();
  
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <group ref={group}>
      <motion.mesh
        position={[-2, 0, 0]}
        animate={{
          y: [0, 0.5, 0],
          rotateY: [0, Math.PI * 2],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut"
        }}
      >
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#ff5722" wireframe />
      </motion.mesh>

      <motion.mesh
        position={[2, 0, 0]}
        animate={{
          y: [0, -0.5, 0],
          rotateY: [0, -Math.PI * 2],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#2d3748" wireframe />
      </motion.mesh>

      <motion.mesh
        position={[0, 2, 0]}
        animate={{
          y: [2, 1.5, 2],
          rotateZ: [0, Math.PI * 2],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#3182ce" wireframe />
      </motion.mesh>
    </group>
  );
}

export default function GeometricShapes() {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <ShapeGroup />
      </Canvas>
    </div>
  );
}
