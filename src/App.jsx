import React, { useState } from "react";

import { accordionList } from "./data/accordionData";

import ModalWindow from "./components/modal_window/modalWindow";
import Accordion from "./components/accordion/accordion";
import DropDown from "./components/dropDown_menu/dropDown";

function App() {
  const [modalActive, setmodalActive] = useState(false)
  const [menuState, setMenuState] = useState(false)
  return (
    <>
    <main>
      <button onClick={() => setmodalActive(true)}>Open modal window</button>
      <br />
      <Accordion accordionList={accordionList}></Accordion>
      <DropDown open={menuState} setOpen={setMenuState}></DropDown>
    </main>
    <ModalWindow active={modalActive} setActive={setmodalActive}>Some text</ModalWindow>
    </>
  );
}

export default App;
