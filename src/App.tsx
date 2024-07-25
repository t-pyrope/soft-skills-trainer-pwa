import React, {useEffect, useState} from 'react';
import './App.css';
import {Cards} from "./components/Cards";
import {Header} from "./components/Header";
import {TaskModal} from "./components/TaskModal";
import {AnimatePresence, LayoutGroup} from "framer-motion";

function App() {
    const [selectedTaskId, setSelectedTaskId] = useState<null | number>(null);
    const [, setCategories] = useState<any>();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/categories`)
            .then((res) => res.json())
            .then((json) => setCategories(json.categories))
    }, [])

  return (
    <div className="App">
      <main>
          <Header />
          <h2>Empathy and self-reflection</h2>
          <p>Pick a random bulb picture and get a task to train your empathy & self-reflection today</p>
        <Cards setSelectedTaskId={setSelectedTaskId} />
          <AnimatePresence>
              <LayoutGroup>
          {selectedTaskId !== null && (
              <TaskModal id={selectedTaskId} setSelectedTaskId={setSelectedTaskId} />
          )}</LayoutGroup>
          </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
