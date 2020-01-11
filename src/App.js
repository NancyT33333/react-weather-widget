import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Widget from "./components/Widget"; 

function App() { 

  return (
    <HashRouter>           
      <Route exact path="/" component={Widget} />     
    </HashRouter>
  );
}

export default App;
