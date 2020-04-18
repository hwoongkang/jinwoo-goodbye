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
        <textarea
          name="message"
          value={message}
          onChange={handleChange}
          style={{
            padding: "5px",
            top: "65%",
            height: "15%",
            width: "60%",
            margin: "0",
            left: "calc(20% - 5px)",
            fontSize: "20px",
            resize: "none",
            position: "absolute",
            background:
              "radial-gradient(rgba(255,255,255,1),rgba(255,255,255,0.8))",

            zIndex: 5,
            borderRadius: "10px",
          }}
          placeholder={"고생한 진우에게\n한 마디 남겨주세요!"}
        />
      </p>
      <p>
        <button
          onClick={handleSubmit}
          style={{
            position: "absolute",
            top: "85%",
            height: "5%",
            left: "30%",
            marginLeft: 0,
            width: "40%",
            fontSize: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            zIndex: 10,
          }}
        >
          보내기
        </button>
      </p>
    </div>
  );
};

export default Form;
