import React from 'react';
import { Canvas } from 'react-three-fiber';

function Card() {
  return (
    <mesh>
      <planeBufferGeometry args={[2, 3]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}

const  Cardh = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Card />
    </Canvas>
  );
}

export default Cardh;