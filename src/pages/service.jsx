import React, { useEffect } from "react";
import Pricing from "../components/sections/pricing";
import ServiceGrid from "../components/sections/serviceGrid";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ServiceGrid />
      <Pricing />
    </>
  );
};

export default Service;
