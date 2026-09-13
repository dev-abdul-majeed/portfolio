import React from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
import { projectsData } from "../../utlits/fackData/projectData";
import SlideUp from "../../utlits/animations/slideUp";

const Portfolio = ({ className }) => {
  return (
    <section id="portfolio" className={`projects-area ${className}`}>
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <SlideUp>
                <div className="section-title text-center">
                  <h2>Projects</h2>
                  <p>A selection of apps and tools I've built.</p>
                </div>
              </SlideUp>
            </div>
          </div>
          <div className="row project-masonry-active overflow-hidden">
            {projectsData.map(({ category, id, src, title, link }) => (
              <Card
                key={id}
                id={id}
                category={category}
                src={src}
                title={title}
                link={link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const Card = ({ category, title, src, id, link }) => {
  return (
    <div className="col-lg-6 col-md-6 item">
      <SlideUp delay={id}>
        <div className="project-item style-two">
          <div className="project-image">
            <img src={src} alt={title} />
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="details-btn"
              aria-label={`View ${title} on GitHub`}
            >
              <RiArrowRightUpLine />
            </a>
          </div>
          <div className="project-content">
            <span className="sub-title">{category}</span>
            <h3>{title}</h3>
          </div>
        </div>
      </SlideUp>
    </div>
  );
};
