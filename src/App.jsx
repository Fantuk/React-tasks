import React, { useState, useEffect } from "react";

import Card from "./components/product-card/card";

function App() {
  const [card, setCard] = useState(1);

  useEffect(() => {
    document.title = `Card №${card}`
  })
  return (
    <main>
      <Card card={card}/>
      <p>{card}/20</p>
      <button onClick={() => setCard(card - 1)}>Previous</button>
      <button onClick={() => setCard(card + 1)}>Next</button>
    </main>
  );
}

export default App;
