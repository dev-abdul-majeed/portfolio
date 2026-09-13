import React, { useEffect } from "react";
import Skills from "../components/sections/skills";
import Portfolio from "../components/sections/portfolio";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Skills className="innerpage-single-area" />
      <Portfolio />
    </>
  );
};

export default Projects;
