import React from 'react';
import './style.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import FirstHeroSectionThree from '../FirstHeroSectionThree';

import FirstFrame from '../../assets/images/Square_4.png';

export default function FirstHeroSection() {
  return (
    <div className='firstHeroSection'>
      <div className='col-1L'>
        <h1 style={{ color: 'white' }}>Something</h1>
      </div>
      <div className='col-1R'>
        <img src={FirstFrame} alt="firstFrame" className='firstFrame' />
        <Canvas>
          <ambientLight intensity={0.8} color='#065e00' />
          <directionalLight
            intensity={0.8}
            color='#065e00'
          />
          <Stage environment='city' intensity={0.05}>
            <FirstHeroSectionThree />
          </Stage>
          <OrbitControls enableZoom={false} enableDamping={true} rotateSpeed={0.4} />
        </Canvas>
      </div>
    </div>  
  );
}