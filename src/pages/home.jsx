import React, { useEffect } from "react";
import Hero from "../components/sections/hero";
import Journey from "../components/sections/journey";
import Portfolio from "../components/sections/portfolio";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Journey />
      {/* <Portfolio/> */}
    </>
  );
};

export default Home;
