import { useRef, useEffect } from 'react';

function FrequencySpectrum({ height = 70, color = 'rgba(109, 182, 206, 0.8)', barCount = 128 }) {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const barsRef = useRef(Array(barCount).fill(0).map(() => ({
    energy: 0,
  })));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = height;

    // Track mouse position
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Clear canvas aggressively
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      timeRef.current += 0.016; // ~60fps
      const bars = barsRef.current;
      const mouse = mouseRef.current;

      // Normalize mouse position
      const mouseFreqPos = Math.max(0, Math.min(1, mouse.x / canvas.width));
      const mouseIntensity = Math.max(0.2, 1 - mouse.y / window.innerHeight); // Y controls input amplitude

      // Update and draw bars with accumulated energy
      const barWidth = canvas.width / barCount;
      const padding = 1;
      const peakWidth = 0.02; // narrow frequency input band

      for (let index = 0; index < barCount; index++) {
        // Normalize frequency position
        const normalizedFreq = index / (barCount - 1);
        
        // Distance from current mouse frequency
        const freqDistance = Math.abs(normalizedFreq - mouseFreqPos);
        
        // Energy accumulation: only accumulate when within the input band
        if (freqDistance < peakWidth) {
          // Gaussian-shaped input energy around mouse position
          const inputEnergy = Math.exp(-Math.pow(freqDistance / (peakWidth * 0.4), 2)) * mouseIntensity;
          // Slower, smoother accumulation
          bars[index].energy += inputEnergy * 0.02;
        } else {
          // STRONG decay when NOT in the input band
          bars[index].energy *= 0.70; // loses 30% per frame when not being driven
        }
        
        bars[index].energy = Math.max(0, Math.min(1, bars[index].energy)); // cap between 0 and 1

        const barEnergy = bars[index].energy;

        // Only draw if there's energy
        if (barEnergy > 0.01) {
          // Draw bar with gradient
          const x = index * barWidth + padding;
          const barHeight = barEnergy * canvas.height * 0.85;
          const y = canvas.height - barHeight;

          // Create gradient for each bar
          const gradient = ctx.createLinearGradient(x, canvas.height, x, y);
          gradient.addColorStop(0, color.replace('0.8', '0.2'));
          gradient.addColorStop(0.5, color.replace('0.8', '0.7'));
          gradient.addColorStop(1, color.replace('0.8', '1'));

          ctx.fillStyle = gradient;
          ctx.fillRect(x, y, barWidth - padding, barHeight);

          // Add subtle glow at peak
          if (barEnergy > 0.4) {
            ctx.fillStyle = color.replace('0.8', `${0.2 * barEnergy}`);
            ctx.fillRect(x, y - 1, barWidth - padding, 1);
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [height, color, barCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'block',
      }}
    />
  );
}

export default FrequencySpectrum;
