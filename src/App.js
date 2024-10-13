import React from 'react';
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
function App() {
    const person = {
        name : "Rob",
        message : "Hi There",
        emoji : "Emoji",
        address : "Lagos, Yaba",
        email : "songuJack@gmail.com",
        number : "08065099019",
        seatNumbers : [0, 1, 4, 7],
    }
  return (
    <div className="App">
        <Hello person={person}/>
        <Fruits></Fruits>
    </div>
  );
}

export default App;
