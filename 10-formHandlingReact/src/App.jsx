import React from 'react'
import './App.css'

const App = () => {

const submitHandler = (event) =>{
  // Prevent the default form submission behavior, of realoading the page
  event.preventDefault();
  console.log('Form submitted');
}
  return (
    <div className="container">
      <h1>App</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter something" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
