import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="60%"
            width="80%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Developer */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                MERN Stack developer
              </h3>
              <p className="text-sm text-neutral font-semibold">2022 - 2023</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have successfully completed the <b>MERN Stack Web Developer</b> Expert{" "}
              from Dicoding.
            </p>
          </div>

          {/* B.Sc */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                B.Sc Mathematics (CA)
              </h3>
              <p className="text-sm text-neutral font-semibold">2017 - 2020</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have successfully completed my undergraduate degree at Bharathiyar University with a <b>score of 70%</b>.
            </p>
          </div>

          {/* HSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">HSC</h3>
              <p className="text-sm text-neutral font-semibold">2016 - 2017</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have passed the Higher Secondary Certificate (HSC) with the
              good result <b>Score - 82%</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
