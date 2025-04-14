import React, { useEffect, useState } from 'react';
import './Slider.css'

function Slider({id, texts, direction}) {
    const [slides, setSlides] = useState([]);
    useEffect(() => {
      setSlides([...texts, ...texts])
    }, [texts])
    
  return (
    <div className='slider' id={id}>
        <div className={`slider-track ${direction === "right"? "scrollRight" : "scrollLeft"}`}>
            {slides.map((text, index)=>(
               <div className='slide' key={index}>
                  <p>{text}</p>
               </div>
            ))}
        </div>
    </div>
  )
}

export default Slider