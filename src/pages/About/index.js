import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div>
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="https://res.cloudinary.com/dnuhbyvuq/image/upload/v1720007916/tvycjgrrz2ydqurfenbz.png"
              alt="Chinthamani"
              className="p-12 w-70 h-70 transform md:translate-y-[-12%]"
              title="Chinthamani"
            />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-0 text-center md:text-left sm:text-3xl sm:mb-2">
              Chinthamani G
            </h1>
            <div className="my-4 text-2xl text-primary font-bold text-center md:text-left sm:text-2xl sm:mb-2">
              <Typewriter
                options={{
                  strings: [
                    "A MERN-Stack Developer",
                    "A Full-Stack Developer",
                    "A Front-End Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-neutral font-medium text-center md:text-left">
              Hi there, welcome to my website!
              <span className="text-2xl">👋</span>
            </p>
            <br />
            <p className="text-neutral font-medium text-center md:text-left">
              I'm a MERN stack enthusiast, adept at transforming ideas into immersive web experiences.
              Proficient in React.js for dynamic front-end design, Node.js for robust server-side logic, and MongoDB for flexible data management.
              My code embodies efficiency and elegance, showcasing a commitment to user-centric development.
            </p>
            <br />
            <p className="text-neutral font-medium text-center md:text-left">
              Beyond being a developer, I'm a problem solver eager for the next challenge.
              Let's turn your visions into reality through innovative and scalable solutions.
            </p>
            <br />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center md:text-left">
              <a
                href="https://drive.google.com/file/d/18tFfuOkTorUHpZWWx9nTo-gjf0eQMORb/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center md:justify-start">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <MySkill />
      <Education />
    </div>
  );
};

export default About;
