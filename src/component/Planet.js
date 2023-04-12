import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

function Car() {
  const carRef = useRef();

  // Rotate the car on each frame
  useFrame(() => {
    carRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={carRef}>
      {/* Car body */}
      <mesh position={[0, 0.5, 0]}>
        <boxBufferGeometry args={[2, 1, 4]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Car wheels */}
      <mesh position={[-1, -0.5, -1.5]}>
        <cylinderBufferGeometry args={[0.5, 0.5, 1, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[1, -0.5, -1.5]}>
        <cylinderBufferGeometry args={[0.5, 0.5, 1, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-1, -0.5, 1.5]}>
        <cylinderBufferGeometry args={[0.5, 0.5, 1, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[1, -0.5, 1.5]}>
        <cylinderBufferGeometry args={[0.5, 0.5, 1, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

const  Plnet =  () => {
    return (
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Car />
        </Canvas>
      );
    }


export default  Plnet;
