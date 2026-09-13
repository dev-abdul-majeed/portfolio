import React from "react";
import Marquee from "react-fast-marquee";
import {
  RiFacebookCircleFill,
  RiTwitterXLine,
  RiLinkedinFill,
  RiGithubLine,
  RiCircleFill,
  RiDownloadLine,
} from "@remixicon/react";
import profile from "../../assets/images/hero.png";
import partner1 from "../../assets/images/client-logos/Devsinc logo.png";
import partner2 from "../../assets/images/client-logos/comsats.jpg";
import partner3 from "../../assets/images/client-logos/UON-Logo.png";
import cv from "../../assets/Abdul_Majeed_CV.pdf";

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
                  Curious builder, former teacher, and research collaborator.
                  Focused on making complex products feel simple for the people
                  who use them every day.
                </p>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/a-majeed-ahmed/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <RiLinkedinFill size={20} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/dev-abdul-majeed"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <RiGithubLine size={20} />
                      </a>
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
                  Based in London, I've spent the last three years shipping
                  Ruby on Rails products in education and enterprise, work that
                  grew out of teaching, leading student initiatives, and later
                  contributing to platforms used by hundreds of thousands of
                  people.
                </p>

                <div className="hero-btns">
                  <a
                    href={cv}
                    download="Abdul_Majeed_CV.pdf"
                    className="theme-btn"
                  >
                    Download CV{" "}
                    <i>
                      <RiDownloadLine size={16} />
                    </i>{" "}
                  </a>
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
