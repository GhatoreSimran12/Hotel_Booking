import React, { useState } from "react"
import Data from "./Data"

const Home = ({ slides }) => {
  const [current, setCurrent ] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  
  return (
    <>
      <section className='slider'>
        <div className='control-btn'>
          <button className='prev' onClick={prevSlide}>
            <i className='fas fa-caret-left'></i>
          </button>
          <button className='next' onClick={nextSlide}>
            <i className='fas fa-caret-right'></i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && <img src={slide.image} alt='Home Image' />}
            </div>
          )
        })}
      </section>

      <section className='slide-form'>
        <div className='container'>
          
          {/* <span> Hotel Del Luna Chronicles:Beyond Ordinary</span> */}

          {/* <form onsubmit="sendEmail(); reset(); return false;"> 
            <input type='text' placeholder='Your Name' required />
            <div className='flex_space'>
              <input type="email" id="email" placeholder="Email Id" required />
              <input type='text' id="phone" placeholder='Phone' required />
            </div>
            <textarea id="message" rows="3" placeholder="How can we help You?"></textarea>
            < a href="./images/about-img-1.jpg" download className="Submit">Catalog</a>
            <input type='Submit' value='send' className='submit' />
          </form> */}
          
          <video className="video-hdl" controls width="366.906" height="330" autoPlay  loop>
            <source src="./Images/Hotelvideo.mp4" type="video/mp4"></source>
          </video>
          < a className="anchor-btn" href="/Images/catalog.pdf" download="Repository-HDL" >Download Repository</a>
          {/* <h2 className="rep-style">Download Our Latest Repository-2023</h2> */}
        </div>
      </section>
    </>
  )
}

export default Home
