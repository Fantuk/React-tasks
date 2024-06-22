import React from "react";

import CardSwitcher from "./components/card-switcher/cardSwitcher";
import CardCatalog from "./components/card-catalog/cardCatalog";
import useResize from "./components/useResize";

function App() {
  const { width } = useResize();

  if (width < 768) return <CardSwitcher />;

  return (
    <main>
      <CardCatalog />
    </main>
  );
}

export default App;
