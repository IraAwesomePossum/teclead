import React from "react";
import List from "./List";
import { connect } from "react-redux";

const ListContainer = ({ jokes }) => {
  return (
    <section className="cart">
      <article>
        {jokes.map((item) => {
          return <List key={item.id} {...item} />;
        })}
      </article>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { jokes } = state;
  return { jokes };
};

export default connect(mapStateToProps)(ListContainer);
