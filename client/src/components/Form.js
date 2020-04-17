import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [message, setMessage] = useState("");
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
          setMessage("");
          alert("message posted");
        } else {
          alert("error!");
        }
      })
      .catch((err) => alert(err));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
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
    </div>
  );
};

export default Form;
