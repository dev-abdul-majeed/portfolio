import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
} from "@remixicon/react";
import React from "react";
import SlideUp from "../../../utlits/animations/slideUp";

const ContactOption = () => {
  return (
    <div className="col-lg-4">
      <SlideUp>
        <div className="contact-content-part">
          <SlideUp delay={2}>
            <div className="single-contact">
              <div className="contact-icon">
                <i>
                  <RiMapPinLine size={20} />
                </i>
              </div>
              <h2>Address:</h2>
              <p>London, United Kingdom</p>
            </div>
          </SlideUp>
          <SlideUp delay={3}>
            <div className="single-contact">
              <div className="contact-icon">
                <i>
                  <RiPhoneLine size={20} />
                </i>
              </div>
              <h2>contact number:</h2>
              <p>+447555859790</p>
            </div>
          </SlideUp>
          <SlideUp delay={4}>
            <div className="single-contact">
              <div className="contact-icon">
                <i>
                  <RiMailLine size={20} />
                </i>
              </div>
              <h2>Email:</h2>
              <p>
                <a href="mailto:dev.abdul.majeed@gmail.com">
                  dev.abdul.majeed@gmail.com
                </a>
              </p>
            </div>
          </SlideUp>
          <SlideUp delay={5}>
            <div className="single-contact">
              <div className="contact-icon">
                <i>
                  <RiGithubLine size={20} />
                </i>
              </div>
              <h2>GitHub:</h2>
              <p>
                <a
                  href="https://github.com/dev-abdul-majeed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/dev-abdul-majeed
                </a>
              </p>
            </div>
          </SlideUp>
          <SlideUp delay={6}>
            <div className="single-contact">
              <div className="contact-icon">
                <i>
                  <RiLinkedinBoxLine size={20} />
                </i>
              </div>
              <h2>LinkedIn:</h2>
              <p>
                <a
                  href="https://www.linkedin.com/in/a-majeed-ahmed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/a-majeed-ahmed
                </a>
              </p>
            </div>
          </SlideUp>
        </div>
      </SlideUp>
    </div>
  );
};

export default ContactOption;
