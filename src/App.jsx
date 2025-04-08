import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='container'>
      <nav>
        <div className="nav-left">
          <img src="https://via.placeholder.com/40" alt="Avatar" />
          <div>
            <h3>Andy Hooke</h3>
            <div className='status'>
              <div className="online"></div>
              <p>Available for hire</p>
            </div>
          </div>
        </div>
        <div className="nav-links">
          <a href="#">Why me</a>
          <a href="#">Work</a>
          <a href="#">Process</a>
          <a href="#">FAQs</a>
          <a href="#" style={{color: "#007bff", fontWeight: 600}}>Work with me</a>
        </div>
      </nav>

      <section className="hero">
        <h1>High-end Webflow<br />design & development</h1>
        <p>Agency-quality Webflow websites with the personal touch of a freelancer.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Work with me</button>
          <button className="btn-secondary">Learn more</button>
        </div>
      </section>
      <section>
          <p>2+ years of development experience</p>
      </section>
  </div>
  )
}

export default App
