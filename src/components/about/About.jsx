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
              <small>Bachelor in Administration</small>
            </article>
            <article className="about__card">
              <FaRunning className="about__icon" />
              <h5>Personal</h5>
              <small>Running - Vegan - Chess</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            nesciunt, autem odio nostrum nihil eligendi saepe quis distinctio
            error sed, aperiam hic, cumque asperiores rem illo aspernatur alias
            est vitae?
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
