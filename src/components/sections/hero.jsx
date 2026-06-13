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
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={profile} alt="About Me" />
                <h2>Abdul Majeed</h2>
                <p className="white">
                  I combine software engineering, research, and a people-first
                  mindset to build solutions that are reliable, intuitive, and
                  genuinely useful. Whether I'm developing a new feature,
                  optimizing performance, or collaborating with stakeholders, my
                  goal remains the same: to use technology to make life a little
                  easier for the people who depend on it.
                </p>
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
                <p>
                  I’m <h1 className="highlight">Abdul Majeed</h1>Technology
                  changes quickly but{" "}
                  <span className="highlight">Helping people</span> never goes
                  out of style. That's why I build{" "}
                  <span className="highlight">software</span>.
                </p>
                <p className="white">
                  I'm a London-based Software Engineer with 3 years of
                  professional Ruby on Rails experience building educational
                  technology and enterprise software. My journey has taken me
                  from teaching students and leading university initiatives to
                  developing products used by hundreds of thousands of people.
                </p>

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
            {/* <SlideUp>
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
            </SlideUp> */}
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
