import { useEffect, useRef } from "react";

function BackgroundDot() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Adjust for device pixel ratio
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr); // Scale everything accordingly

    let stars = [];
    const FPS = 60;
    const numStars = 150;
    const mouse = { x: 0, y: 0 };

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
    }

    function distance(point1, point2) {
      return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let star of stars) {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
      }

      ctx.beginPath();
      for (let starI of stars) {
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
        for (let starII of stars) {
          if (distance(starI, starII) < 150) {
            ctx.lineTo(starII.x, starII.y);
          }
        }
      }
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = "white";
      ctx.stroke();
    }

    function update() {
      for (let star of stars) {
        star.x += star.vx / FPS;
        star.y += star.vy / FPS;

        if (star.x < 0 || star.x > window.innerWidth) star.vx = -star.vx;
        if (star.y < 0 || star.y > window.innerHeight) star.vy = -star.vy;
      }
    }

    function tick() {
      draw();
      update();
      animationFrameId = requestAnimationFrame(tick);
    }

    let animationFrameId = requestAnimationFrame(tick);

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    canvas.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#232323",
      }}
    />
  );
}

export default BackgroundDot;
