import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import tariffsList from "./tariffsData";

function App() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleTariffSelect = (index) => {
    setSelectedTariff(index);
  };

  return (
    <div className="container">
      <Card
        tariffs={tariffsList}
        selectedTariff={selectedTariff}
        onTariffSelect={handleTariffSelect}
      />
    </div>
  );
}

export default App;
