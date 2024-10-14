import React from 'react';
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import Conditional from "./components/Conditional";
import EventHandling from "./components/EventHandling";
import StateCounter from "./components/StateCounter";
import Form from "./components/Form";
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
        {/*<Hello person={person}/>*/}
        {/*<Fruits></Fruits>*/}
        {/*<Conditional></Conditional>*/}
        {/*<EventHandling></EventHandling>*/}
        {/*<StateCounter></StateCounter>*/}
        <Form/>
    </div>
  );
}

export default App;
