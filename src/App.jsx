import './App.css'
// import Slider from './components/Slider';
import { BiLinkAlt } from "react-icons/bi";
import { MdOutlineLocationOn,MdOutlineWhatsapp } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub,FaLinkedinIn } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { useEffect, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';

function App() {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const [toggleOn, setToggleOn] = useState(false)

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!toggleOn) return;
    const handleClick = (e) => {
      const menu = document.querySelector('.mobile-nav-links');
      if (menu && !menu.contains(e.target) && e.target.closest('.menu') === null) {
        setToggleOn(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [toggleOn]);
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

  useGSAP(() => {
    // Pulse animation for online status
    gsap.to('.online', {
      scale: 1.3,
      boxShadow: '0 0 12px 2px rgb(120,255,120)',
      repeat: -1,
      yoyo: true,
      duration: 0.7,
      ease: 'power1.inOut',
    });

    // Hero section animation
    const splitHero = new SplitText('.hero-max-cont h1', { type: 'lines' });
    gsap.from(splitHero.lines, {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
    });
    const splitPara = new SplitText('.hero-max-cont p', { type: 'lines' });
    gsap.from(splitPara.lines, {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.6,
      delay: 0.5,
      ease: 'power3.out',
    });

    // About section animation with ScrollTrigger
    const splitAboutH3 = new SplitText('.about-max-cont h3', { type: 'lines' });
    gsap.from(splitAboutH3.lines, {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-max-cont h3',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
    const splitAboutP = new SplitText('.about-max-cont p', { type: 'lines' });
    gsap.from(splitAboutP.lines, {
      opacity: 0,
      y: 20,
      stagger: 0.12,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-max-cont p',
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    });
  }, []);
  return (
    <div className='container'>
      <div className="nav-hero">
        <div className='circle1'/>
        <nav>
          <div className='max-cont'>
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
              <a href="#about">About Me</a>
              <a href="#skill">Skills</a>
              <a href="#project">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>

        <section className="hero">
          <div className='hero-max-cont'>
            <h1>Modern Full Stack<br />Web Development & Design</h1>
            <p>Building responsive, Well optimized web applications with precision and creativity, hence making every pixel awesome.</p>
            <div className="hero-buttons">
              <a href="mailto:ajiboyeadebayo901@gmail.com"><button className="btn-primary">Work with me</button></a>
              <a href="https://res.cloudinary.com/dl9mx2tvo/image/upload/v1745790867/CV_ivqovk.pdf" target='blank'><button className="btn-secondary">View CV</button></a>
            </div>
            <div className="mobile-nav-links" id={toggleOn ? 'show' : 'hidden'}>
              <a href="#about" onClick={()=>setToggleOn((prev)=>!prev)}>About Me</a>
              <a href="#skill" onClick={()=>setToggleOn((prev)=>!prev)}>Skills</a>
              <a href="#project" onClick={()=>setToggleOn((prev)=>!prev)}>Projects</a>
              <a href="#contact" onClick={()=>setToggleOn((prev)=>!prev)}>Contact</a>
            </div>
          </div>
        </section>
      </div>

      <section className='second-section' id='skill'>
        <div className='second-max-cont'>
          <p>2+ years of development experience</p>
          <div className='tag-container'>
             {sliders[0].texts.map((skill, index)=>{
            return(
              <div className='tag' key={index}>
                   <p>{skill}</p>
              </div>
            )
          })}
          </div>
        </div>
          
          {/* <div className='slider-container'>
            {sliders.map((slider)=>{
              return(<Slider key={slider.id} id={slider.id} texts={slider.texts} direction={slider.direction}/>)
            })}
          </div> */}
      </section>

      <section id='about' className='about'>
        <div className='about-max-cont'> 
          <div className="profile-cont">
            <div className='profile'>
              <img src="/displayPics.png" alt="my picture" />
            </div>
            <h3>Results-driven Full Stack Developer.</h3>
            <p>
              MERN Stack Developer with hands-on experience building scalable web applications using MongoDB, Express.js, React, and Node.js. Skilled in developing full-stack solutions from concept to deployment, integrating RESTful APIs, and creating responsive, user-friendly interfaces. Passionate about clean code, performance optimization, and delivering impactful digital products. Strong collaborator with a focus on continuous learning and staying updated with modern web technologies.
              <br />
              <br />
              Out of the Work you'll find me gaming, seeing movies, and constructing.
              <br />
              <br />
              <span className='location'>
                <span className='loc-icon'>
                  <MdOutlineLocationOn />
                </span>
                <span>
                  Nigeria
                </span>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="project" id='project'>
        <div className='project-max-cont'> 
          <a className='project-card' href="https://movie-search-nine-hazel.vercel.app/">
            <div>
              <p><span>Movie search</span><span className='link'><BiLinkAlt /></span></p>
            </div>
            <div>
              <img src="/project-1.png" alt="" />
            </div>
          </a>
      
          <a className='project-card swap'  href="https://country-search-app-olive.vercel.app/">
            <div>
            <p><span>Country search</span><span className='link'><BiLinkAlt /></span></p>
            </div>
            <div>
              <img src="project-2.png" alt="" />
            </div>
          </a>
        </div>
      </section>

      <footer id="contact">
        <div className='footer-max-cont'>
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
        </div>
    </footer>
  </div>
  )
}

export default App
