import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
import "./Eightball.css"
import { choice } from './random';
import defaultAnswers from './answers.json';

function Eightball({ answers = defaultAnswers }) {
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    function handleClick() {
        const { msg, color } = choice(answers);
        setMsg(msg);
        setColor(color);
    }

    /* OR
    function handleClick() {
    setAnswer(choice(answers));
  }
    */
    

    return (
        <div className="Eightball" style={{ backgroundColor: color }} onClick={handleClick}>
            <b>{msg}</b>
        </div>
    );
}

export default Eightball;
