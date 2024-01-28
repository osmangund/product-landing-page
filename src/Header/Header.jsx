import "./Header.scss"
import KeyboardSwiper from "./KeyboardSwiper/KeyboardSwiper"

export default function Header() {
  return (
    <header>
      <KeyboardSwiper />
      <div className="keyboard-description">
        <h1>Ajazz AK820 Pro</h1>
        <h4>
          A futuristic mechanical keyboard that you&apos;ve been looking for. A
          companion to your code, game or daily web sessions.
        </h4>
        <button
          className="buy__button"
          onClick={() => document.querySelector("#contact").scrollIntoView()}
        >
          Preorder NOW!
        </button>
      </div>
    </header>
  )
}
