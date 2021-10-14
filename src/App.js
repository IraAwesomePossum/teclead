import React, { useState, useEffect } from "react";
import data from "./data";
import List from "./List";
import Loading from "./Loading";
import Error from "./Error";
// const url = "https://eloquent-hugle-c840ff.netlify.app/data/data.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState(data);

  useEffect(() => {
    if (data) {
      // setLoading(true);
      setError(true);
      // setJokes(data);
      // setLoading(false);
    }
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
    <main>
      <section className="container">
        <h3> Jokes we we got for you:</h3>
        <List jokes={jokes} />
        <button onClick={() => setJokes([])}>Delete all jokes</button>
      </section>
    </main>
  );
}

export default App;
