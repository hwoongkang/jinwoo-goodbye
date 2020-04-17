import React, { useState, useEffect } from "react";
import axios from "axios";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const posStyle = (x, y) => ({
  position: "absolute",
  top: y,
  left: x,
  zIndex: -15,
});

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [style, setStyle] = useState({});
  useEffect(() => {
    axios.get("/api/message").then((res) => {
      setMessages(
        res.data.messages.map((message) => {
          const signX = getRandomInt(0, 2) ? 1 : -1;
          const signY = getRandomInt(0, 2) ? 1 : -1;
          return {
            key: message._id,
            message: message.message,
            pos: {
              x: getRandomInt(0, window.innerWidth),
              y: getRandomInt(0, window.innerHeight),
            },
            vel: {
              x: signX * getRandomInt(50, 120),
              y: signY * getRandomInt(60, 120),
            },
          };
        })
      );
    });
    const dt = 0.04;
    const offset = 0;

    const interval = setInterval(() => {
      setMessages((messages) =>
        messages.map((msg) => {
          const { key, message, pos, vel } = msg;
          const x = pos.x + dt * vel.x;
          const y = pos.y + dt * vel.y;
          const vx = x < 0 || x > window.innerWidth - offset ? -vel.x : vel.x;
          const vy = y < 0 || y > window.innerHeight ? -vel.y : vel.y;
          return {
            key,
            message,
            pos: {
              x,
              y,
            },
            vel: {
              x: vx,
              y: vy,
            },
          };
        })
      );
    }, 1000 * dt);
    return () => clearInterval(interval);
  }, []);

  const messageRows = messages
    ? messages.map((message) => (
        <div className="message" key={message.key}>
          <h2>{message.message}</h2>
        </div>
      ))
    : "";

  const handleMouseMove = (e) => {
    e.preventDefault();
    setStyle(posStyle(e.clientX, e.clientY));
    console.log(style);
  };

  return (
    <div className="messages" onClick={handleMouseMove}>
      {messages.map((message) => (
        <div
          className="message"
          key={message.key}
          style={posStyle(message.pos.x, message.pos.y)}
        >
          {message.message}
        </div>
      ))}
    </div>
  );
};

export default Messages;
