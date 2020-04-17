import React, { useState, useEffect, useRef } from "react";

import { v4 as uuid } from "uuid";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [count, setCount] = useState(0);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const digitalWater = ctx.createLinearGradient(0, 0, 200, 0);
    digitalWater.addColorStop(0, "#74ebd5");
    digitalWater.addColorStop(1, "#acb6e5");

    const interval = setInterval(() => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      setLocations((locations) =>
        locations.map((obj) => ({
          id: obj.id,
          pos: {
            x: obj.pos.x,
            y: obj.pos.y,
            r: obj.pos.r + 1,
          },
        }))
      );
      locations.forEach((obj) => {
        ctx.beginPath();
        ctx.arc(obj.pos.x, obj.pos.y, obj.pos.r, 0, 2 * Math.PI);
        ctx.fillStyle = digitalWater;
        ctx.fill();
      });
    }, 40);
    return () => clearInterval(interval);
  });

  const handleClick = (e) => {
    e.preventDefault();
    const id = count;
    setCount((count) => count + 1);
    console.log(id);
    const pos = {
      x: e.clientX,
      y: e.clientY,
      r: 10,
    };
    setLocations([
      ...locations,
      {
        id,
        pos,
      },
    ]);
    setTimeout(() => {
      setLocations((locations) => locations.filter((obj) => obj.id !== id));
    }, 3000);
  };

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={handleClick}
    />
  );
};

export default Canvas;
