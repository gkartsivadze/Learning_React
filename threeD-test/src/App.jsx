import { useEffect } from 'react';
import './App.css'

function App() {
  useEffect(() => {
    function handleScroll() {
      const h1s = document.querySelectorAll("#carousel h1");
      h1s.forEach((elem, ind) => {
        let newRotation = ind / h1s.length * 360 - parseInt(document.documentElement.scrollTop) / document.documentElement.scrollHeight * 360;
        elem.animate({
          transform: `translateX(-50%) rotateY(${newRotation}deg) translateZ(300px)`
        }, {
          easing: "ease",
          duration: 100,
          fill: "forwards"
        })
      })
    }
    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("mousemove", handleScroll)
  }, [])
  return (
    <>
      <div id="carousel">
          <h1>HB0</h1>
          <h1>HB1</h1>
          <h1>HB2</h1>
          <h1>HB3</h1>
          <h1>HB4</h1>
          <h1>HB5</h1>
      </div>
    </>
  )
}

export default App
