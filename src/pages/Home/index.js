import React from "react";
import Contact from "../Contact";
import { Banner, Service } from "../../components";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <Contact />
    </div>
  );
};

export default Home;
