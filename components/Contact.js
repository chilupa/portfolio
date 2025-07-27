import React from "react";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen snap-start flex items-center justify-center px-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-indigo-400 mb-4">
          Let's Connect
        </h2>
        <p className="text-gray-300 mb-4">I'd love to hear from you.</p>
        <div className="flex justify-center">
          <a
            href={process.env.NEXT_PUBLIC_EMAIL}
            rel="nofollow"
            className="inline-flex items-center gap-3 bg-indigo-400 rounded text-black px-6 py-3 font-medium shadow-lg hover:bg-teal-400 transition"
          >
            <IoMail className="w-5 h-5" />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
