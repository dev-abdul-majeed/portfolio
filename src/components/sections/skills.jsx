import React from "react";
import SlideUp from "../../utlits/animations/slideUp";
import { skillsData } from "../../utlits/fackData/skillsData";

const Skills = ({ className = "" }) => {
  return (
    <section id="skills" className={`skills-showcase-area ${className}`}>
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <SlideUp>
                <div className="section-title text-center">
                  <h2>Skills & Tools</h2>
                  <p>
                    Technologies and tools I've worked with across projects.
                  </p>
                </div>
              </SlideUp>
            </div>
          </div>
          <div className="skills-showcase">
            {skillsData.map(({ id, category, skills }) => (
              <SlideUp key={id} delay={id}>
                <div className="skills-category">
                  <h4 className="skills-category-title">{category}</h4>
                  <ul className="skills-list">
                    {skills.map(({ name, icon: Icon }) => (
                      <li key={name} className="skill-chip">
                        <Icon size={18} />
                        <span>{name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
