import React from "react";
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailLine,
} from "@remixicon/react";
import SlideUp from "../../../utlits/animations/slideUp";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div className="col-lg-8">
      <SlideUp>
        <div className="contact-form contact-form-area contact-email-cta">
          <h3>Send me an email</h3>
          <p>
            Prefer writing directly? Open your email app and reach me at{" "}
            <a href="mailto:dev.abdul.majeed@gmail.com">
              dev.abdul.majeed@gmail.com
            </a>
            .
          </p>
          <div className="hero-btns">
            <Link
              to="mailto:dev.abdul.majeed@gmail.com"
              className="theme-btn"
            >
              
              Email Me
              <i>
                <RiMailLine size={15} />
              </i>
            </Link>
       
          </div>
          <div className="contact-social-links">
            <a
              href="https://github.com/dev-abdul-majeed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <RiGithubLine size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/a-majeed-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <RiLinkedinBoxLine size={22} />
            </a>
          </div>
        </div>
      </SlideUp>
    </div>
  );
};

export default ContactForm;
