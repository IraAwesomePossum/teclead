import React from "react";

const List = ({ jokes }) => {
  return (
    <>
      {jokes.map((i) => {
        const { id, type, question, answer } = i;
        if (type === "programming")
          return (
            <article key={id} className="person">
              <div>
                <h4>Type of a joke: {type}</h4>
                <h5>{question} </h5>
                <p>{answer} </p>
              </div>
            </article>
          );
      })}
    </>
  );
};

export default List;
