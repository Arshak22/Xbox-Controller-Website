import React from 'react';
import './style.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import FirstHeroSectionThree from '../FirstHeroSectionThree';

export default function FirstHeroSection() {
  return (
    <div className='firstHeroSection'>
      <div className='col-1L'>
        <h1 style={{ color: 'white' }}>Something</h1>
      </div>
      <div className='col-1R'>
        <Canvas
          style={{ width: 'auto', height: '600px' }}
        >
          <ambientLight intensity={0.8} color='#39FF14' />
          <directionalLight
            intensity={0.8}
            color='#39FF14'
          />
          <Stage environment='city' intensity={0.05}>
            <FirstHeroSectionThree />
          </Stage>
          <OrbitControls enableZoom={false} enableDamping={true} />
        </Canvas>
      </div>
    </div>
  );
}