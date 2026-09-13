import React from "react";
import { Link } from "react-router-dom";
import { RiMailSendLine } from "@remixicon/react";
import SlideUp from "../../utlits/animations/slideUp";

const Summary = () => {
  return (
    <section id="about" className="about-single-area innerpage-single-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SlideUp>
              <div className="about-content-part text-center">
                <h2>Education & Experience</h2>
                <p>
                  This page traces the path behind my work. From teaching and
                  student leadership, through industry delivery, to research and
                  postgraduate study in the UK.
                </p>
                <p>
                  Below you'll find my roles, academic background, and what
                  colleagues and supervisors have said about collaborating with
                  me. Together they show how communication, curiosity, and
                  hands-on building have shaped the way I approach problems.
                </p>
                <div className="hero-btns">
                  <Link to="/contact" className="theme-btn">
                    Get In touch
                    <i>
                      <RiMailSendLine size={16} />
                    </i>
                  </Link>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
