import axios from "axios";

export const types = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  MESSAGE_POSTED: "MESSAGE_POSTED",
  MESSAGE_ERROR: "MESSAGE_ERROR",
  MESSAGES_LOADED: "MESSAGES_LOADED",
};

export const loadMessages = () => (dispatch) => {
  console.log("hello");
  axios.get("/api/message").then((res) => {
    const payload = res.data.messages.map((message) => message.message);
    dispatch({
      type: types.MESSAGES_LOADED,
      payload,
    });
  });
};

export const increment = () => ({
  type: types.INCREMENT,
});
export const decrement = () => ({
  type: types.DECREMENT,
});

export const postMessage = (message) => (dispatch) => {
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
        dispatch({
          type: types.MESSAGE_POSTED,
          payload: res.data.message.message,
        });
      } else {
        dispatch({ type: types.MESSAGE_ERROR });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.MESSAGE_ERROR });
    });
};
