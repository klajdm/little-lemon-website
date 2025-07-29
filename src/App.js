import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
