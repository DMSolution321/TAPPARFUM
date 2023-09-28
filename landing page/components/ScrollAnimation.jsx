import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useControls } from "leva";

gsap.registerPlugin(ScrollTrigger);

function ScrollAnimation() {
  const { camera } = useThree();

  // const { position, rotation } = useControls("camera", {
  //   position: {
  //     value: [0, 2.55, 0.55],
  //     step: 0.01,
  //   },
  //   rotation: {
  //     value: [0, 0, 0],
  //     step: 0.5,
  //   },
  // });

  useEffect(() => {
    let t1 = gsap.timeline({});
    const scrollDirection = { value: 0 };
    t1.from(camera.position, {
      x: 0,
      y: 0,
      z: 5,
    }).to(camera.position, {
      z: 4.5,
      y: 0,
      duration: 5,
    });

    ScrollTrigger.create({
      animation: t1,
      trigger: ".trigger",
      start: "top top",
      end: `+=2000`, // Adjust this value to control the total distance of the scroll animation
      scrub: 2,

      pin: true,
      anticipatePin: true,
      //check firection of scroll
      onUpdate: (self) => {
        if (self.direction > 0) {
          scrollDirection.value = 1;
        } else {
          scrollDirection.value = -1;
        }
      },
    });
  }, []);
  return null;
}

export default ScrollAnimation;
