import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
  useAnimations,
} from '@react-three/drei'
import { proxy } from 'valtio'

const state = proxy({
  current: null,
})

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./sassyNinja/model.glb')
  const [hovered, set] = useState(null)
  console.log(hovered)
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.OlympusMons_LP_1_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.OlympusMons_LP_2_0.geometry}
              material={materials.material_2}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

export default function SassyNinja() {
  return (
    <div>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [4, 4, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Model scale={2} />
          <Environment preset="city" />
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
