import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/globals.css'; // Import your CSS file

const RotatingTrianglePrism = () => {
  const prismRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(prismRef.current ?? {}, {
      duration: 10,
      repeat: -1,
      rotationY: 360, // Rotate around the Y-axis
      ease: 'none',
    });
  }, []);

  return (
    <div className="prism-container">
      <div ref={prismRef} className="prism">
        <div className="face face1"></div>
        <div className="face face2"></div>
        <div className="face face3"></div>
        <div className="face base1"></div>
        <div className="face base2"></div>
      </div>
      <h1 className="name">Samson Njogu</h1>
    </div>
  );
};

export default RotatingTrianglePrism;
