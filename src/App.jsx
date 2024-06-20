import React, { useState, useEffect } from "react";

import Card from "./components/product-card/card";

function App() {
  const [card, setCard] = useState(1);

  useEffect(() => {
    document.title = `Card №${card}`
  })

  const nextPage = () => {
    return card < 20 ? setCard(card + 1) : ''
  } 

  const previousPage = () => {
    return card > 1 ? setCard(card - 1) : ''
  } 
  return (
    <main>
      <Card card={card}/>
      <p>{card}/20</p>
      <button onClick={() => previousPage()}>Previous</button>
      <button onClick={() => nextPage()}>Next</button>
    </main>
  );
}

export default App;
