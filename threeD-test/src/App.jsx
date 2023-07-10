import { useLayoutEffect } from 'react';
import './App.css'

function App() {
  useLayoutEffect(() => {
    handleScroll();
    function handleScroll() {
      let scrollProgress = parseInt(document.documentElement.scrollTop) / (document.documentElement.scrollHeight - window.innerHeight);
      const h1s = document.querySelectorAll("#carousel .project_container");
      h1s.forEach((elem, ind) => {
        let newRotation = ind / h1s.length * 360 - scrollProgress * 360;
        elem.animate({
          transform: `translateX(-25%) rotateY(${newRotation}deg) translateZ(35rem)`
        }, {
          easing: "ease-out",
          duration: 100,
          fill: "forwards"
        })
      })
      document.querySelector("#carousel").animate({
        transform: `perspective(1500px) translateY(-50%) rotateZ(${scrollProgress * 10}deg)`
      }, {
        duration: 100,
        fill: "forwards"
      })

      document.querySelector(".light_through").animate({
        transform: `translateY(${5 - scrollProgress * 20}rem)`
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
    <nav>
      <h1 id="logo">GIORGI KARTSIVADZE</h1>
      <div className='navigation'>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
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
          <div className='project_container'>
            <img src="./tictac.webp" alt="" />
          </div>
          <span className='light_through'>

          </span>
      </div>
    </section>
    </>
  )
}

export default App
