import { RiBookLine } from "@remixicon/react";
import SlideUp from "../../utlits/animations/slideUp";
import comsats_logo from "../../assets/images/client-logos/comsats-card.jpg";
import uon_logo from "../../assets/images/client-logos/uon-card.png";
import pgc_logo from "../../assets/images/client-logos/pgc-card.png";
import devsinc_logo from "../../assets/images/client-logos/devsinc-card.png";
import weavers_logo from "../../assets/images/client-logos/weavers-card.png";

const Resume = () => {
  return (
    <section id="resume" className="resume-area">
      <div className="container">
        <div className="resume-items">
          <div className="row">
            {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
            <div className="col-xl-6 col-md-6">
              <div className="single-resume">
                <h2>Experience</h2>
                <div className="experience-list">
                  <Card
                    year={"2024 - Present"}
                    title={"Ruby on Rails Developer"}
                    institution={"Project: WebAvalia @ UON"}
                    icon={uon_logo}
                  />
                  <Card
                    year={"2024 - Present"}
                    title={"Research Assistant"}
                    institution={"University of Northampton"}
                    icon={uon_logo}
                  />
                  <Card
                    year={"2024 - 2025"}
                    title={"Uni Club Tutor"}
                    institution={"UON x Weavers Academy, UK"}
                    icon={weavers_logo}
                  />
                  <Card
                    year={"2022 - 2024"}
                    title={"Software Engineer"}
                    institution={"Developers Incorporated"}
                    icon={devsinc_logo}
                  />
                </div>
              </div>
            </div>
            {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
            <div className="col-xl-6 col-md-6">
              <div className="experience-list">
                <div className="single-resume">
                  <h2>Education</h2>
                  <Card
                    year={"2024 - 2025"}
                    title={"Masters in Computing"}
                    institution={"University of Northampton, United Kingdom"}
                    icon={uon_logo}
                  />
                  <Card
                    year={"2019 - 2022"}
                    title={"Bachelor in Computer Science"}
                    institution={"Comsats University Islamabad"}
                    icon={comsats_logo}
                  />
                  <Card
                    year={"2016 - 2018"}
                    title={"Higher Secondary Education"}
                    institution={"PGC APC"}
                    icon={pgc_logo}
                  />
                </div>
              </div>
            </div>
            {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

const Card = ({ year, title, institution, icon = "null" }) => {
  return (
    <SlideUp>
      <div className="resume-item">
        <div className="icon">
          {icon != "null" ? (
            <img src={icon} className="card-image-icon " />
          ) : (
            <RiBookLine />
          )}
        </div>
        <div className="content">
          <span className="years">{year}</span>
          <h4>{title}</h4>
          <span className="company"> {institution} </span>
        </div>
      </div>
    </SlideUp>
  );
};
