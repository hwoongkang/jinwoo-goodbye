import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get("/api/message")
      .then((res) => {
        setMessages(res.data.messages);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return messages.map((message) => <h2>{message.message}</h2>);
};

export default List;
