import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/agiatyas 2.jpg'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Agia Tyas Sakanthi" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3++ years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a Software Engineer (Frontend) having 3+ years of experience and have contributed well to handling some projects using React JS, Umii JS, and Next JS frameworks. Experienced using Scrum, Trello, Jira, and Git to support work management. I described myself as a creative, willing to learn, and care about healthy lifestyle. As a front-end developer I'm very interested in topics about web application development and UI/UX design. I also like to follow the IT community and like to collaborate, adapt, discuss with people who are experienced in the IT field.
          </p>
          <a href="https://wa.me/089613122939" target="_blank" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
