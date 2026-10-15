import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';

const RotatingShape =() => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if(meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.7, 1]}/>
      <meshStandardMaterial 
        color='#D4AF37'
        metalness={0.8}
        roughness={0.2}
      />

    </mesh>
  );
}

const Hero3D = () => {
  return (
  //  <section className='hero'>
  //   <div className='hero-content'>
  //     <h1>
  //       Custom Software &
  //       Digital Solution
  //     </h1>
  //     <p>
  //       Technology, design and business
  //       solutions for digital growth
  //     </p>
  //     <button>
  //       Book a free Consultation
  //     </button>
  //   </div>

    <div className='hero-3d'>
     <Canvas camera={{position:[0, 0, 5], fov: 45}}>
      <ambientLight intensity={1.5}/>
      <directionalLight position={[5, 5, 5]} intensity={3}/>
      <pointLight position={[-5, -5, -5]} intensity={2}/>
      <RotatingShape/>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        />

     </Canvas>
    </div>
  //  </section>
  )
}

export default Hero3D