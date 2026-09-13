import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowRightCircleLine, RiDownloadLine } from "@remixicon/react";
import SlideUp from "../../utlits/animations/slideUp";

const CallToAction = () => {
  const location = useLocation().pathname;

  let heading_1 = "";
  let heading_2 = "";
  let btn_txt = "";
  let btn_link = "";
  switch (location) {
    case "/":
      heading_1 = "Liked my human side?";
      heading_2 = "Take a quick look at my timeline and testimonials...";
      btn_txt = "Education and experinece";
      btn_link = "/education_experience";
      break;
    case "/education_experience":
      heading_1 = "I've got some interesting projects";
      heading_2 = "Take a look at my work...";
      btn_txt = "Projects and Blogs ";
      btn_link = "/service";
      break;

    default:
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
                  Reach out and let's make it happen ✨. I'm also available for
                  full-time or Part-time opportunities to push the boundaries of
                  engineering and deliver exceptional work.
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
