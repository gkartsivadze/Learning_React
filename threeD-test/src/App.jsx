import { useRef, useLayoutEffect } from 'react';
import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import './App.css'

function App() {

  const el = useRef();
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useLayoutEffect(() => {
    let smoother = ScrollSmoother.create({
      content: el.current,
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true // looks for data-speed and data-lag attributes on elements
    });
    return () => {
      smoother.kill();
    };
  }, []);


  useLayoutEffect(() => {
    handleScroll();
    function handleScroll() {
      let scrollTop = document.documentElement.scrollTop
      let scrollProgress = parseInt(scrollTop - window.innerHeight) / (document.documentElement.scrollHeight - 2 * window.innerHeight);


      gsap.to("#carousel", {'--carouselZ': scrollProgress * 10 + "deg",
                            '--top': scrollTop > window.innerHeight ? scrollProgress * 300 + "vh" : "0vh"
                          })


      const cards = gsap.utils.toArray("#carousel .project_container");
      cards.forEach((elem, ind) => {
        let newRotation = ind / cards.length * 360 - scrollProgress * 360;
        gsap.to(elem, {'--cards-rotation': `${newRotation}deg`, duration: 0.25})
      })

      gsap.to(".light_through", {'--light-transform': 200 - scrollProgress * 100 + "%",duration: 1})
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
    <main ref={el}>
    <section id='welcome_section'>
      <h1>WELCOME</h1>
      <p>Pasionate front-end developer, newbie in profession,
        but master in progression</p>

    </section>
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
    </main>
    </>
  )
}

export default App
