import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export default function ModelNT() {
  const { scene } = useGLTF('/PTIT_NT.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive 
      object={scene} 
      scale={[1, 1, 1]} 
      position={[0, 0, 0]} 
    />
  );
}

useGLTF.preload('/PTIT_NT.glb');