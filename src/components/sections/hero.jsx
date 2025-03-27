import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
  RiFacebookCircleFill,
  RiTwitterXLine,
  RiLinkedinFill,
  RiGithubLine,
  RiCircleFill,
  RiDownloadLine,
} from "@remixicon/react";
// import profile from "../../assets/images/about/header-portrait-resized.jpeg";
import profile from "../../assets/images/about/profile.png";
import partner1 from "../../assets/images/client-logos/Devsinc logo.png";
import partner2 from "../../assets/images/client-logos/comsats.jpg";
import partner3 from "../../assets/images/client-logos/UON-Logo.png";

import SlideUp from "../../utlits/animations/slideUp";

const Hero = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={profile} alt="About Me" />
                <h2>Abdul Majeed</h2>
                <p>I am a Software Engineer based in United Kingdom.</p>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <Link to="">
                        <RiLinkedinFill size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <RiGithubLine size={20} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <p>Greetings and Welcome!</p>
                <h2>I’m Abdul Majeed, a passionate Software Engineer</h2>
                <div className="adress-field">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i>
                        <RiCircleFill size={14} />
                      </i>{" "}
                      Available for Immediate Start
                    </li>
                  </ul>
                </div>
                <div className="hero-btns">
                  <Link to="/contact" className="theme-btn">
                    Download CV{" "}
                    <i>
                      <RiDownloadLine size={16} />
                    </i>{" "}
                  </Link>
                </div>
              </div>
            </SlideUp>
            <SlideUp>
              <div className="about-content-part-bottom">
                <h2>Companies I Worked With</h2>
                <div className="company-list">
                  <div className="scroller">
                    <div className="scroller__inner">
                      <Marquee>
                        <img src={partner1} alt="" />
                        <img src={partner2} alt="" />
                        <img src={partner3} alt="" />
                      </Marquee>
                    </div>
                  </div>
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

export default Hero;
