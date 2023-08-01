import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function FirstHeroSectionThree(props) {
  const { nodes, materials } = useGLTF('/xboxOne-transformed.glb');
  const initialRotation = [0.1, 4, 0];
  materials.Material_29.color.set('#39FF14');

  const myMesh1 = useRef({});
  const myMesh2 = useRef({});
  const myMesh3 = useRef({});
  const myMesh4 = useRef({});
  const myMesh5 = useRef({});
  const myMesh6 = useRef({});
  const myMesh7 = useRef({});
  const myMesh8 = useRef({});
  const myMesh9 = useRef({});

  useFrame(({ clock }) => {
    // const a = clock.getElapsedTime();
    // myMesh1.current.rotation.z = a;
    // myMesh2.current.rotation.z = a;
    // myMesh3.current.rotation.z = a;
    // myMesh4.current.rotation.z = a;
    // myMesh5.current.rotation.z = a;
    // myMesh6.current.rotation.z = a;
    // myMesh7.current.rotation.z = a;
    // myMesh8.current.rotation.z = a;
    // myMesh9.current.rotation.z = a;
  });

  return (
    <group {...props} dispose={null} rotation={initialRotation}>
      <mesh
        ref={myMesh1}
        geometry={nodes['45_Bumpers_Triggers_Material_#40_0'].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.077, 0, -0.076]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.015}
      /> 
      <mesh
        ref={myMesh2}
        geometry={nodes['46_Dpad_Material_#32_0'].geometry}
        material={materials.Material_32}
        position={[0.001, -0.005, -0.076]}
        rotation={[-Math.PI / 2, -0.157, -Math.PI / 2]}
        scale={0}
      />
      <mesh
        ref={myMesh3}
        geometry={nodes['54_Button_Covers_Material_#66_0'].geometry}
        material={materials.PaletteMaterial002}
        position={[-0.077, 0, -0.076]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.015}
      />
      <mesh
        ref={myMesh4}
        geometry={nodes['59_Port_1_Material_#54_0'].geometry}
        material={materials.Material_54}
        position={[-0.077, 0, -0.076]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.015}
      />
      <mesh
        ref={myMesh5}
        geometry={nodes['60_Port_2_Material_#41_0'].geometry}
        material={materials.Material_41}
        position={[0.001, -0.005, -0.076]}
        rotation={[-Math.PI / 2, -0.157, -Math.PI / 2]}
        scale={0}
      />
      <mesh
        ref={myMesh6}
        geometry={nodes['61_Audio_Port_Material_#37_0'].geometry}
        material={materials.Material_37}
        position={[0.001, -0.005, -0.076]}
        rotation={[-Math.PI / 2, -0.157, -Math.PI / 2]}
        scale={0}
      />
      <mesh
        ref={myMesh7}
        geometry={nodes['64_Front_Case_Material_#29_0'].geometry}
        material={materials.Material_29}
        position={[-0.077, 0, -0.076]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.015}
      />
      <mesh
        ref={myMesh8}
        geometry={nodes['49_Thumstickbot_Material_#53_0'].geometry}
        material={materials.Material_53}
        position={[-0.077, 0, -0.076]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.015}
      />
      <mesh
        ref={myMesh9}
        geometry={nodes['66_Nexus_Center1_Material_#52_0'].geometry}
        material={materials.PaletteMaterial003}
        position={[-0.077, 0, -0.076]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.015}
      />
    </group>
  );
}

useGLTF.preload('/xboxOne-transformed.glb');

// const ThreeScene = () => {


//   // const containerRef = useRef(null);

//   // useEffect(() => {
//   //   let scene, camera, renderer, controls;
//   //   const init = () => {
//   //     scene = new THREE.Scene();
//   //     scene.background = new THREE.Color(0xdddddd);

//   //     camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
//   //     camera.rotation.y = 45 / 180 * Math.PI;
//   //     camera.position.x = 800;
//   //     camera.position.y = 100;
//   //     camera.position.z = 1000;

//   //     controls = new OrbitControls(camera, containerRef.current);
//   //     controls.addEventListener('change', render);

//   //     const hlight = new THREE.AmbientLight(0x404040, 100);
//   //     scene.add(hlight);

//   //     const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
//   //     directionalLight.position.set(0, 1, 0);
//   //     directionalLight.castShadow = true;
//   //     scene.add(directionalLight);

//   //     const light = new THREE.PointLight(0xc4c4c4, 10);
//   //     light.position.set(0, 300, 500);
//   //     scene.add(light);

//   //     const light2 = new THREE.PointLight(0xc4c4c4, 10);
//   //     light2.position.set(500, 100, 0);
//   //     scene.add(light2);

//   //     const light3 = new THREE.PointLight(0xc4c4c4, 10);
//   //     light3.position.set(0, 100, -500);
//   //     scene.add(light3);

//   //     const light4 = new THREE.PointLight(0xc4c4c4, 10);
//   //     light4.position.set(-500, 300, 500);
//   //     scene.add(light4);

//   //     renderer = new THREE.WebGLRenderer({ antialias: true });
//   //     renderer.setSize(window.innerWidth, window.innerHeight);
//   //     containerRef.current.appendChild(renderer.domElement);

//   //     const loader = new GLTFLoader();
//   //     loader.load('scene.gltf', function (gltf) {
//   //       const car = gltf.scene.children[0];
//   //       car.scale.set(0.5, 0.5, 0.5);
//   //       scene.add(gltf.scene);
//   //       animate();
//   //     });
//   //   };

//   //   const animate = () => {
//   //     renderer.render(scene, camera);
//   //     requestAnimationFrame(animate);
//   //   };

//   //   const render = () => {
//   //     renderer.render(scene, camera);
//   //   };

//   //   init();

//   //   return () => {
//   //     renderer.dispose();
//   //   };
//   // }, []);

//   // return <div ref={containerRef} />;
// };

// export default ThreeScene;