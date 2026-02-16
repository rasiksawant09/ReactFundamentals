import React, { useState } from 'react'

const App = () => {
  let a = 20;
  const [num, setNum] = useState(10);
  const [num2, setNum2] = useState({user:'John', age: 30});
  const [num3, setNum3] = useState([1, 2, 334, 4, 5]);
  const[prevNum, setPrevNum] = useState(0); 
  function handleClick() {
    console.log('Button Clicked!');
    console.log(a);
    a++;
    console.log(a);
    //With useState.
    console.log(num);
    setNum(num + 1);
    console.log(num);
    useStateWithObejct();
    useStateWithArray();
    bacthUpdate();
  }

  function useStateWithObejct(){
    //Applying destruction in useState in JS.
    //This function include update with object.
    const newNum2 = {...num2, age: num2.age + 1, user: 'Johnny'};
    setNum2(newNum2);

  }

  function useStateWithArray(){
    //Applying destruction in useState in JS.
    //This function include update with array.
    // const newNum3 = [...num3, num3.length + 1];
    // const newNum3 = [...num3, " 50"]; //For Common value to add in array.
    const newNum3 = [...num3,[100,101]]; //for setting new array in array.
    newNum3.push(num3.length + 1);
    setNum3(newNum3);
    // let  tempNum3 = [500,501];
    // setNum3(tempNum3);
  }

  function bacthUpdate(){
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);
    //In this case, num will be updated only once, because React batches the state updates for performance reasons. So, the final value of num will be num + 1, not num + 3.
    //But if we go with the below approach then we can.
    setPrevNum(prevNum => prevNum + 1);
    setPrevNum(prevNum => prevNum + 1);
    setPrevNum(prevNum => prevNum + 1);
  }
  
  return (
    <div>
      <h1>Hello World : Current Value {num}</h1>
      <h1>User: {num2.user} Age: {num2.age}</h1>
      <h1>Array: {num3.join(', ')}</h1>
      <h1>Previous Value (Batch Example): {prevNum}</h1>
      <button onClick={handleClick}>Click Me</button>
      {/* <button onClick={useStateWithObejct}>Update User</button> */}
    </div>
  )
}

export default App
