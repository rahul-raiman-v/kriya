import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

React.lazy(()=> import('react'));

React.lazy(()=> import('@react-three/drei'));
React.lazy(()=> import('@react-three/fiber'));

function Robot() {
  const { scene } = useGLTF('/assets/genkug_greeding_robot.gltf');
  return <primitive object={scene} scale={1.5} />;
}

export default function RobotViewer() {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Robot />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
