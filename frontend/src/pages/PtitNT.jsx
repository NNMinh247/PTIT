import React from 'react';
import { Canvas } from '@react-three/fiber';
import Player from '../components/World/Player';
import ModelNT from '../components/World/ModelNT';
import BackButton from '../components/UI/BackButton';

export default function PtitNT() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      
      <BackButton />

      <div style={{ 
        position: 'absolute', 
        bottom: 20, 
        left: 20, 
        zIndex: 10, 
        color: 'white', 
        background: 'rgba(0,0,0,0.6)', 
        padding: '15px',
        borderRadius: '5px',
        pointerEvents: 'none'
      }}>
        <b>Điều khiển:</b><br/>
        Click chuột để bắt đầu<br/>
        [W A S D] : Di chuyển<br/>
        [Chuột] : Nhìn xung quanh<br/>
        [ESC] : Thoát chuột
      </div>

      <Canvas camera={{ fov: 60, position: [0, 1.6, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[50, 50, 25]} intensity={1.5} castShadow />
        
        <Player />
        <ModelNT />
      </Canvas>
    </div>
  );
}