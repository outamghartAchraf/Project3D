import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei'; 
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef();

  const animateEarth = () => {
    earthRef.current.rotation.y += 0.001;
  };

  return (
    <mesh ref={earthRef}>
      <sphereBufferGeometry  args={[1, 32, 32]} />
      <meshStandardMaterial  
       
        map={new THREE.TextureLoader().load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg')}
        normalMap={new THREE.TextureLoader().load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048_normal.jpg')}
      />
    </mesh>
  );
};

const RotatingEarth = () => {
  return (
    <Canvas


      onCreated={({ gl }) => {
        gl.setClearColor('0x000000, 0');
      }}
      camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight />  
      <color attach='background' args={['transparent']}/>
      
      <pointLight position={[10, 10, 10]} />
      <Earth />
      <OrbitControls autoRotate />
    </Canvas>
  );
};

export default RotatingEarth;
