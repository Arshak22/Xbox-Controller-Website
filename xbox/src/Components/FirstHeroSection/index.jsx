import React from 'react';
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../Routes";
import './style.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import FirstHeroSectionThree from '../FirstHeroSectionThree';

import FirstFrame from '../../assets/images/Square_1.png';

export default function FirstHeroSection() {
  return (
    <div className='firstHeroSection'>
      <div className='col-1L'>
        <h1>Unleash Your Gaming Potential</h1>
        <NavLink to={ROUTE_NAMES.SHOP} end className='neon-btn'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Start Gaming
        </NavLink>
      </div>
      <div className='col-1R'>
        <img src={FirstFrame} alt='firstFrame' className='firstFrame' />
        <Canvas>
          <ambientLight intensity={0.8} color='#10ff00' />
          <directionalLight intensity={0.8} color='#10ff00' />
          <Stage environment='city' intensity={0.05}>
            <FirstHeroSectionThree />
          </Stage>
          <OrbitControls
            enableZoom={false}
            enableDamping={true}
            rotateSpeed={0.4}
          />
        </Canvas>
      </div>
    </div>
  );
}