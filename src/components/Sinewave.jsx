// SineWave.js
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function SineWave({ color = 'rgba(173, 216, 230, 0.6)', amplitude = 15, points = 20, speed = 2, height = 70 }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  // Generate initial sine wave path
  const generateSinePath = (phase = 0) => {
    const width = svgRef.current.clientWidth; // get current SVG width

    let path = `M0,${height / 2}`;
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * width;
      const y =
        height / 2 + Math.sin((i / points) * Math.PI * 2 + phase) * amplitude;
      path += ` L${x},${y}`;
    }
    return path;
  };

  useEffect(() => {
    const path = pathRef.current;
    let phase = 0;

    const animate = () => {
      phase += 0.05;
      path.setAttribute('d', generateSinePath(phase));
      requestAnimationFrame(animate);
    };

    animate();
  }, [amplitude, points, height]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height={height}
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <path
        ref={pathRef}
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

export default SineWave;
