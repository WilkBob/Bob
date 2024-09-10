import { useEffect, useRef } from "react";
import Point from "./Point";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points = [];
    const mouse = { x: null, y: null };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      points.length = 0;
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        points.push(new Point(x, y, ctx));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    for (let i = 0; i < 200; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      points.push(new Point(x, y, ctx));
    }

    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      points.forEach((point) => {
        point.opacity = 0.2;
        if (
          mouse.x &&
          mouse.y &&
          Math.abs(mouse.x - point.x) < 50 &&
          Math.abs(mouse.y - point.y) < 50
        ) {
          point.opacity = 0.9;
          point.hovered = true;
        }
        point.draw();
        point.update();
      });
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Clean up points
      points.length = 0;

      // Clean up canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 blur-[1px] pointer-events-none z-[1]"
    />
  );
};

export default Canvas;
