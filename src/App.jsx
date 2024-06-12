import React from "react";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import styles from './app.module.css'

function App() {
  return (
    <div className={styles.content}>
      <Header className={styles.header} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;