import React from "react";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-description">I'd love to hear from you.</p>
        <div className="contact-button-container">
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            rel="nofollow"
            className="contact-button"
          >
            <IoMail className="contact-icon" />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
