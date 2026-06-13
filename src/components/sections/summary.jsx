import React from "react";
import profile from "../../assets/images/about/profile.png";
import { RiMailSendLine } from "@remixicon/react";
import SlideUp from "../../utlits/animations/slideUp";
const Summary = () => {
  return (
    <section id="about" className="about-single-area innerpage-single-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={profile} alt="About Me" />
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <h2>I’m Abdul Majeed. A Software Engineer</h2>
                <p>
                  I am a UK based software engineer with a focus on Ruby on
                  Rails and MERN stack development. I have a diverse range of
                  experience having worked across various fields and industries.
                </p>
                <p>
                  Mobile application development is another strong suite for me
                  using react native. My Final Year Project during my Bachelors
                  won 3rd Position among the mobile application category in the
                  competition.
                </p>
                <div className="hero-btns">
                  <a href="contact.html" className="theme-btn">
                    Get In touch
                    <i>
                      {" "}
                      <RiMailSendLine size={16} />{" "}
                    </i>
                  </a>
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

export default Summary;
