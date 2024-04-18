import "./portfolio.css";

import IMG1 from "../../assets/Binar Careersite.png";
import IMG2 from "../../assets/CIMB_Octoclicks.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/Jobseeker Careersite.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Website Careersite Binar Academy",
      img: IMG1,
      description:
        "This website is a career site from Binar Academy in which users can do login user by social media, register user, apply jobs, update profile, and track the application process.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://binaracademy.jobseeker.software/",
    },
    {
      id: 2,
      title: "Jobseeker Careersite",
      img: IMG4,
      description:
        "This website is a career site from Internal Company (Jobseeker Company) in which users can see the list of jobs, filtering the joblist, and see the details of jobs.",
      technologies: "React | Redux",
      link: "https://jobseeker.company/vacancy",
    },
    {
      id: 3,
      title: "IB CIMBNiaga (Octoclicks)",
      img: IMG2,
      description: "This website is a internet banking from CIMB Niaga in which users can do the transactional activity such as Payment, Purchase, Transfer, Donation, Apply and Invest, etc.",
      technologies: "React | Redux | Java Springboot",
      link: "https://rubycode-blog-project.vercel.app/",
    },
    // {
    //   id: 4,
    //   title: "Startup Landing Page",
    //   img: IMG3,
    //   description:
    //     "A dedicated, standalone web page built for specific campaigns and target audiences.",
    //   technologies: "Html | CSS | JavaScript | Next Js",
    //   link: "https://alpha-agency-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    // },
    // {
    //   id: 5,
    //   title: "Jokes Project with Typescript",
    //   img: IMG5,
    //   description:
    //     "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
    //   technologies: "Html | Styled-components | Typescript",
    //   link: "https://jokes-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Joke-App",
    // },
    // {
    //   id: 6,
    //   title: "Fs Poster Website",
    //   img: IMG6,
    //   description:
    //     "Real-world group project which is still in progress and will provide educational platform for future young developers",
    //   technologies: "Html | Scss | Javascript",
    //   link: "https://fs-poster-project.vercel.app/",
    //   github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>

            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {
                pro.github ?
                  <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  :
                  <></>
              }

              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
