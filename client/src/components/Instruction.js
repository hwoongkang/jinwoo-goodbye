import React, { useState } from "react";

const style = {
  /* Set rules to fill background */
  minHeight: "100%",
  /*min-width: 1024px; */

  /* Set up proportionate scaling */
  height: "100%",
  width: "100%",

  /* Set up positioning */
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translate(-50%)",
  zIndex: 50,
};

const fade = {
  /* Set rules to fill background */
  minHeight: "100%",
  /*min-width: 1024px; */

  /* Set up proportionate scaling */
  height: "100%",
  width: "100%",

  /* Set up positioning */
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translate(-50%)",
  zIndex: 50,
  backgroundColor: "black",
  opacity: 0.5,
};

const Instruction = () => {
  const [shouldShow, setShouldShow] = useState(true);

  const toggleShow = (e) => {
    e.preventDefault();
    setShouldShow((ss) => !ss);
  };
  const component = shouldShow ? (
    <div className="instruction" style={style} onClick={toggleShow}>
      <div className="fade" style={fade}></div>
      <div
        className="tap left"
        style={{
          position: "absolute",
          textAlign: "left",
          left: "10%",
          fontSize: "20px",
          top: "10%",
        }}
      >
        {"\u2193 왼쪽을 탭해 이전 메시지를 보실 수 있어요"}
      </div>
      <div
        className="tap right"
        style={{
          position: "absolute",
          textAlign: "right",
          left: "10%",
          margin: 0,
          width: "80%",
          top: "25%",
          fontSize: "20px",
        }}
      >
        {"오른쪽을 탭해 다음 메시지를 보실 수 있어요 \u2191"}
      </div>
    </div>
  ) : null;
  return component;
};

export default Instruction;
