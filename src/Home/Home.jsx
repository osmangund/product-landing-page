import "./Home.scss"
import PropTypes from "prop-types"
Home.propTypes = {
  activeKeyboard: PropTypes.string.isRequired,
}

export default function Home(props) {
  const { activeKeyboard } = props

  return (
    <section id="home">
      <div className="description__item">
        <img
          src={`./src/assets/keyboard/${activeKeyboard}/descriptive1.jpg`}
          alt=""
          id="descriptive__img__1"
        />
        <figcaption>
          <h1>Interactive TFT Display</h1>
          <p>
            The 75% mechanical keyboard is equipped with a TFT Screen, acting as
            an interactive interface for real-time updates and customization.
            The high-definition display allows for personalized visuals, battery
            status, date & time, connectivity & OS details, and backlight
            effects. Exploring the features of this TFT Screen helps understand
            the extensive capabilities that set the Ajazz AK820 Pro apart from
            other keyboards on the market.
          </p>
        </figcaption>
      </div>
      <div className="description__item">
        <img
          src={`./src/assets/keyboard/${activeKeyboard}/descriptive2.jpg`}
          alt=""
          id="descriptive__img__2"
        />

        <figcaption>
          <h1>Compact Design for All</h1>
          <p>
            Crafted for both enthusiasts and professionals, the Ajazz AK820 Pro
            seamlessly blends innovation and craftsmanship in its 75% compact
            mechanical keyboard design. Maximizing desk space with its sleek
            layout, this keyboard offers portability without compromising on
            features or functionality, providing a superior typing experience
            wherever you go.
          </p>
        </figcaption>
      </div>
      <div className="description__item">
        <img
          src={`./src/assets/keyboard/${activeKeyboard}/descriptive3.jpg`}
          alt=""
          id="descriptive__img__3"
        />
        <figcaption>
          <h1>Versatile Connectivity Options</h1>
          <p>
            The Ajazz AK820 Pro supports Bluetooth and 2.4GHz wireless
            connectivity, as well as a Type-C USB cable. Bluetooth 5.1 ensures
            faster responses and power efficiency. Easily switchable among three
            modes, this keyboard facilitates efficient multitasking and speedy
            performance. The included 4000mAh battery ensures extended and
            stable use without concerns of a sudden shutdown.
          </p>
        </figcaption>
      </div>
      <div className="description__item">
        <img
          src={`./src/assets/keyboard/${activeKeyboard}/descriptive4.jpg`}
          alt=""
          id="descriptive__img__4"
        />
        <figcaption>
          <h1>Innovative Typing Experience</h1>
          <p>
            Immerse yourself in a unique typing feel with the gasket-mounted
            design, coupled with a Flex-cut PC plate and PCB. The gasket
            mounting method isolates the plate and PCB, effectively reducing
            vibration and noise. Simultaneously, the Flex-cut design in both the
            PC plate and PCB provides a slightly flexible yet stable typing
            experience. Each keypress becomes cushioned and precise, resulting
            in optimal force distribution and a softer bottom-out for a truly
            personalized keystroke.
          </p>
        </figcaption>
      </div>
      <div className="description__item">
        <img
          src={`./src/assets/keyboard/${activeKeyboard}/descriptive5.jpg`}
          alt=""
          id="descriptive__img__5"
        />
        <figcaption>
          <h1>Dynamic LED Illumination & OS Compatibility</h1>
          <p>
            Brighten up your setup with the vibrant LED backlighting of the
            Ajazz AK820 Pro, featuring South-facing LEDs for superior
            shine-through capabilities. With an impressive 1.6 million color
            combinations, customize your RGB lighting profiles to match your
            mood, occasion, or aesthetic preference. Fully compatible with both
            Mac and Windows operating systems, this keyboard ensures that you
            can fully enjoy its features, seamlessly switching between Win and
            Mac modes through the customizable TFT screen. Enhance overall
            usability and productivity with this versatile and visually stunning
            mechanical keyboard.
          </p>
        </figcaption>
      </div>
    </section>
  )
}
