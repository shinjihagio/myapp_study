import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Prson from './Person/Person'

function App() {
  const [personState, setpersonsState] = useState({
    person: [
      {name: "Shinji", age: 30},
      {name: "Eriko", age: 20},
      {name: "Chinatsu", age: 2},
    ]
  })

  const switchNameHandler = () => {
    setpersonsState({
      person: [
        {name: "Hagio Shinji", age: 30},
        {name: "Hagio Eriko", age: 20},
        {name: "Hagio Chinatsu", age: 2},
      ]
    })
  }

  return (
    <div className="App">
      <h1>This is a react app</h1>
      <h2 className="sentence">my react app page</h2>
      <button onClick={switchNameHandler}>View Full name</button>
      <Prson name={ personState.person[0].name } age={ personState.person[0].age }/>
      <Prson name={ personState.person[1].name } age={ personState.person[1].age }>She is a my wife</Prson>
      <Prson name={ personState.person[2].name } age={ personState.person[2].age }>She is a my doughter</Prson>
    </div>
  );
}

export default App;
