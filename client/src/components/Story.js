import React, { useState, useEffect } from "react";
import axios from "axios";

const Story = () => {
  const [messages, setMessages] = useState([]);
  const [ind, setInd] = useState(0);
  useEffect(() => {
    // loading data
    axios.get("/api/message").then((res) => {
      setMessages(res.data.messages.map((message) => message.message));
    });

    // interval
    const interval = setInterval(() => {
      setInd((ind) => ind + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const x = e.clientX;
    switch (true) {
      case x < 0.4 * window.innerWidth:
        setInd((ind) => (ind === 0 ? messages.length - 1 : ind - 1));
        break;
      case x > 0.6 * window.innerWidth:
        setInd((ind) => (ind === messages.length - 1 ? 0 : ind + 1));
        break;
      default:
        console.log("center");
    }
  };
  const style = {
    margin: 0,
    left: 0,
    width: window.innerWidth,
    textAlign: "center",
    transition: "0.3s",
  };
  return (
    <div className="Story" onClick={handleClick} style={style}>
      {ind >= messages.length ? messages[ind % messages.length] : messages[ind]}
    </div>
  );
};

export default Story;
