import React, { useState } from 'react';
import './index.css';


const Content = () => {
  const[name, setName] = useState('Yashas Chandra');
  const [count, setCount] = useState(0);
  const HandleNameChange = () => {
    const names = ["Harry", "Bond", "Nord"]
    const a = Math.floor(Math.random() * 3)
    setName(names[a]);
  }
  const handleClick = () => {
    setCount(count + 1)
    setCount(count + 1)
    console.log(count);
  }
  const handleClick2 = (name) => {
    console.log(count);

  }
  /* const handleClick3 = (e) => {
    console.log(e.target.innerText);

  } */
  return (
    <main>
        
        <p onDoubleClick={handleClick}>
          Hello {name}...
        </p>
  
        <p>{[1,2,3]}</p> <br />
        <button onClick={HandleNameChange}>Change Name.</button> <br />  
        <button onClick={handleClick}>Click here</button> <br />
        <button onClick={handleClick2}>Click here</button>
  
    </main>
  )
}

export default Content