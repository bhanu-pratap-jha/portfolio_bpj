'use client'

import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData }) => {
  const containerRef = useRef(null);
  const animationInstance = useRef(null); // Ref to store the animation instance

  useEffect(() => {
    // Ensure previous animation is stopped and cleared when animationData changes
    if (animationInstance.current) {
      animationInstance.current.destroy();
    }

    if (containerRef.current) {
      animationInstance.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });
    }

    return () => {
      // Clean up when the component unmounts
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, [animationData]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default LottieAnimation;
