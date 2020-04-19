import React from "react";
import { connect } from "react-redux";

export const Location = ({ ind, messages }) => {
  return (
    <div className="location">
      {ind + 1} / {messages.length}
    </div>
  );
};

const mapStateToProps = (state) => ({
  ind: state.reducer.ind,
  messages: state.reducer.messages,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Location);
