import { useRef, useEffect } from 'react';

function CursorRadar() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Track mouse position
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Create new ring at cursor position
      ringsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 20,
        opacity: 0.8,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw rings
      ringsRef.current = ringsRef.current.filter((ring) => {
        ring.radius += 4;
        ring.opacity -= 0.015;

        // Only draw if still visible
        if (ring.opacity > 0) {
          ctx.strokeStyle = `rgba(109, 182, 206, ${ring.opacity})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
          ctx.stroke();

          return true;
        }
        return false;
      });

      // Draw current cursor halo
      const mouse = mouseRef.current;
      ctx.strokeStyle = 'rgba(109, 182, 206, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}

export default CursorRadar;
