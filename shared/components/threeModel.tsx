import React, { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useLoader } from '@react-three/fiber'
import {
  ContactShadows,
  OrbitControls,
  PresentationControls,
} from '@react-three/drei'

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/sassyNinja/scene.gltf')
  return (
    <>
      <primitive object={gltf.scene} scale={13} />
    </>
  )
}

export default function SassyNinja() {
  return (
    <div className="h-[80vh] ">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [-20, 17, -20], fov: 50 }}
      >
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={5}
          angle={2}
          penumbra={1}
          position={[10, 30, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Model />

          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.8, 0]}
            opacity={0.25}
            width={10}
            height={10}
            blur={1.5}
            far={0.8}
          />
        </Suspense>

        <OrbitControls autoRotate />
      </Canvas>
    </div>
  )
}
