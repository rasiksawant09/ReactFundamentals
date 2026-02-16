import React from 'react'

const App = () => {

  function inputChangingHandler(value){
    console.log("Input Changed!", value);
  }
  return (
    <div>
      <input type="text" placeholder='Enter text' onChange={function(event){
        inputChangingHandler(event.target.value)
      }} />
    </div>
  )
}

export default App
