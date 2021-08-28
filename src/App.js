import React, { useState } from "react";
import Title from "./components/Title";
import CardGrid from "./components/CardGrid";
import "./App.css";
function App() {
  const [query, setQuery] = useState(null);

  function handleQueryUpdate(q) {
    setQuery(q);
  }
  return (
    <div className="App">
      <Title handleQueryUpdate={handleQueryUpdate} />
      <CardGrid q={query} />
    </div>
  );
}

export default App;
