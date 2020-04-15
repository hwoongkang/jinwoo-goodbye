import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      message,
    };
    axios
      .post("/api/message", body, config)
      .then((res) => {
        if (res.data.success) {
          alert("post successfully saved");
          setMessage("");
        } else {
          alert("error!");
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <div>
      <p>
        <label for="message">Message</label>
      </p>
      <p>
        <textarea
          name="message"
          cols="80"
          rows="10"
          value={message}
          onChange={handleChange}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>submit</button>
      </p>
      <p>
        <Link to="/list">Messages</Link>
      </p>
    </div>
  );
};

export default Form;
