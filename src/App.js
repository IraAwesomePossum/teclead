import React, { useState, useEffect } from "react";
import data from "./data";
import List from "./components/List";
import Loading from "./components/Loading";
import Error from "./components/Error";
import ListContainer from "./components/ListContainer";
import { createStore } from "redux";

import reducer from "./reducer";
import { Provider } from "react-redux";

const inititalStore = {
  jokes: data,
  like: [],
};

const store = createStore(reducer, inititalStore);

const url = "https://api.npoint.io/8636199316416ef47883";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState(data);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setLoading(false);
          setError(true);
          throw new Error(res.statusText);
        }
      })
      .then((jokes) => {
        setJokes(jokes);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <Error />;
      </main>
    );
  }
  return (
    <Provider store={store}>
      <section className="container">
        <h3> Jokes we got for you:</h3>
        <ListContainer />
      </section>
    </Provider>
  );
}

export default App;
