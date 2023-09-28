import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useControls } from "leva";
import {
  Cloud,
  Sky,
  Html,
  Stars,
  useProgress,
  Environment,
  Float,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
// import { LayerMaterial, Color, Depth } from 'lamina'
import * as THREE from "three";
import { Model } from "./TP_WORLD_CONCEPT";
import { gsap } from "gsap";
import Buttons from "./buttons";
import ScrollAnimation from "./ScrollAnimation";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html className='text-xl mt-20 w-20' center>
      {progress} %
    </Html>
  );
};

const MovingLight = () => {
  const lightRef = useRef();

  // Use the useFrame hook to update the light position on each frame
  useFrame((state, delta) => {
    if (lightRef.current) {
      // Update the light's position here
      // You can change the light's position based on time or any other parameter
      const time = state.clock.elapsedTime;
      const radius = 25;
      const xPos = radius * Math.cos(time * 0.5);
      const zPos = radius * Math.sin(time * 0.5);
      lightRef.current.position.set(xPos, 10, zPos);
    }
  });

  return <pointLight ref={lightRef} intensity={1} color='white' />;
};

const BelleModel = () => {
  const gltf = useLoader(GLTFLoader, "/Models/sf_girl.glb");
  const model = useRef();
  const mixer = new THREE.AnimationMixer(gltf.scene);
  const clips = gltf.animations;
  console.log("clips", clips);
  mixer.clipAction(clips[0]).play();

  useFrame((state, delta) => {
    if (model.current) {
      mixer.update(0.2);
    }
  });
  // const { pos, rot } = useControls("belle", {
  //   pos: {
  //     value: [0.2600000000000001, -0.2900000000000001, 4.7599999999999945],

  //     step: 0.01,
  //   },
  //   rot: { value: [0, -0.8, 0], step: 0.01 },
  // });
  console.log(gltf);
  return (
    <primitive
      ref={model}
      position={[0.2600000000000001, -0.2900000000000001, 4.7599999999999945]}
      rotation={[0, -0.8, 0]}
      object={gltf.scene}
      scale={0.12}
    />
  );
};

const Clounds = () => {
  const clouds = [
    // { pos: [0, -4.8, 0], rot: [0.2, 0, 0], color: 'white' },
    // { pos: [4, -4.8, 2], rot: [0.1, 0.2, 0], color: 'pink' },
    // { pos: [4, 2.8, 7], rot: [0.1, 0.2, 0], color: 'pink' },
    // { pos: [3, -4.8, 0], rot: [0.1, 0.2, 0], color: 'white' },
    // { pos: [-4.5, -4.8, 2], rot: [0.1, 0.2, 0], color: 'pink' },
    // { pos: [0, 4, -10], rot: [0.2, 0, 0], color: 'white' },
    { pos: [8.1, 0, -13], rot: [0.1, 0.2, 0], color: "#C0C0C0" },
    //{ pos: [3, 3.5, -15], rot: [0.1, 0.2, 0], color: 'white' },
    { pos: [-3, 5, -13], rot: [0.2, 0, 0], color: "#C0C0C0" },
    { pos: [8, 5.5, -12], rot: [0.1, 0.2, 0], color: "#C0C0C0" },
    { pos: [-7, 4.5, -15], rot: [0.1, 0.2, 0], color: "white" },
    { pos: [-15, 5, -13], rot: [0.2, 0, 0], color: "#F675A8" },
    { pos: [15, 5.5, -12], rot: [0.1, 0.2, 0], color: "#C0C0C0" },
    { pos: [-16, 5.5, -12], rot: [0.1, 0.2, 0], color: "#C0C0C0" },
    { pos: [-18, 4.5, -15], rot: [0.1, 0.2, 0], color: "#F675A8" },
    { pos: [-20, 4.5, -17], rot: [0.1, 0.2, 0], color: "#F675A8" },
    { pos: [12, 6, -18], rot: [0.15, 0, 0], color: "#C0C0C0" },
    { pos: [18, 6, -17], rot: [0.1, 0.1, 0], color: "#F675A8" },
    { pos: [-8, 4.5, -15], rot: [0.2, 0.15, 0], color: "#C0C0C0" },
    { pos: [-12, 5, -18], rot: [0.1, 0.1, 0], color: "#C0C0C0" },
    { pos: [20, 6, -16], rot: [0.12, 0.18, 0], color: "#F675A8" },
    { pos: [-20, 5, -18], rot: [0.1, 0.2, 0], color: "pink" },
    { pos: [22, 4.5, -17], rot: [0.15, 0.1, 0], color: "#C0C0C0" },
    { pos: [-24, 5, -14], rot: [0.1, 0.1, 0], color: "#C0C0C0" },
    { pos: [-18, 6.5, -18], rot: [0.1, 0.2, 0], color: "white" },
    { pos: [-22, 6.5, -17], rot: [0.12, 0.18, 0], color: "pink" },
    { pos: [28, 6, -19], rot: [0.1, 0.2, 0], color: "white" },
    { pos: [30, 4.5, -15], rot: [0.2, 0.1, 0], color: "#C0C0C0" },

    // Add more clouds here with different positions, rotations, and colors
  ];
  return (
    <>
      {clouds.map((cloud, index) => (
        <Cloud
          key={index}
          position={cloud.pos}
          rotation={cloud.rot}
          opacity={5}
          speed={0.4} // Rotation speed
          width={0.05} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={2} // Number of particles
          color={cloud.color} // Cloud color
        />
      ))}
    </>
  );
};

const Skybox = () => {
  return (
    <Sky
      sunPosition={[0, 0, -1000]}
      // Lower exposure for a darker effect
    />
  );
};

function scene() {
  const welcomeTextRef = useRef();

  useEffect(() => {
    // Create the fade-out animation for the welcome text
    const fadeOutAnimation = gsap.to(welcomeTextRef.current, {
      duration: 1,
      opacity: 0,
      delay: 5.5,
      onComplete: () => {
        welcomeTextRef.current.style.display = "none";
      },
    });

    return () => {
      fadeOutAnimation.kill();
    };
  }, []);
  return (
    <>
      <div className='h-screen w-[80vw] z-30 relative'>
        <div className='fixed w-screen h-screen  top-0 overflow-x-hidden'>
          <Canvas camera={{ fov: 75 }}>
            <Environment preset='sunset' />
            <pointLight position={[0, 0, 0]} intensity={1} />

            <Suspense fallback={<Loader />}>
              <BelleModel />
              <Clounds />
              <MovingLight />
              <Model />
              <Skybox />
              <ScrollAnimation />
            </Suspense>
          </Canvas>
        </div>

        <Buttons />
        <div
          ref={welcomeTextRef}
          className='text-white fixed font-playfair flex flex-col justify-between items-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
        >
          <span className='text-center w-[50vw] mb-5 text-6xl font-bold'>
            WELCOME TO THE WORLD OF TAPPAREUM
          </span>
        </div>
      </div>
      <section data-scroll-section style={{ height: "1vh" }}></section>
      <section
        className='trigger'
        data-scroll-section
        style={{ height: "20vh" }}
      ></section>
    </>
  );
}

export default scene;
