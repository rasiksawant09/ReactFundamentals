import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <div className="topnav">
        {/* <a className="active" href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a> */}
        {/* So instead of using anchor tags we would use Link component from react-router-dom to navigate between pages without refreshing the page. */}
        <Link to="/" className="active">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <h2>Footer Section</h2>
    </div>
  )
}

export default App
