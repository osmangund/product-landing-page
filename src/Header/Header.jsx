import ArrowRightIcon from "../assets/icons/arrow-right.svg"
import ArrowLeftIcon from "../assets/icons/arrow-left.svg"
import "./Header.scss"
import PropTypes from "prop-types"
Header.propTypes = {
  activeKeyboard: PropTypes.string.isRequired,
  setActiveKeyboard: PropTypes.func.isRequired,
}

export default function Header(props) {
  const { activeKeyboard, setActiveKeyboard } = props

  const changeKeyboard = () => {
    const color = activeKeyboard === "black" ? "white" : "black"
    const keyboardImage = document.querySelector("#keyboard-image")
    keyboardImage.setAttribute("src", `./src/assets/keyboard/${color}/main.png`)

    document.body.setAttribute("data-theme", color)

    setActiveKeyboard(color)
  }

  return (
    <header>
      <div id="keyboard-wrapper">
        <img
          src={ArrowLeftIcon}
          alt="Left arrow icon"
          className="arrow-icon left"
        />
        <img
          src="./src/assets/keyboard/black/main.png"
          id="keyboard-image"
          alt="Keyboard product"
        />
        <div className="animation__rectangle"></div>
        <img
          src={ArrowRightIcon}
          alt="Right arrow icon"
          className="arrow-icon right"
          onClick={() => changeKeyboard()}
        />
      </div>
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
    </header>
  )
}
