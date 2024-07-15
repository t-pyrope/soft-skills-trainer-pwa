import React, { useEffect, useState } from 'react';
import './App.css';
import {Cards} from "./components/Cards";
import {InstallProposal} from "./components/InstallProposal";

function App() {

  return (
    <div className="App">
      <main>
          <h1>Soft skills trainer</h1>
          <h2>Empathy and self-reflection</h2>
          <p>Pick a random bulb picture and get a task to train your empathy & self-reflection today</p>
        <Cards />
          <InstallProposal />
      </main>
    </div>
  );
}

export default App;
