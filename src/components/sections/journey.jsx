import React from "react";
import SlideUp from "../../utlits/animations/slideUp";
import devsincImage from "../../assets/images/client-logos/devsinc-card.png";
import uonImage from "../../assets/images/client-logos/uon-card.png";
import weaversImage from "../../assets/images/client-logos/weavers-card.png";

const journeySteps = [
  {
    id: 1,
    title: "Teacher",
    description:
      "Before writing code professionally, I spent years teaching and mentoring students. It taught me how to simplify complex ideas and understand different perspectives—skills that continue to shape my approach to software development.",
    imageCaption: "Photo from your teaching days",
  },
  {
    id: 2,
    title: "Student Leader",
    description:
      "As the lead of a 70+ member student team, I worked with industry partners, organized recruitment events, and helped create opportunities for fellow students.",
    image: weaversImage,
    imageAlt: "University leadership",
    imageCaption: "University leadership photo",
  },
  {
    id: 3,
    title: "Software Engineer",
    description:
      "At Devsinc, I helped build and scale enterprise educational software used by hundreds of thousands of users while working closely with clients, testers, and development teams.",
    image: devsincImage,
    imageAlt: "Devsinc",
    imageCaption: "Devsinc photo",
  },
  {
    id: 4,
    title: "Research Assistant",
    description:
      "During my MSc in Computing, I developed a group marking platform as part of my research assistant role, bridging academic research and practical software engineering.",
    image: uonImage,
    imageAlt: "University of Northampton",
    imageCaption: "University of Northampton photo",
  },
  {
    id: 5,
    title: "Today",
    description:
      "Today, I'm based in London and looking for opportunities to continue building software that makes a meaningful difference to the people who use it.",
    imageCaption: "London photo",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="journey-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <SlideUp>
                <div className="section-title text-center">
                  <h2>My Journey</h2>
                </div>
              </SlideUp>
            </div>
          </div>
          <div className="journey-timeline">
            {journeySteps.map(({ id, title, description, image, imageAlt, imageCaption }) => (
              <JourneyStep
                key={id}
                id={id}
                title={title}
                description={description}
                image={image}
                imageAlt={imageAlt}
                imageCaption={imageCaption}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

const JourneyStep = ({ id, title, description, image, imageAlt, imageCaption }) => {
  return (
    <SlideUp delay={id}>
      <div className="journey-item">
        <span className="journey-dot" />
        <div className="journey-image">
          {image ? (
            <img src={image} alt={imageAlt || title} />
          ) : (
            <div className="journey-image-placeholder">
              <span>{imageCaption}</span>
            </div>
          )}
        </div>
        <div className="journey-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </SlideUp>
  );
};
