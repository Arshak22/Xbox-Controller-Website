/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 xboxOne.gltf --transform 
Files: xboxOne.gltf [2.05MB] > xboxOne-transformed.glb [1.21MB] (41%)
Author: Ahad4940 (https://sketchfab.com/Ahad4940)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/xboxone-controller-56bc325c399e4a67a71bdba6b48348f2
Title: XboxOne Controller
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/xboxOne-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['45_Bumpers_Triggers_Material_#40_0'].geometry} material={materials.PaletteMaterial001} position={[-0.077, 0, -0.076]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.025} />
      <mesh geometry={nodes['46_Dpad_Material_#32_0'].geometry} material={materials.Material_32} position={[0.001, -0.005, -0.076]} rotation={[-Math.PI / 2, -0.157, -Math.PI / 2]} scale={0} />
      <mesh geometry={nodes['54_Button_Covers_Material_#66_0'].geometry} material={materials.PaletteMaterial002} position={[-0.077, 0, -0.076]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.025} />
      <mesh geometry={nodes['59_Port_1_Material_#54_0'].geometry} material={materials.Material_54} position={[-0.077, 0, -0.076]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.025} />
      <mesh geometry={nodes['60_Port_2_Material_#41_0'].geometry} material={materials.Material_41} position={[0.001, -0.005, -0.076]} rotation={[-Math.PI / 2, -0.157, -Math.PI / 2]} scale={0} />
      <mesh geometry={nodes['61_Audio_Port_Material_#37_0'].geometry} material={materials.Material_37} position={[0.001, -0.005, -0.076]} rotation={[-Math.PI / 2, -0.157, -Math.PI / 2]} scale={0} />
      <mesh geometry={nodes['64_Front_Case_Material_#29_0'].geometry} material={materials.Material_29} position={[-0.077, 0, -0.076]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.025} />
      <mesh geometry={nodes['49_Thumstickbot_Material_#53_0'].geometry} material={materials.Material_53} position={[-0.077, 0, -0.076]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.025} />
      <mesh geometry={nodes['66_Nexus_Center1_Material_#52_0'].geometry} material={materials.PaletteMaterial003} position={[-0.077, 0, -0.076]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.025} />
    </group>
  )
}

useGLTF.preload('/xboxOne-transformed.glb')
