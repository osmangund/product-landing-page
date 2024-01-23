import "./Contact.scss"

export default function Contact() {
  return (
    <section id="contact">
      <img
        src="./src/assets/icons/ajazz_logo.png"
        alt="ajazz logo"
        className="ajazz-logo"
      />
      <form action="" id="contact__form">
        <h2 className="title">Place your order</h2>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your email" />
        <input type="text" placeholder="Any suggestions & requests" />
        <input
          type="button"
          value="Order your buddy"
          className="order-button"
        />
      </form>
    </section>
  )
}
