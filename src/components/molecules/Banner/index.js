import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import bannerLottie from "../../../assets/bannerLottie.json"
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: bannerLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="parent min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        className="lg:w-1/2"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-neutral text-xl font-medium mb-2">Hello, I'm</h2>
        <h1 className="text-4xl font-semibold mb-2">Chinthamani G</h1>
        <div className="my-4 text-2xl text-primary font-bold">
          <Typewriter
            options={{
              strings: ['A MERN-Stack Developer', 'A Full-Stack Developer', 'A Front-End Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-neutral max-w-xl mb-6 font-medium">
          I am a passionate MERN stack developer, dedicated to crafting cutting-edge,
          pixel-perfect, and visually stunning interfaces for seamlessly functional
          web applications. My expertise lies in utilizing React.js, MongoDB, Express.js,
          and Node.js to create scalable and robust web applications.
        </p>
        <div className="flex items-center">
          <a
            href="https://drive.google.com/file/d/16AXi5pVJibaTR9EEDzGYMBj0LVUcCLpx/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primary-button">
              <span>My Resume</span>
              <span>
                <FaDownload />
              </span>
            </button>
          </a>
          <Link to="/about" className="ml-4">
            <SecondaryBtn>
              <span>ABOUT ME</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
          <Lottie options={defaultOptions} height="70%" width="80%" />
      </motion.div> 
    </div>
  );
};

export default Banner;
