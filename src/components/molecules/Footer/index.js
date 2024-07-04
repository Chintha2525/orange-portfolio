import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/chinthamani-g-02b29a265"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://github.com/Chintha2525"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=chinthamani2525@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-2xl text-fuchsia-400" />
          </a>
        </div>
        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/chinthamani-g-02b29a265"
              className="text-primary hover:underline"
              target="blank"
            >
              Chinthamani
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
