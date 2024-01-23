import LaptopIcon from "../assets/icons/laptop.svg"
import BluetoothIcon from "../assets/icons/bluetooth.svg"
import FoundationIcon from "../assets/icons/foundation.svg"
import WindowsIcon from "../assets/icons/windows.svg"
import AppleIcon from "../assets/icons/apple.svg"
import GridIcon from "../assets/icons/grid.svg"
import "./Qualities.scss"

import PropTypes from "prop-types"

export function Grid(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`grid ${props.position}`}
    >
      <path
        fill="goldenrod"
        d="M5 21h1v-3H3v1q0 .825.588 1.413T5 21m3 0h3v-3H8zm5 0h3v-3h-3zm5 0h1q.825 0 1.413-.587T21 19v-1h-3zM3 6h3V3H5q-.825 0-1.412.588T3 5zm0 5h3V8H3zm0 5h3v-3H3zM8 6h3V3H8zm0 5h3V8H8zm0 5h3v-3H8zm5-10h3V3h-3zm0 5h3V8h-3zm0 5h3v-3h-3zm5-10h3V5q0-.825-.587-1.412T19 3h-1zm0 5h3V8h-3zm0 5h3v-3h-3z"
      />
    </svg>
  )
}

Grid.propTypes = {
  position: PropTypes.string,
}

export default function Qualities() {
  return (
    <section id="qualities">
      <Grid position="left" />
      <Grid position="right" />
      <div id="quality__wrapper">
        <div className="quality">
          <div className="quality__icon__wrapper">
            <img src={LaptopIcon} alt="Laptop icon" className="" />
          </div>
          <h1>TFT Screen</h1>
          <p>The Interactive Interface A Popular 75% Compact Design</p>
        </div>
        <div className="quality">
          <div className="quality__icon__wrapper">
            <img src={BluetoothIcon} alt="Bluetooth icon" className="" />
          </div>
          <h1>Triple Modes</h1>
          <p>Type-C Wired, Bluetooth 5.0 & 2.4GHz Available</p>
        </div>
        <div className="quality">
          <div className="quality__icon__wrapper">
            <img src={FoundationIcon} alt="Foundation icon" className="" />
          </div>
          <h1>High Quality Materials</h1>
          <p>
            Gasket-mounted & Flex-cut PC Plate and PCB South-facing LEDs with
            1.6M
          </p>
        </div>
        <div className="quality">
          <div className="quality__icon__wrapper">
            <img src={WindowsIcon} alt="Windows icon" className="" />
            <img src={AppleIcon} alt="Apple icon" className="" />
          </div>
          <h1>Use Anywhere</h1>
          <p>RGB & Mac/Win Compatibility</p>
        </div>
      </div>
    </section>
  )
}
