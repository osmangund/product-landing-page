import { useEffect, useState } from "react"
import "./App.css"
import Contact from "./Contact/Contact"
import Header from "./Header/Header"
import Home from "./Home/Home"
import Partners from "./Partners"
import Qualities from "./Qualities/Qualities"

export default function App() {
  const [activeKeyboard, setActiveKeyboard] = useState("black")

  useEffect(() => {
    document.body.setAttribute("data-theme", activeKeyboard)
  }, [])

  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav> */}
      <Header
        activeKeyboard={activeKeyboard}
        setActiveKeyboard={setActiveKeyboard}
      />
      <main>
        <Qualities />
        <Home activeKeyboard={activeKeyboard} />
        {/* <Partners /> */}
      </main>
      <Contact />
    </>
  )
}
