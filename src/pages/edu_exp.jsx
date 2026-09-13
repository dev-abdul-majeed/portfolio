import React, { useEffect } from "react";
import Summary from "../components/sections/summary";
import Resume from "../components/sections/resume";
import Testimonials from "../components/sections/testimonials";

const Edu_Exp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Summary />
      <Resume />
      <Testimonials />
    </>
  );
};

export default Edu_Exp;
