import { useEffect } from 'react';
import './App.css'

function App() {
  useEffect(() => {
    function handleScroll() {
      const h1s = document.querySelectorAll("#carousel .project_container");
      h1s.forEach((elem, ind) => {
        let newRotation = ind / h1s.length * 360 - parseInt(document.documentElement.scrollTop) / document.documentElement.scrollHeight * 360;
        elem.animate({
          transform: `translateX(-50%) rotateY(${newRotation}deg) translateZ(30rem)`
        }, {
          easing: "ease",
          duration: 100,
          fill: "forwards"
        })
      })
      document.querySelector("#carousel").animate({
        transform: `perspective(1000px) translateY(-50%) rotateZ(${parseInt(document.documentElement.scrollTop) / document.documentElement.scrollHeight * 10}deg)`
      }, {
        duration: 100,
        fill: "forwards"
      })
    }
    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("mousemove", handleScroll)
  }, [])
  return (
    <>
    <section id="carousel_container">
      <div id="carousel">
          <div className='project_container'>
            <img src="./artopia.webp" alt="" />
          </div>
          <div className='project_container'>
            <img src="./ecommerce.webp" alt="" />
          </div>
          <div className='project_container'>
            <img src="./financial.webp" alt="" />
          </div>
          <div className='project_container'>
            <img src="./form.webp" alt="" />
          </div>
          <div className='project_container'>
            <img src="./receptionera.webp" alt="" />
          </div>
          <div className='project_container'>
            <img src="./shortener.webp" alt="" />
          </div>
      </div>
    </section>
    </>
  )
}

export default App
