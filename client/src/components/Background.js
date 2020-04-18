import React, { useEffect } from "react";

import { connect } from "react-redux";

import { increment, decrement } from "../redux/actions.js";

const Background = ({ increment, decrement }) => {
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
  const handleClick = (e) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    switch (true) {
      case x < 0.3 * window.innerWidth:
        decrement();
        break;
      case x > 0.7 * window.innerWidth:
        increment();
        break;
      default:
        break;
    }
  };
  return (
    <div className="images" onClick={handleClick}>
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { increment, decrement })(Background);
