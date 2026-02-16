import React from 'react';
import Card from './components/Card';
const App = () => {
  var username = "React Learner";
  return (
    <div>
      <div className='card'>
        <h1>Hello, {username}!</h1>
        <p>This is a simple React component.</p>
      </div>
      <Card />
    </div>
  );
};

export default App;