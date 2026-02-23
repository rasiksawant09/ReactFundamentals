import React from 'react'

const App = () => {
  localStorage.setItem('name', 'Rasik Sawant');
  const name = localStorage.getItem('name');
  console.log(name);
  localStorage.removeItem('name');
  const user = {
    name: 'Rasik Sawant',
    age: 22,
    city: 'Pune'
  }
  localStorage.setItem('user', JSON.stringify(user));
  const userData = JSON.parse(localStorage.getItem('user'));
  console.log(userData);
  return (
    <div>
      App
    </div>
  )
}

export default App
