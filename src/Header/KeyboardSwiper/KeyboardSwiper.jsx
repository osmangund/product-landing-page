import "./KeyboardSwiper.scss"
import ArrowRightIcon from "../../assets/icons/arrow-right.svg"
import ArrowLeftIcon from "../../assets/icons/arrow-left.svg"
import { useState } from "react"

const handleRightButton = (activeIndex, setActiveIndex) => {
  const keyboards = document.querySelectorAll(".keyboard")

  const nextIndex =
    activeIndex + 1 <= keyboards.length - 1 ? activeIndex + 1 : 0

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`)

  // Active keyboard becomes after
  currentGroup.dataset.status = "after"

  // Next keyboard becomes active
  nextGroup.dataset.status = "becoming-active-from-before"

  setTimeout(() => {
    nextGroup.dataset.status = "active"
    nextGroup.dataset.theme === "black"
      ? (document.body.dataset.theme = "black")
      : (document.body.dataset.theme = "white")
    setActiveIndex(nextIndex)
  })
}

const handleLeftButton = (activeIndex, setActiveIndex) => {
  const keyboards = document.querySelectorAll(".keyboard")

  const nextIndex =
    activeIndex + 1 <= keyboards.length - 1 ? activeIndex + 1 : 0

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`)

  currentGroup.dataset.status = "before"

  nextGroup.dataset.status = "becoming-active-from-after"

  setTimeout(() => {
    nextGroup.dataset.status = "active"
    nextGroup.dataset.theme === "black"
      ? (document.body.dataset.theme = "black")
      : (document.body.dataset.theme = "white")
    setActiveIndex(activeIndex)
  })
}

export default function KeyboardSwiper() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div id="keyboard-swiper">
      <div id="keyboards">
        <div
          className="keyboard"
          data-index="0"
          data-status="active"
          data-theme="black"
        >
          <img
            src="./src/assets/keyboard/black/main.png"
            className="keyboard-image"
            alt="Keyboard product"
          />
        </div>
        <div
          className="keyboard"
          data-index="1"
          data-status="unknown"
          data-theme="white"
        >
          <img
            src="./src/assets/keyboard/white/main.png"
            className="keyboard-image"
            alt="Keyboard product"
          />
        </div>
      </div>
      <div id="keyboard-swiper-buttons">
        <img
          src={ArrowLeftIcon}
          alt="Left arrow icon"
          className="arrow-icon left"
          onClick={() => handleLeftButton(activeIndex, setActiveIndex)}
        />

        <img
          src={ArrowRightIcon}
          alt="Right arrow icon"
          className="arrow-icon right"
          onClick={() => handleRightButton(activeIndex, setActiveIndex)}
        />
      </div>
    </div>
  )
}
