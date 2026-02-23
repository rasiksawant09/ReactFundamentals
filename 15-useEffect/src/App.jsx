import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const handleButtonClick = (e) => {
    if (e.type === "click") {
      setNum(num + 1);
      console.log(num);
      return;
    }
    if (e.type === "contextmenu") {
      console.log("Right Clicked");
      setNum2(num2 + 10);
      console.log(num2);
    }

  }

  useEffect(() => {
    console.log("useEffect called");
  }, [num2]);


  return (
    <div>
      <h1>Value of {num}</h1>
      <h1>Value of {num2}</h1>
      <button onClick={handleButtonClick} onContextMenu={handleButtonClick}>Click Me</button>
    </div>
  )
}

export default App