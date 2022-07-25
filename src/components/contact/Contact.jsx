import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Confirmation from "../confirmation/Confirmation";

const Contact = () => {
  const form = useRef();

  const textAlert = "Message sent";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2y58sh4",
        "template_pofmz9i",
        form.current,
        "bgVhcgVq6rDjHtN-A"
      )
      .then(
        (result) => {
          Confirmation({ textAlert });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h2>gonzalogdv@gmail.com</h2>
            <a href="mailto:gonzalogdv@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h2>+542616084535</h2>
            <a
              href="https://api.whatsapp.com/send?phone=542616084535"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
