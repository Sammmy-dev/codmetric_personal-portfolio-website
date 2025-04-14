import './App.css'
import Slider from './components/Slider';


function App() {
  const sliders = [
    {
      id:"slider1",
      texts:[
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "Redux",
        "Postgres",
        "GSAP",
      ],
      direction:"right"
    }
  ];
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
      <section className='second-section'>
          <p>2+ years of development experience</p>
          <div className='slider-container'>
            {sliders.map((slider)=>{
              return(<Slider key={slider.id} id={slider.id} texts={slider.texts} direction={slider.direction}/>)
            })}
          </div>
      </section>
  </div>
  )
}

export default App
