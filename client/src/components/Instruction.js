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
  opacity: 0.6,
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
    </div>
  ) : null;
  return component;
};

export default Instruction;
