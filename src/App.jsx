import './App.css'
import Slider from './components/Slider';
import { BiLinkAlt } from "react-icons/bi";
import { MdOutlineLocationOn,MdOutlineWhatsapp } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub,FaLinkedinIn } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { useState } from 'react';


function App() {
  const [toggleOn, setToggleOn] = useState(false)
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
      <div className="nav-hero">
        <nav>
          <div className="nav-left">
            <img src="/displayPics.png" alt="Avatar" />
            <div>
              <h3>Ajiboye Samuel</h3>
              <div className='status'>
                <div className="online"></div>
                <p>Available for hire</p>
              </div>
            </div>
          </div>
          <div className='menu' onClick={()=>setToggleOn((prev)=>!prev)}><LuMenu /></div>
          <div className="nav-links">
            <a href="#">About Me</a>
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">Contact</a>
          </div>
        </nav>

        <section className="hero">
          <h1>Modern Full Stack<br />Web Development & Design</h1>
          <p>Building responsive, Well optimized web applications with precision and creativity, hence making every pixel awesome.</p>
          <div className="hero-buttons">
            <a href="mailto:ajiboyeadebayo901@gmail.com"><button className="btn-primary">Work with me</button></a>
            <a href="https://asset.cloudinary.com/dl9mx2tvo/e4b2dcb2413b0f70942434a85998e751" target='blank'><button className="btn-secondary">Download CV</button></a>
          </div>
          <div className="mobile-nav-links" id={toggleOn ? 'show' : 'hidden'}>
            <a href="#about" onClick={()=>setToggleOn((prev)=>!prev)}>About Me</a>
            <a href="#project" onClick={()=>setToggleOn((prev)=>!prev)}>Projects</a>
            <a href="#skill" onClick={()=>setToggleOn((prev)=>!prev)}>Skills</a>
            <a href="#contact" onClick={()=>setToggleOn((prev)=>!prev)}>Contact</a>
          </div>
        </section>
      </div>
      <section className='second-section' id='skill'>
          <p>2+ years of development experience</p>
          <div className='slider-container'>
            {sliders.map((slider)=>{
              return(<Slider key={slider.id} id={slider.id} texts={slider.texts} direction={slider.direction}/>)
            })}
          </div>
      </section>
      <section id='about' className='about'>
        <div className="profile-cont">
          <div className='profile'>
            <img src="/displayPics.png" alt="my picture" />
          </div>
          <p>Results-driven Full Stack Developer.</p>
          <p>
            MERN Stack Developer with hands-on experience building scalable web applications using MongoDB, Express.js, React, and Node.js. Skilled in developing full-stack solutions from concept to deployment, integrating RESTful APIs, and creating responsive, user-friendly interfaces. Passionate about clean code, performance optimization, and delivering impactful digital products. Strong collaborator with a focus on continuous learning and staying updated with modern web technologies.
            <br />
            <br />
            Out of the Work you'll find me gaming, seeing movies, and constructing.
            <br />
            <br />
            <span><span className='loc-icon'><MdOutlineLocationOn /></span> <span className='location'>Nigeria</span></span>
          </p>
        </div>
      </section>
      <section className="project" id='project'>

        <div className='project-card'>
          <div>
            <p><span>Movie search</span><span className='link'><BiLinkAlt /></span></p>
          </div>
          <div>
            <img src="/project-1.png" alt="" />
          </div>
        </div>

        <div className='project-card'>
          <div>
            <p><span>Country search</span><span className='link'><BiLinkAlt /></span></p>
          </div>
          <div>
            <img src="project-2.png" alt="" />
          </div>
        </div>

      </section>

      <footer id="contact">
        <div>
            <h4>Get in touch</h4>
            <p><a href="mailto:ajiboyeadebayo901@gmail.com"><span>ajiboyeadebayo901@gmail.com</span> <span><BiLinkAlt /></span></a></p>
        </div>
        <div>
            <a href="https://twitter.com/Ajiboye_sat"><FaXTwitter /></a>
            <a href="https://github.com/Sammmy-dev"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/samuel-ajiboye-35733330a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></a>
            <a href="https://wa.me/+2349154173193"><MdOutlineWhatsapp /></a>
        </div>
    </footer>
  </div>
  )
}

export default App
