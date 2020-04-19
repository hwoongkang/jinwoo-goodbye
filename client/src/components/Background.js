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
      <img alt="0번째 진우사진" src={images[0]} class="bg" />
      <img alt="1번째 진우사진" src={images[1]} class="bg" />
      <img alt="2번째 진우사진" src={images[2]} class="bg" />
      <img alt="3번째 진우사진" src={images[3]} class="bg" />
      <img alt="4번째 진우사진" src={images[4]} class="bg" />
      <img alt="5번째 진우사진" src={images[5]} class="bg" />
      <img alt="6번째 진우사진" src={images[6]} class="bg" />
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { increment, decrement })(Background);
