import React from "react";
import Card from "./components/Card";
import "./App.css";
import tariffsList from "./tariffsData";

function App() {
  return (
    <div className="container">
      <Card tariffs={tariffsList} />
    </div>
  );
}

export default App;
