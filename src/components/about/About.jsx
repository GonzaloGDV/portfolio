import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h2>Get to Know</h2>
      <h5>About Me</h5>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>Experience</h5>
              <small></small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
