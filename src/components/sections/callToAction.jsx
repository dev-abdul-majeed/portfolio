import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowRightCircleLine, RiDownloadLine } from "@remixicon/react";
import SlideUp from "../../utlits/animations/slideUp";

const CallToAction = () => {
  const location = useLocation().pathname;

  let heading_1 = "";
  let heading_2 = "";
  let innerText = "";
  let btn_txt = "";
  let btn_link = "";
  switch (location) {
    case "/":
      heading_1 = "Liked my human side?";
      heading_2 = "Take a quick look at my timeline and testimonials...";
      innerText =
        "From classrooms to code, my path has been shaped by people, curiosity, and continuous learning.";
      btn_txt = "Education and experinece";
      btn_link = "/education_experience";
      break;
    case "/education_experience":
      heading_1 = "I've got some interesting projects";
      heading_2 = "Take a look at my work...";
      innerText =
        "See how those experiences turn into real products — from mobile apps to full-stack systems.";
      btn_txt = "Projects";
      btn_link = "/projects";
      break;
    case "/projects":
      heading_1 = "From teaching to engineering —";
      heading_2 = "this journey, these skills, and every project led here.";
      innerText =
        "If my background, toolkit, or work resonate with what you're building, I'd love to connect.";
      btn_txt = "Let's talk";
      btn_link = "/contact";
      break;


    default:
      heading_1 = "Thank you for visiting my portfolio!";
      btn_link = "/";
      btn_txt = "Home";
      innerText =
        "I will be over the moon to hear back from you!";
      break;
  }

  return (
    <section className="call-to-action-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-12">
            <SlideUp>
              <div className="about-content-part call-to-action-part text-center">
                <h2>{heading_1}</h2>
                <h2>{heading_2}</h2>
                <p>
                  {innerText}
                </p>
                <div className="hero-btns">
                  <Link to={btn_link} className="theme-btn">
                    {btn_txt}
                    <i>
                      <RiArrowRightCircleLine size={16} />
                    </i>
                  </Link>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
