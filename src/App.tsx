import React, {useState} from 'react';
import './App.css';
import {Cards} from "./components/Cards";
import {Header} from "./components/Header";
import {TaskModal} from "./components/TaskModal";

function App() {
    const [selectedTaskId, setSelectedTaskId] = useState<null | number>(null);

  return (
    <div className="App">
      <main>
          <Header />
          <h2>Empathy and self-reflection</h2>
          <p>Pick a random bulb picture and get a task to train your empathy & self-reflection today</p>
        <Cards setSelectedTaskId={setSelectedTaskId} />
          {selectedTaskId !== null && (
              <TaskModal id={selectedTaskId} setSelectedTaskId={setSelectedTaskId} />
          )}
      </main>
    </div>
  );
}

export default App;
