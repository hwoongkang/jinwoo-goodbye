import React, { useEffect } from "react";
import { connect } from "react-redux";
import { increment } from "../redux/actions";
import store from "../redux/store.js";

const Story = ({ ind, messages }) => {
  useEffect(() => {
    // interval
    const interval = setInterval(() => {
      store.dispatch(increment());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return <div className="Story">{messages[ind]}</div>;
};

const mapStateToProps = (state) => ({
  messages: state.reducer.messages,
  ind: state.reducer.ind,
});

export default connect(mapStateToProps, { increment })(Story);
