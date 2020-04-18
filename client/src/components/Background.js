import React, { useState, useEffect } from "react";

const Background = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);
  const images = [
    "/images/cold.jpg",
    "/images/blackandwhite.jpg",
    "/images/gongsang.jpg",
    "/images/debut.jpg",
    "/images/delay.jpg",
    "/images/ff-rudolf.jpg",
    "/images/soundmind.jpg",
  ];
  return (
    <div className="images">
      <img src={images[0]} class="bg" />
      <img src={images[1]} class="bg" />
      <img src={images[2]} class="bg" />
      <img src={images[3]} class="bg" />
      <img src={images[4]} class="bg" />
      <img src={images[5]} class="bg" />
      <img src={images[6]} class="bg" />
    </div>
  );
};

export default Background;
