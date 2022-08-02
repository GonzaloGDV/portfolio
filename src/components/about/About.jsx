import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaRunning } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Academic</h5>
              <small>Henry</small>
            </article>
            <article className="about__card">
              <ImBooks className="about__icon" />
              <h5>Background</h5>
              <small>Bachelor of Administration</small>
            </article>
            <article className="about__card">
              <FaRunning className="about__icon" />
              <h5>Personal</h5>
              <small>Running - Vegan - Chess</small>
            </article>
          </div>
          <p>
            I am a Full-stack Developer, graduated from Henry Bootcamp. I have
            long experience of working in professional teams as a leader as well
            as a collaborator. I like meeting people from different countries
            and speaking English. I have always been interested in technology. I
            would love to work in a company where I could apply my knowledge and
            skills to solve new challenges.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
