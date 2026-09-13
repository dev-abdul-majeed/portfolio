import React, { useEffect } from "react";
import Portfolio from "../components/sections/portfolio";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Portfolio className={"innerpage-single-area"} />
    </>
  );
};

export default Projects;
