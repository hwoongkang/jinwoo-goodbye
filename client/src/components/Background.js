import React, { useState, useEffect } from "react";

const Background = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);
  const images = [
    "/images/cold.jpg",
    "/images/mija.jpg",
    "/images/gongsang.jpg",
  ];
  return (
    <div className="images">
      <img src={images[0]} class="bg" />
      <img src={images[1]} class="bg" />
      <img src={images[2]} class="bg" />
    </div>
  );
};

export default Background;
