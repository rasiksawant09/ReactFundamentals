import React from 'react'
import { useState } from 'react';
import './App.css'

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const submitHandler = (event) =>{
  // Prevent the default form submission behavior, of realoading the page
  event.preventDefault();
  console.log('Form submitted');
}

const handleOnInputChange = (event) => {
  setInputValue(event.target.value);
  console.log('Input value changed:', event.target.value);
}
  return (
    <div className="container">
      <h1>App</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter something" value={inputValue} onChange={handleOnInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
