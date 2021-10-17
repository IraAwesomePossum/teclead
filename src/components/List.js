import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { LIKE, MOVE_TO_FAV } from "../actions";
import ListContainer from "./ListContainer";

const List = ({ id, type, question, answer, like, moveToFav }) => {
  if (type === "programming") {
    return (
      <article key={id} className="person">
        <div>
          <h4>Type of a joke: {type}</h4>
          <h5>Question: {question} </h5>
          <p>Answer: {answer} </p>
          <button type="button" className="btn" onClick={() => like()}>
            like it
          </button>
        </div>
      </article>
    );
  } else {
    return null;
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    like: () => dispatch({ type: LIKE, payload: { id } }),
    // moveToFav: () => dispatch({ type: MOVE_TO_FAV, payload: { id } }),
  };
};

export default connect(null, mapDispatchToProps)(List);
