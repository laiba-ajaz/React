import React from "react";
import { useState } from "react";
import './App.css'

function App() {

  const [text, setText] = useState("");

  function showMsg() {
    const messages = [
      "Believe in yourself, you can do it!",
      "Better days are coming.",
      "Every day is a new chance to grow.",
      "Small steps lead to big achievements."
    ];

    let randomIndex = Math.floor(Math.random() * messages.length);

    setText(messages[randomIndex]);

    setTimeout(() => {
      setText("");
    }, 3000);

  }
  return (
    <div>
  

  <h3 id="heading">Random Text Genrator by Using <span>set TimeOut()</span></h3>
      <button  id = "btn" onClick={showMsg}>Show Random Text</button>
      <p><b>{text}</b></p>
    </div>
  )
}

export default App;