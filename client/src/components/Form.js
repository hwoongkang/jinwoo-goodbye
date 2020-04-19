import React, { useState } from "react";
import { connect } from "react-redux";
import { postMessage } from "../redux/actions.js";
import store from "../redux/store.js";

const Form = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(postMessage(message));
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { postMessage })(Form);
