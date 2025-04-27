import './App.css'
import Slider from './components/Slider';
import { BiLinkAlt } from "react-icons/bi";
import { MdOutlineLocationOn,MdOutlineWhatsapp } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub,FaLinkedinIn } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";


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
      <div className="nav-hero">
        <nav>
          <div className="nav-left">
            <img src="/Blue White Simple Professional Recruitment LinkedIn Profile Picture_20250416_183825_0000~2.png" alt="Avatar" />
            <div>
              <h3>Ajiboye Samuel</h3>
              <div className='status'>
                <div className="online"></div>
                <p>Available for hire</p>
              </div>
            </div>
          </div>
          <div className='menu'><LuMenu /></div>
          <div className="nav-links">
            <a href="#">About Me</a>
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">Contact</a>
          </div>
          <div className="mobile-nav-links">
            <a href="#about">About Me</a>
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">Contact</a>
          </div>
        </nav>

        <section className="hero">
          <h1>High-end Webflow<br />design & development</h1>
          <p>Agency-quality Webflow websites with the personal touch of a freelancer.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Work with me</button>
            <button className="btn-secondary">Download CV</button>
          </div>
        </section>
      </div>
      <section className='second-section'>
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
            <img src="/Blue White Simple Professional Recruitment LinkedIn Profile Picture_20250416_183825_0000~2.png" alt="my picture" />
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
      <section className="project">

        <div className='project-card'>
          <div>
            <p><span>Movie search</span><span className='link'><BiLinkAlt /></span></p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>

        <div className='project-card'>
          <div>
            <p><span>Country search</span><span className='link'><BiLinkAlt /></span></p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>

      </section>

      <footer id="footer">
        <div>
            <h4>Get in touch</h4>
            <p><a href="mailto:ajiboyesamueladebayo@gmail.com"><span>ajiboyeadebayo901@gmail.com</span> <span><BiLinkAlt /></span></a></p>
        </div>
        <div>
            <a href="https://twitter.com/Ajiboye_sat"><FaXTwitter /></a>
            <a href="https://instagram.com/ajiboye_adebayo.s"><FaGithub /></a>
            <a href=""><FaLinkedinIn /></a>
            <a href="https://wa.me/+2349154173193"><MdOutlineWhatsapp /></a>
        </div>
    </footer>
  </div>
  )
}

export default App
